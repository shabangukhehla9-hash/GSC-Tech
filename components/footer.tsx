import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/gsc-logo.jpg" alt="GSC Logo" width={40} height={40} className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground">GSC Tech Support</span>
                <span className="text-xs text-muted-foreground">Global Sales Consultancy</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive technical support documentation and incident management system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/logging" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support Request Logging
              </Link>
              <Link
                href="/troubleshooting"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Troubleshooting Guide
              </Link>
              <Link
                href="/escalation"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Escalation Policy
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Support</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ithelp@techsupport.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 text-primary group-hover:text-primary/80" />
                <span>ithelp@techsupport.com</span>
              </a>
              <p className="text-sm text-muted-foreground">
                For all technical support inquiries, please email our help desk or submit a request through the logging
                form.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Global Sales Consultancy. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Document Version 1.0 | Last Updated: 30/10/2025</p>
        </div>
      </div>
    </footer>
  )
}
