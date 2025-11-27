"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Staggered text animations
        gsap.from(".hero-text", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
        });

        // Parallax glow effect
        if (glowRef.current) {
            gsap.to(glowRef.current, {
                y: 50,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }
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
        <section ref={containerRef} id="intro" className="relative pt-32 pb-32 overflow-hidden">
            {/* Animated Background Glow with Parallax */}
            <div
                ref={glowRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-blue/20 blur-[140px] rounded-full pointer-events-none animate-pulse"
            />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
                {/* Enhanced Typography */}
                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                    라라스윗 마케팅 인턴 <span className="gradient-text">9기 공개채용</span>
                </h1>
                <p className="hero-text text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl leading-relaxed">
                    단순한 경험을 넘어, 진짜 성과를 만드는 마케터로 성장하세요.
                </p>

                {/* Hero Image with enhanced shadow */}
                <div className="hero-text relative w-full max-w-2xl aspect-video mb-24 rounded-2xl overflow-hidden shadow-floating hover:shadow-glow-lg transition-shadow duration-slow group">
                    <Image
                        src="/hero-switch3.png"
                        alt="Hero Switch"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-slower"
                        priority
                    />
                </div>

                {/* Enhanced Comparison Cards */}
                <ScrollAnimation
                    className="w-full max-w-5xl space-y-6"
                    stagger={0.2}
                    scale={true}
                    toggleActions="play none none none"
                >
                    {comparisonItems.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* OFF Card - Enhanced */}
                            <div className="bg-[#1A1A1A] p-10 rounded-3xl flex flex-col items-center justify-center text-center min-h-[200px] hover-lift hover:bg-[#222] transition-all duration-normal group">
                                <div className="mb-6">
                                    <div className="w-20 h-10 bg-[#4A4A4A] rounded-full relative flex items-center px-1.5 transition-all duration-normal group-hover:scale-110">
                                        <div className="w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-normal" />
                                        <span className="ml-auto mr-2 text-xs font-bold text-white/50">OFF</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 whitespace-pre-line leading-relaxed font-medium text-xl md:text-2xl">
                                    {item.off}
                                </p>
                            </div>

                            {/* ON Card - Enhanced with Glow */}
                            <div className="glass-strong p-10 rounded-3xl flex flex-col items-center justify-center text-center min-h-[200px] border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-normal relative overflow-hidden group hover-lift hover-glow">
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-slower" />

                                <div className="mb-6 relative z-10">
                                    <div className="w-20 h-10 bg-neon-blue rounded-full relative flex items-center px-1.5 justify-end shadow-glow-md group-hover:shadow-glow-lg transition-all duration-normal group-hover:scale-110 animate-glow">
                                        <span className="mr-auto ml-2 text-xs font-bold text-black">ON</span>
                                        <div className="w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-normal" />
                                    </div>
                                </div>
                                <p className="text-neon-blue font-bold whitespace-pre-line leading-relaxed relative z-10 text-xl md:text-2xl">
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
