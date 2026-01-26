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
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className={`relative border-0 border-l-4 ${
        insight.impact === 'high' ? 'border-l-red-500' :
        insight.impact === 'medium' ? 'border-l-yellow-500' :
        'border-l-blue-500'
      } bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all`}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge className={`${
                  insight.impact === 'high' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                  insight.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border-blue-500/30'
                } backdrop-blur-sm border font-semibold`}>
                  {insight.impact.toUpperCase()} IMPACT
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 backdrop-blur-sm border font-medium">{insight.category}</Badge>
              </div>
              <CardTitle className="text-xl text-white">{insight.title}</CardTitle>
            </div>
            <div className="text-center bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 min-w-[100px] backdrop-blur-sm">
              <div className="text-xs text-blue-300/70 font-medium mb-1 uppercase tracking-wider">Confidence</div>
              <div className="text-3xl font-bold text-cyan-400">
              {insight.confidence}%
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-blue-200/70 leading-relaxed">{insight.description}</p>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-white uppercase tracking-wider">Supporting Data</h4>
          <div className="grid gap-2">
            {insight.supportingData.map((data, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-blue-500/30 bg-blue-600/10 backdrop-blur-sm hover:bg-blue-600/20 transition-all"
              >
                <span className="text-sm font-medium text-blue-200/70">
                  {data.label}
                </span>
                <span className="font-bold text-cyan-400">{data.value}</span>
              </div>
            ))}
          </div>
        </div>

        {onViewDetails && (
          <Button
            className="w-full border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400 transition-all backdrop-blur-sm"
            onClick={() => onViewDetails(insight.id)}>
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
            View Full Analysis & Reasoning
          </Button>
        )}
      </CardContent>
      </Card>
    </div>
  )
}
