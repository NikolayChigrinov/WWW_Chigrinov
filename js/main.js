// Основная логика для платформы
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Инициализация
    initializeNavigation()
    initializeAnimations()
    initializeCounters()
    initializeLucideIcons()

    console.log('🏛️ Платформа "Дело против КГД" загружена')
  } catch (error) {
    console.error("Ошибка инициализации:", error)
  }
})

// Навигация
function initializeNavigation() {
  try {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    const navLinks = document.querySelectorAll(".nav-link")

    navLinks.forEach((link) => {
      const href = link.getAttribute("href")
      if (href === currentPage) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  } catch (error) {
    console.error("Ошибка навигации:", error)
  }
}

// Анимации при скролле
function initializeAnimations() {
  try {
    // Проверяем поддержку IntersectionObserver
    if (!window.IntersectionObserver) {
      console.warn("IntersectionObserver не поддерживается")
      return
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    // Наблюдаем за карточками и секциями
    const elementsToAnimate = document.querySelectorAll(".card, .metric-card, .timeline-item, .agency-card")
    elementsToAnimate.forEach((el) => {
      if (el) observer.observe(el)
    })
  } catch (error) {
    console.error("Ошибка анимации:", error)
  }
}

// Анимация счетчиков
function initializeCounters() {
  try {
    const counters = document.querySelectorAll(".metric-value")

    const animateCounter = (element) => {
      try {
        const target = element.textContent
        const isNumber = /^\d+/.test(target)

        if (!isNumber) return

        const finalNumber = Number.parseInt(target.match(/\d+/)[0])
        const duration = 2000
        const increment = finalNumber / (duration / 16)
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= finalNumber) {
            current = finalNumber
            clearInterval(timer)
          }

          element.textContent = target.replace(/\d+/, Math.floor(current))
        }, 16)
      } catch (error) {
        console.error("Ошибка анимации счетчика:", error)
      }
    }

    if (window.IntersectionObserver) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target)
              counterObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 },
      )

      counters.forEach((counter) => {
        if (counter) counterObserver.observe(counter)
      })
    }
  } catch (error) {
    console.error("Ошибка инициализации счетчиков:", error)
  }
}

// Утилиты для работы с документами
const DocumentUtils = {
  // Форматирование размера файла
  formatFileSize: (bytes) => {
    try {
      if (bytes === 0) return "0 Bytes"
      const k = 1024
      const sizes = ["Bytes", "KB", "MB", "GB"]
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    } catch (error) {
      console.error("Ошибка форматирования размера файла:", error)
      return "Неизвестно"
    }
  },

  // Форматирование даты
  formatDate: (dateString) => {
    try {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      return new Date(dateString).toLocaleDateString("ru-RU", options)
    } catch (error) {
      console.error("Ошибка форматирования даты:", error)
      return dateString
    }
  },

  // Скачивание документа (заглушка)
  downloadDocument: (filename) => {
    try {
      console.log(`📄 Скачивание документа: ${filename}`)
      // Здесь будет логика скачивания
      alert(`Документ "${filename}" будет скачан после развертывания на сервере`)
    } catch (error) {
      console.error("Ошибка скачивания документа:", error)
    }
  },
}

// Статистические утилиты
const StatsUtils = {
  // Расчет среднего времени обработки
  calculateAverageProcessingTime: (data) => {
    try {
      if (!Array.isArray(data) || data.length === 0) return 0
      const total = data.reduce((sum, item) => sum + (item.processingTime || 0), 0)
      return (total / data.length).toFixed(1)
    } catch (error) {
      console.error("Ошибка расчета среднего времени:", error)
      return 0
    }
  },

  // Генерация цвета для графиков
  generateColor: (index) => {
    try {
      const colors = [
        "#ef4444", // red
        "#f59e0b", // amber
        "#3b82f6", // blue
        "#10b981", // green
        "#8b5cf6", // purple
        "#f97316", // orange
      ]
      return colors[index % colors.length]
    } catch (error) {
      console.error("Ошибка генерации цвета:", error)
      return "#666666"
    }
  },
}

// Глобальная обработка ошибок
window.addEventListener("error", (e) => {
  // Игнорируем ошибки MetaMask и других расширений
  if (
    e.error &&
    e.error.message &&
    (e.error.message.includes("MetaMask") || e.error.message.includes("ethereum") || e.error.message.includes("web3"))
  ) {
    console.warn("Игнорируем ошибку расширения браузера:", e.error.message)
    return
  }
  console.error("❌ Ошибка на странице:", e.error)
})

// Обработка необработанных промисов
window.addEventListener("unhandledrejection", (e) => {
  // Игнорируем ошибки MetaMask и других расширений
  if (
    e.reason &&
    e.reason.message &&
    (e.reason.message.includes("MetaMask") ||
      e.reason.message.includes("ethereum") ||
      e.reason.message.includes("web3"))
  ) {
    console.warn("Игнорируем ошибку расширения браузера:", e.reason.message)
    e.preventDefault() // Предотвращаем показ ошибки в консоли
    return
  }
  console.error("❌ Необработанная ошибка промиса:", e.reason)
})

// Безопасная инициализация Lucide иконок
function initializeLucideIcons() {
  try {
    const lucide = window.lucide // Declare the lucide variable
    if (lucide && lucide.createIcons) {
      lucide.createIcons()
    } else {
      console.warn("Lucide иконки не загружены")
    }
  } catch (error) {
    console.error("Ошибка инициализации иконок:", error)
  }
}
