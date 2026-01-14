"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

interface Goal {
  id: string
  title: string
  description: string
  targetAmount: number
  currentAmount: number
  targetDate: Date
  category: string
  priority: "high" | "medium" | "low"
}

interface GoalCardProps {
  goal: Goal
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export function GoalCard({ goal, onEdit, onDelete }: GoalCardProps) {
  const percentage = (goal.currentAmount / goal.targetAmount) * 100
  const remaining = goal.targetAmount - goal.currentAmount
  const daysRemaining = Math.ceil(
    (goal.targetDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  )

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
      low: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    }
    return colors[priority as keyof typeof colors]
  }

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={getPriorityColor(goal.priority)}>
                {goal.priority.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">{goal.category}</Badge>
            </div>
            <CardTitle className="text-xl">{goal.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {goal.description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-primary text-base font-bold">{percentage.toFixed(0)}%</span>
          </div>
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">Current</p>
            <p className="text-xl font-bold text-primary">
              {formatCurrency(goal.currentAmount)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">Target</p>
            <p className="text-xl font-bold text-accent">
              {formatCurrency(goal.targetAmount)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">Remaining</p>
            <p className="font-semibold text-foreground">
              {formatCurrency(remaining)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">Days Left</p>
            <p className="font-semibold text-foreground">
              {daysRemaining > 0 ? daysRemaining : "Overdue"}
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {onEdit && (
            <Button
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => onEdit(goal.id)}
            >
              Edit
            </Button>
          )}
          {onDelete && (
            <Button
              variant="outline"
              className="flex-1 border-destructive/30 text-destructive hover:bg-destructive hover:text-white"
              onClick={() => onDelete(goal.id)}
            >
              Delete
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
