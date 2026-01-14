"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SpendingChartProps {
  data: {
    category: string
    amount: number
    percentage: number
  }[]
}

export function SpendingChart({ data }: SpendingChartProps) {
  const maxAmount = Math.max(...data.map((d) => d.amount))

  const colors = [
    "bg-[hsl(var(--chart-1))]",
    "bg-[hsl(var(--chart-2))]",
    "bg-[hsl(var(--chart-3))]",
    "bg-[hsl(var(--chart-4))]",
    "bg-[hsl(var(--chart-5))]",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.category} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${colors[index % colors.length]}`} />
                  <span className="font-medium">{item.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{item.percentage}%</span>
                  <span className="font-semibold w-20 text-right">${item.amount.toFixed(0)}</span>
                </div>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full ${colors[index % colors.length]} transition-all`}
                  style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
