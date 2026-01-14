"use client"

import { FinancialHealthScore } from "@/components/dashboard/financial-health-score"
import { QuickStats } from "@/components/dashboard/quick-stats"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { BudgetTracker } from "@/components/dashboard/budget-tracker"
import { SpendingChart } from "@/components/dashboard/spending-chart"

// Mock data - will be replaced with real data from API
const mockData = {
  healthScore: {
    score: 78,
    trend: "up" as const,
    breakdown: {
      spending: 85,
      savings: 72,
      debts: 68,
      goals: 80,
    },
  },
  stats: {
    monthlyIncome: 5600,
    monthlyExpenses: 3245,
    savings: 12450,
    netWorth: 28900,
  },
  changes: {
    income: 3.2,
    expenses: -5.4,
    savings: 8.7,
    netWorth: 4.1,
  },
  transactions: [
    {
      id: "1",
      description: "Grocery Shopping",
      amount: -125.50,
      category: "Food",
      date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      merchant: "Whole Foods",
    },
    {
      id: "2",
      description: "Salary Deposit",
      amount: 2800,
      category: "Income",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      merchant: "Tech Corp Inc",
    },
    {
      id: "3",
      description: "Gas Station",
      amount: -45.00,
      category: "Transport",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      merchant: "Shell",
    },
    {
      id: "4",
      description: "Movie Tickets",
      amount: -32.00,
      category: "Entertainment",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      merchant: "AMC Theaters",
    },
    {
      id: "5",
      description: "Electric Bill",
      amount: -89.50,
      category: "Utilities",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      merchant: "City Power",
    },
  ],
  budgets: [
    { category: "Food & Dining", spent: 420, limit: 600 },
    { category: "Transportation", spent: 180, limit: 200 },
    { category: "Entertainment", spent: 95, limit: 150 },
    { category: "Shopping", spent: 340, limit: 400 },
  ],
  spendingByCategory: [
    { category: "Food & Dining", amount: 420, percentage: 38 },
    { category: "Shopping", amount: 340, percentage: 31 },
    { category: "Transportation", amount: 180, percentage: 16 },
    { category: "Entertainment", amount: 95, percentage: 9 },
    { category: "Utilities", amount: 70, percentage: 6 },
  ],
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-background via-secondary/20 to-background min-h-screen">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      <QuickStats stats={mockData.stats} changes={mockData.changes} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-3">
          <FinancialHealthScore
            score={mockData.healthScore.score}
            trend={mockData.healthScore.trend}
            breakdown={mockData.healthScore.breakdown}
          />
        </div>
        <div className="lg:col-span-4">
          <SpendingChart data={mockData.spendingByCategory} />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <BudgetTracker budgets={mockData.budgets} />
        <RecentTransactions transactions={mockData.transactions} />
      </div>
    </div>
  )
}
