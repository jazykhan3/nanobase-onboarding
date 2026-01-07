"use client"

import { useRouter } from "next/navigation"
import { OnboardingWizard } from "@ui/components/onboarding/onboarding-wizard"
import { Button } from "@ui/components/ui/button"
import { Input } from "@ui/components/ui/input"

export default function OnboardingPage() {
    const router = useRouter()
    
    const handleContinue = () => {
        router.push("/onboarding/company")
    }
    return (
        <OnboardingWizard
            title="Tell us about yourself"
            description="We just need a few details to get your profile set up."
            currentStep={1}
            totalSteps={3}
        >
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="firstName">First name</label>
                        <Input id="firstName" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="lastName">Last name</label>
                        <Input id="lastName" placeholder="Doe" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="role">What is your role?</label>
                    <Input id="role" placeholder="Software Engineer" />
                </div>
                <div className="pt-4">
                    <Button 
                        onClick={handleContinue}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </OnboardingWizard>
    )
}
