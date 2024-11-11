import { cn } from "@mijn-ui/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral", className)}
      {...props}
    />
  )
}

export { Skeleton }