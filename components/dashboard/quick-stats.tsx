"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface QuickStatsProps {
  stats: {
    monthlyIncome: number
    monthlyExpenses: number
    savings: number
    netWorth: number
  }
  changes: {
    income: number
    expenses: number
    savings: number
    netWorth: number
  }
}

export function QuickStats({ stats, changes }: QuickStatsProps) {
  const statCards = [
    {
      title: "Monthly Income",
      value: stats.monthlyIncome,
      change: changes.income,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Monthly Expenses",
      value: stats.monthlyExpenses,
      change: changes.expenses,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </svg>
      ),
    },
    {
      title: "Total Savings",
      value: stats.savings,
      change: changes.savings,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
          <path d="M2 9v1c0 1.1.9 2 2 2h1" />
          <path d="M16 11h0" />
        </svg>
      ),
    },
    {
      title: "Net Worth",
      value: stats.netWorth,
      change: changes.netWorth,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary">
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">{formatCurrency(stat.value)}</div>
            <p
              className={`text-sm font-medium flex items-center gap-1 ${
                stat.change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stat.change >= 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              )}
              {stat.change >= 0 ? "+" : ""}
              {stat.change.toFixed(1)}% from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
