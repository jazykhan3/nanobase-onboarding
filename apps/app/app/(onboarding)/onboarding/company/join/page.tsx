import { OnboardingWizard } from "@ui/components/onboarding/onboarding-wizard"
import { Button } from "@ui/components/ui/button"
import { Input } from "@ui/components/ui/input"

export default function JoinCompanyPage() {
    return (
        <OnboardingWizard
            title="Join your company"
            description="Enter the invite code shared by your admin."
            currentStep={3}
            totalSteps={3}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="inviteCode">Invite Code</label>
                    <Input id="inviteCode" placeholder="Enter code" />
                </div>
                <div className="pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">Join Workspace</Button>
                </div>
            </div>
        </OnboardingWizard>
    )
}
