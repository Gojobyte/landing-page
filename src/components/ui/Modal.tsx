"use client"

import { type HTMLAttributes, forwardRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { createPortal } from "react-dom"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      isOpen,
      onClose,
      title,
      description,
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    const handleEscape = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      },
      [onClose]
    )

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }
      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = ""
      }
    }, [isOpen, handleEscape])

    if (!isOpen) return null

    const sizes = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-2xl",
      full: "max-w-[90vw] max-h-[90vh]",
    }

    const modalContent = (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal */}
        <div
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "relative w-full rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl",
            "border border-zinc-200 dark:border-zinc-800",
            "animate-in fade-in zoom-in-95 duration-200",
            sizes[size],
            className
          )}
          {...props}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          {(title || description) && (
            <div className="px-6 pt-6 pb-2">
              {title && (
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    )

    return createPortal(modalContent, document.body)
  }
)

Modal.displayName = "Modal"

export { Modal }
