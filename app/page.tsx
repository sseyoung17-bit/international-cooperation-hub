const metrics = [
  { label: "진행 중인 협력사업", value: "18", note: "5개 분야" },
  { label: "통번역 요청", value: "14", note: "이번 달 접수" },
  { label: "검토 대기", value: "5", note: "확인할 신청" },
  { label: "예정 일정", value: "5", note: "향후 30일" },
];

const sectors = [
  { name: "디지털 정부", value: 72, color: "bg-blue-700" },
  { name: "재난안전", value: 64, color: "bg-teal-700" },
  { name: "공공행정", value: 58, color: "bg-indigo-600" },
  { name: "주소", value: 46, color: "bg-sky-700" },
  { name: "새마을 운동", value: 34, color: "bg-amber-600" },
];

const partners = [
  { country: "조지아", field: "디지털 정부", progress: 72 },
  { country: "베트남", field: "주소 · 공공행정", progress: 61 },
  { country: "인도", field: "공공행정 · 재난안전", progress: 75 },
  { country: "인도네시아", field: "재난안전", progress: 58 },
  { country: "말레이시아", field: "주소", progress: 61 },
];

const activities = [
  { date: "10. 28", title: "재난안전 정책 면담 준비", partner: "인도네시아 · 면담" },
  { date: "10. 24", title: "디지털정부 협력 의제 검토", partner: "조지아 · 실무회의" },
  { date: "10. 21", title: "주소정보 정책자료 정리", partner: "베트남 · 자료교환" },
];

const countries =
  "조지아 · 이집트 · 우즈베키스탄 · 베트남 · 인도 · 인도네시아 · 말레이시아 · 뉴질랜드 · 사우디아라비아 · 체코 · 미국 · 일본 · 중국 · 호주 · 독일 · 영국 · 아르헨티나";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f6f4] text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-[#172b3b] px-5 py-7 text-white lg:flex">
        <div className="mb-12 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d8e8e3] text-sm font-bold text-[#172b3b]">
            IC
          </div>
          <div>
            <p className="text-sm font-semibold">국제협력 업무허브</p>
            <p className="mt-1 text-xs text-slate-400">협력과 소통을 한눈에</p>
          </div>
        </div>

        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Workspace
        </p>
        <nav className="space-y-1 text-sm">
          <div className="rounded-lg bg-white/10 px-3 py-2.5 font-medium text-white">
            업무 대시보드
          </div>
          <div className="px-3 py-2.5 text-slate-400">통번역 지원</div>
          <div className="px-3 py-2.5 text-slate-400">국제협력 사업</div>
          <div className="px-3 py-2.5 text-slate-400">국가·기구 협력</div>
          <div className="px-3 py-2.5 text-slate-400">분야별 용어집</div>
          <div className="px-3 py-2.5 text-slate-400">아카이브</div>
        </nav>

        <div className="mt-auto border-t border-white/10 pt-5 text-xs leading-5 text-slate-400">
          시제품 화면
          <br />
          사업 및 활동 내용은 가상 예시
        </div>
      </aside>

      <div className="lg:ml-64">
        <header className="flex h-[68px] items-center justify-between border-b border-slate-200/80 bg-white/85 px-5 sm:px-8">
          <p className="text-xs text-slate-500">국제협력 업무허브 / 대시보드</p>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[11px] text-slate-500">
              가상 업무 데이터
            </span>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[#e3ece8] text-xs font-semibold text-[#284d48]">
              담
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wide text-slate-500">
                INTERNATIONAL COOPERATION · OCTOBER 2026
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-[#172b3b] sm:text-3xl">
                국제협력 업무 현황
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                통번역 요청과 협력사업의 흐름을 확인합니다.
              </p>
            </div>
            <p className="text-xs text-slate-500">국가·기구명은 실제 업무 맥락 반영</p>
          </div>

          <div className="mb-6 rounded-xl border border-[#dce7e1] bg-[#edf3ef] px-4 py-3 text-xs leading-5 text-[#405d52]">
            화면에 표시된 사업명, 활동, 성과 및 진행률은 시제품 확인을 위한 가상 예시입니다.
          </div>

          <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item, index) => (
              <article
                key={item.label}
                className="rounded-xl border border-slate-200/80 bg-white p-5"
              >
                <p className="text-xs text-slate-500">{item.label}</p>
                <div className="mt-4 flex items-end justify-between">
                  <p className="text-3xl font-semibold tracking-tight text-[#172b3b]">
                    {item.value}
                  </p>
                  <span
                    className={`mb-1 h-2 w-2 rounded-full ${
                      index === 2 ? "bg-amber-500" : "bg-teal-700"
                    }`}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-400">{item.note}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-[#172b3b]">협력 분야</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    사업 단계별 완료율 · 가상 예시
                  </p>
                </div>
                <span className="text-[11px] text-slate-400">2026</span>
              </div>

              <div className="space-y-5">
                {sectors.map((sector) => (
                  <div key={sector.name}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="font-medium text-slate-700">{sector.name}</span>
                      <span className="tabular-nums text-slate-500">{sector.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${sector.color}`}
                        style={{ width: `${sector.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-100 pt-5">
                <h3 className="text-xs font-semibold text-slate-700">
                  협력국가
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{countries}</p>
                <h3 className="mt-5 text-xs font-semibold text-slate-700">
                  국제기구·지역협력체
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  ASEAN · APEC · IDB · UNDRR
                </p>
              </div>
            </article>

            <article className="rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
              <div className="mb-5">
                <h2 className="text-sm font-semibold text-[#172b3b]">국가별 협력 현황</h2>
                <p className="mt-1 text-xs text-slate-500">
                  사업 진행률 · 가상 예시
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {partners.map((partner) => (
                  <div key={partner.country} className="py-4 first:pt-1">
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {partner.country}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-400">{partner.field}</p>
                      </div>
                      <span className="text-xs tabular-nums text-slate-500">
                        {partner.progress}%
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-[#39766e]"
                        style={{ width: `${partner.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-5 rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-[#172b3b]">최근 업무 기록</h2>
              <p className="mt-1 text-xs text-slate-500">모두 가상 예시입니다.</p>
            </div>
            <div className="grid gap-1 sm:grid-cols-3">
              {activities.map((activity) => (
                <div key={activity.title} className="border-t border-slate-100 py-4 sm:px-3">
                  <p className="text-[11px] text-slate-400">{activity.date}</p>
                  <p className="mt-2 text-xs font-medium text-slate-700">{activity.title}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{activity.partner}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}