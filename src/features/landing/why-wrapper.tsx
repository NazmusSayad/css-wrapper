import { Wrapper } from '@/layouts/wrapper'

export function WhyWrapper() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why CSS Wrapper is a game-changer
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">
            Stop wasting time with CSS math and focus on building great experiences
          </p>
        </div>

        <div className="space-y-12">
          {/* Benefits in a flowing layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <div className="group text-center transition-transform hover:scale-105">
              <div className="from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br transition-colors">
                <svg
                  className="text-primary size-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">Precise Content Widths</h3>
              <p className="text-muted-foreground">
                Get exactly the content width you specify, not something smaller due to padding
                calculations
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group text-center transition-transform hover:scale-105">
              <div className="from-chart-2/20 to-chart-2/5 group-hover:from-chart-2/30 group-hover:to-chart-2/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br transition-colors">
                <svg
                  className="text-chart-2 size-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">Responsive by Default</h3>
              <p className="text-muted-foreground">
                Automatically adapts to all screen sizes without manual breakpoint management
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group text-center transition-transform hover:scale-105">
              <div className="from-chart-4/20 to-chart-4/5 group-hover:from-chart-4/30 group-hover:to-chart-4/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br transition-colors">
                <svg
                  className="text-chart-4 size-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">Zero Math Required</h3>
              <p className="text-muted-foreground">
                No more calculating container widths, padding relationships, or breakpoint values
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="group text-center transition-transform hover:scale-105">
              <div className="from-success/20 to-success/5 group-hover:from-success/30 group-hover:to-success/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br transition-colors">
                <svg
                  className="text-success size-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">Nested Layout Ready</h3>
              <p className="text-muted-foreground">
                Works perfectly inside any container, no matter how deep the nesting level
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="group text-center transition-transform hover:scale-105">
              <div className="from-warning/20 to-warning/5 group-hover:from-warning/30 group-hover:to-warning/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br transition-colors">
                <svg
                  className="text-warning size-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">Consistent Spacing</h3>
              <p className="text-muted-foreground">
                Maintains proportional relationships across all breakpoints automatically
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="group text-center transition-transform hover:scale-105">
              <div className="from-chart-1/20 to-chart-1/5 group-hover:from-chart-1/30 group-hover:to-chart-1/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br transition-colors">
                <svg
                  className="text-chart-1 size-10 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">Multi-Platform Support</h3>
              <p className="text-muted-foreground">
                Generate code for React, Vue, Angular, or vanilla CSS with consistent results
              </p>
            </div>
          </div>

          {/* Browser support section */}
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-primary/10 text-primary mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                Modern CSS Standards
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-bold">Future-Proof Technology</h3>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Built with modern CSS features like min(), max(), calc(), and CSS custom properties.
                Supported in all modern browsers since 2019-2020.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="from-chart-1/10 flex items-center gap-3 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
                <div className="bg-chart-1 size-3 rounded-full"></div>
                <span className="text-foreground font-medium">Chrome 79+</span>
              </div>
              <div className="from-chart-2/10 flex items-center gap-3 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
                <div className="bg-chart-2 size-3 rounded-full"></div>
                <span className="text-foreground font-medium">Firefox 75+</span>
              </div>
              <div className="from-chart-3/10 flex items-center gap-3 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
                <div className="bg-chart-3 size-3 rounded-full"></div>
                <span className="text-foreground font-medium">Safari 13.1+</span>
              </div>
              <div className="from-chart-4/10 flex items-center gap-3 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
                <div className="bg-chart-4 size-3 rounded-full"></div>
                <span className="text-foreground font-medium">Edge 79+</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
