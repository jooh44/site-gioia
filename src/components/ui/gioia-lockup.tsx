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
  const src =
    theme === "light" ? "/logos/logo-gioia-navbar-light.svg" : "/logos/logo-gioia-navbar-dark.svg"

  return (
    <span
      className={cn(
        "inline-flex items-center transition-transform duration-300 group-hover:scale-[1.01]",
        className,
      )}
    >
      <img
        src={src}
        alt="Gioia & Associados Advogados"
        width={3345}
        height={985}
        className={cn(
          "w-auto shrink-0",
          compact ? "h-11 sm:h-[3.1rem]" : "h-[3.35rem] md:h-[3.75rem] xl:h-[4.15rem]",
        )}
      />
    </span>
  )
}
