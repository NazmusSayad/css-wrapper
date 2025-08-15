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
        <div className="bg-muted/50 rounded-lg p-2">{icon}</div>

        <h3 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          {title}
        </h3>
      </div>

      <p className="text-muted-foreground text-xs">{description}</p>
    </div>
  )
}
