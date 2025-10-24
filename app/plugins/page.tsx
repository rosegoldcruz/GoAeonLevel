import type { Metadata } from "next"
import Layout from "@/components/cmsfullform/layout"
import Content from "@/components/plugins/content"

export const metadata: Metadata = {
  title: "AEON - DIAL 📞",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function PluginsPage() {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
