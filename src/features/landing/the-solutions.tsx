import { Button } from '@/components/ui/button'
import { Wrapper } from '@/layouts/wrapper'

export function TheSolutions() {
  return (
    <section id="solutions" className="bg-muted/20 py-24 sm:py-32">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our solutions
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">
            Two approaches that automatically handle the math and give you exact content widths
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="bg-success/10 text-success mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Solution #1
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">Max-Width Wrapper</h3>
              <p className="text-muted-foreground mb-6">
                Traditional centered container with intelligent width calculation. Perfect for main
                content areas, articles, and page sections that need consistent maximum widths.
              </p>

              <div className="space-y-4">
                <h4 className="text-foreground font-semibold">How it works:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Uses min() function to choose the smaller value automatically
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Calculates correct container width to give exact content width
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Responsive padding that scales with viewport
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Always centers content horizontally
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-success bg-success/5 rounded p-3 text-sm">
                  <strong>Best for:</strong> Main content areas, articles, hero sections, and page
                  layouts
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h4 className="text-card-foreground mb-4 font-semibold">Max-Width Wrapper CSS</h4>
              <pre className="bg-muted overflow-x-auto rounded p-4 text-sm">
                <code>{`.wrapper {
  max-width: min(
    var(--max-width, 82.5rem),
    (100% - var(--padding, 4%) * 2)
  );
  margin-inline: auto;
  width: 100%;
}

/* CSS Variables */
--max-width: 82.5rem; /* 1320px */
--padding: 4%; /* Minimum padding */`}</code>
              </pre>
              <div className="text-muted-foreground mt-4 text-xs">
                ✅ Exact content width • ✅ Responsive • ✅ Auto-centering
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="lg:order-2">
              <div className="bg-success/10 text-success mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Solution #2
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">Padding Wrapper</h3>
              <p className="text-muted-foreground mb-6">
                Direct padding solution that works on any element without extra markup. Perfect for
                adding responsive padding to existing containers, sections, or components.
              </p>

              <div className="space-y-4">
                <h4 className="text-foreground font-semibold">How it works:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Calculates padding to center content automatically
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Uses max() function to ensure minimum padding fallback
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No extra wrapper divs needed
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="text-success mt-0.5 size-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Works perfectly in nested layouts
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-success bg-success/5 rounded p-3 text-sm">
                  <strong>Best for:</strong> Sections, cards, existing components that need
                  responsive padding
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6 lg:order-1">
              <h4 className="text-card-foreground mb-4 font-semibold">Padding Wrapper CSS</h4>
              <pre className="bg-muted overflow-x-auto rounded p-4 text-sm">
                <code>{`.wrapper {
  padding-inline: max(
    calc((100% - var(--max-width, 82.5rem)) / 2),
    var(--padding, 4%)
  );
  margin-inline: auto;
  width: 100%;
}

/* CSS Variables */
--max-width: 82.5rem; /* 1320px */
--padding: 4%; /* Minimum padding */`}</code>
              </pre>
              <div className="text-muted-foreground mt-4 text-xs">
                ✅ No extra markup • ✅ Nested layout ready • ✅ Component-friendly
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            Both solutions use modern CSS that works in all browsers
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <a href="#playground">Try the generator</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#why">Learn more benefits</a>
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
