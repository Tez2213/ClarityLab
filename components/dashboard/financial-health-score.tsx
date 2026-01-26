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
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className="relative h-full border-0 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-2xl font-bold text-white">
            <span>Financial Health Score</span>
            {getTrendIcon()}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-6">
            <div className="relative h-48 w-48">
              <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-slate-700 stroke-current"
                  strokeWidth="8"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="stroke-current"
                  style={{ stroke: 'url(#gradient)' }}
                  strokeWidth="8"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray={`${(score / 100) * 251.2} 251.2`}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {score}
                  </p>
                  <p className="text-sm text-blue-300/70 mt-1">out of 100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-blue-200/70 uppercase tracking-wider">Breakdown</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/70">Spending Control</span>
                  <span className="font-semibold text-white">{breakdown.spending}%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all" style={{ width: `${breakdown.spending}%` }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/70">Savings Rate</span>
                  <span className="font-semibold text-white">{breakdown.savings}%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 transition-all" style={{ width: `${breakdown.savings}%` }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/70">Debt Management</span>
                  <span className="font-semibold text-white">{breakdown.debts}%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all" style={{ width: `${breakdown.debts}%` }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200/70">Goal Progress</span>
                  <span className="font-semibold text-white">{breakdown.goals}%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all" style={{ width: `${breakdown.goals}%` }} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
