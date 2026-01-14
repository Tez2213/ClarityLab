"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface FinancialHealthScoreProps {
  score: number
  trend: "up" | "down" | "stable"
  breakdown: {
    spending: number
    savings: number
    debts: number
    goals: number
  }
}

export function FinancialHealthScore({
  score,
  trend,
  breakdown,
}: FinancialHealthScoreProps) {
  const getTrendIcon = () => {
    if (trend === "up") {
      return (
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
          className="text-green-500"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      )
    }
    if (trend === "down") {
      return (
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
          className="text-red-500"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )
    }
    return null
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-blue-600"
    if (score >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Financial Health Score</span>
          {getTrendIcon()}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center">
          <div className="relative h-32 w-32">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                className="text-muted stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              />
              <circle
                className={`${getScoreColor(score)} stroke-current`}
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${(score / 100) * 251.2} 251.2`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
                {score}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Spending Control</span>
              <span className="font-medium">{breakdown.spending}%</span>
            </div>
            <Progress value={breakdown.spending} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Savings Rate</span>
              <span className="font-medium">{breakdown.savings}%</span>
            </div>
            <Progress value={breakdown.savings} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Debt Management</span>
              <span className="font-medium">{breakdown.debts}%</span>
            </div>
            <Progress value={breakdown.debts} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Goal Progress</span>
              <span className="font-medium">{breakdown.goals}%</span>
            </div>
            <Progress value={breakdown.goals} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
