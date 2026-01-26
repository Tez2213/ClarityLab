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
          width="24"
          height="24"
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
          width="24"
          height="24"
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
          width="24"
          height="24"
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
          width="24"
          height="24"
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
    <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card) => (
        <div key={card.title} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
          <Card className="relative border-0 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-blue-500/20 transition-all overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-blue-200/70 uppercase tracking-wider">
                {card.title}
              </CardTitle>
              <div className="text-cyan-400">{card.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-3xl lg:text-4xl font-bold text-white">
                  {formatCurrency(card.value)}
                </p>
                <p
                  className={`text-sm font-semibold flex items-center gap-1 ${
                    card.change >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.change >= 0 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                  </svg>
                  {card.change >= 0 ? "+" : ""}{card.change.toFixed(1)}% from last month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
