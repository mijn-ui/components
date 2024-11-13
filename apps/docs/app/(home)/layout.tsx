import type { ReactNode } from "react"
import { Metadata } from "next"
import Footer from "../components/layout/footer"
import { baseOptions } from "../layout.config"
import { source } from "../source"
import Navbar from "@/content/mdx-components/navbar"
import { DocsLayout } from "fumadocs-ui/layout"

export const metadata: Metadata = {
  description: "Reusable components for clean, responsive interfaces.",
}

export default function Layout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        enabled: false,
      }}
      containerProps={{
        className:
          "flex w-full flex-col items-center justify-center h-[calc(100vh-56px)] md:h-screen",
      }}
      {...baseOptions}
    >
      <Navbar />

      {children}
      <Footer />
    </DocsLayout>
  )
}
