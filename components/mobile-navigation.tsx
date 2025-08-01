"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Scale, Menu, X, Home, FileText, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  {
    name: "Временная шкала",
    href: "/timeline",
    icon: Clock,
    description: "Детальная хронология событий",
  },
]

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Мобильная кнопка меню */}
      <div className="md:hidden">
        <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white hover:bg-gray-700">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} />

          {/* Меню */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Заголовок */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-slate-800 text-white">
                <div className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-red-400" />
                  <span className="font-bold text-lg">Дело против КГД</span>
                </div>
                <Button variant="ghost" size="sm" onClick={closeMenu} className="text-white hover:bg-gray-700">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Навигационные элементы */}
              <nav className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <div className="flex-1">
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </nav>

              {/* Контактная информация */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-center text-sm text-gray-600">
                  <p className="font-semibold text-gray-900 mb-2">Контакты истца</p>
                  <p>ТОО "Администратор сети"</p>
                  <p>БИН: 110940015825</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <a href="tel:+77772309222" className="text-blue-600 hover:text-blue-800 font-medium">
                      📞 +7 777 230 92 22
                    </a>
                  </div>
                  <div className="mt-2">
                    <a href="mailto:nikolay@supportcenter.kz" className="text-blue-600 hover:text-blue-800 font-medium">
                      ✉️ nikolay@supportcenter.kz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
