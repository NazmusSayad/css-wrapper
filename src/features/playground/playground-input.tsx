import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { HiOutlineCog6Tooth, HiOutlineViewColumns } from 'react-icons/hi2'
import { SectionHeader } from './components/section-header'

export function PlaygroundInput({
  padding,
  maxWidth,
  paddingTips,
  paddingError,
  paddingWarning,
  maxWidthTips,
  maxWidthError,
  maxWidthWarning,
  paddingVariable,
  maxWidthVariable,
  setPadding,
  setMaxWidth,
  setPaddingVariable,
  setMaxWidthVariable,
}: {
  padding: string
  paddingTips?: string
  paddingError?: string
  paddingWarning?: string

  maxWidth: string
  maxWidthTips?: string
  maxWidthError?: string
  maxWidthWarning?: string

  paddingVariable: string
  maxWidthVariable: string

  setPadding: (padding: string) => void
  setMaxWidth: (maxWidth: string) => void
  setPaddingVariable: (paddingVariable: string) => void
  setMaxWidthVariable: (maxWidthVariable: string) => void
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionHeader
          icon={<HiOutlineViewColumns />}
          title="Container Settings"
          description="Configure your wrapper dimensions and spacing"
        />

        <div className="space-y-4 pt-2">
          <div>
            <Label className="text-foreground/90 flex-col items-start text-xs font-medium tracking-wider uppercase">
              <span className="mb-2 block">Max Width</span>
              <Input
                value={maxWidth}
                onChange={(e) => setMaxWidth(e.target.value)}
                placeholder="1200px"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>
          </div>

          <div>
            <Label className="text-foreground/90 flex-col items-start text-xs font-medium tracking-wider uppercase">
              <span className="mb-2 block">Padding</span>
              <Input
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                placeholder="1rem"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="css-variables" className="border-border/50">
          <AccordionTrigger className="p-0 hover:no-underline">
            <SectionHeader
              icon={<HiOutlineCog6Tooth />}
              title="CSS Variables (Advanced)"
              description="Customize variable names for your generated code"
            />
          </AccordionTrigger>

          <AccordionContent className="space-y-4 pt-2">
            <Label className="text-foreground/90 flex-col items-start text-xs font-medium tracking-wider uppercase">
              <span className="mb-2 block">Width Variable Name</span>
              <Input
                value={maxWidthVariable}
                onChange={(e) => setMaxWidthVariable(e.target.value)}
                placeholder="--max-width"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>

            <Label className="text-foreground/90 flex-col items-start text-xs font-medium tracking-wider uppercase">
              <span className="mb-2 block">Padding Variable Name</span>
              <Input
                value={paddingVariable}
                onChange={(e) => setPaddingVariable(e.target.value)}
                placeholder="--padding"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
