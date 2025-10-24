import type { Metadata } from "next"
import { AllSiteSEOSettings } from "@/components/plugins/allsite-seo/settings"

export const metadata: Metadata = {
  title: "AEON - DIAL 📞",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function AllSiteSEOSettingsPage() {
  return <AllSiteSEOSettings />
}
