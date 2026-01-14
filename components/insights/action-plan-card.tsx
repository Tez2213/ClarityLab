"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ActionPlanCardProps {
  recommendation: {
    id: string
    title: string
    description: string
    priority: "critical" | "high" | "medium" | "low"
    category: string
    estimatedImpact: string
    effort: string
    steps: string[]
    reasoning: string
    confidence: number
  }
  onMarkComplete?: (id: string) => void
  onViewTrace?: (id: string) => void
}

export function ActionPlanCard({
  recommendation,
  onMarkComplete,
  onViewTrace,
}: ActionPlanCardProps) {
  const getPriorityStyles = (priority: string) => {
    const styles = {
      critical: {
        badge: "bg-red-500 text-white hover:bg-red-600",
        border: "border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-transparent dark:from-red-950/20",
      },
      high: {
        badge: "bg-orange-500 text-white hover:bg-orange-600",
        border: "border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-950/20",
      },
      medium: {
        badge: "bg-yellow-500 text-white hover:bg-yellow-600",
        border: "border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-50 to-transparent dark:from-yellow-950/20",
      },
      low: {
        badge: "bg-blue-500 text-white hover:bg-blue-600",
        border: "border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20",
      },
    }
    return styles[priority as keyof typeof styles]
  }

  const priorityStyles = getPriorityStyles(recommendation.priority)

  return (
    <Card className={`${priorityStyles.border} hover:shadow-xl transition-all bg-white shadow-lg`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={priorityStyles.badge}>
                {recommendation.priority.toUpperCase()} PRIORITY
              </Badge>
              <Badge variant="outline" className="border-accent/30 text-accent font-medium">{recommendation.category}</Badge>
            </div>
            <CardTitle className="text-2xl">{recommendation.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed text-base">{recommendation.description}</p>

        <div className="grid grid-cols-3 gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-sm">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Estimated Impact</p>
            <p className="font-bold text-lg text-primary">
              {recommendation.estimatedImpact}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Effort Required</p>
            <p className="font-bold text-lg text-accent">{recommendation.effort}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium">Confidence</p>
            <p className="font-bold text-lg text-secondary">{recommendation.confidence}%</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h4 className="font-bold text-base text-primary">Action Steps</h4>
          <ol className="space-y-3">
            {recommendation.steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm flex-1 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="font-bold text-base text-primary">Agent Reasoning</h4>
          <p className="text-sm leading-relaxed bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-lg border border-accent/20">
            {recommendation.reasoning}
          </p>
        </div>

        <div className="flex gap-2 pt-2">
          {onMarkComplete && (
            <Button
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              onClick={() => onMarkComplete(recommendation.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              Mark as Complete
            </Button>
          )}
          {onViewTrace && (
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => onViewTrace(recommendation.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Trace
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
