import Image from "next/image"
import { AuthLayout } from "@ui/components/auth/auth-layout"
import { AuthCard } from "@ui/components/auth/auth-card"
import { Button } from "@ui/components/ui/button"

export default function CheckEmailPage() {
    return (
        <AuthLayout
            illustration={
                <div className="h-[960px]  w-[800px] bg-[#F4F7FE]">
                    <Image
                        src="/check-email.png"
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
                align="center"
                icon={
                    <div className="flex h-16 w-16 items-center justify-center ">
                        <Image
                            src="/mail.png"
                            alt="Mail"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                }
                title="Check your email"
                description="An email with a login link has been sent to john.smith@gmail.com.
                Please click the link to access your account. If you don’t see the email, check your spam folder."
            >
                <p className="text-[13px] text-zinc-400">
                    {"Didn't receive the link?"}
                </p>
                <div className="space-y-6">
                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="h-11 w-full border-zinc-200 bg-white text-[15px] font-medium text-zinc-900 shadow-none rounded-lg"
                            disabled
                        >
                            Resend in 60s
                        </Button>
                    </div>
                </div>
            </AuthCard>
        </AuthLayout>
    )
}
