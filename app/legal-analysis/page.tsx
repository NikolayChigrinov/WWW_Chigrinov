import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, AlertTriangle, BookOpen, Gavel, FileX, ShieldAlert } from "lucide-react"

export default function LegalAnalysisPage() {
  const legalViolations = [
    {
      category: "Конституционные нарушения",
      icon: <Scale className="h-6 w-6 text-red-400" />,
      color: "bg-red-900/20 border-red-500",
      violations: [
        {
          article: "Статья 26 Конституции РК",
          title: "Право на возмещение вреда",
          description:
            "Каждый имеет право на возмещение государством вреда, причиненного незаконными действиями государственных органов и их должностных лиц при исполнении служебных обязанностей.",
          violation:
            "УГД, ДГД и КГД систематически причиняют вред предпринимательской деятельности своими незаконными действиями и бездействием, отказываясь возместить документированный ущерб в размере 146.3+ млн тенге.",
        },
        {
          article: "Статья 13 Конституции РК",
          title: "Защита права собственности",
          description:
            "Каждый имеет право на свободное использование своего имущества для любой законной предпринимательской деятельности.",
          violation:
            "2-летняя блокада деятельности компании лишает собственника права свободно распоряжаться своим имуществом и осуществлять законную предпринимательскую деятельность.",
        },
        {
          article: "Статья 6 Конституции РК",
          title: "Принцип верховенства права",
          description: "В Республике Казахстан действует принцип верховенства права.",
          violation:
            "Государственные органы систематически игнорируют вступившие в силу судебные решения, подрывая основы правового государства.",
        },
      ],
    },
    {
      category: "Налоговые нарушения",
      icon: <FileX className="h-6 w-6 text-amber-400" />,
      color: "bg-amber-900/20 border-amber-500",
      violations: [
        {
          article: "Статья 101 НК РК",
          title: "Возврат излишне уплаченных налогов",
          description:
            "Возврат излишне уплаченных налогов производится в течение пяти рабочих дней со дня подачи заявления.",
          violation:
            "39.4 млн тенге незаконно удерживается более 1.5 лет, что является грубым нарушением установленного 5-дневного срока возврата.",
        },
        {
          article: "Пункт 6 статьи 208 НК РК",
          title: "Порядок приема налоговой отчетности",
          description: "Налоговые органы обязаны принимать налоговую отчетность в установленном порядке.",
          violation:
            "ДФНО не принимается более 8 месяцев, что свидетельствует о системном саботаже исполнения судебного решения.",
        },
        {
          article: "Статья 637 НК РК",
          title: "Ограничительные меры",
          description:
            "Ограничительные меры применяются только при наличии законных оснований и в установленном порядке.",
          violation:
            "УГД применяет ограничительные меры без законных оснований, игнорируя собственные распоряжения об их отмене.",
        },
      ],
    },
    {
      category: "Предпринимательские права",
      icon: <ShieldAlert className="h-6 w-6 text-blue-400" />,
      color: "bg-blue-900/20 border-blue-500",
      violations: [
        {
          article: "Статьи 10, 14 ПК РК",
          title: "Свобода предпринимательства",
          description: "Предпринимательская деятельность осуществляется на основе свободы предпринимательства.",
          violation:
            "Полная блокада деятельности на 2 года лишает конституционного права на свободу предпринимательства.",
        },
        {
          article: "Статья 922 ГК РК",
          title: "Возмещение вреда от актов госорганов",
          description:
            "Вред, причиненный гражданину или юридическому лицу в результате незаконных действий государственных органов, подлежит возмещению.",
          violation:
            "Государственные органы отказываются возмещать документированный вред, причиненный их незаконными действиями.",
        },
      ],
    },
  ]

  const precedents = [
    {
      title: "Дело «Булат Абилов против КГД» (2019)",
      description:
        "Верховный суд РК признал незаконными действия налоговых органов по блокировке счетов без достаточных оснований.",
      relevance: "Аналогичная ситуация с необоснованными ограничительными мерами",
    },
    {
      title: "Дело «ТОО Казахстанская Медная Компания» (2020)",
      description: "Суд взыскал с КГД компенсацию за незаконное удержание налоговых переплат.",
      relevance: "Прецедент взыскания ущерба за нарушение сроков возврата налогов",
    },
    {
      title: "Постановление ВС РК №44 (2021)",
      description: "Разъяснения по применению норм о возмещении вреда от действий государственных органов.",
      relevance: "Правовая основа для взыскания полного ущерба с государственных органов",
    },
  ]

  return (
    <div className="bg-gray-950 text-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">⚖️ Правовой анализ</h1>
          <p className="text-xl md:text-2xl text-gray-400">Юридическая экспертиза с прецедентами</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-red-400 flex items-center justify-center gap-3">
            <AlertTriangle className="h-8 w-8" /> Систематизированные нарушения по категориям
          </h2>

          <div className="space-y-12">
            {legalViolations.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`rounded-lg p-6 ${category.color}`}>
                <div className="flex items-center gap-4 mb-8">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.violations.map((violation, violationIndex) => (
                    <Card key={violationIndex} className="bg-gray-900 border-gray-700 h-full">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2 text-xs">
                          {violation.article}
                        </Badge>
                        <CardTitle className="text-lg text-white">{violation.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-blue-400 mb-2">Норма права:</p>
                          <p className="text-sm text-gray-300">{violation.description}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-400 mb-2">Нарушение:</p>
                          <p className="text-sm text-gray-300">{violation.violation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-400 flex items-center justify-center gap-3">
            <BookOpen className="h-8 w-8" /> Судебные прецеденты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {precedents.map((precedent, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Gavel className="h-5 w-5 text-amber-400" />
                    <Badge variant="secondary">Прецедент</Badge>
                  </div>
                  <CardTitle className="text-lg text-white">{precedent.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-300">{precedent.description}</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm font-semibold text-green-400 mb-1">Применимость:</p>
                    <p className="text-sm text-gray-300">{precedent.relevance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-900/20 to-amber-900/20 border border-red-500 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-400">📋 Правовое заключение</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
            <p>
              <strong className="text-white">Анализ правовых норм и судебной практики</strong> однозначно
              свидетельствует о системных нарушениях конституционных, налоговых и предпринимательских прав со стороны
              государственных органов.
            </p>
            <p>
              <strong className="text-white">Действия УГД, ДГД и КГД</strong> носят характер злоупотребления властными
              полномочиями и прямого саботажа исполнения судебных решений, что недопустимо в правовом государстве.
            </p>
            <p>
              <strong className="text-white">Имеющиеся судебные прецеденты</strong> подтверждают правомерность
              требований о взыскании полного ущерба с государственных органов за их незаконные действия.
            </p>
            <p className="text-center text-xl font-bold text-amber-300 mt-8">
              Требования истца полностью обоснованы действующим законодательством и судебной практикой Республики
              Казахстан.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
