"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".hero-text", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
        gsap.from(".hero-card", {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    const comparisonItems = [
        {
            off: "주어진 일만 하고,\n끝나면 잊혀진다",
            on: "내가 주도한 프로젝트로\n성과의 주인이 된다",
        },
        {
            off: "성과를 내도, 결과는\n어딘가로 흩어진다",
            on: "내가 만든 성과로\n회사 성장에 직접 기여한다",
        },
        {
            off: "스펙/경험은 채웠지만,\n일하는 방식은 모른다",
            on: "내 평생 성과를 바꿀\n일하는 방식을 배운다",
        },
    ];

    return (
        <section ref={containerRef} id="intro" className="relative pt-20 pb-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <h1 className="hero-text text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    라라스윗 마케팅 인턴 <span className="text-neon-blue">9기 공개채용</span>
                </h1>
                <p className="hero-text text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
                    단순한 경험을 넘어, 진짜 성과를 만드는 마케터로 성장하세요.
                </p>

                <div className="hero-text relative w-full max-w-lg aspect-video mb-20 rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="/hero-switch3.png"
                        alt="Hero Switch"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Comparison Rows */}
                <ScrollAnimation className="w-full max-w-4xl space-y-4" stagger={0.2}>
                    {comparisonItems.map((item, index) => (
                        <div key={index} className="hero-card grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* OFF Card */}
                            <div className="bg-[#1A1A1A] p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[160px] hover:bg-[#222] transition-colors duration-300">
                                <div className="mb-4">
                                    <div className="w-16 h-8 bg-[#4A4A4A] rounded-full relative flex items-center px-1">
                                        <div className="w-6 h-6 bg-white rounded-full shadow-sm" />
                                        <span className="ml-auto mr-2 text-[10px] font-bold text-white/50">OFF</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 whitespace-pre-line leading-relaxed font-medium text-lg md:text-xl">
                                    {item.off}
                                </p>
                            </div>

                            {/* ON Card */}
                            <div className="bg-[#112222] p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[160px] border border-neon-blue/10 hover:border-neon-blue/30 transition-colors duration-300 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="mb-4 relative z-10">
                                    <div className="w-16 h-8 bg-neon-blue rounded-full relative flex items-center px-1 justify-end shadow-[0_0_15px_rgba(0,199,242,0.5)]">
                                        <span className="mr-auto ml-2 text-[10px] font-bold text-white">ON</span>
                                        <div className="w-6 h-6 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                                <p className="text-neon-blue font-semibold whitespace-pre-line leading-relaxed relative z-10 text-lg md:text-xl">
                                    {item.on}
                                </p>
                            </div>
                        </div>
                    ))}
                </ScrollAnimation>
            </div>
        </section>
    );
}
