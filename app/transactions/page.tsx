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
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-background via-secondary/20 to-background min-h-screen">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground text-lg">
            Manage your transactions and upload bank statements
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all">
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

      <div className="grid gap-8 lg:grid-cols-3">
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
    </div>
  )
}
