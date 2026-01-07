import { OnboardingWizard } from "@ui/components/onboarding/onboarding-wizard"
import { Button } from "@ui/components/ui/button"

export default function RequestSentPage() {
    return (
        <OnboardingWizard
            title="Request sent"
            description="We've sent a request to the workspace admin. You'll be notified via email once approved."
        >
            <div className="flex flex-col items-center justify-center py-8">
                <div className="h-24 w-24 bg-blue-50 rounded-full flex items-center justify-center text-4xl mb-6">
                    📩
                </div>
                <Button variant="outline" className="w-full">Back to Home</Button>
            </div>
        </OnboardingWizard>
    )
}
