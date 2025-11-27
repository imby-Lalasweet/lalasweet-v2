"use client";

import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

const scheduleItems = [
    { date: "11/7(금) ~ 11/30(일)", title: "서류 접수", startDate: "2025-11-07", endDate: "2025-11-30", active: false },
    { date: "12/3(수) 오후 2시", title: "서류 합격자 발표", startDate: "2025-12-03", endDate: "2025-12-03", active: false },
    { date: "12/5(금)", title: "비대면 사전인터뷰", startDate: "2025-12-05", endDate: "2025-12-05", active: false },
    { date: "12/8(월) 오후 2시", title: "사전인터뷰 합격자 발표", startDate: "2025-12-08", endDate: "2025-12-08", active: false },
    { date: "12/10(수) ~ 12/12(금)", title: "대면 인터뷰", startDate: "2025-12-10", endDate: "2025-12-12", active: false },
    { date: "12/15(수) 오후 2시", title: "최종 합격자 발표", startDate: "2025-12-15", endDate: "2025-12-15", active: false },
    { date: "12/22(월) ~ 3/20(금)", title: "인턴 기간", startDate: "2025-12-22", endDate: "2026-03-20", highlight: true, active: false },
];

export default function Schedule() {
    const [items, setItems] = useState(scheduleItems);

    useEffect(() => {
        const checkActiveStatus = () => {
            const now = new Date();
            // 한국 시간(KST) 기준으로 현재 날짜 계산 (UTC+9)
            const kstOffset = 9 * 60 * 60 * 1000;
                                </div >
                            </ScrollAnimation >
                        ))
}
                    </div >
                </div >
            </div >
        </section >
    );
}
