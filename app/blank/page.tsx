import type { Metadata } from "next"
import Layout from "@/components/cmsfullform/layout"
import { BlankContent } from "@/components/blank"

export const metadata: Metadata = {
  title: "AEON - DIAL 📲",
  description: "Powered By The Advanced Efficient Optimization Network",
}

export default function BlankPage() {
  return (
    <Layout>
      <BlankContent />
    </Layout>
  )
}
