"use client"

import { FC, ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MotionConfig } from "framer-motion"

import { ScrollProvider } from "@/components/providers/ScrollProvider"

interface LayoutProps {
  children: ReactNode
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {/* reducedMotion="user" strips transform/layout animation tree-wide
          while preserving opacity — the single gate for every declarative
          `motion` component in the app. */}
      <MotionConfig reducedMotion="user">
        <ScrollProvider>{children}</ScrollProvider>
      </MotionConfig>
    </QueryClientProvider>
  )
}

export default Providers
