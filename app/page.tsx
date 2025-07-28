import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Scale,
  FileText,
  Landmark,
  Building,
  ShieldOff,
  DollarSign,
  Briefcase,
  Phone,
  Mail,
  Gavel,
} from "lucide-react"

export default function TaxCasePage() {
  const criticalMetrics = [
    {
      title: "Период системных нарушений",
      value: "3+ года",
      description: "Февраль 2022 - настоящее время",
      icon: <AlertTriangle className="h-8 w-8 text-red-400" />,
    },
    {
      title: "Незаконно удерживается",
      value: "39.4 млн ₸",
      description: "Нарушение ст. 101 НК РК",
      icon: <DollarSign className="h-8 w-8 text-amber-400" />,
    },
    {
      title: "Сорванный контракт",
      value: "92.6 млн ₸",
      description: "Прямые убытки от действий УГД",
      icon: <Briefcase className="h-8 w-8 text-amber-400" />,
    },
    {
      title: "Неисполненных распоряжений УГД",
      value: "8",
      description: "Системная халатность",
      icon: <FileText className="h-8 w-8 text-red-400" />,
    },
    {
      title: "Полная блокада бизнеса",
      value: "2 года",
      description: "Нарушение ст. 10, 14 ПК РК",
      icon: <ShieldOff className="h-8 w-8 text-red-400" />,
    },
  ]

  const timelineEvents = [
    {
      date: "Февраль 2022",
      title: "Начало 2-летней незаконной блокады",
      description:
        "УГД по Илийскому району инициирует неправомерные ограничительные меры, парализовавшие деятельность компании.",
    },
    {
      date: "28.04.2023",
      title: "Судебное решение в пользу компании",
      description: "Суд признает действия налогового органа незаконными и обязывает устранить нарушения.",
    },
    {
      date: "11.12.2023",
      title: "Саботаж исполнения решения суда (ДФНО)",
      description:
        "Документ о фактическом налоговом обязательстве (ДФНО) не принимается более 8 месяцев, что является прямым саботажем судебного акта.",
    },
    {
      date: "03.04.2025",
      title: "Грубое искажение права со стороны КГД",
      description:
        "Комитет государственных доходов неверно применяет нормы права, игнорируя вступившее в силу решение суда.",
    },
    {
      date: "27.05.2025",
      title: "Незаконное прекращение рассмотрения",
      description: "КГД прекращает рассмотрение жалобы, уклоняясь от решения проблемы по существу.",
    },
  ]

  const agencyViolations = [
    {
      name: "УГД по Илийскому району",
      title: "КОЛЛАПС УПРАВЛЕНИЯ",
      icon: <Building className="h-6 w-6 text-red-400" />,
      violations: [
        "8 собственных распоряжений о снятии ограничений НЕ ИСПОЛНЕНО",
        "2 года незаконной блокады предпринимательской деятельности",
        "Саботаж решения суда - непринятие ДФНО 8+ месяцев",
        "Нарушение п.6 ст.208 НК РК - непрофессионализм сотрудников",
      ],
    },
    {
      name: "ДГД по Алматинской области",
      title: "СИСТЕМНОЕ БЕЗДЕЙСТВИЕ",
      icon: <Landmark className="h-6 w-6 text-amber-400" />,
      violations: [
        "Полное отсутствие контроля за подчиненным органом",
        "Формальные отписки вместо решения проблем",
        "Неспособность восстановить права налогоплательщика",
        "Перекладывание ответственности между инстанциями",
      ],
    },
    {
      name: "КГД МФ РК",
      title: "ГРУБОЕ ИСКАЖЕНИЕ ПРАВА",
      icon: <Scale className="h-6 w-6 text-purple-400" />,
      violations: [
        "Неверное применение норм об исковой давности",
        "Игнорирование решения суда как правового основания",
        "Отказ рассматривать детальные возражения по существу",
        "Поощрение беззакония путем бездействия",
      ],
    },
  ]

  return (
    <div className="bg-gray-950 text-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Дело ТОО "Администратор сети" против КГД МФ РК
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            Системный коллапс налогового администрирования: Документированная хроника
          </p>
        </header>

        <section id="critical-indicators" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-red-400 flex items-center justify-center gap-3">
            <AlertTriangle className="h-8 w-8" /> КРИТИЧЕСКИЕ ПОКАЗАТЕЛИ ДЕЛА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {criticalMetrics.map((metric, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  {metric.icon}
                  <CardTitle className="text-3xl font-bold text-amber-300 mt-4">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-white">{metric.title}</p>
                  <p className="text-sm text-gray-400">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="timeline" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">🏠 Системная хроника нарушений</h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 hidden md:block"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-12 h-12 rounded-full">
                  <Gavel className="mx-auto text-white h-6 w-6" />
                </div>
                <div className="order-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                  <Badge variant="secondary" className="mb-2 bg-gray-700 text-gray-300">
                    {event.date}
                  </Badge>
                  <h3 className="mb-2 font-bold text-white text-lg">{event.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="agency-violations" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">🚨 Системные нарушения по органам</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agencyViolations.map((agency, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    {agency.icon}
                    <CardTitle className="text-xl text-white">{agency.name}</CardTitle>
                  </div>
                  <CardDescription className="text-red-400 font-semibold">{agency.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-gray-300">
                    {agency.violations.map((violation, vIndex) => (
                      <li key={vIndex} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>{violation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="damage-calculation" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">💸 Калькуляция катастрофического ущерба</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-amber-400">Прямые финансовые потери</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg">
                  <li className="flex justify-between">
                    <span>Незаконно удерживаемые налоги:</span> <strong className="text-white">39.4 млн ₸</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Сорванный контракт "Қарағанды Жарық":</span>{" "}
                    <strong className="text-white">92.6 млн ₸</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Упущенная выгода (депозит):</span> <strong className="text-white">11.8 млн ₸</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Обесценивание от инфляции:</span> <strong className="text-white">2.0+ млн ₸</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Юридические расходы:</span> <strong className="text-white">0.5+ млн ₸</strong>
                  </li>
                </ul>
                <hr className="my-6 border-gray-700" />
                <div className="text-center">
                  <p className="text-xl text-gray-300">ОБЩИЙ ДОКУМЕНТИРОВАННЫЙ УЩЕРБ</p>
                  <p className="text-4xl font-extrabold text-red-500 mt-2">146.3+ млн ₸</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Стратегические потери</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-center gap-3">
                    ☀️ <span className="font-semibold">Сорванный ESG-проект:</span> Солнечная электростанция 50 МВт
                  </li>
                  <li className="flex items-center gap-3">
                    🔬 <span className="font-semibold">Утраченные инновации:</span> НИОКР по переработке сырья
                  </li>
                  <li className="flex items-center gap-3">
                    ⚡ <span className="font-semibold">Подрыв репутации:</span> в ключевых энергетических проектах
                  </li>
                  <li className="flex items-center gap-3">
                    🤝 <span className="font-semibold">Потеря доверия:</span> необратимый ущерб стратегическим
                    партнерствам
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="legal-basis" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">⚖️ Правовое обоснование требований</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Конституционные нарушения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Ст. 26:</strong> Право на возмещение вреда
                </p>
                <p>
                  <strong>Ст. 13:</strong> Защита права собственности
                </p>
                <p>
                  <strong>Ст. 6:</strong> Принцип верховенства права
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Налоговые нарушения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Ст. 101 НК:</strong> Возврат налогов (нарушается 1.5+ года)
                </p>
                <p>
                  <strong>П.6 ст.208 НК:</strong> Порядок приема отчетности
                </p>
                <p>
                  <strong>Ст. 637 НК:</strong> Законность ограничительных мер
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Предпринимательские права</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Ст. 10, 14 ПК:</strong> Свобода предпринимательства
                </p>
                <p>
                  <strong>Ст. 922 ГК:</strong> Возмещение вреда от актов госорганов
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="final-demand" className="bg-red-900/20 border border-red-500 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-400">⚖️ ФИНАЛЬНОЕ ТРЕБОВАНИЕ К СУДУ</h2>
          <p className="text-center text-lg mb-8 text-gray-300">Прошу Суд:</p>
          <ol className="space-y-4 list-decimal list-inside text-xl text-left max-w-4xl mx-auto">
            <li>
              <strong>ПРИЗНАТЬ НЕЗАКОННЫМИ</strong> действия/бездействие УГД, ДГД и КГД МФ РК.
            </li>
            <li>
              <strong>ВЗЫСКАТЬ</strong> с ответчика материальный ущерб в размере <strong>51.2+ млн тенге</strong> и
              полный документированный ущерб.
            </li>
            <li>
              <strong>ОБЯЗАТЬ</strong> немедленно исполнить решение суда от 28.04.2023.
            </li>
            <li>
              <strong>РЕКОМЕНДОВАТЬ</strong> Генеральной прокуратуре РК проведение служебного расследования.
            </li>
          </ol>
          <p className="text-center mt-8 text-2xl font-semibold text-amber-300">
            Справедливость превыше всего. Закон должен защищать честный бизнес.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <h3 className="text-xl font-bold text-white mb-4">Контактная информация</h3>
          <p className="font-semibold">Истец: ТОО "Администратор сети"</p>
          <p>БИН: 110940015825</p>
          <p>Директор: Чигринов Николай</p>
          <div className="flex justify-center items-center gap-6 mt-4">
            <a href="tel:+77772309222" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-5 w-5" /> +7 777 230 92 22
            </a>
            <a
              href="mailto:nikolay@supportcenter.kz"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" /> nikolay@supportcenter.kz
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
