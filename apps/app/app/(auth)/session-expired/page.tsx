"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { AuthLayout } from "@ui/components/auth/auth-layout"
import { AuthCard } from "@ui/components/auth/auth-card"
import { Button } from "@ui/components/ui/button"

export default function SessionExpiredPage() {
    const router = useRouter()
    
    const handleCheckEmail = () => {
        router.push("/check-email")
    }
    return (
        <AuthLayout
            illustration={
                <div className="h-[900px]  w-[1000px] bg-[#F4F7FE]">
                    <Image
                        src="/expired.png"
                        alt="Session Expired Illustration"
                        className="object-contain"
                        priority
                        width={459}
                        height={350}
                        style={{
                            paddingTop: "40%",
                            margin: 'auto',
                        }}
                    />
                </div>
            }
        >
            <AuthCard
                icon={
                    <div className="flex h-12 w-12 items-center justify-center">
                        <Image
                            src="/lock-02.png"
                            alt="Lock"
                            width={64}
                            height={64}
                            className="object-contain "
                        />
                    </div>
                }
                title="Your session has expired"
                description="For security reasons, please log in again to continue."
            >
                <Button 
                    onClick={handleCheckEmail}
                    className="h-11 w-full bg-blue-600 text-[15px] font-medium text-white hover:bg-blue-700 transition-colors shadow-none rounded-lg"
                >
                    Request new link
                </Button>
            </AuthCard>
        </AuthLayout>
    )
}
