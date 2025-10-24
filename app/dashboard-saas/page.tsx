import type { Metadata } from "next"
import { DashboardSaasLayout } from "@/components/dashboard-saas"

export const metadata: Metadata = {
  title: "AEON - DIAL 🤳",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function DashboardSaasPage() {
  return <DashboardSaasLayout />
}
