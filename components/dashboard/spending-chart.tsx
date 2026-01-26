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

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-cyan-500 to-blue-600",
    "from-blue-600 to-cyan-600",
    "from-cyan-400 to-blue-500",
    "from-blue-500 via-cyan-500 to-blue-600",
  ]

  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
      <Card className="relative h-full border-0 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition-all">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Spending by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {data.map((item, index) => (
              <div key={item.category} className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} shadow-lg`} />
                    <span className="font-medium text-white">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-300/70 font-medium">{item.percentage}%</span>
                    <span className="font-bold text-cyan-400 w-20 text-right">${item.amount.toFixed(0)}</span>
                  </div>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={`h-full bg-gradient-to-r ${gradients[index % gradients.length]} transition-all shadow-lg`}
                    style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
