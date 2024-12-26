import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
export default function Loading() {
    return (
        <PageTransition>
        <div className="h-[100vh] w-full flex items items-center justify-center text-white text-7xl bg-orange-600">
            <Image src="/tc-logo-outline.webp" alt="Logo" width={400} height={400} />
        </div>
        </PageTransition>
    )
}