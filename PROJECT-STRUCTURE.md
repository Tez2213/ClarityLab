# 📁 ClarityLab Project Structure Guide

This document outlines the important file paths and their purposes in the ClarityLab project.

---

## 🏗️ Core Configuration Files

| File Path | Purpose |
|-----------|---------|
| [`package.json`](package.json) | Project dependencies, scripts, and metadata |
| [`next.config.ts`](next.config.ts) | Next.js configuration |
| [`tsconfig.json`](tsconfig.json) | TypeScript compiler configuration |
| [`tailwind.config.js`](tailwind.config.js) | Tailwind CSS styling configuration |
| [`postcss.config.mjs`](postcss.config.mjs) | PostCSS configuration for CSS processing |
| [`eslint.config.mjs`](eslint.config.mjs) | ESLint linting rules |
| [`components.json`](components.json) | shadcn/ui components configuration |

---

## 🎨 Application Layer (`/app`)

### Main Pages

| File Path | Purpose |
|-----------|---------|
| [`app/layout.tsx`](app/layout.tsx) | Root layout with font configuration and metadata |
| [`app/page.tsx`](app/page.tsx) | Landing page with hero section and features |
| [`app/globals.css`](app/globals.css) | Global CSS styles and Tailwind directives |

### Dashboard Module

| File Path | Purpose |
|-----------|---------|
| [`app/dashboard/layout.tsx`](app/dashboard/layout.tsx) | Dashboard layout with sidebar and header |
| [`app/dashboard/page.tsx`](app/dashboard/page.tsx) | Main dashboard view with financial overview |

### Transactions Module

| File Path | Purpose |
|-----------|---------|
| [`app/transactions/layout.tsx`](app/transactions/layout.tsx) | Transactions section layout |
| [`app/transactions/page.tsx`](app/transactions/page.tsx) | Transaction list and management page |

### Goals Module

| File Path | Purpose |
|-----------|---------|
| [`app/goals/layout.tsx`](app/goals/layout.tsx) | Goals section layout |
| [`app/goals/page.tsx`](app/goals/page.tsx) | Financial goals tracking page |

### Insights Module

| File Path | Purpose |
|-----------|---------|
| [`app/insights/layout.tsx`](app/insights/layout.tsx) | Insights section layout |
| [`app/insights/page.tsx`](app/insights/page.tsx) | AI-generated insights and recommendations page |

---

## 🧩 Components (`/components`)

### Dashboard Components

| File Path | Purpose |
|-----------|---------|
| [`components/dashboard/financial-health-score.tsx`](components/dashboard/financial-health-score.tsx) | Displays overall financial health score |
| [`components/dashboard/quick-stats.tsx`](components/dashboard/quick-stats.tsx) | Shows key financial metrics at a glance |
| [`components/dashboard/recent-transactions.tsx`](components/dashboard/recent-transactions.tsx) | Lists recent transaction activity |
| [`components/dashboard/budget-tracker.tsx`](components/dashboard/budget-tracker.tsx) | Budget tracking and visualization |
| [`components/dashboard/spending-chart.tsx`](components/dashboard/spending-chart.tsx) | Visual spending analytics chart |

### Transaction Components

| File Path | Purpose |
|-----------|---------|
| [`components/transactions/transaction-list.tsx`](components/transactions/transaction-list.tsx) | Displays and filters transaction list |
| [`components/transactions/transaction-form.tsx`](components/transactions/transaction-form.tsx) | Form to add/edit transactions |
| [`components/transactions/upload-csv.tsx`](components/transactions/upload-csv.tsx) | CSV import functionality for bulk transactions |

### Goals Components

| File Path | Purpose |
|-----------|---------|
| [`components/goals/goal-card.tsx`](components/goals/goal-card.tsx) | Individual goal display card with progress |

### Insights Components

| File Path | Purpose |
|-----------|---------|
| [`components/insights/insight-card.tsx`](components/insights/insight-card.tsx) | Displays AI-generated financial insights |
| [`components/insights/action-plan-card.tsx`](components/insights/action-plan-card.tsx) | Shows actionable financial recommendations |
| [`components/insights/explanation-view.tsx`](components/insights/explanation-view.tsx) | Detailed explanation of AI reasoning |
| [`components/insights/feedback-form.tsx`](components/insights/feedback-form.tsx) | User feedback on insights for model improvement |

### Layout Components

| File Path | Purpose |
|-----------|---------|
| [`components/layout/header.tsx`](components/layout/header.tsx) | Application header with navigation |
| [`components/layout/sidebar.tsx`](components/layout/sidebar.tsx) | Side navigation menu |
| [`components/layout/footer.tsx`](components/layout/footer.tsx) | Application footer |

### UI Components (shadcn/ui)

| File Path | Purpose |
|-----------|---------|
| [`components/ui/button.tsx`](components/ui/button.tsx) | Reusable button component |
| [`components/ui/card.tsx`](components/ui/card.tsx) | Card container component |
| [`components/ui/input.tsx`](components/ui/input.tsx) | Form input component |
| [`components/ui/badge.tsx`](components/ui/badge.tsx) | Badge/label component |
| [`components/ui/progress.tsx`](components/ui/progress.tsx) | Progress bar component |
| [`components/ui/separator.tsx`](components/ui/separator.tsx) | Visual separator component |

---

## 🔧 Utilities & Libraries (`/lib`)

| File Path | Purpose |
|-----------|---------|
| [`lib/utils.ts`](lib/utils.ts) | Utility functions (cn for className merging) |
| [`lib/constants.ts`](lib/constants.ts) | Application constants (categories, goal types, routes) |

---

## 📦 Type Definitions (`/types`)

| File Path | Purpose |
|-----------|---------|
| [`types/index.ts`](types/index.ts) | **CRITICAL** - All TypeScript interfaces and types:<br>- User & UserProfile<br>- Transaction & TransactionCategory<br>- Pattern, Insight, Recommendation<br>- Goal, Budget, ActionPlan |

---

## 📚 Documentation

| File Path | Purpose |
|-----------|---------|
| [`README.md`](README.md) | **ESSENTIAL** - Project overview, architecture, features, and roadmap |
| `PROJECT-STRUCTURE.md` | This file - Project structure guide |

---

## 🎯 Key File Priorities

### Must Read First (Critical Path)
1. **[README.md](README.md)** - Understand the project vision and architecture
2. **[types/index.ts](types/index.ts)** - Core data models used throughout
3. **[lib/constants.ts](lib/constants.ts)** - Application constants and enums
4. **[app/layout.tsx](app/layout.tsx)** - Root app structure
5. **[app/dashboard/page.tsx](app/dashboard/page.tsx)** - Main application page

### Feature Development Entry Points

#### Working on Transactions?
- Start: [`app/transactions/page.tsx`](app/transactions/page.tsx)
- Components: [`components/transactions/`](components/transactions/)
- Types: [`types/index.ts`](types/index.ts) (Transaction interface)

#### Working on Dashboard?
- Start: [`app/dashboard/page.tsx`](app/dashboard/page.tsx)
- Components: [`components/dashboard/`](components/dashboard/)

#### Working on AI Insights?
- Start: [`app/insights/page.tsx`](app/insights/page.tsx)
- Components: [`components/insights/`](components/insights/)
- Types: [`types/index.ts`](types/index.ts) (Insight, Recommendation interfaces)

#### Working on Goals?
- Start: [`app/goals/page.tsx`](app/goals/page.tsx)
- Components: [`components/goals/`](components/goals/)
- Types: [`types/index.ts`](types/index.ts) (Goal interface)

---

## 🗂️ Directory Structure Summary

```
claritylab/
├── 📋 Configuration Files (root level)
├── 📱 app/                      # Next.js App Router pages
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── dashboard/               # Dashboard module
│   ├── transactions/            # Transactions module
│   ├── goals/                   # Goals module
│   └── insights/                # AI Insights module
├── 🧩 components/               # React components
│   ├── dashboard/               # Dashboard-specific components
│   ├── transactions/            # Transaction-specific components
│   ├── goals/                   # Goals-specific components
│   ├── insights/                # Insights-specific components
│   ├── layout/                  # Layout components (header, sidebar, footer)
│   └── ui/                      # Reusable UI components (shadcn/ui)
├── 🔧 lib/                      # Utility functions and constants
├── 📦 types/                    # TypeScript type definitions
└── 🌐 public/                   # Static assets
```

---

## 🚀 Quick Navigation Tips

1. **New to the project?** Start with [README.md](README.md)
2. **Adding a new feature?** Check [types/index.ts](types/index.ts) for data models
3. **Styling changes?** Look at [app/globals.css](app/globals.css) and [components/ui/](components/ui/)
4. **Need constants?** Check [lib/constants.ts](lib/constants.ts)
5. **Building a new page?** Follow the pattern in [`app/dashboard/`](app/dashboard/)

---

**Last Updated:** January 26, 2026
