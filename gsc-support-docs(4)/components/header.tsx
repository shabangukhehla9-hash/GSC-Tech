import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/gsc-logo.png" alt="GSC Tech Support Logo" width={48} height={48} className="h-12 w-12" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">GSC Tech Support</span>
            <span className="text-xs text-muted-foreground">Global Sales Consultancy</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/logging"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Logging
          </Link>
          <Link
            href="/troubleshooting"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Troubleshooting
          </Link>
          <Link
            href="/escalation"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Escalation
          </Link>
          <a
            href="mailto:ithelp@techsupport.com"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
