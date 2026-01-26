"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-blue-500/20 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 shadow-2xl shadow-blue-500/50 transition-all group-hover:shadow-blue-500/80 group-hover:scale-105">
              <span className="text-2xl font-bold text-white">C</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ClarityLab
            </span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                className="border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400 transition-all backdrop-blur-sm"
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 transition-all">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="group inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-300 backdrop-blur-xl hover:bg-blue-500/20 transition-all">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
              </span>
              Powered by Autonomous AI Agents
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center space-y-10">
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-none">
              <span className="block mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Financial Intelligence
              </span>
              <span className="block text-4xl lg:text-6xl text-white/90">
                That Actually <span className="text-cyan-400">Understands You</span>
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-xl lg:text-2xl text-blue-200/80 leading-relaxed">
              Experience the future of personal finance with multi-stage AI agents that analyze your spending,
              detect patterns, and deliver <span className="text-cyan-400 font-semibold">explainable insights</span> you can trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-lg font-semibold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/60 hover:scale-105 transition-all"
                >
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-12 text-lg font-semibold border-2 border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-cyan-400 backdrop-blur-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto">
              {[
                { label: "Pattern Recognition", value: "AI-Powered", icon: "🎯" },
                { label: "Avg. Monthly Savings", value: "$2.4k", icon: "💰" },
                { label: "Transparency", value: "100%", icon: "🔍" },
              ].map((stat) => (
                <div key={stat.label} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-300/70 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-blue-950/50 to-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Beyond Traditional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Finance Tracking</span>
              </h2>
              <p className="text-xl text-blue-200/70 max-w-3xl mx-auto leading-relaxed">
                ClarityLab transforms personal finance from passive tracking into active reasoning with autonomous AI agents.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Autonomous Reasoning",
                  description: "5-stage agent pipeline continuously analyzes transactions, detects patterns, and generates recommendations without manual intervention.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Full Transparency",
                  description: "Every insight includes complete reasoning traces powered by Opik observability. See exactly how decisions are made.",
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                  gradient: "from-cyan-600 to-blue-600"
                },
                {
                  title: "Prioritized Actions",
                  description: "AI ranks recommendations by impact and effort. Focus on what matters most for your financial health.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  gradient: "from-blue-600 via-cyan-600 to-blue-600"
                },
              ].map((feature, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <Card className="relative border-0 bg-slate-900/70 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/20 transition-all overflow-hidden">
                    <CardContent className="p-8 space-y-6">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-all`}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                      <p className="text-blue-200/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Multi-Stage <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Agent Pipeline</span>
              </h2>
              <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
                Powered by Google Gemini LLM with complete Opik tracing
              </p>
            </div>

            {/* Pipeline Stages */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transform -translate-y-1/2 opacity-30"></div>
              
              <div className="grid gap-8 md:grid-cols-5">
                {[
                  { step: "1", title: "Ingestion", desc: "Import & validate transactions", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
                  { step: "2", title: "Categorization", desc: "AI-powered classification", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
                  { step: "3", title: "Pattern Detection", desc: "Find spending anomalies", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                  { step: "4", title: "Reasoning", desc: "Generate deep insights", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                  { step: "5", title: "Planning", desc: "Prioritize actions", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                ].map((stage, idx) => (
                  <div key={stage.step} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                    <Card className="relative text-center border-0 bg-slate-900/70 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-2">
                      <CardContent className="p-8 space-y-4">
                        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-2xl font-bold shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-all">
                          {stage.step}
                        </div>
                        <div className="flex h-12 w-12 mx-auto items-center justify-center">
                          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stage.icon} />
                          </svg>
                        </div>
                        <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">{stage.title}</h3>
                        <p className="text-sm text-blue-200/70">{stage.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Ready to Transform Your
              <span className="block mt-2">Financial Future?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Join thousands who've discovered the power of AI-driven financial intelligence with complete transparency.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all"
                >
                  Start Your Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-12 text-lg font-semibold border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl transition-all"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-500/20 bg-slate-950/80 backdrop-blur-xl py-12">
        <div className="container mx-auto px-6 lg:px-8 text-center text-blue-300/60">
          <p>&copy; 2026 ClarityLab. All rights reserved.</p>
        </div>
      </footer>

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
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
