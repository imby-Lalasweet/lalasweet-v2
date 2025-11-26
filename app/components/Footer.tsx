import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative h-[30px] w-[120px]">
                        <Image
                            src="/lalasweet-logo.png"
                            alt="Lalasweet Logo"
                            fill
                            className="object-contain opacity-50 grayscale"
                        />
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2024 Lalasweet. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    {/* SNS Icons - Using text for now as specific icons weren't provided, but structure is here */}
                    <Link href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</Link>
                    <Link href="#" className="text-gray-500 hover:text-white transition-colors">Youtube</Link>
                    <Link href="#" className="text-gray-500 hover:text-white transition-colors">Blog</Link>
                </div>
            </div>
        </footer>
    );
}
