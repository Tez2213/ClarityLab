"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TransactionFormProps {
  onSubmit?: (transaction: {
    description: string
    amount: number
    category: string
    date: string
    merchant: string
  }) => void
}

export function TransactionForm({ onSubmit }: TransactionFormProps) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    merchant: "",
  })

  const categories = [
    "Food",
    "Transport",
    "Entertainment",
    "Shopping",
    "Healthcare",
    "Utilities",
    "Income",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.description && formData.amount && formData.category) {
      onSubmit?.({
        ...formData,
        amount: parseFloat(formData.amount),
      })
      // Reset form
      setFormData({
        description: "",
        amount: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
        merchant: "",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Input
                id="description"
                placeholder="e.g., Grocery shopping"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="merchant" className="text-sm font-medium">
                Merchant
              </label>
              <Input
                id="merchant"
                placeholder="e.g., Whole Foods"
                value={formData.merchant}
                onChange={(e) =>
                  setFormData({ ...formData, merchant: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount ($)
              </label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={formData.category === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setFormData({ ...formData, category })}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
