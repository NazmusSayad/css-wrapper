import { ProblemSolveCodeBlock } from './problem-solve-code-block'

export function ProblemSolution2() {
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
        <h3 className="text-foreground mb-4 text-2xl font-bold">No Extra Wrapper Divs</h3>
        <p className="text-muted-foreground mb-6">
          Traditional solutions require extra wrapper divs for every section. This clutters your
          HTML and makes styling more complex with nested containers everywhere.
        </p>

        <div className="from-muted/50 mb-4 rounded-md bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">Traditional CSS</h5>

          <ProblemSolveCodeBlock
            className="bg-muted/30"
            code={`<div class="wrapper">
  <section>Content</section>
</div>
<div class="wrapper">
  <footer>More content</footer>
</div>`}
          />
        </div>

        <svg
          viewBox="0 0 380 80"
          className="border-destructive/20 bg-destructive/5 mb-4 h-auto w-full rounded-md border p-3"
        >
          <rect x="50" y="10" width="280" height="50" fill="#f1f5f9" />
          <text x="190" y="40" textAnchor="middle" className="fill-slate-600 text-sm font-semibold">
            Extra Div Required!
          </text>

          <rect x="50" y="10" width="30" height="50" fill="#ef4444" fillOpacity="0.2" />
          <text x="65" y="40" textAnchor="middle" className="fill-destructive text-xs">
            div
          </text>

          <rect x="300" y="10" width="30" height="50" fill="#ef4444" fillOpacity="0.2" />
          <text x="315" y="40" textAnchor="middle" className="fill-destructive text-xs">
            div
          </text>

          <rect x="10" y="10" width="40" height="50" fill="#ef4444" fillOpacity="0.3" />
          <text x="30" y="40" textAnchor="middle" className="fill-destructive text-[0.625rem]">
            wrapper
          </text>

          <rect x="330" y="10" width="40" height="50" fill="#ef4444" fillOpacity="0.3" />
          <text x="350" y="40" textAnchor="middle" className="fill-destructive text-[0.625rem]">
            wrapper
          </text>

          <text x="190" y="75" textAnchor="middle" className="fill-destructive font-mono text-xs">
            Cluttered HTML
          </text>
        </svg>

        <div className="space-y-2 text-sm">
          <div className="bg-destructive/5 text-destructive flex items-center justify-between rounded p-3">
            <span>Extra markup:</span>
            <span className="font-mono">Always needed</span>
          </div>
          <div className="bg-destructive/5 text-destructive flex items-center justify-between rounded p-3">
            <span>HTML complexity:</span>
            <span className="font-mono">High</span>
          </div>
          <div className="border-destructive/40 bg-destructive/10 text-destructive flex items-center justify-between rounded border p-3 font-semibold">
            <span>Styling approach:</span>
            <span className="font-mono">Cluttered</span>
          </div>
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
        <h3 className="text-foreground mb-4 text-2xl font-bold">Padding Wrapper</h3>
        <p className="text-muted-foreground mb-6">
          Direct padding solution that can be applied to any container without extra wrapper divs.
          Perfect for sections, components, and existing elements that need responsive spacing.
        </p>

        <div className="from-success/10 mb-4 rounded-md bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">CSS Wrapper Solution</h5>
          <ProblemSolveCodeBlock
            className="bg-success/5"
            code={`.wrapper {
  padding-inline: max(calc((100% - 82.5rem) / 2), 4%);
  margin-inline: auto;
  width: 100%;
}`}
          />
        </div>

        <svg
          viewBox="0 0 380 80"
          className="border-success/20 bg-success/5 mb-4 h-auto w-full rounded-md border p-3"
        >
          <rect x="10" y="10" width="40" height="50" fill="#10b981" fillOpacity="0.3" />
          <text x="30" y="40" textAnchor="middle" className="fill-success text-[0.625rem]">
            section
          </text>

          <rect x="50" y="10" width="280" height="50" fill="#dcfce7" />
          <text x="190" y="40" textAnchor="middle" className="fill-success text-sm font-bold">
            No Extra Divs! ✓
          </text>

          <rect x="330" y="10" width="40" height="50" fill="#10b981" fillOpacity="0.3" />
          <text x="350" y="40" textAnchor="middle" className="fill-success text-[0.625rem]">
            footer
          </text>

          <text x="190" y="75" textAnchor="middle" className="fill-success font-mono text-xs">
            Clean HTML
          </text>
        </svg>

        <div className="space-y-2 text-sm">
          <div className="bg-success/5 text-success flex items-center justify-between rounded p-3">
            <span>Extra markup:</span>
            <span className="font-mono">None ✓</span>
          </div>
          <div className="bg-success/5 text-success flex items-center justify-between rounded p-3">
            <span>HTML complexity:</span>
            <span className="font-mono">Minimal</span>
          </div>
          <div className="border-success/40 bg-success/10 text-success flex items-center justify-between rounded border p-3 font-semibold">
            <span>Styling approach:</span>
            <span className="font-mono">Direct ✓</span>
          </div>
        </div>
      </div>
    </div>
  )
}
