"use client"

import { GoalCard } from "@/components/goals/goal-card"
import { Button } from "@/components/ui/button"

// Mock data
const mockGoals = [
  {
    id: "1",
    title: "Emergency Fund",
    description: "Build 6 months of living expenses as safety net",
    targetAmount: 19470,
    currentAmount: 7500,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 240), // 240 days
    category: "Savings",
    priority: "high" as const,
  },
  {
    id: "2",
    title: "Vacation to Japan",
    description: "Two-week trip including flights, accommodation, and activities",
    targetAmount: 5000,
    currentAmount: 2300,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 180), // 180 days
    category: "Travel",
    priority: "medium" as const,
  },
  {
    id: "3",
    title: "New Laptop",
    description: "MacBook Pro for work and personal projects",
    targetAmount: 2500,
    currentAmount: 1800,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60), // 60 days
    category: "Technology",
    priority: "medium" as const,
  },
  {
    id: "4",
    title: "Retirement Fund",
    description: "Long-term investment for retirement",
    targetAmount: 50000,
    currentAmount: 8900,
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1095), // ~3 years
    category: "Investment",
    priority: "low" as const,
  },
]

export default function GoalsPage() {
  return (
    <div className="relative flex flex-col gap-8 p-6 lg:p-8 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Financial Goals</h1>
          </div>
          <p className="text-blue-200/70 text-base lg:text-lg ml-4">
            Track and manage your savings goals
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/60 hover:scale-105 transition-all">
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
            <path d="M12 2v20M2 12h20" />
          </svg>
          Create New Goal
        </Button>
      </div>

      <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockGoals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onEdit={(id) => console.log("Edit goal:", id)}
            onDelete={(id) => console.log("Delete goal:", id)}
          />
        ))}
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
      `}</style>
    </div>
  )
}
