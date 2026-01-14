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
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-3 flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
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
                    <circle cx="8" cy="8" r="6" />
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                    <path d="M7 6h1v4" />
                    <path d="m16.71 13.88.7.71-2.82 2.82" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{transaction.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm text-muted-foreground">
                      {transaction.merchant}
                    </p>
                    <span className="text-muted-foreground">•</span>
                    <p className="text-sm text-muted-foreground">
                      {formatRelativeTime(transaction.date)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={getCategoryColor(transaction.category)}>
                  {transaction.category}
                </Badge>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
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
  )
}
