import { cn } from "@/lib/utils"

type HeadingPart = {
  text: string
  className?: string
}

type SplitHeadingProps = {
  parts: HeadingPart[]
  className?: string
}

export function SplitHeading({ parts, className }: SplitHeadingProps) {
  return (
    <h2 className={cn("text-center text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight", className)}>
      {parts.map((part, index) => (
        <span key={`${part.text}-${index}`} className={part.className}>
          {part.text}
          {index < parts.length - 1 ? " " : ""}
        </span>
      ))}
    </h2>
  )
}
