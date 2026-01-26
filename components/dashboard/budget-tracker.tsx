"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatCurrency } from "@/lib/utils"

interface BudgetCategory {
  category: string
  spent: number
  limit: number
}

interface BudgetTrackerProps {
  budgets: BudgetCategory[]
}

export function BudgetTracker({ budgets }: BudgetTrackerProps) {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-red-500"
    if (percentage >= 75) return "bg-yellow-500"
    return "bg-primary"
  }

  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className="relative h-full border-0 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Budget Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgets.map((budget) => {
              const percentage = (budget.spent / budget.limit) * 100
              const remaining = budget.limit - budget.spent
              const isOverBudget = percentage >= 90
              const isWarning = percentage >= 75 && percentage < 90

              return (
                <div key={budget.category} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{budget.category}</p>
                      <p className="text-sm text-blue-300/70">
                        {formatCurrency(remaining)} remaining
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-cyan-400">
                        {formatCurrency(budget.spent)}
                      </p>
                      <p className="text-sm text-blue-300/70">
                        of {formatCurrency(budget.limit)}
                      </p>
                    </div>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800">
                    <div 
                      className={`h-full transition-all ${
                        isOverBudget 
                          ? 'bg-gradient-to-r from-red-600 to-red-500' 
                          : isWarning 
                          ? 'bg-gradient-to-r from-yellow-600 to-yellow-500'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white drop-shadow-lg">
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
