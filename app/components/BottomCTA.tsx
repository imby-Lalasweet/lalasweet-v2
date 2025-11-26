import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
    {
        text: "공채 커리큘럼 뭐가 다른지 궁금하다면?",
        href: "https://lalasweet.career.greetinghr.com/ko/lalasweetcultureonboaing",
        highlight: false,
    },
    {
        text: "생생한 마케팅 인턴 후기가 궁금하다면?",
        href: "https://lalasweet.career.greetinghr.com/ko/about4",
        highlight: false,
    },
    {
        text: "인턴에서 최연소 리더까지, 인지셀 리더 인터뷰",
        href: "https://lalasweet.career.greetinghr.com/ko/lalasweetleaderinterview1",
        highlight: false,
    },
    {
        text: "온라인 마케팅 9기 지원하기",
        href: "https://lalasweet.career.greetinghr.com/ko/o/186825",
        highlight: true,
    },
];

export default function BottomCTA() {
    return (
        <section className="py-24 bg-deep-dark">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            target="_blank"
                            className={`group block p-8 rounded-xl transition-all duration-300 relative overflow-hidden ${link.highlight
                                ? "bg-neon-blue hover:bg-neon-blue/90 col-span-1 md:col-span-2 text-center shadow-[0_0_20px_rgba(0,199,242,0.3)] hover:shadow-[0_0_40px_rgba(0,199,242,0.5)]"
                                : "bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/10"
                                } ${index === 2 ? "md:col-span-2 text-center" : ""}`}
                        >
                            <span
                                className={`text-lg font-bold flex items-center justify-center gap-2 ${link.highlight ? "text-black" : "text-white group-hover:text-neon-blue transition-colors"
                                    }`}
                            >
                                {link.text}
                                {!link.highlight && (
                                    <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                )}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
