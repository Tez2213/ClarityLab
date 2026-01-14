export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile {
  id: string
  userId: string
  monthlyIncome: number
  savingsGoal: number
  financialGoals: Record<string, any>
  createdAt: Date
}

export interface Transaction {
  id: string
  userId: string
  amount: number
  description: string
  transactionDate: Date
  merchant: string
  category?: string
  subCategory?: string
  createdAt: Date
}

export interface TransactionCategory {
  id: string
  transactionId: string
  category: string
  subCategory: string
  confidenceScore: number
  llmReasoning: Record<string, any>
  categorizedAt: Date
}

export interface Pattern {
  id: string
  userId: string
  patternType: string
  patternData: Record<string, any>
  frequency: string
  significanceScore: number
  detectedAt: Date
}

export interface Insight {
  id: string
  userId: string
  patternId?: string
  insightType: string
  title: string
  description: string
  supportingData: Record<string, any>
  createdAt: Date
}

export interface Recommendation {
  id: string
  userId: string
  priority: 'Critical' | 'High' | 'Medium' | 'Low'
  title: string
  reasoning: string
  actionItems: Array<{
    title: string
    description: string
    completed: boolean
  }>
  status: 'Active' | 'Completed' | 'Dismissed'
  createdAt: Date
}

export interface Budget {
  id: string
  userId: string
  period: 'Weekly' | 'Monthly' | 'Quarterly' | 'Yearly'
  totalAmount: number
  startDate: Date
  endDate: Date
  categories: BudgetCategory[]
  createdAt: Date
}

export interface BudgetCategory {
  id: string
  budgetId: string
  category: string
  allocatedAmount: number
  spentAmount: number
}

export interface Goal {
  id: string
  userId: string
  goalType: string
  title: string
  targetAmount: number
  currentAmount: number
  targetDate: Date
  status: 'Active' | 'Completed' | 'Paused'
  createdAt: Date
}

export interface Feedback {
  id: string
  userId: string
  recommendationId: string
  feedbackType: 'Helpful' | 'Not Helpful'
  rating: number
  comment?: string
  createdAt: Date
}

export interface FinancialHealthScore {
  score: number
  budgetAdherence: number
  savingsRate: number
  emergencyFundStatus: number
  debtLevel: number
  lastUpdated: Date
}
