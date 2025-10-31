import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"

const levels = [
  {
    level: "Level 1",
    title: "Front-Line Support (Service Desk Agent)",
    handle: "Basic issues resolvable on-site in <30 mins",
    examples: ["Password resets", "App restarts", "Cable reconnects", "Simple printing/email setup"],
    escalateTo: "Level 2",
    escalateWhen: [
      "Cannot reproduce/resolve after full troubleshooting (e.g., Persistent crashes)",
      "Requires admin rights or specialized tools (e.g., Software installs)",
      "Hardware fault suspected (e.g., No power, faulty peripherals)",
      ">30 mins elapsed on time-sensitive (Very Urgent) issues",
    ],
  },
  {
    level: "Level 2",
    title: "Second-Level Support (Senior Tech)",
    handle: "Intermediate issues, 30-90 mins",
    examples: ["OS updates", "Driver installs", "Network config", "Basic repairs"],
    escalateTo: "Level 3",
    escalateWhen: [
      "Vendor-specific issue (e.g., Printer firmware)",
      "Requires deep expertise (e.g., Custom GSC software bugs)",
      "Affects multiple users (e.g., Department-wide outage)",
      ">90 mins or High Priority unresolved",
    ],
  },
  {
    level: "Level 3",
    title: "Third-Level Support (Lead Engineer/External)",
    handle: "Complex/systemic issues",
    examples: ["Server problems", "Major outages", "Warranty claims"],
    escalateTo: "Vendor/External",
    escalateWhen: ["Hardware under warranty", "Beyond internal scope"],
  },
]

const escalationTimes = [
  { priority: "High/Very Urgent", time: "Immediate (<15 mins)" },
  { priority: "Average", time: "Within 1 hour" },
  { priority: "Low/Not Urgent", time: "End of shift" },
]

export default function EscalationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Call Escalation Policy & Flowchart</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Criteria and procedures for escalating tech support requests through support levels
            </p>
            <Badge variant="secondary">Version 1.0 | Date: 30/10/2025</Badge>
          </div>

          <div className="space-y-6 mb-8">
            {levels.map((level, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <Badge className="shrink-0">{level.level}</Badge>
                    <CardTitle className="text-xl">{level.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    <strong>Handle:</strong> {level.handle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Examples:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {level.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-foreground">
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      Escalate to {level.escalateTo} if:
                    </h4>
                    <ul className="space-y-2">
                      {level.escalateWhen.map((condition, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-destructive font-bold shrink-0">→</span>
                          <span className="text-muted-foreground">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle>General Escalation Rules</CardTitle>
              <CardDescription>Time-based escalation requirements by priority</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-sm">Priority/Urgency</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Escalation Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {escalationTimes.map((row, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="py-3 px-4 text-sm">{row.priority}</td>
                        <td className="py-3 px-4 text-sm font-medium text-accent">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                <strong>Logging:</strong> Always update status to "Escalated" with details in the support request form.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Escalation Flowchart</CardTitle>
              <CardDescription>Visual representation of the escalation process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    1
                  </div>
                  <div className="flex-1 p-4 rounded-lg bg-secondary">
                    <p className="font-semibold text-sm">START: New Call Logged</p>
                  </div>
                </div>

                <div className="ml-5 border-l-2 border-border pl-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                      2
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-secondary">
                      <p className="font-semibold text-sm mb-1">Level 1: Front-Line Agent</p>
                      <p className="text-xs text-muted-foreground">Troubleshoot per guidelines</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold text-sm">
                      ?
                    </div>
                    <div className="flex-1 p-4 rounded-lg border-2 border-accent">
                      <p className="font-semibold text-sm">Can Resolve?</p>
                      <div className="flex gap-2 mt-2">
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                        >
                          YES → Close: Resolved
                        </Badge>
                        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                          NO → Escalate to Level 2
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                      3
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-secondary">
                      <p className="font-semibold text-sm mb-1">Level 2: Senior Tech</p>
                      <p className="text-xs text-muted-foreground">Advanced troubleshooting</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold text-sm">
                      ?
                    </div>
                    <div className="flex-1 p-4 rounded-lg border-2 border-accent">
                      <p className="font-semibold text-sm">Can Resolve?</p>
                      <div className="flex gap-2 mt-2">
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                        >
                          YES → Close: Resolved
                        </Badge>
                        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                          NO → Escalate to Level 3
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                      4
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-secondary">
                      <p className="font-semibold text-sm mb-1">Level 3: Lead Engineer</p>
                      <p className="text-xs text-muted-foreground">Deep dive/systemic fix or external vendor</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm">
                      ✓
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="font-semibold text-sm text-green-700 dark:text-green-400">END: Archive Log</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
