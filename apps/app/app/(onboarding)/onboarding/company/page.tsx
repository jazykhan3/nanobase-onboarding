"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { OnboardingWizard } from "@ui/components/onboarding/onboarding-wizard"
import { OptionCard } from "@ui/components/onboarding/option-card"
import { Button } from "@ui/components/ui/button"

export default function CompanyChoicePage() {
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState<"create" | "join">("create")
    
    const handleContinue = () => {
        if (selectedOption === "create") {
            router.push("/onboarding/company/create")
        } else {
            router.push("/onboarding/company/join")
        }
    }
    return (
        <OnboardingWizard
            title="How do you want to get started?"
            description="You can join an existing organization or create a new one."
            currentStep={2}
            totalSteps={3}
        >
            <div className="space-y-4">
                <OptionCard
                    title="Create company workspace"
                    description="I want to create a new workspace for my company."
                    icon={<div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-lg">+</div>}
                    selected={selectedOption === "create"}
                    onClick={() => setSelectedOption("create")}
                />
                <OptionCard
                    title="Join your company"
                    description="I've been invited or want to request to join an existing workspace."
                    icon={<div className="h-8 w-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-600 text-lg">🏢</div>}
                    selected={selectedOption === "join"}
                    onClick={() => setSelectedOption("join")}
                />

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
