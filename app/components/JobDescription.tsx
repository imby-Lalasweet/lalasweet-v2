"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const jobs = [
    {
        title: "라라스윗 마케팅팀 전환셀",
        items: [
            "최신 광고 트렌드를 분석하여 인사이트를 도출하고, 이를 기반으로 콘텐츠를 기획합니다.",
            "상품별 마케팅 전략에 부합하는 레퍼런스를 수집하고, 핵심 원리를 도출합니다.",
            "고객 데이터 분석을 기반으로, 상품별 마케팅 전략 수립 과정에 참여합니다.",
        ],
    },
    {
        title: "라라스윗 마케팅팀 인지셀",
        items: [
            "SNS, 커뮤니티, 콘텐츠 플랫폼별 최신 트렌드를 분석하고 인사이트를 도출합니다.",
            "캠페인 목표에 부합하는 콘텐츠를 기획하고, 피드백 후 다음 개선 방향까지 제안합니다.",
            "고객 데이터 분석을 기반으로, 브랜드 메시지 전략 수립 과정에 참여합니다.",
        ],
    },
];

const commonRequirements = [
    "'감'이 아닌, 데이터와 마켓 인사이트를 기반으로, 본인만의 목표와 의도를 세우고 이를 바탕으로 콘텐츠를 기획한 경험이 있으신 분",
    "레퍼런스를 표면적으로 따라하기보다, '사람들이 왜 열광하는지' 핵심 원리를 정의하고 본인의 목표에 맞게 재구성해 본 경험이 있으신 분",
    "트렌드 및 고객 분석을 통해 인사이트를 정리한 경험이 있으신 분",
    "마케팅 캠페인의 성과를 측정하고 주체적으로 개선 시도까지 해본 경험이 있으신 분",
];

const commonPreferences = [
    "'그냥, 대충' 없이 '이건 내가 책임질 수 있다'고 말할 수 있는, 주도적이고 집요한 분",
    "실패를 겪더라도 빠르게 문제 정의하고 방향 수정하여, 최종 목표에 점진적으로 가까워질 수 있는 분",
    "탁월한 학습력으로 빠르게 피드백을 수용하고 성장 의지가 높은 분",
    "내/외부 인사이트를 바탕으로, 자신만의 논리와 시각을 갖고 리더를 설득할 수 있는 분",
];

export default function JobDescription() {
    const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="jd" className="py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    <span className="gradient-text">Job Description</span>
                </h2>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="rounded-3xl overflow-hidden glass-strong border border-white/10 hover-lift hover-glow transition-all duration-normal">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-all duration-normal group"
                            >
                                <span className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">{job.title}</span>
                                <ChevronDown
                                    className={`w-7 h-7 text-neon-blue transform transition-all duration-normal group-hover:scale-110 ${openIndices.includes(index) ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                ref={el => { contentRefs.current[index] = el }}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndices.includes(index) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0">
                                    <ul className="space-y-3 text-gray-300 list-disc pl-5 leading-relaxed">
                                        {job.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-strong p-10 rounded-3xl border border-white/10 hover-lift hover-glow transition-all duration-normal">
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-neon-blue rounded-full animate-pulse" />
                            공통 자격요건
                        </h3>
                        <ul className="space-y-4 text-gray-400 list-disc pl-5 text-base leading-relaxed break-keep">
                            {commonRequirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-neon-blue rounded-full" />
                            공통 우대사항
                        </h3>
                        <ul className="space-y-4 text-gray-400 list-disc pl-5 text-base mb-8 leading-relaxed break-keep">
                            {commonPreferences.map((pref, i) => (
                                <li key={i}>{pref}</li>
                            ))}
                        </ul>
                        <div className="bg-neon-blue/5 p-6 rounded-lg border border-neon-blue/10">
                            <p className="text-neon-blue text-sm font-medium leading-relaxed break-keep">
                                "라라스윗 마케팅팀은 성장 욕심 있는 사람과 함께하고 싶습니다. <br />
                                아직 완벽하지 않아도 괜찮아요. <br />
                                하지만 적어도 <span className="text-white font-bold">'왜 이렇게 할까요?', '다른 방식은 없을까요?'</span><br />라고 스스로 제안하는 사람을 찾고 있어요!"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Working Conditions */}
                <div className="mt-12 bg-zinc-900 p-8 rounded-xl text-center border border-white/5">
                    <h4 className="text-white font-bold mb-4 text-lg">근무 조건</h4>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-400 text-sm">
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                            급여 수준 : 월 220만원
                        </span>
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                            근무 시간 : 월-금 09:00 ~ 18:00 (휴게시간 포함)
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                        서울시 강남구 영동대로 333 (삼성역 도보 9분 거리 위치)
                    </p>
                </div>
            </div>
        </section>
    );
}
