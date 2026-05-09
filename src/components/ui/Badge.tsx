"use client"

import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "outline"
  size?: "sm" | "md" | "lg"
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const variants = {
      default:
        "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
      primary:
        "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
      success:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
      warning:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      danger:
        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      outline:
        "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400",
    }

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-xs",
      lg: "px-3 py-1 text-sm",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export { Badge }
