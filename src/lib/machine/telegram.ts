const TELEGRAM_API = "https://api.telegram.org";
const TELEGRAM_TIMEOUT_MS = 10000;

interface InlineButton {
  text: string;
  callback_data: string;
}

function getBotToken(): string | null {
  return process.env.TELEGRAM_BOT_TOKEN || null;
}

async function callTelegram(method: string, payload: Record<string, unknown>): Promise<boolean> {
  const token = getBotToken();
  if (!token) {
    console.error("Telegram call skipped: TELEGRAM_BOT_TOKEN not configured");
    return false;
  }

  try {
    const response = await fetch(`${TELEGRAM_API}/bot${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Telegram ${method} failed (${response.status}): ${body.slice(0, 300)}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Telegram ${method} failed:`, error instanceof Error ? error.message : error);
    return false;
  }
}

export async function sendTelegramMessage(
  chatId: number | string,
  text: string,
  buttons?: InlineButton[][],
): Promise<boolean> {
  return callTelegram("sendMessage", {
    chat_id: chatId,
    text: text.slice(0, 4000),
    parse_mode: "HTML",
    link_preview_options: { is_disabled: true },
    ...(buttons ? { reply_markup: { inline_keyboard: buttons } } : {}),
  });
}

export async function editTelegramMessage(
  chatId: number | string,
  messageId: number,
  text: string,
): Promise<boolean> {
  return callTelegram("editMessageText", {
    chat_id: chatId,
    message_id: messageId,
    text: text.slice(0, 4000),
    parse_mode: "HTML",
    link_preview_options: { is_disabled: true },
  });
}

export async function answerCallbackQuery(callbackQueryId: string, text?: string): Promise<boolean> {
  return callTelegram("answerCallbackQuery", {
    callback_query_id: callbackQueryId,
    ...(text ? { text } : {}),
  });
}

export function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
