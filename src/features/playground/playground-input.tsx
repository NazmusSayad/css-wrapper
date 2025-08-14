import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function PlaygroundInput({
  padding,
  maxWidth,
  paddingVariable,
  maxWidthVariable,
  setPadding,
  setMaxWidth,
  setPaddingVariable,
  setMaxWidthVariable,
}: {
  padding: string
  maxWidth: string
  paddingVariable: string
  maxWidthVariable: string
  setPadding: (padding: string) => void
  setMaxWidth: (maxWidth: string) => void
  setPaddingVariable: (paddingVariable: string) => void
  setMaxWidthVariable: (maxWidthVariable: string) => void
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="block">
          <span className="text-foreground mb-2 block text-sm font-medium">Padding</span>
          <Input
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
            placeholder="2rem, 16px, var(--your-padding)"
            className="h-11"
          />
        </Label>
        <Label className="block">
          <span className="text-foreground mb-2 block text-sm font-medium">Padding Variable</span>
          <Input
            value={paddingVariable}
            onChange={(e) => setPaddingVariable(e.target.value)}
            placeholder="--space-md"
            className="h-11"
          />
        </Label>
      </div>

      <div className="space-y-4">
        <Label className="block">
          <span className="text-foreground mb-2 block text-sm font-medium">Max Width</span>
          <Input
            value={maxWidth}
            onChange={(e) => setMaxWidth(e.target.value)}
            placeholder="1200px, 80vw, var(--your-max-width)"
            className="h-11"
          />
        </Label>
        <Label className="block">
          <span className="text-foreground mb-2 block text-sm font-medium">Max Width Variable</span>
          <Input
            value={maxWidthVariable}
            onChange={(e) => setMaxWidthVariable(e.target.value)}
            placeholder="--container-lg"
            className="h-11"
          />
        </Label>
      </div>
    </div>
  )
}
