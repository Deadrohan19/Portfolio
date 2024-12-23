import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Social from "./_components/social"
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
});

const fonts = [fontSans.variable, fontMono.variable]

export const metadata: Metadata = {
  title: "Rohan Jaiswal",
  description: "Portfolio website made by nextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          <Analytics />
          <Social />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
