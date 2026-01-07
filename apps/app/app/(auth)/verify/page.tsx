"use client"

import { Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { AuthLayout } from "@ui/components/auth/auth-layout"
import { AuthCard } from "@ui/components/auth/auth-card"
import { Button } from "@ui/components/ui/button"

function VerifyContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    
    useEffect(() => {
        // Simulate token verification
        // In a real app, you would verify the token with your backend
        // For this demo, we'll simulate checking if token is expired
        if (token) {
            // Simulate token expiration check
            // You can change this logic based on your actual token verification
            const isTokenExpired = true // Set to false to test valid token flow
            
            if (isTokenExpired) {
                // Token is expired, redirect to session-expired page
                router.push("/session-expired")
            } else {
                // Token is valid, proceed to onboarding
                router.push("/onboarding")
            }
        }
    }, [token, router])
    
    // Show loading state while verifying
    return (
        <AuthLayout
            illustration={
                <div className="h-[960px]  w-[800px] bg-[#F4F7FE]">
                    <Image
                        src="/expired.png"
                        alt="Verifying"
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
                            alt="Verifying"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                }
                title="Verifying token"
                description="Please wait while we verify your token..."
            >
                <div className="h-11 w-120 flex items-center justify-center">
                    <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
            </AuthCard>
        </AuthLayout>
    )
}

export default function VerifyPage() {
    return (
        <Suspense fallback={
            <AuthLayout
                illustration={
                    <div className="h-[960px]  w-[800px] bg-[#F4F7FE]">
                        <Image
                            src="/expired.png"
                            alt="Loading"
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
                    title="Loading"
                    description="Please wait..."
                >
                    <div className="h-11 w-120 flex items-center justify-center">
                        <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                </AuthCard>
            </AuthLayout>
        }>
            <VerifyContent />
        </Suspense>
    )
}
