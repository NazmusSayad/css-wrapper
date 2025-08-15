import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import {
  HiOutlineCog6Tooth,
  HiOutlineExclamationCircle,
  HiOutlineExclamationTriangle,
  HiOutlineInformationCircle,
  HiOutlineViewColumns,
} from 'react-icons/hi2'
import { SectionHeader } from './components/section-header'

type PlaygroundInputTip = {
  type: 'info' | 'warning' | 'error'
  text: string
}

type PlaygroundInputProps = {
  padding: string
  paddingTips?: PlaygroundInputTip[]

  maxWidth: string
  maxWidthTips?: PlaygroundInputTip[]

  paddingVariable: string
  maxWidthVariable: string

  setPadding: (padding: string) => void
  setMaxWidth: (maxWidth: string) => void
  setPaddingVariable: (paddingVariable: string) => void
  setMaxWidthVariable: (maxWidthVariable: string) => void
}

export function PlaygroundInput({
  padding,
  maxWidth,
  paddingTips,
  maxWidthTips,
  paddingVariable,
  maxWidthVariable,
  setPadding,
  setMaxWidth,
  setPaddingVariable,
  setMaxWidthVariable,
}: PlaygroundInputProps) {
  return (
    <div className="space-y-8">
      <div>
        <SectionHeader
          icon={<HiOutlineViewColumns />}
          title="Container Settings"
          description="Configure your wrapper dimensions and spacing"
        />

        <div className="space-y-5 pt-2">
          <div>
            <Label className="text-foreground/90 flex-col items-start gap-2.5 text-xs font-medium tracking-wider uppercase">
              <span>Max Width</span>

              <Input
                value={maxWidth}
                onChange={(e) => setMaxWidth(e.target.value)}
                placeholder="1200px"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>

            {maxWidthTips && maxWidthTips.length > 0 && (
              <ul className="mt-2 flex flex-col gap-1">
                {maxWidthTips.map((tip, index) => (
                  <li
                    key={index}
                    className={cn(
                      'flex gap-2',
                      tip.type === 'info' && 'text-muted-foreground/80',
                      tip.type === 'warning' && 'text-warning/80',
                      tip.type === 'error' && 'text-destructive/80'
                    )}
                  >
                    <span className="shrink-0 text-lg">
                      {tip.type === 'info' && <HiOutlineInformationCircle />}
                      {tip.type === 'warning' && <HiOutlineExclamationTriangle />}
                      {tip.type === 'error' && <HiOutlineExclamationCircle />}
                    </span>

                    <p className="my-auto w-full pr-2 text-xs break-words">{tip.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <Label className="text-foreground/90 flex-col items-start gap-2.5 text-xs font-medium tracking-wider uppercase">
              <span>Padding</span>

              <Input
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                placeholder="1rem"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>

            {paddingTips && paddingTips.length > 0 && (
              <div className="mt-2 flex flex-col gap-1">
                {paddingTips.map((tip, index) => (
                  <li
                    key={index}
                    className={cn(
                      'flex gap-2',
                      tip.type === 'info' && 'text-muted-foreground/80',
                      tip.type === 'warning' && 'text-warning/80',
                      tip.type === 'error' && 'text-destructive/80'
                    )}
                  >
                    <span className="shrink-0 text-lg">
                      {tip.type === 'info' && <HiOutlineInformationCircle />}
                      {tip.type === 'warning' && <HiOutlineExclamationTriangle />}
                      {tip.type === 'error' && <HiOutlineExclamationCircle />}
                    </span>

                    <p className="my-auto w-full pr-2 text-xs break-words">{tip.text}</p>
                  </li>
                ))}
              </div>
            )}
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

          <AccordionContent className="space-y-5 pt-2">
            <Label className="text-foreground/90 flex-col items-start gap-2.5 text-xs font-medium tracking-wider uppercase">
              <span>Width Variable Name</span>

              <Input
                value={maxWidthVariable}
                onChange={(e) => setMaxWidthVariable(e.target.value)}
                placeholder="--max-width"
                className="border-border/60 bg-background/80 text-foreground/90 placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/90 h-11 backdrop-blur-sm transition-all focus:shadow-sm"
              />
            </Label>

            <Label className="text-foreground/90 flex-col items-start gap-2.5 text-xs font-medium tracking-wider uppercase">
              <span>Padding Variable Name</span>

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
