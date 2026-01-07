import Image from "next/image"
import { AuthLayout } from "@ui/components/auth/auth-layout"
import { AuthCard } from "@ui/components/auth/auth-card"
import { Button } from "@ui/components/ui/button"

export default function VerifyPage() {
    return (
        <AuthLayout
            illustration={
                <div className="h-[960px]  w-[800px] bg-[#F4F7FE]">
                    <Image
                        src="/expired.png"
                        alt="Login Illustration"
                        className="object-contain"
                        priority
                        width={350}
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
                            src="/link-broken.png"
                            alt="Link Broken"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                }
                title="Link expired"
                description="This link has expired. Please request a new login link."
            >
                <Button className="h-11 w-120 bg-[#2563EB] text-[14px] font-medium text-white hover:bg-blue-700 transition-colors shadow-none rounded-lg">
                    Back to login
                </Button>
            </AuthCard>
        </AuthLayout>
    )
}
