"use client";

import { useState } from "react";
import Image from "next/image";

const interviews = [
    {
        id: "conversion",
        name: "윤영은님",
        role: "전환셀",
        icon: "/team_icon_icecream.png",
        summary: "라라스윗 전환셀은 데이터를 기반으로 끊임없이 가설을 세우고, 검증하고, 더 나은 성과를 만드는 조직입니다.",
        content:
            '단순히 광고만 집행하는 게 아니라, D2C 매출 극대화를 위한 캠페인 전체를 기획·운영합니다.\n' +
            '상품 기획 단계부터 프로모션, 판매 메시지, 콘텐츠, 광고 전략까지 "이 고객이 왜 이 제품을 지금 사야 하는가"를 설득하는 전략의 A-Z를 설계합니다.\n\n' +
            '함께하는 셀원들은,\n• 오늘의집, 감탄브라, 안다르 등 국내 대표 커머스 브랜드를 성장시킨 온라인 마케팅 전문가부터\n• 카카오웹툰 등에서 콘텐츠로 성과를 만들어 낸 전략형 마케터까지\n\n' +
            '각자의 무기로 브랜드 성장을 견인하는 멋진 동료들이 모여있습니다.\n\n' +
            '자신의 전략으로 눈에 보이는 성과를 만들어 내고 싶은,\n성장 욕심 가득한 예비 마케터 분들을 환영합니다!',
    },
    {
        id: "awareness",
        name: "최서은님",
        role: "인지셀",
        icon: "/team_icon_donut.png",
        summary: '라라스윗 인지셀은 브랜드가 "사람들 머릿속에 각인되는 방식"을 설계 하는 팀입니다.',
        content:
            '단순히 예쁜 콘텐츠를 만드는 것이 아니라,\n"왜 사람들이 이 브랜드를 인지하고 탐색하게 되는가"를 끝까지 파고듭니다.\n' +
            '고객이 열광하는 포인트를 분석하고, 이를 기반으로 브랜드 메시지 전략과 확산 방법론을 설계합니다.\n\n' +
            '특히 라라스윗 인지셀은 단순한 조회수나 노출이 아닌,\n"온라인에서 콘텐츠를 본 고객들로 하여금 오프라인에서 실제로 구매하게 만드는" 마케팅 방법론 발굴에 집중하고 있어요.\n\n' +
            '감이 아닌 논리로 본인만의 콘텐츠를 설계하고,\n결과로 말하는 콘텐츠 마케팅을 경험하고 싶은 모든 분을 환영합니다!',
    },
];

export default function Team() {
    const [activeTab, setActiveTab] = useState("conversion");

    return (
        <section id="team" className="py-32 bg-deep-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    <span className="gradient-text">마케팅팀</span>
                </h2>

                {/* Enhanced Intro Section */}
                <div className="mb-20 text-center glass-dark rounded-3xl p-10 md:p-12 hover-lift">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
                        "고객 관점에서 출발해, <span className="gradient-text">데이터로 증명하는 팀</span>"
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
                        저희는 수많은 A/B 테스트 대신, 고객에 대한 단 하나의 명확한 가설에서 시작합니다.<br /><br />
                        고객이 무엇에 열광할지, 단 하나의 답을 먼저 정의하고, 그 가설이 맞는지 결과로 검증합니다.<br /><br />
                        <span className="text-white font-bold text-xl">"우리의 고객은 누구고, 그들이 진짜 원하는 건 뭘까?"</span><br /><br />
                        이 질문을 놓지 않고 끝까지 고민하며 성장할, 예비 마케터 여러분들을 기다리고 있습니다 :)
                    </p>
                </div>

                {/* Enhanced Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="glass p-1.5 rounded-full inline-flex gap-2 shadow-elevated">
                        {interviews.map((interview) => (
                            <button
                                key={interview.id}
                                onClick={() => setActiveTab(interview.id)}
                                className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-normal ${activeTab === interview.id
                                        ? "bg-neon-blue text-black shadow-glow-md scale-105"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {interview.name} ({interview.role})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Enhanced Content Cards */}
                <div className="min-h-[500px]">
                    {interviews.map((interview) => (
                        <div
                            key={interview.id}
                            className={`transition-all duration-slow ${activeTab === interview.id ? "block animate-fade-in-up" : "hidden"
                                }`}
                        >
                            {/* Header Card with Glassmorphism */}
                            <div className="glass-strong rounded-3xl p-10 mb-8 flex flex-col md:flex-row items-center gap-8 border border-neon-blue/20 hover-lift hover-glow group">
                                {/* Animated Icon */}
                                <div className="relative w-40 h-40 shrink-0 group-hover:scale-110 transition-transform duration-normal">
                                    <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-normal" />
                                    <Image
                                        src={interview.icon}
                                        alt={interview.name}
                                        fill
                                        className="object-contain relative z-10 drop-shadow-2xl"
                                    />
                                </div>

                                <div className="text-left flex-1">
                                    <h3 className="text-3xl font-bold mb-3 flex items-center gap-3">
                                        <span className="gradient-text">{interview.name}</span>
                                        <span className="text-lg font-medium text-gray-400">({interview.role})</span>
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {interview.summary}
                                    </p>
                                </div>
                            </div>

                            {/* Body Text with Enhanced Typography */}
                            <div className="px-4 md:px-10">
                                <p className="text-gray-300 leading-loose whitespace-pre-wrap text-lg md:text-xl">
                                    {interview.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
