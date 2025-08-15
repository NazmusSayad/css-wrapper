export function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3 pb-4">
      <div className="bg-muted/50 text-foreground/90 rounded-lg p-2 [&>svg]:size-[1.375rem]">
        {icon}
      </div>

      <div className="space-y-1">
        <h3 className="text-foreground/90 text-base font-bold tracking-wider uppercase">{title}</h3>
        <p className="text-muted-foreground/70 text-sm font-normal">{description}</p>
      </div>
    </div>
  )
}
