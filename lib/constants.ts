export const TRANSACTION_CATEGORIES = [
  'Groceries',
  'Dining Out',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Utilities',
  'Healthcare',
  'Insurance',
  'Rent',
  'Education',
  'Investments',
  'Other',
] as const

export const GOAL_TYPES = [
  'Emergency Fund',
  'Savings',
  'Debt Payoff',
  'Investment',
  'Major Purchase',
  'Other',
] as const

export const BUDGET_PERIODS = [
  'Weekly',
  'Monthly',
  'Quarterly',
  'Yearly',
] as const

export const RECOMMENDATION_PRIORITIES = [
  'Critical',
  'High',
  'Medium',
  'Low',
] as const

export const CHART_COLORS = {
  primary: 'hsl(207 100% 40%)',
  secondary: 'hsl(195 100% 43%)',
  tertiary: 'hsl(207 72% 59%)',
  quaternary: 'hsl(210 49% 35%)',
  muted: 'hsl(215 16% 47%)',
} as const

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  TRANSACTIONS: '/transactions',
  INSIGHTS: '/insights',
  GOALS: '/goals',
  SETTINGS: '/settings',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
} as const
