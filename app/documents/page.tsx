import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, AlertTriangle, Scale, DollarSign, Mail, Calendar } from "lucide-react"

export default function DocumentsPage() {
  const documentCategories = [
    {
      title: "🔥 Критические нарушения",
      description: "Решения судов, распоряжения УГД",
      color: "bg-red-900/20 border-red-500",
      icon: <AlertTriangle className="h-6 w-6 text-red-400" />,
      documents: [
        {
          name: "Решение суда от 28.04.2023",
          type: "Судебное решение",
          date: "28.04.2023",
          size: "2.4 МБ",
          description: "Решение суда, признающее действия УГД незаконными и обязывающее устранить нарушения",
          critical: true,
        },
        {
          name: "Распоряжение УГД №1 о снятии ограничений",
          type: "Административный акт",
          date: "15.05.2023",
          size: "1.2 МБ",
          description: "Первое из 8 неисполненных распоряжений УГД о снятии ограничительных мер",
          critical: true,
        },
        {
          name: "Распоряжение УГД №8 о снятии ограничений",
          type: "Административный акт",
          date: "12.03.2025",
          size: "1.1 МБ",
          description: "Последнее неисполненное распоряжение - доказательство системного саботажа",
          critical: true,
        },
      ],
    },
    {
      title: "⚖️ Судебные документы",
      description: "Полная процессуальная история",
      color: "bg-blue-900/20 border-blue-500",
      icon: <Scale className="h-6 w-6 text-blue-400" />,
      documents: [
        {
          name: "Исковое заявление в суд",
          type: "Процессуальный документ",
          date: "15.02.2023",
          size: "3.8 МБ",
          description: "Первоначальное исковое заявление с требованием признать действия УГД незаконными",
        },
        {
          name: "Отзыв на возражение ответчика",
          type: "Процессуальный документ",
          date: "22.03.2023",
          size: "2.1 МБ",
          description: "Детальный разбор неправомерных доводов налогового органа",
        },
        {
          name: "Протокол судебного заседания",
          type: "Судебный протокол",
          date: "28.04.2023",
          size: "1.9 МБ",
          description: "Полная стенограмма судебного разбирательства",
        },
      ],
    },
    {
      title: "💰 Финансовые документы",
      description: "Расчеты ущерба и убытков",
      color: "bg-amber-900/20 border-amber-500",
      icon: <DollarSign className="h-6 w-6 text-amber-400" />,
      documents: [
        {
          name: "Расчет незаконно удерживаемых налогов",
          type: "Финансовый расчет",
          date: "01.06.2025",
          size: "1.7 МБ",
          description: "Детальный расчет 39.4 млн тенге незаконно удерживаемых средств",
        },
        {
          name: "Договор с ТОО 'Қарағанды Жарық'",
          type: "Коммерческий договор",
          date: "10.01.2022",
          size: "2.3 МБ",
          description: "Сорванный контракт на 92.6 млн тенге из-за действий УГД",
        },
        {
          name: "Расчет упущенной выгоды",
          type: "Экономический анализ",
          date: "15.05.2025",
          size: "1.4 МБ",
          description: "Расчет упущенной выгоды 11.8 млн тенге по депозитным ставкам",
        },
        {
          name: "Справка о курсах валют и инфляции",
          type: "Статистические данные",
          date: "20.05.2025",
          size: "0.8 МБ",
          description: "Обоснование обесценивания средств на 2+ млн тенге",
        },
      ],
    },
    {
      title: "📧 Переписка с органами",
      description: "Документированный саботаж",
      color: "bg-purple-900/20 border-purple-500",
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      documents: [
        {
          name: "Переписка с УГД (19 обращений)",
          type: "Официальная переписка",
          date: "2022-2025",
          size: "15.2 МБ",
          description: "Полная переписка, демонстрирующая системное игнорирование обращений",
        },
        {
          name: "Переписка с ДГД (8 обращений)",
          type: "Официальная переписка",
          date: "2023-2025",
          size: "8.7 МБ",
          description: "Формальные отписки вместо решения проблем по существу",
        },
        {
          name: "Переписка с КГД (12 обращений)",
          type: "Официальная переписка",
          date: "2024-2025",
          size: "11.4 МБ",
          description: "Искажение права и отказ от рассмотрения по существу",
        },
      ],
    },
  ]

  const totalDocuments = documentCategories.reduce((sum, category) => sum + category.documents.length, 0)
  const totalSize = "47.8 МБ"

  return (
    <div className="bg-gray-950 text-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">📄 База документов</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">Неопровержимые доказательства</p>
          <div className="flex justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>
                <strong>{totalDocuments}</strong> документов
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-400" />
              <span>
                <strong>{totalSize}</strong> общий размер
              </span>
            </div>
          </div>
        </header>

        <div className="space-y-12">
          {documentCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`rounded-lg p-6 ${category.color}`}>
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.documents.map((document, docIndex) => (
                  <Card key={docIndex} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white mb-2 leading-tight">{document.name}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">
                              {document.type}
                            </Badge>
                            {document.critical && (
                              <Badge variant="destructive" className="text-xs">
                                КРИТИЧЕСКИЙ
                              </Badge>
                            )}
                          </div>
                        </div>
                        <FileText className="h-8 w-8 text-gray-400 flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-300 leading-relaxed">{document.description}</p>

                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {document.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {document.size}
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Скачать документ
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">📋 Инструкции по использованию</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Для суда:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Все документы систематизированы по категориям</li>
                <li>• Критические документы выделены красными метками</li>
                <li>• Каждый документ содержит краткое описание</li>
                <li>• Доступна мгновенная загрузка любого файла</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Для экспертов:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Финансовые расчеты с детальным обоснованием</li>
                <li>• Хронологический порядок событий</li>
                <li>• Полная переписка с государственными органами</li>
                <li>• Процессуальные документы в полном объеме</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
