"use client"

import { type HTMLAttributes, forwardRef } from "react"
import { cn, getInitials } from "@/lib/utils"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name: string
  size?: "sm" | "md" | "lg" | "xl"
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, name, size = "md", ...props }, ref) => {
    const sizes = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-lg",
    }

    const ringSizes = {
      sm: "ring-1",
      md: "ring-2",
      lg: "ring-2",
      xl: "ring-3",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full ring-white dark:ring-zinc-900 overflow-hidden bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-semibold shrink-0",
          sizes[size],
          ringSizes[size],
          className
        )}
        {...props}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt || name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

const AvatarGroup = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { max?: number; children: React.ReactNode[] }
>(({ className, max = 4, children, ...props }, ref) => {
  const avatars = Array.isArray(children) ? children : [children]
  const visible = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <div ref={ref} className={cn("flex -space-x-2", className)} {...props}>
      {visible.map((avatar, i) => (
        <div key={i}>{avatar}</div>
      ))}
      {remaining > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-300 ring-2 ring-white dark:ring-zinc-900">
          +{remaining}
        </div>
      )}
    </div>
  )
})

AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup }
