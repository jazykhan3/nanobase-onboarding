"use client"

import { useRouter } from "next/navigation"
import { OnboardingWizard } from "@ui/components/onboarding/onboarding-wizard"
import { Button } from "@ui/components/ui/button"
import { Input } from "@ui/components/ui/input"

export default function CreateCompanyPage() {
    const router = useRouter()
    
    const handleCreate = () => {
        router.push("/onboarding/complete")
    }
    return (
        <OnboardingWizard
            title="Create company workspace"
            description="Give your workspace a name and unique URL."
            currentStep={3}
            totalSteps={3}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="companyName">Company Name</label>
                    <Input id="companyName" placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="slug">Workspace URL</label>
                    <div className="flex">
                        <div className="flex items-center px-3 bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-200 dark:border-zinc-800 rounded-l-md text-zinc-500 text-sm">
                            nanobase.com/
                        </div>
                        <Input id="slug" placeholder="acme" className="rounded-l-none" />
                    </div>
                </div>
                <div className="pt-4">
                    <Button 
                        onClick={handleCreate}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    >
                        Create Workspace
                    </Button>
                </div>
            </div>
        </OnboardingWizard>
    )
}
