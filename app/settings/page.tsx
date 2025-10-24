import type { Metadata } from "next"
import Content from "@/components/settings/content"
import Layout from "@/components/cmsfullform/layout"

export const metadata: Metadata = {
  title: "AEON - DIAL 📞",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function SettingsPage() {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
