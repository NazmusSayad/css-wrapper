export function ProblemSolution2() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="lg:order-2">
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
        <h3 className="text-foreground mb-4 text-2xl font-bold">Nested Wrapper Breakage</h3>
        <p className="text-muted-foreground mb-6">
          Fixed padding breaks when used inside other containers. The padding is designed for
          full-screen width, not container-relative width.
        </p>

        <div className="border-destructive/20 bg-destructive/5 mb-6 rounded-lg border p-4">
          <svg viewBox="0 0 400 200" className="h-auto w-full max-w-md">
            <rect
              x="20"
              y="20"
              width="360"
              height="160"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <text x="25" y="15" className="fill-slate-600 text-xs">
              Parent Container (sidebar/grid)
            </text>

            <rect
              x="40"
              y="50"
              width="320"
              height="80"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text x="45" y="45" className="fill-destructive font-mono text-xs">
              .wrapper {`{ padding: 2rem }`}
            </text>

            <rect x="40" y="50" width="32" height="80" fill="#ef4444" fillOpacity="0.3" />
            <rect x="328" y="50" width="32" height="80" fill="#ef4444" fillOpacity="0.3" />
            <text x="56" y="95" className="fill-destructive text-xs">
              2rem
            </text>
            <text x="344" y="95" className="fill-destructive text-xs">
              2rem
            </text>

            <rect
              x="72"
              y="50"
              width="256"
              height="80"
              fill="#fef2f2"
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            <text
              x="200"
              y="90"
              textAnchor="middle"
              className="fill-destructive text-sm font-semibold"
            >
              Broken Layout!
            </text>
            <text x="200" y="105" textAnchor="middle" className="fill-destructive text-xs">
              Fixed padding doesn&apos;t scale
            </text>

            <text x="200" y="170" textAnchor="middle" className="fill-destructive text-xs">
              ⚠ Inconsistent spacing across nesting levels
            </text>
          </svg>
        </div>

        <div className="border-destructive/20 bg-destructive/5 rounded border p-4">
          <p className="text-destructive text-sm">
            <strong>Result:</strong> Inconsistent spacing, broken layouts, and unpredictable
            behavior in complex hierarchies.
          </p>
        </div>
        <div className="from-muted/50 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">Broken Nested Layout</h5>
          <pre className="bg-muted/50 overflow-x-auto rounded p-3 text-xs">
            <code>{`<div class="sidebar"> <!-- 300px width -->
  <div class="wrapper"> <!-- 2rem padding = 64px -->
    <!-- Content only gets 172px! -->
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>

      <div className="lg:order-1">
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
        <h3 className="text-foreground mb-4 text-2xl font-bold">Padding Wrapper</h3>
        <p className="text-muted-foreground mb-6">
          Percentage-based padding that adapts to any container. Works perfectly in nested layouts,
          sidebars, and complex component hierarchies.
        </p>

        <div className="border-success/20 bg-success/5 mb-6 rounded-lg border p-4">
          <svg viewBox="0 0 400 200" className="h-auto w-full max-w-md">
            <rect
              x="20"
              y="20"
              width="360"
              height="160"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="8,4"
            />
            <text x="25" y="15" className="fill-slate-600 text-xs">
              Parent Container (sidebar/grid)
            </text>

            <rect
              x="40"
              y="50"
              width="320"
              height="80"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <text x="45" y="45" className="fill-success font-mono text-xs">
              .wrapper {`{ padding-inline: min(4vw, 2rem) }`}
            </text>

            <rect x="40" y="50" width="16" height="80" fill="#10b981" fillOpacity="0.3" />
            <rect x="344" y="50" width="16" height="80" fill="#10b981" fillOpacity="0.3" />
            <text x="48" y="95" className="fill-success text-xs">
              auto
            </text>
            <text x="352" y="95" className="fill-success text-xs">
              auto
            </text>

            <rect
              x="56"
              y="50"
              width="288"
              height="80"
              fill="#dcfce7"
              stroke="#16a34a"
              strokeWidth="2"
            />
            <text x="200" y="90" textAnchor="middle" className="fill-success text-sm font-bold">
              Perfect Layout! ✓
            </text>
            <text x="200" y="105" textAnchor="middle" className="fill-success text-xs">
              Adaptive padding scales perfectly
            </text>

            <text x="200" y="170" textAnchor="middle" className="fill-success text-xs">
              ✓ Consistent spacing at every nesting level
            </text>
          </svg>
        </div>

        <div className="bg-success/5 text-success rounded p-4">
          <p className="text-sm">
            <strong>Result:</strong> Consistent spacing at every nesting level with automatic
            responsive behavior.
          </p>
        </div>
        <div className="from-success/10 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">Nested-Ready Solution</h5>
          <pre className="bg-success/5 overflow-x-auto rounded p-3 text-xs">
            <code>{`.wrapper {
  padding-inline: min(4vw, 2rem);
}
/* Works anywhere, any nesting level */`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
