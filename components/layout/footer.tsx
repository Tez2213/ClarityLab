"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative border-t border-blue-500/20 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                ClarityLab
              </h3>
              <p className="text-blue-200/80 text-sm leading-relaxed max-w-md">
                Autonomous Financial Intelligence System. Empowering your financial decisions with AI-driven insights, real-time analytics, and personalized guidance.
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-blue-300">Stay Updated</p>
              <div className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900/70 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                />
                <Button className="border border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Dashboard", href: "/dashboard" },
                { name: "Transactions", href: "/transactions" },
                { name: "Goals", href: "/goals" },
                { name: "Insights", href: "/insights" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200/80 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "Documentation", href: "/docs" },
                { name: "API Reference", href: "/api" },
                { name: "Help Center", href: "/help" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200/80 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Security", href: "/security" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200/80 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", label: "Facebook" },
                { icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", label: "Twitter" },
                { icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-900/70 border border-blue-500/30 flex items-center justify-center text-blue-300 hover:bg-blue-500/20 hover:border-cyan-400/50 hover:text-cyan-300 transition-all group"
                  aria-label={social.label}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/80 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ClarityLab. All rights reserved. Built with ❤️ for financial clarity.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-blue-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
