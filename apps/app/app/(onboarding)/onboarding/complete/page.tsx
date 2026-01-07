import { OnboardingWizard } from "@ui/components/onboarding/onboarding-wizard"
import { Button } from "@ui/components/ui/button"

export default function CompletePage() {
    return (
        <OnboardingWizard
            title="You're all set!"
            description="Welcome to Nanobase. Your workspace is ready."
        >
            <div className="flex flex-col items-center justify-center py-8">
                <div className="h-24 w-24 bg-green-50 rounded-full flex items-center justify-center text-4xl mb-6">
                    🎉
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">Go to Dashboard</Button>
            </div>
        </OnboardingWizard>
    )
}
