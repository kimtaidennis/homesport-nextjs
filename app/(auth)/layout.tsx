import Image from "next/image"
import Link from "next/link"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className=" h-screen">
            <div className="grid h-full w-full lg:grid-cols-2">

                {/* The image half */}
                <div className="bg-local hidden lg:block" style={{ backgroundImage:`url('/images/large.png')`}}></div>
                
                {/* The content half */}
                <div className="flex flex-col justify-center items-center gap-10">
                        <Link href="/" className="home-link text-center">
                            <img src="/images/logo.png" alt="" className="h-8" />
                        </Link>  
                        { children }
                    
                </div>  
            </div>
        </div>
    )
}