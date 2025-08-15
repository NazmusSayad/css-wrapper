export function ProblemSolution3() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        <div className="bg-destructive/10 text-destructive mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
          <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          The Problem
        </div>
        <h3 className="text-foreground mb-4 text-2xl font-bold">
          Breakpoint Maintenance Nightmare
        </h3>
        <p className="text-muted-foreground mb-6">
          Managing different padding values across breakpoints is a maintenance nightmare. Hard to
          maintain consistent ratios and easy to break responsive behavior.
        </p>
        <div className="space-y-2">
          <div className="bg-destructive/5 text-destructive rounded p-3 text-sm">
            <strong>Issues:</strong>
          </div>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <svg className="text-destructive size-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              Hard to maintain consistent ratios
            </li>
            <li className="flex items-center gap-2">
              <svg className="text-destructive size-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              Easy to break responsive behavior
            </li>
            <li className="flex items-center gap-2">
              <svg className="text-destructive size-4" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="from-muted/50 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">Multiple Breakpoints</h5>
          <pre className="bg-muted/50 overflow-x-auto rounded p-3 text-xs">
            <code>{`@media (min-width: 768px) {
  .wrapper { padding-inline: 2rem; }
}
@media (min-width: 1024px) {
  .wrapper { padding-inline: 3rem; }
}
@media (min-width: 1440px) {
  .wrapper { padding-inline: 4rem; }
}`}</code>
          </pre>
        </div>
      </div>

      <div>
        <div className="bg-success/10 text-success mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
          <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Our Solution
        </div>
        <h3 className="text-foreground mb-4 text-2xl font-bold">Automatic Responsive Scaling</h3>
        <p className="text-muted-foreground mb-6">
          Single rule that automatically scales across all breakpoints. Uses modern CSS functions to
          maintain perfect proportional relationships without media queries.
        </p>
        <div className="space-y-2 text-sm">
          <div className="bg-success/5 text-success flex items-center justify-between rounded p-3">
            <span>Media queries needed:</span>
            <span className="font-mono">0</span>
          </div>
          <div className="bg-success/5 text-success flex items-center justify-between rounded p-3">
            <span>Breakpoints to maintain:</span>
            <span className="font-mono">0</span>
          </div>
          <div className="border-success bg-success/10 text-success flex items-center justify-between rounded border p-3 font-semibold">
            <span>Responsive behavior:</span>
            <span className="font-mono">Automatic</span>
          </div>
        </div>
        <div className="from-success/10 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">One Rule Does It All</h5>
          <pre className="bg-success/5 overflow-x-auto rounded p-3 text-xs">
            <code>{`.wrapper {
  padding-inline: min(4vw, 2rem);
}
/* Perfect scaling on every device */`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
