import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: 'Дело ТОО "Администратор сети" против КГД МФ РК',
  description: "Системный коллапс налогового администрирования: Документированная хроника",
  keywords: "налоговое право, КГД, УГД, судебное дело, Казахстан, налогоплательщик",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
