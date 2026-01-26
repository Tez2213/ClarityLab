"use client"

import { TransactionList } from "@/components/transactions/transaction-list"
import { TransactionForm } from "@/components/transactions/transaction-form"
import { UploadCSV } from "@/components/transactions/upload-csv"
import { Button } from "@/components/ui/button"

// Mock data
const mockTransactions = [
  {
    id: "1",
    description: "Whole Foods Market",
    amount: -125.50,
    category: "Food",
    date: new Date(Date.now() - 1000 * 60 * 60 * 2),
    merchant: "Whole Foods",
  },
  {
    id: "2",
    description: "Monthly Salary",
    amount: 2800,
    category: "Income",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24),
    merchant: "Tech Corp Inc",
  },
  {
    id: "3",
    description: "Shell Gas Station",
    amount: -45.00,
    category: "Transport",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    merchant: "Shell",
  },
  {
    id: "4",
    description: "Movie Tickets",
    amount: -32.00,
    category: "Entertainment",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    merchant: "AMC Theaters",
  },
  {
    id: "5",
    description: "Electric Bill",
    amount: -89.50,
    category: "Utilities",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    merchant: "City Power",
  },
  {
    id: "6",
    description: "Amazon Order",
    amount: -67.89,
    category: "Shopping",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    merchant: "Amazon",
  },
  {
    id: "7",
    description: "Dentist Appointment",
    amount: -150.00,
    category: "Healthcare",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    merchant: "City Dental",
  },
  {
    id: "8",
    description: "Uber Ride",
    amount: -18.50,
    category: "Transport",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12),
    merchant: "Uber",
  },
]

export default function TransactionsPage() {
  return (
    <div className="relative flex flex-col gap-8 p-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 min-h-screen overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-3">
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Transactions
          </h1>
          <p className="text-blue-200/80 text-lg">
            Manage your transactions and upload bank statements
          </p>
        </div>
        <Button className="border border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
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
          Export CSV
        </Button>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TransactionList
            transactions={mockTransactions}
            onFilter={(filters) => console.log("Filter:", filters)}
          />
        </div>

        <div className="space-y-8">
          <TransactionForm
            onSubmit={(transaction) => console.log("New transaction:", transaction)}
          />
          <UploadCSV onUpload={(file) => console.log("Upload file:", file)} />
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
