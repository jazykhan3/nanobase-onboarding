import * as React from "react"
import { cn } from "../../lib/utils"

interface OnboardingWizardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    title?: string
    description?: string
    currentStep?: number
    totalSteps?: number
}

export function OnboardingWizard({
    children,
    title,
    description,
    currentStep,
    totalSteps,
    className,
    ...props
}: OnboardingWizardProps) {
    return (
        <div className={cn("w-full max-w-lg space-y-8", className)} {...props}>
            <div className="flex justify-between items-center">
                {/* Logo or back button could go here */}
                <div className="text-blue-600 font-bold flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-600" />
                    Nanobase
                </div>
                {currentStep && totalSteps && (
                    <div className="text-sm text-zinc-500">
                        Step {currentStep} of {totalSteps}
                    </div>
                )}
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                {(title || description) && (
                    <div className="space-y-2 text-center">
                        {title && <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>}
                        {description && <p className="text-sm text-zinc-500">{description}</p>}
                    </div>
                )}
                {children}
            </div>
        </div>
    )
}
