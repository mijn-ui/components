"use client"

import * as React from "react"
import { UnstyledProvider, useUnstyled } from "@mijn-ui/react-utilities/context"
import {
  applyUnstyled,
  cn,
  UnstyledProps,
} from "@mijn-ui/react-utilities/shared"
import * as SelectPrimitive from "@radix-ui/react-select"
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu"

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

/* -------------------------------------------------------------------------- */
/*                                   Select                                   */
/* -------------------------------------------------------------------------- */

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> &
  UnstyledProps

const Select = ({ unstyled = false, ...props }: SelectProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <SelectPrimitive.Root {...props} />
    </UnstyledProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SelectTrigger                               */
/* -------------------------------------------------------------------------- */

type SelectTriggerProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Trigger
> &
  UnstyledProps & {
    icon?: React.ReactNode
  }

const SelectTrigger = ({
  unstyled,
  className,
  children,
  ...props
}: SelectTriggerProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Trigger
      className={applyUnstyled(
        isUnstyled,
        "flex h-10 w-full items-center justify-between rounded-md border border-main-border bg-surface px-3 py-2 text-sm placeholder:text-neutral-text focus:border-input-border focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 hover:bg-accent",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <LuChevronDown className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/* -------------------------------------------------------------------------- */
/*                            SelectScrollUpButton                            */
/* -------------------------------------------------------------------------- */

type SelectScrollUpButtonProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.ScrollUpButton
> &
  UnstyledProps

const SelectScrollUpButton = ({
  unstyled,
  className,
  ...props
}: SelectScrollUpButtonProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.ScrollUpButton
      className={applyUnstyled(
        isUnstyled,
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <LuChevronUp className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

/* -------------------------------------------------------------------------- */
/*                           SelectScrollDownButton                           */
/* -------------------------------------------------------------------------- */

type SelectScrollDownButtonProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.ScrollDownButton
> &
  UnstyledProps

const SelectScrollDownButton = ({
  unstyled,
  className,
  ...props
}: SelectScrollDownButtonProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.ScrollDownButton
      className={applyUnstyled(
        isUnstyled,
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <LuChevronDown className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SelectContent                               */
/* -------------------------------------------------------------------------- */

type SelectContentProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Content
> &
  UnstyledProps

const SelectContent = ({
  unstyled,
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={applyUnstyled(
          isUnstyled,
          cn(
            "border-main-border bg-surface text-surface-text data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg border shadow-md !duration-300",
            position === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          ),
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 SelectLabel                                */
/* -------------------------------------------------------------------------- */

type SelectLabelProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Label
> &
  UnstyledProps

const SelectLabel = ({ unstyled, className, ...props }: SelectLabelProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Label
      className={applyUnstyled(
        isUnstyled,
        "py-1.5 pr-8 pl-2 text-sm font-semibold",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 SelectItem                                 */
/* -------------------------------------------------------------------------- */

type SelectItemProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Item
> &
  UnstyledProps

const SelectItem = ({
  unstyled,
  className,
  children,
  ...props
}: SelectItemProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Item
      className={applyUnstyled(
        isUnstyled,
        "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-primary data-[state=checked]:bg-primary/10",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <span
        className={applyUnstyled(
          isUnstyled,
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        )}
      >
        <SelectPrimitive.ItemIndicator>
          <LuCheck className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

/* -------------------------------------------------------------------------- */
/*                               SelectSeparator                              */
/* -------------------------------------------------------------------------- */

type SelectSeparatorProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Separator
> &
  UnstyledProps

const SelectSeparator = ({
  unstyled,
  className,
  ...props
}: SelectSeparatorProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <SelectPrimitive.Separator
      className={applyUnstyled(
        isUnstyled,
        "-mx-1 my-1 h-px bg-neutral",
        className,
      )}
      {...props}
    />
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
