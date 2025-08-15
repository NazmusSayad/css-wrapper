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
    <div className="pb-4">
      <div className="flex items-center gap-3 pb-2">
        <div className="bg-muted/50 text-foreground/90 rounded-lg p-2">{icon}</div>

        <h3 className="text-foreground/90 text-sm font-bold tracking-wider uppercase">{title}</h3>
      </div>

      <p className="text-muted-foreground/70 text-xs font-normal">{description}</p>
    </div>
  )
}
