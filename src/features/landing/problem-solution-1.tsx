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
