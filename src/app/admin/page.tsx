import type { Metadata } from "next";
import { AdminDashboard } from "./client";

export const metadata: Metadata = {
  title: "Admin - Leads",
  robots: "noindex, nofollow",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
