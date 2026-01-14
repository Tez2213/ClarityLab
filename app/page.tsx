import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-secondary/30 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container flex h-20 items-center justify-between px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ClarityLab
            </span>
          </Link>
          <nav className="flex gap-3">
            <Link href="/dashboard">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-8 py-24">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Powered by Autonomous AI Agents
          </div>
          
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Financial Intelligence
            </span>
            <br />
            <span className="text-foreground">That Actually Understands You</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            ClarityLab uses multi-stage AI agents to analyze your spending patterns,
            detect financial opportunities, and provide personalized recommendations—all with complete transparency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-10 text-base bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base border-primary/30 hover:border-primary hover:bg-primary/5 transition-all">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-12 pt-12">
            {[
              { label: "Accuracy", value: "92%" },
              { label: "Avg. Monthly Savings", value: "$2.4k" },
              { label: "AI Transparency", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Reframing Personal Finance as a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Reasoning Problem</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Not just another expense tracker. ClarityLab uses multi-stage AI agents to understand
                your financial behavior and provide actionable intelligence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Autonomous Reasoning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    5-stage agent pipeline continuously analyzes transactions, detects patterns,
                    and generates recommendations without manual intervention.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Full Transparency</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every insight includes complete reasoning traces powered by Opik observability.
                    See exactly how decisions are made.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/80 to-accent/80 text-white shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Prioritized Actions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI ranks recommendations by impact and effort. Focus on what matters most
                    for your financial health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="container px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Multi-Stage Agent Pipeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powered by Google Gemini LLM with complete Opik tracing
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {[
                { step: "1", title: "Ingestion", desc: "Import transactions" },
                { step: "2", title: "Categorization", desc: "Auto-classify spending" },
                { step: "3", title: "Pattern Detection", desc: "Find anomalies" },
                { step: "4", title: "Reasoning", desc: "Generate insights" },
                { step: "5", title: "Planning", desc: "Prioritize actions" },
              ].map((stage) => (
                <div key={stage.step} className="relative">
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xl font-bold shadow-md">
                        {stage.step}
                      </div>
                      <h3 className="font-bold">{stage.title}</h3>
                      <p className="text-sm text-muted-foreground">{stage.desc}</p>
                    </CardContent>
                  </Card>
                  {stage.step !== "5" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  )}
                </div>
              ))}

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Explainable Insights</h3>
                <p className="text-muted-foreground">
                  Every recommendation includes full reasoning traces, showing exactly
                  why each suggestion is made.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Full Observability</h3>
                <p className="text-muted-foreground">
                  Complete transparency with Opik tracing for every agent decision and
                  recommendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent to-primary">
        <div className="container px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8 text-white">
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands who've already discovered the power of AI-driven financial intelligence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-10 text-base bg-white text-primary hover:bg-white/90 shadow-xl">
                  Start Your Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-10 text-base border-white/30 text-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
