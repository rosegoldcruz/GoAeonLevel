import type { Metadata } from "next"
import { SuperCacheSettings } from "@/components/plugins/super-cache/settings"

export const metadata: Metadata = {
  title: "AEON - DIAL 📞",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function SuperCacheSettingsPage() {
  return <SuperCacheSettings />
}
