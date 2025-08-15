import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { HiOutlineArrowsPointingOut, HiOutlineViewColumns } from 'react-icons/hi2'

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
    <div className="space-y-10">
      <div>
        <div className="mb-6">
          <h3 className="text-foreground mb-3 flex items-center gap-3 text-base font-semibold">
            <div className="bg-primary/10 rounded-lg p-2">
              <HiOutlineViewColumns className="text-primary size-4" />
            </div>
            <span className="text-foreground font-semibold">Width Settings</span>
          </h3>
          <p className="text-muted-foreground mb-4 text-xs">Define maximum container width</p>
        </div>

        <div className="space-y-4">
          <Label className="text-muted-foreground flex-col items-start text-xs font-medium tracking-wider uppercase">
            <span className="mb-2 block">CSS Value</span>
            <Input
              value={maxWidth}
              onChange={(e) => setMaxWidth(e.target.value)}
              placeholder="1200px"
              className="border-border/50 bg-background/50 focus:border-secondary focus:bg-background h-11 backdrop-blur-sm transition-all focus:shadow-sm"
            />
          </Label>

          <Label className="text-muted-foreground flex-col items-start text-xs font-medium tracking-wider uppercase">
            <span className="mb-2 block">CSS Variable Name</span>
            <Input
              value={maxWidthVariable}
              onChange={(e) => setMaxWidthVariable(e.target.value)}
              placeholder="--max-width"
              className="border-border/50 bg-background/50 focus:border-secondary focus:bg-background h-11 backdrop-blur-sm transition-all focus:shadow-sm"
            />
          </Label>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="text-foreground mb-3 flex items-center gap-3 text-base font-semibold">
            <div className="bg-primary/10 rounded-lg p-2">
              <HiOutlineArrowsPointingOut className="text-primary size-4" />
            </div>
            <span className="text-foreground font-semibold">Padding Settings</span>
          </h3>
          <p className="text-muted-foreground mb-4 text-xs">Configure spacing around content</p>
        </div>

        <div className="space-y-4">
          <Label className="text-muted-foreground flex-col items-start text-xs font-medium tracking-wider uppercase">
            <span className="mb-2 block">CSS Value</span>
            <Input
              value={padding}
              onChange={(e) => setPadding(e.target.value)}
              placeholder="1rem"
              className="border-border/50 bg-background/50 focus:border-primary focus:bg-background h-11 backdrop-blur-sm transition-all focus:shadow-sm"
            />
          </Label>

          <Label className="text-muted-foreground flex-col items-start text-xs font-medium tracking-wider uppercase">
            <span className="mb-2 block">CSS Variable Name</span>
            <Input
              value={paddingVariable}
              onChange={(e) => setPaddingVariable(e.target.value)}
              placeholder="--padding"
              className="border-border/50 bg-background/50 focus:border-primary focus:bg-background h-11 backdrop-blur-sm transition-all focus:shadow-sm"
            />
          </Label>
        </div>
      </div>
    </div>
  )
}
