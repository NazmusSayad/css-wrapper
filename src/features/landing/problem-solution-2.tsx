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
        <div className="border-destructive/20 bg-destructive/5 rounded border p-4">
          <p className="text-destructive text-sm">
            <strong>Result:</strong> Inconsistent spacing, broken layouts, and unpredictable
            behavior in complex hierarchies.
          </p>
        </div>
        <div className="from-muted/50 mt-4 rounded-lg bg-gradient-to-r to-transparent p-4">
          <h5 className="text-foreground mb-2 text-sm font-semibold">Broken Nested Layout</h5>
          <pre className="bg-muted/50 overflow-x-auto rounded p-3 text-xs">
            <code>{`<div class="two-column-layout">
  <div class="wrapper">
    <!-- Fixed padding breaks here -->
    <!-- Designed for viewport, not container -->
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
