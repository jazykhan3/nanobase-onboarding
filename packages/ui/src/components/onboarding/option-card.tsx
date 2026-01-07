import * as React from "react"
import { cn } from "../../lib/utils"

interface OptionCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode
    title: string
    description: string
    selected?: boolean
}

export function OptionCard({ icon, title, description, selected, className, ...props }: OptionCardProps) {
    return (
        <div
            className={cn(
                "cursor-pointer group relative flex flex-col p-6 rounded-xl border-2 transition-all hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10",
                selected ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/10" : "border-zinc-200 dark:border-zinc-800 bg-transparent",
                className
            )}
            {...props}
        >
            <div className="mb-4 text-zinc-500 group-hover:text-blue-600 transition-colors">
                {icon || (
                    <div className="h-8 w-8 rounded bg-zinc-100 group-hover:bg-blue-100 dark:bg-zinc-800" />
                )}
            </div>
            <h3 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">{title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>

            <div className={cn(
                "absolute top-6 right-6 h-5 w-5 rounded-full border border-zinc-300 flex items-center justify-center transition-colors",
                selected && "border-blue-600 bg-blue-600"
            )}>
                {selected && <div className="h-2 w-2 rounded-full bg-white" />}
            </div>
        </div>
    )
}
