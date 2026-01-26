"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, formatRelativeTime } from "@/lib/utils"

interface Transaction {
  id: string
  description: string
  amount: number
  category: string
  date: Date
  merchant: string
}

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      food: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
      transport: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      entertainment: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
      utilities: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
      shopping: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
      healthcare: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      income: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    }
    return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
  }

  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className="relative h-full border-0 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0 hover:bg-slate-800/30 p-2 rounded-lg transition-all"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm">
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
                      className="text-cyan-400"
                    >
                      <circle cx="8" cy="8" r="6" />
                      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                      <path d="M7 6h1v4" />
                      <path d="m16.71 13.88.7.71-2.82 2.82" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">{transaction.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-blue-300/70">
                        {transaction.merchant}
                      </p>
                      <span className="text-blue-300/50">•</span>
                      <p className="text-sm text-blue-300/70">
                        {formatRelativeTime(transaction.date)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-600/30 text-cyan-400 border-blue-500/30 backdrop-blur-sm hover:bg-blue-600/40">
                    {transaction.category}
                  </Badge>
                  <div className="text-right">
                    <p
                      className={`font-bold text-lg ${
                        transaction.amount < 0 ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {transaction.amount < 0 ? "-" : "+"}
                      {formatCurrency(Math.abs(transaction.amount))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
