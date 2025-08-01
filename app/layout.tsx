import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Home, Scale, FileText, BarChart3 } from "@/components/icons" // Import icons

const inter = Inter({ subsets: ["latin", "cyrillic"] })

const navigationItems = [
  {
    name: "Главная",
    href: "/",
    icon: Home,
    description: "Хронология системных нарушений",
  },
  {
    name: "Правовой анализ",
    href: "/legal-analysis",
    icon: Scale,
    description: "Юридическая экспертиза с прецедентами",
  },
  {
    name: "База документов",
    href: "/documents",
    icon: FileText,
    description: "Неопровержимые доказательства",
  },
  {
    name: "Статистика",
    href: "/statistics",
    icon: BarChart3,
    description: "Количественные доказательства",
  },
]

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
        <Navigation items={navigationItems} />
        {children}
      </body>
    </html>
  )
}
