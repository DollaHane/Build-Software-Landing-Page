"use client"

import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface LayoutProps {
  children: ReactNode
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers