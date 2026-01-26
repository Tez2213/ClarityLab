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
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className={`relative border-0 border-l-4 ${
        recommendation.priority === 'critical' ? 'border-l-red-500' :
        recommendation.priority === 'high' ? 'border-l-orange-500' :
        recommendation.priority === 'medium' ? 'border-l-yellow-500' :
        'border-l-blue-500'
      } bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all`}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge className={`${
                  recommendation.priority === 'critical' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                  recommendation.priority === 'high' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                  recommendation.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border-blue-500/30'
                } backdrop-blur-sm border font-semibold`}>
                  {recommendation.priority.toUpperCase()} PRIORITY
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 backdrop-blur-sm border font-medium">{recommendation.category}</Badge>
              </div>
              <CardTitle className="text-2xl text-white">{recommendation.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-blue-200/70 leading-relaxed text-base">{recommendation.description}</p>

          <div className="grid grid-cols-3 gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-sm text-blue-300/70 font-medium uppercase tracking-wider">Estimated Impact</p>
              <p className="font-bold text-lg text-cyan-400">
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

        <Separator className="bg-slate-800" />

        <div className="space-y-2">
          <h4 className="font-bold text-base text-cyan-400 uppercase tracking-wider">Agent Reasoning</h4>
          <p className="text-sm leading-relaxed bg-gradient-to-br from-blue-600/10 to-cyan-600/10 p-4 rounded-lg border border-blue-500/30 text-blue-200/70">
            {recommendation.reasoning}
          </p>
        </div>

        <div className="flex gap-2 pt-2">
          {onMarkComplete && (
            <Button
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/50"
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
              className="border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400 transition-all backdrop-blur-sm"
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
    </div>
  )
}
