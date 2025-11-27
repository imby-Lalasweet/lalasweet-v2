```
"use client";

import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

const scheduleItems = [
    { date: "11/7(금) ~ 11/30(일)", title: "서류 접수", startDate: "2025-11-07", endDate: "2025-11-30" },
    { date: "12/3(수) 오후 2시", title: "서류 합격자 발표", startDate: "2025-12-03", endDate: "2025-12-03" },
    { date: "12/5(금)", title: "비대면 사전인터뷰", startDate: "2025-12-05", endDate: "2025-12-05" },
    { date: "12/8(월) 오후 2시", title: "사전인터뷰 합격자 발표", startDate: "2025-12-08", endDate: "2025-12-08" },
    { date: "12/10(수) ~ 12/12(금)", title: "대면 인터뷰", startDate: "2025-12-10", endDate: "2025-12-12" },
    { date: "12/15(수) 오후 2시", title: "최종 합격자 발표", startDate: "2025-12-15", endDate: "2025-12-15" },
    { date: "12/22(월) ~ 3/20(금)", title: "인턴 기간", startDate: "2025-12-22", endDate: "2026-03-20", highlight: true },
];

export default function Schedule() {
    const [items, setItems] = useState(scheduleItems);

    useEffect(() => {
        const checkActiveStatus = () => {
            const now = new Date();
            // 한국 시간(KST) 기준으로 현재 날짜 계산 (UTC+9)
            const kstOffset = 9 * 60 * 60 * 1000;
            const kstDate = new Date(now.getTime() + kstOffset);
            const today = kstDate.toISOString().split('T')[0];

            const updatedItems = scheduleItems.map(item => {
                const start = item.startDate;
                const end = item.endDate;
                
                // 날짜 범위 내에 있거나, 당일인 경우 active 처리
                const isActive = today >= start && today <= end;
                
                return { ...item, active: isActive };
            });
            setItems(updatedItems);
        };

        checkActiveStatus();
        // 매 분마다 상태 체크 (선택사항)
        const interval = setInterval(checkActiveStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="schedule" className="py-32 bg-deep-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                    <span className="gradient-text">Recruitment Schedule</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line with Gradient - Centered for all screens */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent -ml-px" />

                    <div className="space-y-12">
                        {items.map((item, index) => (
                            <ScrollAnimation
                                key={index}
                                className="relative flex items-center justify-center"
                                stagger={index * 0.1}
                            >
                                {/* Dot Indicator - Centered for all screens */}
                                <div className="absolute left-1/2 w-10 h-10 flex items-center justify-center -ml-5 z-10">
                                    <div className={`w - 4 h - 4 rounded - full border - 2 transition - all duration - normal ${
    item.active || item.highlight
    ? "bg-neon-blue border-neon-blue shadow-[0_0_15px_rgba(0,199,242,0.6)] scale-125 animate-pulse"
    : "bg-black border-gray-600"
} `} />
                                </div>

                                {/* Content Card - Centered single column for all screens */}
                                <div className={`w - full max - w - xl p - 6 rounded - 2xl border transition - all duration - normal hover - lift relative z - 20 mx - auto ${
    item.highlight
    ? "bg-neon-blue/10 border-neon-blue/50 shadow-glow-sm"
    : "glass-strong border-white/10 hover:border-white/30"
} `}>
                                    <div className={`text - sm font - bold mb - 2 ${
    item.active || item.highlight ? "text-neon-blue" : "text-gray-500"
} `}>
                                        {item.date}
                                    </div>
                                    <div className={`text - xl font - bold ${
    item.active || item.highlight ? "text-white" : "text-gray-400"
} `}>
                                        {item.title}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
```
