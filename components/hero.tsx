import { Mail, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            GSC Tech Support Documentation Portal
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
            Welcome to the Global Sales Consultancy comprehensive technical support system. This portal provides all the
            tools and documentation needed to efficiently log incidents, troubleshoot issues, and manage escalations.
          </p>

          {/* Purpose Section */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 mb-8 text-left">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Website Purpose
            </h2>
            <p className="text-primary-foreground/90 leading-relaxed mb-4">
              This website serves as the central hub for GSC's IT support operations. It streamlines the support process
              by providing standardized forms, troubleshooting procedures, and escalation protocols to ensure
              consistent, high-quality technical assistance for all users.
            </p>
            <p className="text-primary-foreground/90 leading-relaxed">
              All support communications should be directed to:{" "}
              <a
                href="mailto:ithelp@techsupport.com"
                className="font-semibold underline hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                <Mail className="h-4 w-4" />
                ithelp@techsupport.com
              </a>
            </p>
          </div>

          {/* How to Use Section */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              How to Use This Website
            </h2>
            <div className="space-y-4 text-primary-foreground/90">
              <div>
                <h3 className="font-semibold text-lg mb-2">1. Support Request Logging</h3>
                <p className="leading-relaxed">
                  Start by visiting the{" "}
                  <Link href="/logging" className="underline hover:text-accent transition-colors">
                    Logging page
                  </Link>{" "}
                  to submit a new support request. Fill out the comprehensive form with details about your issue,
                  including priority level, affected systems, and contact information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">2. Troubleshooting Guide</h3>
                <p className="leading-relaxed">
                  For help desk staff, the{" "}
                  <Link href="/troubleshooting" className="underline hover:text-accent transition-colors">
                    Troubleshooting page
                  </Link>{" "}
                  provides a structured set of diagnostic questions organized into three phases. Follow the sequential
                  process to identify and resolve issues efficiently.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3. Escalation Policy</h3>
                <p className="leading-relaxed">
                  When issues require higher-level support, consult the{" "}
                  <Link href="/escalation" className="underline hover:text-accent transition-colors">
                    Escalation page
                  </Link>{" "}
                  for detailed criteria and procedures. The visual flowchart guides you through the decision-making
                  process for proper escalation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
