"use client"

import { cn } from "@/lib/utils"

type GioiaLockupProps = {
  theme?: "light" | "dark"
  compact?: boolean
  className?: string
}

export function GioiaLockup({
  theme = "dark",
  compact = false,
  className,
}: GioiaLockupProps) {
  const titleColor = theme === "light" ? "text-primary" : "text-primary-foreground"
  const subtitleColor = theme === "light" ? "text-primary/75" : "text-secondary/90"

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 sm:gap-4 transition-transform duration-300 group-hover:scale-[1.01]",
        compact ? "gap-2.5 max-w-[12rem] sm:max-w-none" : "",
        className,
      )}
    >
      <img
        src="/gioia-e-associados-advogados-simbolo.svg"
        alt=""
        aria-hidden="true"
        width={578}
        height={714}
        className={cn(
          "w-auto shrink-0 drop-shadow-sm",
          compact ? "h-9 sm:h-10" : "h-11 md:h-13 xl:h-14",
        )}
      />

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "uppercase tracking-[0.22em]",
            compact ? "text-[1.06rem] sm:text-[1.22rem] tracking-[0.18em] sm:tracking-[0.22em]" : "text-[1.36rem] md:text-[1.68rem] xl:text-[1.8rem]",
            titleColor,
          )}
          style={{ fontFamily: '"Cinzel", serif', fontWeight: 500 }}
        >
          Gioia
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap uppercase font-semibold tracking-[0.34em]",
            compact ? "mt-0.5 text-[0.36rem] sm:text-[0.45rem] tracking-[0.3em] sm:tracking-[0.34em]" : "text-[0.46rem] md:text-[0.54rem] xl:text-[0.58rem]",
            subtitleColor,
          )}
        >
          &amp; Associados Advogados
        </span>
      </span>
    </span>
  )
}
