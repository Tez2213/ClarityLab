export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by ClarityLab. Autonomous Financial Intelligence System.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="/docs"
            className="hover:text-foreground transition-colors"
          >
            Documentation
          </a>
        </div>
      </div>
    </footer>
  )
}
