"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Scale, FileText, BarChart3, Home } from "lucide-react"

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

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <Scale className="h-6 w-6 text-red-400" />
            Дело против КГД
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive ? "bg-red-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800",
                  )}
                  title={item.description}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
