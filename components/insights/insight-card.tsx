"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface InsightCardProps {
  insight: {
    id: string
    title: string
    description: string
    category: string
    confidence: number
    detectedAt: Date
    impact: "high" | "medium" | "low"
    supportingData: {
      label: string
      value: string
    }[]
  }
  onViewDetails?: (id: string) => void
}

export function InsightCard({ insight, onViewDetails }: InsightCardProps) {
  const getImpactColor = (impact: string) => {
    const colors = {
      high: "border-red-500 bg-red-50 dark:bg-red-950/20",
      medium: "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20",
      low: "border-blue-500 bg-blue-50 dark:bg-blue-950/20",
    }
    return colors[impact as keyof typeof colors]
  }

  const getBadgeColor = (impact: string) => {
    const colors = {
      high: "bg-red-500 text-white hover:bg-red-600",
      medium: "bg-yellow-500 text-white hover:bg-yellow-600",
      low: "bg-blue-500 text-white hover:bg-blue-600",
    }
    return colors[impact as keyof typeof colors]
  }

  return (
    <Card className={`border-l-4 ${getImpactColor(insight.impact)} hover:shadow-xl transition-all bg-white shadow-lg`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={getBadgeColor(insight.impact)}>
                {insight.impact.toUpperCase()} IMPACT
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary font-medium">{insight.category}</Badge>
            </div>
            <CardTitle className="text-xl">{insight.title}</CardTitle>
          </div>
          <div className="text-center bg-primary/10 rounded-xl p-4 min-w-[100px]">
            <div className="text-xs text-muted-foreground font-medium mb-1">Confidence</div>
            <div className="text-3xl font-bold text-primary">
              {insight.confidence}%
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{insight.description}</p>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground">Supporting Data</h4>
          <div className="grid gap-2">
            {insight.supportingData.map((data, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-primary/20 bg-primary/5"
              >
                <span className="text-sm font-medium">
                  {data.label}
                </span>
                <span className="font-bold text-primary">{data.value}</span>
              </div>
            ))}
          </div>
        </div>

        {onViewDetails && (
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => onViewDetails(insight.id)}
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
            View Full Reasoning Trace
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
