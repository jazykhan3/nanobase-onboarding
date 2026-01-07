import * as React from "react"
import Image from "next/image"
import { cn } from "../../lib/utils"

interface AuthLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    illustration?: React.ReactNode
    variant?: "split" | "centered"
}

export function AuthLayout({
    children,
    illustration,
    variant = "split",
    className,
    ...props
}: AuthLayoutProps) {
    return (
        <div
            className={cn("min-h-screen w-full bg-white flex flex-col", className)}
            {...props}
        >
            {/* HEADER */}
            <header className="h-16 border-b border-zinc-300 bg-white shadow-sm">
                <div className="mx-auto flex h-full max-w-7xl items-center px-16">
                    <Image
                        src="/logo-01.png"
                        alt="Nanobase"
                        width={160}
                        height={60}
                        priority
                        className="object-contain"
                        style={{
                            paddingLeft: 25,
                            paddingTop: 20,
                        }}
                    />
                </div>
            </header>

            {/* MAIN */}
            <main className="flex ">
                {/* LEFT */}
                <div className="flex w-full items-center justify-center px-16">
                    <div className="max-w-[560px] px-16 py-16">
                        {children}

                        {/* FOOTER */}
                        <div className="mt-10 flex items-center gap-3 text-[13px] text-zinc-500">
                            <a className="hover:text-zinc-900 hover:underline">
                                Terms of Service
                            </a>
                            <span className="text-zinc-300">•</span>
                            <a className="hover:text-zinc-900 hover:underline">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hidden lg:flex w-1/2 bg-[#F4F7FE] items-center justify-center">
                    {illustration}
                </div>
            </main>
        </div>
    )
}
