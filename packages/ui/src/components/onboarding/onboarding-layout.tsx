import * as React from "react"
import { cn } from "../../lib/utils"

interface OnboardingLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function OnboardingLayout({ children, className, ...props }: OnboardingLayoutProps) {
    return (
        <div className={cn("min-h-screen w-full flex flex-col bg-zinc-50 dark:bg-zinc-950", className)} {...props}>
            <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8">
                {children}
            </div>
        </div>
    )
}
