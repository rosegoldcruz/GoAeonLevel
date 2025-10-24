import type { Metadata } from "next"
import Content from "@/components/cmsfullform/content"
import Layout from "@/components/cmsfullform/layout"

export const metadata: Metadata = {
  title: "AEON - DIAL 📞",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function DashboardPage() {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
