import { Wrapper } from '@/layouts/wrapper'

export function TheProblems() {
  return (
    <section id="problems" className="py-24 sm:py-32">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why traditional wrappers fail
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">
            Even though you specify a max-width, you&apos;re not getting what you asked for
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {/* Problem 1: The Math Problem */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="bg-destructive/10 text-destructive mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Problem #1
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">The Math Problem</h3>
              <p className="text-muted-foreground mb-6">
                When you write{' '}
                <code className="bg-muted rounded px-2 py-1 text-sm">max-width: 1440px</code> with{' '}
                <code className="bg-muted rounded px-2 py-1 text-sm">padding: 2rem</code>,
                you&apos;re dependent on <strong>two different things</strong> and the padding eats
                into your content width.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-destructive/5 text-destructive flex items-center justify-between rounded p-3">
                  <span>Container width:</span>
                  <span className="font-mono">1440px</span>
                </div>
                <div className="bg-destructive/5 text-destructive flex items-center justify-between rounded p-3">
                  <span>Padding (both sides):</span>
                  <span className="font-mono">- 64px</span>
                </div>
                <div className="border-destructive bg-destructive/10 text-destructive flex items-center justify-between rounded border p-3 font-semibold">
                  <span>Actual content width:</span>
                  <span className="font-mono">1376px</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <h4 className="text-foreground mb-4 font-semibold">Traditional CSS</h4>
              <div className="from-muted/50 relative rounded-lg bg-gradient-to-r to-transparent p-6">
                <pre className="bg-muted/50 overflow-x-auto rounded p-4 text-sm">
                  <code>{`.wrapper {
  max-width: 1440px;
  padding-inline: 2rem; /* 32px each side */
  margin-inline: auto;
}

/* Result: Only 1376px content width! */`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Problem 2: Nested Wrapper Breakage */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:order-2">
              <div className="bg-destructive/10 text-destructive mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Problem #2
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">Nested Wrapper Breakage</h3>
              <p className="text-muted-foreground mb-6">
                Fixed padding breaks when used inside other containers like two-column layouts. The
                padding is designed for full-screen width, not container-relative width.
              </p>
              <div className="border-destructive/20 bg-destructive/5 rounded border p-4">
                <p className="text-destructive text-sm">
                  <strong>Result:</strong> Inconsistent spacing, broken layouts, and unpredictable
                  behavior in complex component hierarchies.
                </p>
              </div>
            </div>
            <div className="lg:order-1">
              <h4 className="text-foreground mb-4 font-semibold">Broken Nested Layout</h4>
              <div className="from-muted/50 relative rounded-lg bg-gradient-to-r to-transparent p-6">
                <pre className="bg-muted/50 overflow-x-auto rounded p-4 text-sm">
                  <code>{`<div class="two-column-layout">
  <div class="wrapper">
    <!-- Fixed padding breaks here -->
    <!-- Designed for viewport, not container -->
  </div>
</div>

/* This padding is wrong for nested use */
.wrapper {
  padding-inline: 2rem;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Problem 3: Breakpoint Inconsistency */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="bg-destructive/10 text-destructive mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Problem #3
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">
                Breakpoint Maintenance Nightmare
              </h3>
              <p className="text-muted-foreground mb-6">
                Managing different padding values across breakpoints is a maintenance nightmare.
                Hard to maintain consistent ratios and easy to break responsive behavior.
              </p>
              <div className="space-y-2">
                <div className="bg-destructive/5 text-destructive rounded p-3 text-sm">
                  <strong>Issues:</strong>
                </div>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg
                      className="text-destructive size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hard to maintain consistent ratios
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="text-destructive size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Easy to break responsive behavior
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="text-destructive size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No relationship between padding and container width
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Multiple Breakpoints</h4>
              <div className="from-muted/50 relative rounded-lg bg-gradient-to-r to-transparent p-6">
                <pre className="bg-muted/50 overflow-x-auto rounded p-4 text-sm">
                  <code>{`/* Maintenance nightmare */
@media (min-width: 768px) {
  .wrapper { padding-inline: 2rem; }
}
@media (min-width: 1024px) {
  .wrapper { padding-inline: 3rem; }
}
@media (min-width: 1440px) {
  .wrapper { padding-inline: 4rem; }
}

/* Hard to maintain, easy to break */`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            Our solution fixes all of these problems automatically
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
