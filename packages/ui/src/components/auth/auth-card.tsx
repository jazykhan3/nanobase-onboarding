import * as React from "react"
import { cn } from "../../lib/utils"

interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    icon?: React.ReactNode
    children?: React.ReactNode
    footer?: React.ReactNode
    align?: "left" | "center"
}

export function AuthCard({
    title,
    description,
    icon,
    children,
    footer,
    align = "left",
    className,
    ...props
}: AuthCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col w-full",
                align === "center" && "items-center text-center",
                className
            )}
            {...props}
        >
            {/* Header */}
            <div className="w-full space-y-2 mb-6">
                {icon && <div className="mb-4">{icon}</div>}

                {title && (
                    <h1 className="text-[26px] font-semibold tracking-tight text-zinc-900 leading-tight">
                        {title}
                    </h1>
                )}

                {description && (
                    <p className="text-[14px] text-zinc-600 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            {/* Content */}
            <div className="w-full">{children}</div>

            {footer && <div className="w-full mt-6">{footer}</div>}
        </div>
    )
}