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
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className="relative border-0 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all overflow-hidden">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge className={`${
                  goal.priority === 'high' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                  goal.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border-blue-500/30'
                } backdrop-blur-sm border`}>
                  {goal.priority.toUpperCase()}
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 backdrop-blur-sm border">{goal.category}</Badge>
              </div>
              <CardTitle className="text-xl text-white">{goal.title}</CardTitle>
              <p className="text-sm text-blue-200/70 mt-2 leading-relaxed">
                {goal.description}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-blue-200/70">Progress</span>
            <span className="text-cyan-400 text-base font-bold">{percentage.toFixed(0)}%</span>
          </div>
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 rounded-full shadow-lg shadow-cyan-500/50"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm">
          <div className="space-y-1">
            <p className="text-xs text-blue-300/70 font-medium uppercase tracking-wider">Current</p>
            <p className="text-xl font-bold text-white">
              {formatCurrency(goal.currentAmount)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-blue-300/70 font-medium uppercase tracking-wider">Target</p>
            <p className="text-xl font-bold text-cyan-400">
              {formatCurrency(goal.targetAmount)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
          <div className="space-y-1">
            <p className="text-xs text-blue-300/70 font-medium uppercase tracking-wider">Remaining</p>
            <p className="font-semibold text-white">
              {formatCurrency(remaining)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-blue-300/70 font-medium uppercase tracking-wider">Days Left</p>
            <p className="font-semibold text-white">
              {daysRemaining > 0 ? daysRemaining : "Overdue"}
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {onEdit && (
            <Button
              variant="outline"
              className="flex-1 border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400 transition-all backdrop-blur-sm"
              onClick={() => onEdit(goal.id)}
            >
              Edit
            </Button>
          )}
          {onDelete && (
            <Button
              variant="outline"
              className="flex-1 border-red-500/50 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:text-red-200 hover:border-red-400 transition-all backdrop-blur-sm"
              onClick={() => onDelete(goal.id)}
            >
              Delete
            </Button>
          )}
        </div>
      </CardContent>
      </Card>
    </div>
  )
}
