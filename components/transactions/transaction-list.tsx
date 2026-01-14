"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatCurrency, formatDate } from "@/lib/utils"

interface Transaction {
  id: string
  description: string
  amount: number
  category: string
  date: Date
  merchant: string
}

interface TransactionListProps {
  transactions: Transaction[]
  onFilter?: (filters: { category?: string; search?: string }) => void
}

export function TransactionList({ transactions, onFilter }: TransactionListProps) {
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
    return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>All Transactions</CardTitle>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search transactions..."
              className="w-64"
              onChange={(e) => onFilter?.({ search: e.target.value })}
            />
            <Button variant="outline">
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
                <path d="M3 6h18" />
                <path d="M7 12h10" />
                <path d="M10 18h4" />
              </svg>
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
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
                <div className="flex-1">
                  <p className="font-medium">{transaction.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm text-muted-foreground">
                      {transaction.merchant}
                    </p>
                    <span className="text-muted-foreground">•</span>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className={getCategoryColor(transaction.category)}>
                  {transaction.category}
                </Badge>
                <div className="text-right w-24">
                  <p
                    className={`font-semibold ${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {transaction.amount < 0 ? "-" : "+"}
                    {formatCurrency(Math.abs(transaction.amount))}
                  </p>
                </div>
                <Button variant="ghost" size="icon">
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
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
