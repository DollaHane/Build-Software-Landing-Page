"use client"

import { FC, ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface LayoutProps {
  children: ReactNode
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Providers
