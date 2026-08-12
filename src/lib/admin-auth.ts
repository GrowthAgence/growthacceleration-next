// Verification partagee pour les endpoints d'admin (leads, conversations).
// Le client admin envoie le mot de passe dans le header x-admin-password.
export function isAdminRequest(request: Request): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  return request.headers.get("x-admin-password") === adminPassword;
}
