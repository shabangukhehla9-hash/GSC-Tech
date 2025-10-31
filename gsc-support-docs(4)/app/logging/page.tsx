import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoggingPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Support Request Logging Form</h1>
            <p className="text-muted-foreground leading-relaxed">
              Tech Support - Global Sales Consultancy (GSC) Support Request Log
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Section 1: Initial Call Logging</CardTitle>
              <CardDescription>Complete all fields when receiving a support request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="callRef">Call Reference ID</Label>
                  <Input id="callRef" placeholder="Auto-generated: YYYYMMDD-###" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="datetime">Date and Time of Call</Label>
                  <Input id="datetime" type="datetime-local" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name and Surname</Label>
                  <Input id="name" placeholder="Enter caller's full name" />
                </div>
                <div className="space-y-2">
                  <Label>Caller Department</Label>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <label htmlFor="marketing" className="text-sm">
                        Marketing
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sales" />
                      <label htmlFor="sales" className="text-sm">
                        Sales
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hr" />
                      <label htmlFor="hr" className="text-sm">
                        HR
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="other-dept" />
                      <label htmlFor="other-dept" className="text-sm">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Incident Title/Category</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  {["Hardware", "Software", "Network", "Printer", "Email", "Password", "Other"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category.toLowerCase()} />
                      <label htmlFor={category.toLowerCase()} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Incident Description</Label>
                <Textarea id="description" placeholder="Provide detailed description of the issue..." rows={5} />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <Label>Urgency</Label>
                  <RadioGroup defaultValue="average">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-urgent" id="very-urgent" />
                      <Label htmlFor="very-urgent" className="font-normal">
                        Very Urgent
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="average" id="average-urgency" />
                      <Label htmlFor="average-urgency" className="font-normal">
                        Average
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-urgent" id="not-urgent" />
                      <Label htmlFor="not-urgent" className="font-normal">
                        Not Urgent
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Priority</Label>
                  <RadioGroup defaultValue="average-priority">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high" className="font-normal">
                        High
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="average-priority" id="average-priority" />
                      <Label htmlFor="average-priority" className="font-normal">
                        Average
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low" className="font-normal">
                        Low
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="agent-initials">Agent Initials</Label>
                  <Input id="agent-initials" placeholder="Enter your initials" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logged-at">Logged At</Label>
                  <Input id="logged-at" type="time" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Section 2: Resolution Details</CardTitle>
              <CardDescription>Complete upon closure of the support request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Status</Label>
                <RadioGroup>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="resolved" id="resolved" />
                    <Label htmlFor="resolved" className="font-normal">
                      Resolved
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cancelled" id="cancelled" />
                    <Label htmlFor="cancelled" className="font-normal">
                      Cancelled
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="escalated" id="escalated" />
                    <Label htmlFor="escalated" className="font-normal">
                      Escalated
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="escalated-to">Escalated To (if applicable)</Label>
                <Input id="escalated-to" placeholder="Name, Department/Level, Date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cause">Cause of Incident (if known)</Label>
                <Textarea id="cause" placeholder="Describe the root cause..." rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution">Incident Solution</Label>
                <Textarea id="solution" placeholder="Describe the solution applied..." rows={4} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cancellation">Cancellation Reason (if applicable)</Label>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="resolved-independently" />
                    <label htmlFor="resolved-independently" className="text-sm">
                      Caller resolved independently
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="duplicate" />
                    <label htmlFor="duplicate" className="text-sm">
                      Duplicate call
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other-reason" />
                    <label htmlFor="other-reason" className="text-sm">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="time-resolved">Time Resolved</Label>
                  <Input id="time-resolved" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Total Duration (Minutes)</Label>
                  <Input id="duration" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agent-name">Agent Name</Label>
                  <Input id="agent-name" placeholder="Full name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="supervisor">Supervisor Approval</Label>
                <Input id="supervisor" placeholder="Supervisor signature/initials" />
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">Submit Log</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
