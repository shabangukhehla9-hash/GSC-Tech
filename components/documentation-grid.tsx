import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, HelpCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    id: "logging",
    title: "Support Request Logging",
    description: "Complete forms and procedures for logging tech support calls and incidents",
    icon: ClipboardList,
    href: "/logging",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting Guide",
    description: "Sequential questions and methodology for systematic problem identification",
    icon: HelpCircle,
    href: "/troubleshooting",
  },
  {
    id: "escalation",
    title: "Escalation Policy",
    description: "Criteria, flowcharts, and procedures for escalating support requests",
    icon: TrendingUp,
    href: "/escalation",
  },
]

export function DocumentationGrid() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.id} href={section.href} id={section.id}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-accent hover:underline">View documentation →</span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
