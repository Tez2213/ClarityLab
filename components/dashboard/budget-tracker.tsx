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
    <Card>
      <CardHeader>
        <CardTitle>Budget Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.limit) * 100
            const remaining = budget.limit - budget.spent

            return (
              <div key={budget.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{budget.category}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatCurrency(remaining)} remaining
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {formatCurrency(budget.spent)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      of {formatCurrency(budget.limit)}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={percentage} className={getProgressColor(percentage)} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium">
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
  )
}
