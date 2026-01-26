"use client"

import { InsightCard } from "@/components/insights/insight-card"
import { ActionPlanCard } from "@/components/insights/action-plan-card"
import { FeedbackForm } from "@/components/insights/feedback-form"
import { Button } from "@/components/ui/button"

// Mock data
const mockInsights = [
  {
    id: "1",
    title: "Unusual Spending Pattern Detected",
    description:
      "Your dining expenses have increased by 45% over the past 3 weeks compared to your 6-month average. This trend suggests a shift in eating habits.",
    category: "Spending Pattern",
    confidence: 92,
    detectedAt: new Date(),
    impact: "high" as const,
    supportingData: [
      { label: "Average Monthly Dining", value: "$420" },
      { label: "Current Month (projected)", value: "$609" },
      { label: "Increase", value: "+45%" },
      { label: "Transactions Analyzed", value: "127" },
    ],
  },
  {
    id: "2",
    title: "Emergency Fund Below Recommended Level",
    description:
      "Your current emergency fund covers only 2.3 months of expenses. Financial experts recommend 3-6 months of coverage for optimal security.",
    category: "Financial Health",
    confidence: 88,
    detectedAt: new Date(),
    impact: "medium" as const,
    supportingData: [
      { label: "Current Emergency Fund", value: "$7,500" },
      { label: "Monthly Expenses", value: "$3,245" },
      { label: "Current Coverage", value: "2.3 months" },
      { label: "Recommended", value: "3-6 months" },
    ],
  },
]

const mockRecommendations = [
  {
    id: "1",
    title: "Optimize Dining Budget with Meal Planning",
    description:
      "Implement a structured meal planning approach to reduce dining expenses by an estimated $180-220 per month while maintaining nutritional quality.",
    priority: "high" as const,
    category: "Cost Optimization",
    estimatedImpact: "$2,400/year",
    effort: "Medium",
    confidence: 89,
    reasoning:
      "Analysis of your transaction history shows that 62% of dining expenses occur on weekdays, suggesting work-related convenience eating. Your shopping patterns indicate consistent grocery purchases, meaning cooking infrastructure is available. Implementing meal prep on weekends could significantly reduce weekday dining costs.",
    steps: [
      "Dedicate 2 hours on Sunday for weekly meal preparation",
      "Create a grocery list based on planned meals to avoid impulse purchases",
      "Prepare 5 lunch portions and 3 dinner portions in advance",
      "Reserve dining out for social occasions (weekends) rather than convenience",
      "Track savings weekly to maintain motivation",
    ],
  },
  {
    id: "2",
    title: "Automate Emergency Fund Building",
    description:
      "Set up automatic transfers to reach recommended emergency fund levels within 8 months without compromising current lifestyle.",
    priority: "critical" as const,
    category: "Financial Security",
    estimatedImpact: "4 months coverage",
    effort: "Low",
    confidence: 94,
    reasoning:
      "Current cash flow analysis shows consistent monthly surplus of $450-550 after expenses. By automating a $300 monthly transfer to a high-yield savings account (current rates: 4.5% APY), you can reach 4-month coverage in 8 months. The remaining surplus maintains lifestyle flexibility.",
    steps: [
      "Open a high-yield savings account (recommended: Marcus, Ally, or similar)",
      "Set up automatic transfer of $300 on the 5th of each month (2 days after typical salary deposit)",
      "Enable account alerts for transfer confirmations",
      "Review progress monthly but avoid withdrawals except for genuine emergencies",
      "Once target is reached, redirect automation to investment accounts",
    ],
  },
]

export default function InsightsPage() {
  return (
    <div className="relative flex flex-col gap-8 p-6 lg:p-8 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Insights & Recommendations</h1>
        </div>
        <p className="text-blue-200/70 text-base lg:text-lg ml-4">
          AI-powered analysis with actionable recommendations
        </p>
      </div>

      {/* Action Plans Section */}
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-white">Prioritized Action Plans</h2>
          <Button className="border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400 transition-all backdrop-blur-sm">
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
            Filter by Priority
          </Button>
        </div>

        <div className="grid gap-8">
          {mockRecommendations.map((recommendation) => (
            <div key={recommendation.id} className="space-y-4">
              <ActionPlanCard
                recommendation={recommendation}
                onMarkComplete={(id) => console.log("Complete:", id)}
                onViewTrace={(id) => console.log("View trace:", id)}
              />
              <FeedbackForm
                itemId={recommendation.id}
                itemType="recommendation"
                onSubmit={(feedback) => console.log("Feedback:", feedback)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Insights Section */}
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-white">Pattern Detection</h2>
          <Button className="border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all backdrop-blur-sm">
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
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            View All Insights
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mockInsights.map((insight) => (
            <div key={insight.id} className="space-y-4">
              <InsightCard
                insight={insight}
                onViewDetails={(id) => console.log("View details:", id)}
              />
              <FeedbackForm
                itemId={insight.id}
                itemType="insight"
                onSubmit={(feedback) => console.log("Feedback:", feedback)}
              />
            </div>
          ))}
        </div>
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
