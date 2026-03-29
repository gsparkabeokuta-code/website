import { cn } from "@/lib/utils"

type IconPillListProps = {
  items: string[]
  iconSrc: string
  containerClassName?: string
  pillClassName?: string
  iconClassName?: string
}

export function IconPillList({
  items,
  iconSrc,
  containerClassName,
  pillClassName,
  iconClassName,
}: IconPillListProps) {
  return (
    <div className={cn("mt-6 flex flex-wrap gap-3 justify-center", containerClassName)}>
      {items.map((item) => (
        <span
          key={item}
          className={cn("inline-flex items-center gap-2 rounded-full text-base!", pillClassName)}
        >
          {iconSrc && <img src={iconSrc} alt="" className={cn("h-4 w-4", iconClassName)} aria-hidden="true" />}
          
          {item}
        </span>
      ))}
    </div>
  )
}
