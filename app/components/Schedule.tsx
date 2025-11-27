"use client";

import ScrollAnimation from "./ScrollAnimation";

const scheduleItems = [
    { date: "11/7(금) ~ 11/30(일)", title: "서류 접수", active: true },
    { date: "12/3(수) 오후 2시", title: "서류 합격자 발표", active: false },
    { date: "12/5(금)", title: "비대면 사전인터뷰", active: false },
    { date: "12/8(월) 오후 2시", title: "사전인터뷰 합격자 발표", active: false },
    { date: "12/10(수) ~ 12/12(금)", title: "대면 인터뷰", active: false },
    { date: "12/15(수) 오후 2시", title: "최종 합격자 발표", active: false },
    { date: "12/22(월) ~ 3/20(금)", title: "인턴 기간", active: false, highlight: true },
];

export default function Schedule() {
    return (
        <section id="schedule" className="py-32 bg-deep-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                    <span className="gradient-text">Recruitment Schedule</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line with Gradient */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent md:left-1/2 md:-ml-px" />

                    <div className="space-y-12">
                        {scheduleItems.map((item, index) => (
                            <ScrollAnimation
                                key={index}
                                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                stagger={index * 0.1}
                                direction={index % 2 === 0 ? "left" : "right"}
                            >
                                {/* Dot Indicator */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center -ml-5 md:-ml-5 z-10">
                                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-normal ${item.active || item.highlight
                                            ? "bg-neon-blue border-neon-blue shadow-[0_0_15px_rgba(0,199,242,0.6)] scale-125 animate-pulse"
                                            : "bg-black border-gray-600"
                                        }`} />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl border transition-all duration-normal hover-lift ${item.highlight
                                        ? "bg-neon-blue/10 border-neon-blue/50 shadow-glow-sm"
                                        : "glass-strong border-white/10 hover:border-white/30"
                                    }`}>
                                    <div className={`text-sm font-bold mb-2 ${item.active || item.highlight ? "text-neon-blue" : "text-gray-500"
                                        }`}>
                                        {item.date}
                                    </div>
                                    <div className={`text-xl font-bold ${item.active || item.highlight ? "text-white" : "text-gray-400"
                                        }`}>
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
