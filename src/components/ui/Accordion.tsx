"use client"

import {
  type HTMLAttributes,
  forwardRef,
  createContext,
  useContext,
  useState,
} from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionContextType {
  openItems: Set<string>
  toggle: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion components must be used within Accordion")
  return ctx
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string[]
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue = [], children, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<Set<string>>(
      new Set(defaultValue)
    )

    const toggle = (value: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev)
        if (next.has(value)) {
          next.delete(value)
        } else {
          if (type === "single") next.clear()
          next.add(value)
        }
        return next
      })
    }

    return (
      <AccordionContext.Provider value={{ openItems, toggle }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden",
        className
      )}
      data-value={value}
      {...props}
    >
      {children}
    </div>
  )
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItems, toggle } = useAccordion()
    const isOpen = openItems.has(value)

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => toggle(value)}
        className={cn(
          "flex w-full items-center justify-between px-5 py-4 text-left",
          "text-sm font-medium text-zinc-900 dark:text-zinc-100",
          "hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors",
          "cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { openItems } = useAccordion()
    const isOpen = openItems.has(value)

    if (!isOpen) return null

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-200",
          className
        )}
        {...props}
      >
        <div className="px-5 pb-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
