"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "필수 제출 서류는 무엇인가요?",
        answer: "온라인 마케팅 인턴십 9기 채용은 아래 2가지 서류를 필수 제출 서류로 받고 있습니다.\n\n1. 자유 양식의 이력서\n2. 자유 양식의 포트폴리오\n\n포트폴리오 작성에 어려움이 있으신 경우, 라라스윗 포트폴리오 가이드를 참고하시어 작성 및 제출 부탁 드립니다. 해당 가이드는 지원하기 페이지 내 제출 서류칸에서 확인하실 수 있습니다."
    },
    {
        question: "비대면 사전인터뷰는 어떻게 진행되나요?",
        answer: "비대면 사전인터뷰는 서류합격자 대상으로 약 1시간 내외 진행되는 화상 형식의 인터뷰 전형으로, 더 많은 후보자분들과 말씀 나누며 개인 역량과 강점을 살펴보기 위해 8기 선발부터 새롭게 도입되었습니다.\n\n응시 대상자에게는 인터넷 환경에서 접속 가능한 응시링크 및 상세 매뉴얼을 개별 메일 통해 전달 드릴 예정이며, 원활한 소통을 위해 웹캠 및 마이크 사용이 가능한 PC 접속과 조용한 공간에서의 참여를 권장 드립니다."
    },
    {
        question: "휴학생도 지원이 가능한가요?",
        answer: "본 채용은 채용전환형 인턴십 프로그램으로, '인턴 수습 후 정규직 전환에 어려움이 없는 지원자'를 대상으로 하고 있습니다.\n\n따라서 재학/휴학 상태와 관계없이, 위 전환형 프로세스로 정식 입사가 가능한 분이라면 채용지원이 가능합니다."
    },
    {
        question: "합류하게 될 셀은 직접 선택할 수 있나요?",
        answer: "온라인 마케팅 인턴십 9기는 셀을 구분하지 않고 공통으로 모집합니다. 합류하실 셀은 채용 과정에서 확인된 지원자분의 역량과 강점을 종합적으로 고려해 결정됩니다.\n\n각자의 장점이 가장 잘 발휘될 수 있는 셀에 합류하실 수 있도록 신중히 검토하고 있으니 참고 부탁드립니다."
    },
    {
        question: "지원 결과는 합불여부 관계 없이 모두 안내 받을 수 있나요?",
        answer: "네, 각 전형별 결과는 메일 통해 일괄 안내 드릴 예정입니다.\n\n많은 관심 부탁 드리며, 추가적인 문의사항은 recruit@lalasweet.kr 로 문의 부탁 드립니다."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    FAQ
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/10 last:border-none">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between py-6 text-left hover:text-neon-blue transition-colors group"
                            >
                                <span className="text-lg font-medium pr-8 group-hover:text-neon-blue transition-colors">Q. {faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 group-hover:text-neon-blue transition-all duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                ref={el => { contentRefs.current[index] = el }}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="pb-8 text-gray-400 leading-relaxed whitespace-pre-line">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
