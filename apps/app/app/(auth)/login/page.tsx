import Image from "next/image"
import { AuthLayout } from "@ui/components/auth/auth-layout"
import { AuthCard } from "@ui/components/auth/auth-card"
import { Button } from "@ui/components/ui/button"
import { Input } from "@ui/components/ui/input"
import { Icons } from "@ui/components/icons"

export default function LoginPage() {
    return (
        <AuthLayout
            illustration={
                <div className="h-[960px]  w-[800px] bg-[#F4F7FE]">
                    <Image
                        src="/illustration.png"
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
                title="Sign in or create account"
                description="Enter your email address to receive the link"
            >
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label
                            htmlFor="email"
                            className="text-[13px] font-medium text-zinc-900"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <Input
                                id="email"
                                type="email"
                                placeholder="john.smith@gmail.com"
                                className="h-11 w-120 border-[#D7D7D7] bg-white pr-10 focus-visible:ring-blue-600"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <Image
                                    src="/tick.png"
                                    alt="Login Illustration"
                                    className="object-contain"
                                    priority
                                    width={15}
                                    height={15}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <Button className="h-11 w-full bg-blue-600 text-[15px] font-medium text-white hover:bg-blue-700 transition-colors">
                            Login
                        </Button>

                        <Button
                            variant="outline"
                            className="h-11 w-full border-[#D2D2D2] bg-white text-[15px] font-medium text-zinc-900 hover:bg-zinc-50 flex items-center justify-center gap-3 transition-colors"
                        >
                            <Icons.google />
                            Continue with Google
                        </Button>
                    </div>
                </div>
            </AuthCard>
        </AuthLayout>
    )
}
