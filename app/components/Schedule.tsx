"use client";

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
        <section id="schedule" className="py-24 bg-deep-dark">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Recruitment Schedule
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-zinc-800 md:left-1/2 md:-ml-px" />

                    <div className="space-y-12">
                        {scheduleItems.map((item, index) => (
                            <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Dot */}
                                <div className={`absolute left-0 w-10 h-10 rounded-full border-4 flex items-center justify-center z-10 md:left-1/2 md:-translate-x-1/2 ${item.active
                                        ? "bg-black border-neon-blue shadow-[0_0_15px_rgba(0,199,242,0.5)]"
                                        : item.highlight
                                            ? "bg-neon-blue border-neon-blue"
                                            : "bg-black border-zinc-700"
                                    }`}>
                                    <div className={`w-3 h-3 rounded-full ${item.active || item.highlight ? "bg-white" : "bg-zinc-700"
                                        }`} />
                                </div>

                                {/* Content Spacer for Desktop */}
                                <div className="hidden md:block w-5/12" />

                                {/* Content */}
                                <div className="ml-16 md:ml-0 w-full md:w-5/12">
                                    <div className={`p-6 rounded-xl border transition-all duration-300 hover:border-neon-blue/30 ${item.active
                                            ? "bg-zinc-900/80 border-neon-blue/50"
                                            : item.highlight
                                                ? "bg-neon-blue/10 border-neon-blue/20"
                                                : "bg-zinc-900/50 border-white/5"
                                        }`}>
                                        <div className={`text-sm font-bold mb-1 ${item.active || item.highlight ? "text-neon-blue" : "text-gray-500"
                                            }`}>
                                            {item.date}
                                        </div>
                                        <div className={`text-lg font-bold ${item.active || item.highlight ? "text-white" : "text-gray-400"
                                            }`}>
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
