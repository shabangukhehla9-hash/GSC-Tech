import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const phases = [
  {
    title: "Phase 1: Identify the Problem",
    questions: [
      'What exactly is happening? (e.g., "App crashes," "No internet," "Printer not responding.")',
      "When did this start, and what were you doing? (e.g., After login? During printing? Recent changes?)",
      "Who else is affected? (Just you? Whole department? Specific workstation?)",
    ],
  },
  {
    title: "Phase 2: Reproduce & Verify",
    questions: [
      "Can you show me the exact steps to reproduce it? (Walk through screen-share or on-site demo.)",
      "Have you tried restarting your computer/printer/app? (Yes/No → If no, do it now.)",
      "Does it happen every time or intermittently? (Frequency? Triggers?)",
    ],
  },
  {
    title: "Phase 3: Isolate the Cause",
    questions: [
      "Is it hardware-related? (e.g., Screen flickering? Keyboard issues? Check cables/power.)",
      "Software/Network? (e.g., Which app? Error messages? Can access other sites?)",
      "Recent changes? (e.g., Updates installed? New software? Password change?)",
      "Test basic fixes: (Try: Close/reopen app, run as admin, check connections.)",
    ],
  },
  {
    title: "Phase 4: Escalate Check",
    description: "If unresolved after previous phases",
    questions: [
      "Any error codes/messages? (Screenshot/note exactly.)",
      "Workaround possible? (e.g., Use another PC temporarily?)",
    ],
  },
]

export default function TroubleshootingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Help Desk Troubleshooting Guide</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sequential questions for systematic problem identification based on standard IT troubleshooting
              methodology
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Document Version 1.0</Badge>
              <Badge variant="secondary">Date: 30/10/2025</Badge>
              <Badge variant="outline">Duration: 5-10 minutes</Badge>
            </div>
          </div>

          <Card className="mb-6 bg-accent/10 border-accent">
            <CardHeader>
              <CardTitle className="text-lg">Purpose</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                This guide provides a <strong>logical, consecutive sequence of questions</strong> based on{" "}
                <strong>standard IT troubleshooting methodology</strong> (Identify → Duplicate → Isolate → Resolve →
                Document). Ask in <strong>exact order</strong> to systematically diagnose issues at GSC workstations.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{phase.title}</CardTitle>
                      {phase.description && <CardDescription>{phase.description}</CardDescription>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.questions.map((question, qIndex) => (
                      <li key={qIndex} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{question}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 border-primary/50">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed">
                <strong>If resolved:</strong> Document solution in the logging form.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>If not resolved:</strong> Escalate per{" "}
                <Link href="/escalation" className="text-accent hover:underline font-medium">
                  escalation guidelines
                </Link>
                .
              </p>
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Tips:</strong> Stay calm, use simple language. Log all answers in the description field.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
