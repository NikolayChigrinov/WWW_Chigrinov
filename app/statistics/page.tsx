import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, DollarSign, FileText, Calendar, Target } from "lucide-react"

export default function StatisticsPage() {
  const keyMetrics = [
    {
      title: "Дней беззакония",
      value: "1,095+",
      description: "С февраля 2022 года",
      icon: <Clock className="h-8 w-8 text-red-500" />,
      trend: "+1 каждый день",
    },
    {
      title: "Общий ущерб",
      value: "146.3+ млн ₸",
      description: "Документированные потери",
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      trend: "Растет ежедневно",
    },
    {
      title: "Нарушений законов",
      value: "23",
      description: "Статьи различных кодексов",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      trend: "Системный характер",
    },
    {
      title: "Обращений в органы",
      value: "19",
      description: "За период 2022-2025",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      trend: "183 рабочих дня",
    },
  ]

  const timelineStats = [
    {
      period: "Февраль 2022",
      event: "Начало блокады",
      duration: "1,095+ дней",
      status: "Продолжается",
      impact: "Критический",
    },
    {
      period: "28.04.2023",
      event: "Решение суда",
      duration: "584 дня назад",
      status: "Не исполняется",
      impact: "Игнорируется",
    },
    {
      period: "11.12.2023",
      event: "Подача ДФНО",
      duration: "250+ дней",
      status: "Не принимается",
      impact: "Саботаж",
    },
    {
      period: "2025",
      event: "Текущий год",
      duration: "Продолжение",
      status: "Активная фаза",
      impact: "Эскалация",
    },
  ]

  const organEfficiency = [
    {
      organ: "УГД по Илийскому району",
      appeals: 8,
      avgDays: 7.8,
      violations: 4,
      efficiency: "25%",
      status: "Критический коллапс",
      color: "bg-red-100 border-red-500",
    },
    {
      organ: "ДГД по Алматинской области",
      appeals: 6,
      avgDays: 14.5,
      violations: 2,
      efficiency: "45%",
      status: "Системное бездействие",
      color: "bg-orange-100 border-orange-500",
    },
    {
      organ: "КГД МФ РК",
      appeals: 5,
      avgDays: 16.2,
      violations: 3,
      efficiency: "20%",
      status: "Искажение права",
      color: "bg-red-100 border-red-500",
    },
  ]

  const financialBreakdown = [
    {
      category: "Незаконно удерживаемые налоги",
      amount: "39.4 млн ₸",
      percentage: 27,
      description: "Нарушение ст. 101 НК РК",
      legal: "Ст. 101 НК РК",
    },
    {
      category: "Сорванный контракт",
      amount: "92.6 млн ₸",
      percentage: 63,
      description: "Прямые убытки от УГД",
      legal: "Ст. 922 ГК РК",
    },
    {
      category: "Упущенная выгода",
      amount: "11.8 млн ₸",
      percentage: 8,
      description: "Депозитные проценты",
      legal: "Ст. 9 ГК РК",
    },
    {
      category: "Прочие расходы",
      amount: "2.5+ млн ₸",
      percentage: 2,
      description: "Юридические, инфляция",
      legal: "Ст. 26 Конституции РК",
    },
  ]

  const violationsByCategory = [
    {
      category: "Конституционные нарушения",
      count: 8,
      severity: "Критическая",
      examples: ["Ст. 13, 26 Конституции РК"],
      color: "bg-red-500",
    },
    {
      category: "Налоговые нарушения",
      count: 7,
      severity: "Высокая",
      examples: ["Ст. 101, 208, 637 НК РК"],
      color: "bg-orange-500",
    },
    {
      category: "Административные нарушения",
      count: 5,
      severity: "Высокая",
      examples: ["Закон о госслужбе"],
      color: "bg-yellow-500",
    },
    {
      category: "Гражданско-правовые",
      count: 3,
      severity: "Средняя",
      examples: ["Ст. 922, 157-1 ГК РК"],
      color: "bg-blue-500",
    },
  ]

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 bg-slate-800 text-white py-16 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">📊 Статистика нарушений</h1>
          <p className="text-xl md:text-2xl opacity-90">Количественные доказательства системного коллапса</p>
        </header>

        {/* Ключевые метрики */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-red-600 flex items-center justify-center gap-3">
            <Target className="h-8 w-8" /> Ключевые показатели дела
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center pb-2">
                  {metric.icon}
                  <CardTitle className="text-3xl font-bold text-red-600 mt-4">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-gray-900 mb-2">{metric.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{metric.description}</p>
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                    {metric.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Временная статистика */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">⏰ Хронология в цифрах</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-300 hidden md:block transform -translate-x-1/2"></div>
            {timelineStats.map((item, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-12 h-12 rounded-full">
                  <Calendar className="mx-auto text-white h-6 w-6" />
                </div>
                <Card className="order-1 bg-white border border-gray-200 shadow-lg w-full md:w-5/12">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2 bg-gray-100 text-gray-700">
                      {item.period}
                    </Badge>
                    <CardTitle className="text-lg text-gray-900">{item.event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Длительность:</span>
                        <span className="font-semibold text-red-600">{item.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Статус:</span>
                        <span className="font-semibold text-orange-600">{item.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Воздействие:</span>
                        <span className="font-semibold text-red-600">{item.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Эффективность органов */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-orange-600">
            🏛️ Эффективность государственных органов
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {organEfficiency.map((organ, index) => (
              <Card key={index} className={`${organ.color} border-2`}>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{organ.organ}</CardTitle>
                  <Badge
                    variant={organ.efficiency === "25%" || organ.efficiency === "20%" ? "destructive" : "secondary"}
                    className="w-fit"
                  >
                    {organ.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Обращений:</span>
                      <span className="font-bold text-lg">{organ.appeals}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Среднее время:</span>
                      <span className="font-bold text-lg text-red-600">{organ.avgDays} дней</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Нарушений сроков:</span>
                      <span className="font-bold text-lg text-red-600">{organ.violations}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Эффективность:</span>
                      <span className="font-bold text-lg text-red-600">{organ.efficiency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Финансовая статистика */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-600">💰 Структура финансового ущерба</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Детализация ущерба</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialBreakdown.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.category}</span>
                        <span className="font-bold text-red-600">{item.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{item.description}</span>
                        <span>{item.legal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Итоговые показатели</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">146.3+ млн ₸</div>
                    <div className="text-lg text-gray-700">Общий документированный ущерб</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="text-2xl font-bold text-red-600">39.4</div>
                      <div className="text-sm text-gray-600">млн ₸ налогов</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="text-2xl font-bold text-red-600">92.6</div>
                      <div className="text-sm text-gray-600">млн ₸ контракт</div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    * Ущерб продолжает расти каждый день из-за бездействия органов власти
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Нарушения по категориям */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-purple-600">⚖️ Классификация нарушений</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {violationsByCategory.map((category, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                    <CardTitle className="text-lg text-gray-900">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">{category.count}</div>
                      <div className="text-sm text-gray-600">нарушений</div>
                    </div>
                    <Badge
                      variant={category.severity === "Критическая" ? "destructive" : "secondary"}
                      className="w-full justify-center"
                    >
                      {category.severity} тяжесть
                    </Badge>
                    <div className="text-xs text-gray-500 text-center">{category.examples.join(", ")}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Итоговая статистика */}
        <section className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-700">📈 Сводная статистика дела</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">1,095+</div>
              <div className="text-lg text-gray-700">дней системных нарушений</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">23</div>
              <div className="text-lg text-gray-700">статьи законов нарушены</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">3</div>
              <div className="text-lg text-gray-700">органа власти виновны</div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-4">
              <strong>Вывод:</strong> Налицо беспрецедентный случай системного коллапса налогового администрирования
            </p>
            <p className="text-lg text-red-700 font-semibold">
              Каждый день промедления увеличивает ущерб и подрывает основы правового государства
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
