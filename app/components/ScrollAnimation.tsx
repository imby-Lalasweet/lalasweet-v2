"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function ScrollAnimation({
    children,
    className = "",
    stagger = 0,
    delay = 0,
    direction = "up",
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const xOffset = direction === "left" ? 50 : direction === "right" ? -50 : 0;
        const yOffset = direction === "up" ? 50 : direction === "down" ? -50 : 0;

        // If there are children elements to stagger (e.g., list items), target them.
        // Otherwise, animate the container itself.
        const targets = stagger > 0 ? element.children : element;

        gsap.from(targets, {
            x: xOffset,
            y: yOffset,
            opacity: 0,
            duration: 1.2,
            delay: delay,
            stagger: stagger,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
