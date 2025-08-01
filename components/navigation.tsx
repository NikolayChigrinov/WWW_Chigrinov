"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Scale } from "lucide-react"
import { MobileNavigation } from "./mobile-navigation"

const navigationItems = [
  {
    name: "Главная",
    href: "/",
    description: "Хронология системных нарушений",
  },
  {
    name: "Правовой анализ",
    href: "/legal-analysis",
    description: "Юридическая экспертиза с прецедентами",
  },
  {
    name: "База документов",
    href: "/documents",
    description: "Неопровержимые доказательства",
  },
  {
    name: "Статистика",
    href: "/statistics",
    description: "Количественные доказательства",
  },
  {
    name: "Временная шкала",
    href: "/timeline",
    description: "Детальная хронология событий",
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-slate-800 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl hover:text-red-400 transition-colors"
          >
            <Scale className="h-6 w-6 text-red-400" />
            Дело против КГД
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors relative group",
                    isActive ? "bg-red-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700",
                  )}
                  title={item.description}
                >
                  {item.name}

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Мобильная навигация */}
          <MobileNavigation />
        </div>
      </div>
    </nav>
  )
}
