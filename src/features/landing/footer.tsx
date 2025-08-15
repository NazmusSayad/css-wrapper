import { Wrapper } from '@/layouts/wrapper'

export function Footer() {
  return (
    <footer className="bg-muted/10 border-t py-12">
      <Wrapper>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary flex size-8 items-center justify-center rounded-lg">
                <svg
                  className="text-primary-foreground size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">CSS Wrapper</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Generate responsive CSS wrappers that give you exactly the content width you want. No
              more math, no more surprises.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Tools</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#playground"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Playground
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Max-Width Wrapper
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Padding Wrapper
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Learn</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problems"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  The Problems
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Our Solutions
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Why CSS Wrapper
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/NazmusSayad/css-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} CSS Wrapper. Built with ❤️ for developers.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">
                Modern CSS • Zero JavaScript • Future-Proof
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
