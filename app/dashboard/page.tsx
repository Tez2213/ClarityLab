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
    <div className="relative flex flex-col gap-8 p-6 lg:p-8 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Financial Dashboard
            </h1>
            <p className="text-blue-200/70 text-base lg:text-lg mt-1">
              Welcome back! Here's your real-time financial intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative z-10">
        <QuickStats stats={mockData.stats} changes={mockData.changes} />
      </div>

      {/* Health Score & Spending Chart */}
      <div className="relative z-10 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-7">
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

      {/* Budget Tracker & Recent Transactions */}
      <div className="relative z-10 grid gap-6 lg:gap-8 md:grid-cols-2">
        <BudgetTracker budgets={mockData.budgets} />
        <RecentTransactions transactions={mockData.transactions} />
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
