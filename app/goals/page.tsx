"use client"

import { GoalCard } from "@/components/goals/goal-card"
import { Button } from "@/components/ui/button"

// Mock data
const mockGoals = [
  {
    id: "1",
    title: "Emergency Fund",
    description: "Build 6 months of living expenses as safety net",
    targetAmount: 19470,
    currentAmount: 7500,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 240), // 240 days
    category: "Savings",
    priority: "high" as const,
  },
  {
    id: "2",
    title: "Vacation to Japan",
    description: "Two-week trip including flights, accommodation, and activities",
    targetAmount: 5000,
    currentAmount: 2300,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 180), // 180 days
    category: "Travel",
    priority: "medium" as const,
  },
  {
    id: "3",
    title: "New Laptop",
    description: "MacBook Pro for work and personal projects",
    targetAmount: 2500,
    currentAmount: 1800,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60), // 60 days
    category: "Technology",
    priority: "medium" as const,
  },
  {
    id: "4",
    title: "Retirement Fund",
    description: "Long-term investment for retirement",
    targetAmount: 50000,
    currentAmount: 8900,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1095), // ~3 years
    category: "Investment",
    priority: "low" as const,
  },
]

export default function GoalsPage() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-background via-secondary/20 to-background min-h-screen">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Financial Goals</h1>
          <p className="text-muted-foreground text-lg">
            Track and manage your savings goals
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all">
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
            <path d="M12 2v20M2 12h20" />
          </svg>
          Create New Goal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockGoals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onEdit={(id) => console.log("Edit goal:", id)}
            onDelete={(id) => console.log("Delete goal:", id)}
          />
        ))}
      </div>
    </div>
  )
}
