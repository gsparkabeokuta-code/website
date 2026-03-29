import { cn } from "@/lib/utils"

type CornerPatternProps = {
  color?: string
  sizeClassName?: string
  className?: string
}

export function CornerPattern({
  color = "#f2b4b2",
  sizeClassName = "h-12 w-12",
  className,
}: CornerPatternProps) {
  const maskClassName =
    "mask-[url('/bg-pattern.svg')] mask-center mask-no-repeat mask-contain [-webkit-mask-image:url('/bg-pattern.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)} aria-hidden="true">
      <span
        className={cn("absolute left-6 top-6", sizeClassName, maskClassName)}
        style={{ backgroundColor: color }}
      />
      <span
        className={cn("absolute right-6 top-6", sizeClassName, maskClassName)}
        style={{ backgroundColor: color }}
      />
      <span
        className={cn("absolute left-6 bottom-6", sizeClassName, maskClassName)}
        style={{ backgroundColor: color }}
      />
      <span
        className={cn("absolute right-6 bottom-6", sizeClassName, maskClassName)}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}
