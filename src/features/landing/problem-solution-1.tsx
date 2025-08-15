export function ProblemSolution1() {
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
        <h3 className="text-foreground mb-4 text-2xl font-bold">The Math Problem</h3>
        <p className="text-muted-foreground mb-6">
          When you write{' '}
          <code className="bg-muted rounded px-2 py-1 text-sm">max-width: 1440px</code> with{' '}
          <code className="bg-muted rounded px-2 py-1 text-sm">padding: 2rem</code>, you&apos;re
          dependent on two different things and the padding eats into your content width.
        </p>

        {/* SVG Visualization - Problem */}
        <div className="border-destructive/20 bg-destructive/5 mb-6 rounded-lg border p-4">
          <svg viewBox="0 0 400 160" className="h-auto w-full max-w-md">
            {/* Container */}
            <rect
              x="20"
              y="20"
              width="360"
              height="80"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            <text x="200" y="15" textAnchor="middle" className="fill-destructive font-mono text-xs">
              max-width: 1440px
            </text>

            {/* Left Padding */}
            <rect x="20" y="20" width="32" height="80" fill="#ef4444" fillOpacity="0.2" />
            <text x="36" y="65" textAnchor="middle" className="fill-destructive font-mono text-xs">
              2rem
            </text>

            {/* Right Padding */}
            <rect x="348" y="20" width="32" height="80" fill="#ef4444" fillOpacity="0.2" />
            <text x="364" y="65" textAnchor="middle" className="fill-destructive font-mono text-xs">
              2rem
            </text>

            {/* Content Area */}
            <rect
              x="52"
              y="20"
              width="296"
              height="80"
              fill="#f1f5f9"
              stroke="#64748b"
              strokeWidth="1"
            />
            <text
              x="200"
              y="65"
              textAnchor="middle"
              className="fill-slate-600 text-sm font-semibold"
            >
              Content: Only 1376px!
            </text>

            {/* Math visualization */}
            <text x="200" y="130" textAnchor="middle" className="fill-destructive text-xs">
              1440px - 64px (padding) = 1376px content
            </text>
          </svg>
        </div>

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
        <div className="from-muted/50 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">Traditional CSS</h5>
          <pre className="bg-muted/50 overflow-x-auto rounded p-3 text-xs">
            <code>{`.wrapper {
  max-width: 1440px;
  padding-inline: 2rem;
  margin-inline: auto;
}
/* Result: Only 1376px content! */`}</code>
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
        <h3 className="text-foreground mb-4 text-2xl font-bold">Max-Width Wrapper</h3>
        <p className="text-muted-foreground mb-6">
          Intelligent width calculation that gives you exactly the content width you specify. The
          padding is calculated automatically using percentage-based responsive values.
        </p>

        {/* SVG Visualization - Solution */}
        <div className="border-success/20 bg-success/5 mb-6 rounded-lg border p-4">
          <svg viewBox="0 0 400 160" className="h-auto w-full max-w-md">
            {/* Smart Container */}
            <rect
              x="20"
              y="20"
              width="360"
              height="80"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <text x="200" y="15" textAnchor="middle" className="fill-success font-mono text-xs">
              min(100% - 4vw, 1440px)
            </text>

            {/* Auto Padding (visual representation) */}
            <rect x="20" y="20" width="24" height="80" fill="#10b981" fillOpacity="0.3" />
            <text x="32" y="65" textAnchor="middle" className="fill-success text-xs">
              auto
            </text>

            <rect x="356" y="20" width="24" height="80" fill="#10b981" fillOpacity="0.3" />
            <text x="368" y="65" textAnchor="middle" className="fill-success text-xs">
              auto
            </text>

            {/* Perfect Content Area */}
            <rect
              x="44"
              y="20"
              width="312"
              height="80"
              fill="#dcfce7"
              stroke="#16a34a"
              strokeWidth="2"
            />
            <text x="200" y="65" textAnchor="middle" className="fill-success text-sm font-bold">
              Content: Exactly 1440px! ✓
            </text>

            {/* Smart calculation */}
            <text x="200" y="130" textAnchor="middle" className="fill-success text-xs">
              Smart calculation: padding adjusts automatically
            </text>
          </svg>
        </div>

        <div className="space-y-2 text-sm">
          <div className="bg-success/5 text-success flex items-center justify-between rounded p-3">
            <span>Content width:</span>
            <span className="font-mono">1440px ✓</span>
          </div>
          <div className="bg-success/5 text-success flex items-center justify-between rounded p-3">
            <span>Padding:</span>
            <span className="font-mono">Auto-calculated</span>
          </div>
          <div className="border-success bg-success/10 text-success flex items-center justify-between rounded border p-3 font-semibold">
            <span>Actual content width:</span>
            <span className="font-mono">1440px ✓</span>
          </div>
        </div>
        <div className="from-success/10 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">CSS Wrapper Solution</h5>
          <pre className="bg-success/5 overflow-x-auto rounded p-3 text-xs">
            <code>{`.wrapper {
  --max-width: 1440px;
  width: min(100% - 4vw, var(--max-width));
  margin-inline: auto;
}
/* Result: Exactly 1440px content! */`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
