"use client"

import * as React from "react"
import { UnstyledProps } from "@/types"
import { applyUnstyled } from "@/utils"
import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps, cva } from "class-variance-authority"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> &
    UnstyledProps
>(({ unstyled, className, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={applyUnstyled(unstyled, labelVariants(), className)}
      {...props}
    />
  )
})
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
