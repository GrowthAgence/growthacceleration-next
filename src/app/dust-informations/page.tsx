import type { Metadata } from "next";
import DustSetupClient from "./client";

export const metadata: Metadata = {
  title: "Training Setup — AI Solutions Lab",
  robots: { index: false, follow: false },
};

export default function DustInformationsPage() {
  return <DustSetupClient />;
}
