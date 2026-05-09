"use client"

import { forwardRef, type TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s/g, "-")

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "block w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900 transition-all duration-200",
            "placeholder:text-zinc-400",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-y min-h-[120px]",
            "dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500",
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-700"
              : "border-zinc-200 focus:border-violet-500 focus:ring-violet-500/20 dark:border-zinc-700 dark:focus:border-violet-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{hint}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
