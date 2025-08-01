import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  AlertTriangle,
  FileText,
  Gavel,
  Building,
  Mail,
  DollarSign,
  Target,
  TrendingUp,
} from "lucide-react"

export default function TimelinePage() {
  const timelineEvents = [
    {
      id: 1,
      date: "2022-02-01",
      title: "Начало незаконной блокады",
      category: "critical",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "УГД по Илийскому району инициирует неправомерные ограничительные меры",
      details: {
        duration: "1,095+ дней",
        impact: "Критический",
        legalBasis: "Нарушение ст. 10, 14 ПК РК",
        consequences: "Полная блокада предпринимательской деятельности",
      },
      documents: ["Уведомление о блокировке", "Протест компании"],
      financialImpact: "Начало накопления ущерба",
    },
    {
      id: 2,
      date: "2022-03-15",
      title: "Первое обращение в ДГД",
      category: "appeal",
      icon: <Mail className="h-6 w-6" />,
      description: "Официальное обращение с требованием снять незаконные ограничения",
      details: {
        duration: "15 дней на рассмотрение",
        impact: "Игнорирование",
        legalBasis: "Ст. 35 Закона о рассмотрении обращений",
        consequences: "Формальная отписка без решения проблемы",
      },
      documents: ["Обращение в ДГД", "Ответ ДГД"],
      financialImpact: "Продолжение накопления убытков",
    },
    {
      id: 3,
      date: "2022-06-20",
      title: "Срыв контракта с 'Қарағанды Жарық'",
      category: "financial",
      icon: <DollarSign className="h-6 w-6" />,
      description: "Из-за блокады сорван крупный контракт на 92.6 млн тенге",
      details: {
        duration: "Мгновенные последствия",
        impact: "Катастрофический",
        legalBasis: "Ст. 922 ГК РК - возмещение вреда",
        consequences: "Потеря крупнейшего контракта и репутации",
      },
      documents: ["Договор с КЖ", "Уведомление о расторжении"],
      financialImpact: "92.6 млн ₸ прямых убытков",
    },
    {
      id: 4,
      date: "2023-02-15",
      title: "Подача иска в суд",
      category: "legal",
      icon: <Gavel className="h-6 w-6" />,
      description: "Обращение в суд с требованием признать действия УГД незаконными",
      details: {
        duration: "Процесс длился 2.5 месяца",
        impact: "Положительный",
        legalBasis: "Административное судопроизводство",
        consequences: "Начало судебного разбирательства",
      },
      documents: ["Исковое заявление", "Материалы дела"],
      financialImpact: "Юридические расходы 500+ тыс ₸",
    },
    {
      id: 5,
      date: "2023-04-28",
      title: "ПОБЕДА В СУДЕ",
      category: "victory",
      icon: <Target className="h-6 w-6" />,
      description: "Суд признал договор недействительным, создав основание для возврата 39.4 млн ₸",
      details: {
        duration: "Решение вступило в силу",
        impact: "Критически важный",
        legalBasis: "Решение СМЭС № 3514-23-00-2/894",
        consequences: "Правовое основание для возврата налогов",
      },
      documents: ["Решение суда", "Исполнительный лист"],
      financialImpact: "Право на возврат 39.4 млн ₸",
    },
    {
      id: 6,
      date: "2023-05-15",
      title: "Первое распоряжение УГД о снятии ограничений",
      category: "bureaucracy",
      icon: <FileText className="h-6 w-6" />,
      description: "УГД издает распоряжение о снятии ограничений, но не исполняет его",
      details: {
        duration: "Не исполняется 584+ дня",
        impact: "Саботаж",
        legalBasis: "Собственное распоряжение УГД",
        consequences: "Начало системного саботажа",
      },
      documents: ["Распоряжение УГД №1"],
      financialImpact: "Продолжение блокады и убытков",
    },
    {
      id: 7,
      date: "2023-12-11",
      title: "Подача ДФНО на основании решения суда",
      category: "critical",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "Попытка подать ДФНО для возврата налогов - УГД отказывается принимать",
      details: {
        duration: "Не принимается 250+ дней",
        impact: "Критический саботаж",
        legalBasis: "П.6 ст. 208 НК РК",
        consequences: "Прямое нарушение налогового законодательства",
      },
      documents: ["ДФНО", "Отказы УГД"],
      financialImpact: "Блокировка возврата 39.4 млн ₸",
    },
    {
      id: 8,
      date: "2024-03-10",
      title: "Множественные распоряжения УГД",
      category: "bureaucracy",
      icon: <Building className="h-6 w-6" />,
      description: "УГД издает еще 6 распоряжений о снятии ограничений, ни одно не исполняется",
      details: {
        duration: "Все неисполнены",
        impact: "Системная халатность",
        legalBasis: "8 собственных распоряжений",
        consequences: "Доказательство полного коллапса управления",
      },
      documents: ["Распоряжения УГД №2-8"],
      financialImpact: "Накопление процентов и инфляционных потерь",
    },
    {
      id: 9,
      date: "2025-02-04",
      title: "Грубое искажение права КГД",
      category: "critical",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "КГД неверно применяет нормы об исковой давности к административным процедурам",
      details: {
        duration: "Продолжающееся нарушение",
        impact: "Искажение правовых основ",
        legalBasis: "Неверное толкование ГК РК",
        consequences: "Подрыв принципов правового государства",
      },
      documents: ["Ответ КГД с искажениями"],
      financialImpact: "Блокировка всех возможностей возврата",
    },
    {
      id: 10,
      date: "2025-05-27",
      title: "Окончательный отказ КГД",
      category: "critical",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "КГД прекращает рассмотрение под ложным предлогом 'полноты ответов'",
      details: {
        duration: "Текущий статус",
        impact: "Полное бездействие",
        legalBasis: "Нарушение принципов госслужбы",
        consequences: "Исчерпание административных возможностей",
      },
      documents: ["Окончательный отказ КГД"],
      financialImpact: "Общий ущерб достиг 146.3+ млн ₸",
    },
  ]

  const categoryColors = {
    critical: "bg-red-100 border-red-500 text-red-700",
    legal: "bg-blue-100 border-blue-500 text-blue-700",
    financial: "bg-orange-100 border-orange-500 text-orange-700",
    appeal: "bg-purple-100 border-purple-500 text-purple-700",
    victory: "bg-green-100 border-green-500 text-green-700",
    bureaucracy: "bg-gray-100 border-gray-500 text-gray-700",
  }

  const categoryNames = {
    critical: "🔥 Критическое нарушение",
    legal: "⚖️ Судебное производство",
    financial: "💰 Финансовые последствия",
    appeal: "📝 Обращение в органы",
    victory: "🎯 Судебная победа",
    bureaucracy: "🏛️ Бюрократический саботаж",
  }

  const totalDays = Math.floor((new Date().getTime() - new Date("2022-02-01").getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 bg-slate-800 text-white py-16 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">⏰ Детальная временная шкала</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">Хронология системных нарушений с февраля 2022 года</p>
          <div className="flex justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-red-400" />
              <span>
                <strong>{totalDays}</strong> дней беззакония
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>
                <strong>10</strong> ключевых событий
              </span>
            </div>
          </div>
        </header>

        {/* Фильтры по категориям */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button variant="outline" className="bg-white">
              Все события
            </Button>
            <Button variant="outline" className="bg-red-50 text-red-700 border-red-200">
              🔥 Критические
            </Button>
            <Button variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              ⚖️ Судебные
            </Button>
            <Button variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              💰 Финансовые
            </Button>
            <Button variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              📝 Обращения
            </Button>
          </div>
        </section>

        {/* Временная шкала */}
        <section className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Точка на линии */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                {/* Карточка события */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <Card
                    className={`${categoryColors[event.category]} border-2 shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-white/80">
                          {new Date(event.date).toLocaleDateString("ru-RU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </Badge>
                        <div className="flex items-center gap-2">
                          {event.icon}
                          <Badge className="bg-white/20 text-current border-current">
                            {categoryNames[event.category]}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                      {/* Детали события */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">
                              <strong>Длительность:</strong> {event.details.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm">
                              <strong>Воздействие:</strong> {event.details.impact}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <strong>Правовая основа:</strong>
                            <br />
                            <span className="text-gray-600">{event.details.legalBasis}</span>
                          </div>
                        </div>
                      </div>

                      {/* Последствия */}
                      <div className="bg-white/50 rounded-lg p-3 mb-4">
                        <h4 className="font-semibold text-sm mb-2">📋 Последствия:</h4>
                        <p className="text-sm text-gray-700">{event.details.consequences}</p>
                      </div>

                      {/* Финансовое воздействие */}
                      <div className="bg-red-50 rounded-lg p-3 mb-4">
                        <h4 className="font-semibold text-sm mb-2 text-red-700">💸 Финансовое воздействие:</h4>
                        <p className="text-sm text-red-600 font-medium">{event.financialImpact}</p>
                      </div>

                      {/* Документы */}
                      <div className="flex flex-wrap gap-2">
                        {event.documents.map((doc, docIndex) => (
                          <Badge key={docIndex} variant="secondary" className="text-xs bg-white/60">
                            📄 {doc}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Пустое пространство для другой стороны */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Итоговая статистика */}
        <section className="mt-16 bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-700">📊 Итоги временной шкалы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{totalDays}</div>
              <div className="text-lg text-gray-700">дней системных нарушений</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">8</div>
              <div className="text-lg text-gray-700">неисполненных распоряжений УГД</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">250+</div>
              <div className="text-lg text-gray-700">дней саботажа ДФНО</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">146.3+</div>
              <div className="text-lg text-gray-700">млн ₸ общий ущерб</div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-4">
              <strong>Каждый день на этой временной шкале</strong> - это день нарушения конституционных прав и подрыва
              основ правового государства
            </p>
            <p className="text-lg text-red-700 font-semibold">
              Время работает против справедливости, но истина неизбежна
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
