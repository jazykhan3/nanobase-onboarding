import { OnboardingLayout } from "@ui/components/onboarding/onboarding-layout"

export default function OnboardingRouteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <OnboardingLayout>
            {children}
        </OnboardingLayout>
    )
}
