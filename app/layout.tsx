import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CursorEffects } from '@/components/cursor-effects'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CSBS Symposium 2025",
  description: "Empowering Innovation and Business Acumen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CursorEffects />
        </ThemeProvider>
      </body>
    </html>
  )
}

