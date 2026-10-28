/* =========================================================
   1. 샘플 데이터
   실제 업무에 사용할 때 이 부분의 데이터만 수정하면 됩니다.
========================================================= */

const cooperationData = [
  {
    id: 1,
    country: "인도",
    englishName: "India",
    flag: "🇮🇳",
    region: "Asia",
    regionKorean: "아시아",
    lat: 28.6139,
    lng: 77.209,
    types: ["지방행정", "재난안전", "정책교류"],
    projects: 3,
    mous: 1,
    visits: 4,
    status: "active",
    statusText: "진행 중",
    organization: "주택도시부·판차야티라지부·CDRI",
    description:
      "도시화, 지방자치, 지역균형발전 및 재난복원력 분야를 중심으로 정책교류를 추진하고 있습니다.",
    activities: [
      {
        date: "2026.06",
        text: "행정안전부 고위급 대표단 인도 방문"
      },
      {
        date: "2026.06",
        text: "CDRI와 재난복원력 협력방안 논의"
      },
      {
        date: "2025.11",
        text: "지방행정 정책 온라인 세미나 개최"
      }
    ]
  },
  {
    id: 2,
    country: "우즈베키스탄",
    englishName: "Uzbekistan",
    flag: "🇺🇿",
    region: "Asia",
    regionKorean: "아시아",
    lat: 41.2995,
    lng: 69.2401,
    types: ["디지털정부", "재난안전", "인사행정"],
    projects: 4,
    mous: 2,
    visits: 5,
    status: "active",
    statusText: "진행 중",
    organization: "디지털기술부·공공행정기관",
    description:
      "디지털정부, 공공행정 혁신, 재난관리 역량 강화와 관련한 협력을 추진하고 있습니다.",
    activities: [
      {
        date: "2026.06",
        text: "한–우즈베키스탄 공공행정협력포럼 개최"
      },
      {
        date: "2026.06",
        text: "디지털정부 협력센터 개소"
      },
      {
        date: "2025.09",
        text: "재난관리 전문가 교류"
      }
    ]
  },
  {
    id: 3,
    country: "필리핀",
    englishName: "Philippines",
    flag: "🇵🇭",
    region: "Asia",
    regionKorean: "아시아",
    lat: 14.5995,
    lng: 120.9842,
    types: ["지방행정", "재난안전"],
    projects: 3,
    mous: 1,
    visits: 3,
    status: "active",
    statusText: "진행 중",
    organization: "내무지방정부부",
    description:
      "지방자치, 지역균형발전, 소방 및 재난안전 분야의 정책경험을 공유하고 있습니다.",
    activities: [
      {
        date: "2026.07",
        text: "필리핀 내무지방정부부 대표단 면담"
      },
      {
        date: "2026.02",
        text: "재난안전 협력 실무협의"
      },
      {
        date: "2025.10",
        text: "지방정부 역량강화 세미나"
      }
    ]
  },
  {
    id: 4,
    country: "일본",
    englishName: "Japan",
    flag: "🇯🇵",
    region: "Asia",
    regionKorean: "아시아",
    lat: 35.6762,
    lng: 139.6503,
    types: ["재난안전", "지방행정"],
    projects: 2,
    mous: 1,
    visits: 2,
    status: "completed",
    statusText: "완료",
    organization: "총무성·내각부",
    description:
      "지진, 홍수 및 복합재난 대응과 지방행정 혁신사례를 중심으로 교류했습니다.",
    activities: [
      {
        date: "2025.12",
        text: "한·일 재난안전 정책회의"
      },
      {
        date: "2025.05",
        text: "지방행정 혁신사례 공동연구"
      }
    ]
  },
  {
    id: 5,
    country: "이탈리아",
    englishName: "Italy",
    flag: "🇮🇹",
    region: "Europe",
    regionKorean: "유럽",
    lat: 41.9028,
    lng: 12.4964,
    types: ["지방행정", "정책교류"],
    projects: 2,
    mous: 1,
    visits: 3,
    status: "active",
    statusText: "진행 중",
    organization: "공공행정부·시민보호부",
    description:
      "사회연대경제와 지방행정 혁신 및 재난대응 분야의 협력 확대를 추진하고 있습니다.",
    activities: [
      {
        date: "2026.06",
        text: "사회연대경제 협력 관련 고위급 면담"
      },
      {
        date: "2026.03",
        text: "재난안전 정책자료 교환"
      }
    ]
  },
  {
    id: 6,
    country: "노르웨이",
    englishName: "Norway",
    flag: "🇳🇴",
    region: "Europe",
    regionKorean: "유럽",
    lat: 59.9139,
    lng: 10.7522,
    types: ["디지털정부", "지방행정"],
    projects: 1,
    mous: 0,
    visits: 2,
    status: "planned",
    statusText: "예정",
    organization: "지방정부지역개발부",
    description:
      "디지털 공공서비스 및 지방정부 혁신 분야의 신규 협력 가능성을 검토하고 있습니다.",
    activities: [
      {
        date: "2026.09",
        text: "디지털정부 정책대화 개최 예정"
      },
      {
        date: "2026.08",
        text: "협력의제 사전 실무협의 예정"
      }
    ]
  },
  {
    id: 7,
    country: "미국",
    englishName: "United States",
    flag: "🇺🇸",
    region: "Americas",
    regionKorean: "미주",
    lat: 38.9072,
    lng: -77.0369,
    types: ["재난안전", "디지털정부", "정책교류"],
    projects: 3,
    mous: 1,
    visits: 4,
    status: "active",
    statusText: "진행 중",
    organization: "FEMA·국토안보부",
    description:
      "재난대응, 위기관리, 인공지능 기반 행정서비스 분야의 정책교류를 진행하고 있습니다.",
    activities: [
      {
        date: "2026.05",
        text: "재난대응 전문가 정책협의"
      },
      {
        date: "2026.03",
        text: "AI 기반 공공서비스 세미나"
      }
    ]
  },
  {
    id: 8,
    country: "페루",
    englishName: "Peru",
    flag: "🇵🇪",
    region: "Americas",
    regionKorean: "미주",
    lat: -12.0464,
    lng: -77.0428,
    types: ["디지털정부", "재난안전"],
    projects: 2,
    mous: 1,
    visits: 1,
    status: "planned",
    statusText: "예정",
    organization: "총리실·재난관리기관",
    description:
      "전자정부와 지진·홍수 대응 역량강화를 위한 신규 협력사업을 준비하고 있습니다.",
    activities: [
      {
        date: "2026.10",
        text: "재난관리 역량강화 연수 예정"
      },
      {
        date: "2026.08",
        text: "디지털정부 협력사업 착수협의"
      }
    ]
  },
  {
    id: 9,
    country: "호주",
    englishName: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    regionKorean: "오세아니아",
    lat: -35.2809,
    lng: 149.13,
    types: ["재난안전", "정책교류"],
    projects: 2,
    mous: 0,
    visits: 2,
    status: "active",
    statusText: "진행 중",
    organization: "국가비상관리청",
    description:
      "산불, 폭염 및 신종재난 대응을 위한 정보공유와 전문가 교류를 추진하고 있습니다.",
    activities: [
      {
        date: "2026.04",
        text: "산불 및 폭염 대응 정책회의"
      },
      {
        date: "2025.12",
        text: "APEC 재난관리 실무협의"
      }
    ]
  },
  {
    id: 10,
    country: "UNDRR",
    englishName: "United Nations Office for Disaster Risk Reduction",
    flag: "🇺🇳",
    region: "International",
    regionKorean: "국제기구",
    lat: 46.2044,
    lng: 6.1432,
    types: ["재난안전", "정책교류"],
    projects: 4,
    mous: 1,
    visits: 5,
    status: "active",
    statusText: "진행 중",
    organization: "UNDRR 본부·동북아사무소",
    description:
      "재난위험경감, 과학기술 기반 재난관리 및 국제연수 분야에서 협력하고 있습니다.",
    activities: [
      {
        date: "2026.06",
        text: "APEC 신종재난·AI 전환 워크숍 공동 참여"
      },
      {
        date: "2026.04",
        text: "과학기술 기반 재난관리 사례집 발간"
      },
      {
        date: "2026.01",
        text: "국제협력 약정 검토"
      }
    ]
  },
  {
    id: 11,
    country: "OECD",
    englishName: "Organisation for Economic Co-operation and Development",
    flag: "🏛️",
    region: "International",
    regionKorean: "국제기구",
    lat: 48.8566,
    lng: 2.3522,
    types: ["디지털정부", "지방행정", "정책교류"],
    projects: 2,
    mous: 0,
    visits: 3,
    status: "active",
    statusText: "진행 중",
    organization: "OECD 공공거버넌스국",
    description:
      "디지털정부, 정부혁신 및 지역발전 정책을 중심으로 국제적 정책논의에 참여하고 있습니다.",
    activities: [
      {
        date: "2026.05",
        text: "공공거버넌스 정책위원회 참석"
      },
      {
        date: "2026.02",
        text: "정부혁신 우수사례 제출"
      }
    ]
  }
];

const events = [
  {
    day: "22",
    month: "JUL",
    title: "한–필리핀 지방행정 정책회의",
    location: "세종 · 대면회의",
    type: "양자협력"
  },
  {
    day: "05",
    month: "AUG",
    title: "APEC 재난관리 실무그룹 회의",
    location: "온라인 회의",
    type: "다자회의"
  },
  {
    day: "18",
    month: "AUG",
    title: "디지털정부 협력사업 착수회의",
    location: "페루 · 화상회의",
    type: "ODA 사업"
  },
  {
    day: "09",
    month: "SEP",
    title: "OECD 공공거버넌스 정책대화",
    location: "프랑스 파리",
    type: "국제기구"
  },
  {
    day: "21",
    month: "SEP",
    title: "한–노르웨이 디지털정부 포럼",
    location: "노르웨이 오슬로",
    type: "정책포럼"
  }
];

const recentTasks = [
  {
    title: "국제회의 영문자료 검수",
    description: "필리핀 대표단 면담자료 및 환영사",
    due: "7월 17일",
    progress: 85
  },
  {
    title: "재난안전 협력사업 기획",
    description: "페루 재난대응 역량강화 사업",
    due: "7월 22일",
    progress: 60
  },
  {
    title: "MOU 후속조치 점검",
    description: "우즈베키스탄 공공행정 협력",
    due: "7월 25일",
    progress: 45
  },
  {
    title: "APEC 회의 결과보고",
    description: "신종재난 및 AI 전환 워크숍",
    due: "7월 29일",
    progress: 92
  }
];

const chartData = {
  meetings: {
    label: "국제회의",
    values: [18, 24, 31, 38, 44]
  },
  projects: {
    label: "협력사업",
    values: [8, 11, 15, 18, 23]
  },
  visits: {
    label: "고위급 교류",
    values: [5, 8, 11, 14, 17]
  }
};

/* =========================================================
   2. 기본 변수
========================================================= */

let map;
let cooperationChart;
let markerLayer;
let filteredCountries = [...cooperationData];
let selectedCountryId = null;
let eventsExpanded = false;

const countryCountElement = document.getElementById("countryCount");
const projectCountElement = document.getElementById("projectCount");
const mouCountElement = document.getElementById("mouCount");
const eventCountElement = document.getElementById("eventCount");

const countryTableBody = document.getElementById("countryTableBody");
const countryDetail = document.getElementById("countryDetail");
const resultCount = document.getElementById("resultCount");
const eventList = document.getElementById("eventList");
const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const typeFilter = document.getElementById("typeFilter");
const chartMetric = document.getElementById("chartMetric");

/* =========================================================
   3. 지도 생성
========================================================= */

function initializeMap() {
  map = L.map("map", {
    center: [25, 35],
    zoom: 2,
    minZoom: 2,
    maxZoom: 8,
    worldCopyJump: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);

  renderMarkers(cooperationData);
}

function getMarkerClass(status) {
  if (status === "completed") {
    return "marker-completed";
  }

  if (status === "planned") {
    return "marker-planned";
  }

  return "marker-active";
}

function createMarkerIcon(country) {
  return L.divIcon({
    className: "",
    html: `
      <div class="custom-map-marker ${getMarkerClass(country.status)}">
        ${country.flag}
      </div>
    `,
    iconSize: [31, 31],
    iconAnchor: [15, 15],
    popupAnchor: [0, -16]
  });
}

function renderMarkers(countries) {
  markerLayer.clearLayers();

  countries.forEach((country) => {
    const marker = L.marker([country.lat, country.lng], {
      icon: createMarkerIcon(country)
    });

    marker.bindPopup(`
      <div class="map-popup">
        <h4>${country.flag} ${country.country}</h4>
        <p>${country.types.join(" · ")}</p>

        <button
          type="button"
          class="popup-button"
          onclick="selectCountry(${country.id})"
        >
          상세정보 보기
        </button>
      </div>
    `);

    marker.on("click", () => {
      selectedCountryId = country.id;
    });

    marker.addTo(markerLayer);
  });
}

/* =========================================================
   4. 요약 카드
========================================================= */

function updateSummaryCards(countries) {
  const projectTotal = countries.reduce(
    (total, country) => total + country.projects,
    0
  );

  const mouTotal = countries.reduce(
    (total, country) => total + country.mous,
    0
  );

  animateNumber(countryCountElement, countries.length);
  animateNumber(projectCountElement, projectTotal);
  animateNumber(mouCountElement, mouTotal);
  animateNumber(eventCountElement, events.length);
}

function animateNumber(element, target) {
  const duration = 500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = Math.floor(target * progress);

    element.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* =========================================================
   5. 국가별 테이블
========================================================= */

function renderCountryTable(countries) {
  resultCount.textContent = `${countries.length}개 결과`;

  if (countries.length === 0) {
    countryTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:35px;">
          조건에 맞는 협력정보가 없습니다.
        </td>
      </tr>
    `;

    return;
  }

  countryTableBody.innerHTML = countries
    .map(
      (country) => `
        <tr onclick="selectCountry(${country.id})">
          <td>
            <div class="table-country">
              <span class="table-flag">${country.flag}</span>

              <div>
                <strong>${country.country}</strong>
                <span>${country.englishName}</span>
              </div>
            </div>
          </td>

          <td>${country.regionKorean}</td>
          <td>${country.types.slice(0, 2).join(" · ")}</td>
          <td>${country.projects}</td>
          <td>${country.mous}</td>

          <td>
            <span class="table-status ${getStatusClass(country.status)}">
              ${country.statusText}
            </span>
          </td>
        </tr>
      `
    )
    .join("");
}

function getStatusClass(status) {
  if (status === "completed") {
    return "status-completed";
  }

  if (status === "planned") {
    return "status-planned";
  }

  return "status-active";
}

/* =========================================================
   6. 국가 상세정보
========================================================= */

function selectCountry(id) {
  const country = cooperationData.find((item) => item.id === id);

  if (!country) {
    return;
  }

  selectedCountryId = id;

  countryDetail.innerHTML = `
    <div class="country-detail-content">
      <div class="country-heading">
        <span class="country-flag">${country.flag}</span>

        <div>
          <h3>${country.country}</h3>
          <p>${country.englishName}</p>
        </div>

        <span class="status-badge ${getStatusClass(country.status)}">
          ${country.statusText}
        </span>
      </div>

      <div class="detail-stats">
        <div class="detail-stat">
          <strong>${country.projects}</strong>
          <span>협력사업</span>
        </div>

        <div class="detail-stat">
          <strong>${country.mous}</strong>
          <span>MOU</span>
        </div>

        <div class="detail-stat">
          <strong>${country.visits}</strong>
          <span>주요 교류</span>
        </div>
      </div>

      <section class="detail-section">
        <h4>주요 협력기관</h4>
        <p>${country.organization}</p>
      </section>

      <section class="detail-section">
        <h4>협력 개요</h4>
        <p>${country.description}</p>
      </section>

      <section class="detail-section">
        <h4>협력 분야</h4>

        <div class="tag-list">
          ${country.types
            .map((type) => `<span class="tag">${type}</span>`)
            .join("")}
        </div>
      </section>

      <section class="detail-section">
        <h4>주요 활동</h4>

        <div class="detail-timeline">
          ${country.activities
            .map(
              (activity) => `
                <div class="timeline-item">
                  <strong>${activity.date}</strong>
                  <span>${activity.text}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;

  map.flyTo([country.lat, country.lng], 5, {
    duration: 1.1
  });

  showToast(`${country.country} 협력정보를 불러왔습니다.`, country.flag);

  if (window.innerWidth <= 600) {
    countryDetail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

window.selectCountry = selectCountry;

/* =========================================================
   7. 검색 및 필터
========================================================= */

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedRegion = regionFilter.value;
  const selectedType = typeFilter.value;

  filteredCountries = cooperationData.filter((country) => {
    const searchableText = [
      country.country,
      country.englishName,
      country.organization,
      country.description,
      ...country.types
    ]
      .join(" ")
      .toLowerCase();

    const matchesKeyword =
      keyword === "" || searchableText.includes(keyword);

    const matchesRegion =
      selectedRegion === "all" || country.region === selectedRegion;

    const matchesType =
      selectedType === "all" || country.types.includes(selectedType);

    return matchesKeyword && matchesRegion && matchesType;
  });

  renderCountryTable(filteredCountries);
  renderMarkers(filteredCountries);
  updateSummaryCards(filteredCountries);

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];

    map.flyTo([country.lat, country.lng], 5, {
      duration: 1
    });
  } else if (filteredCountries.length > 1) {
    const bounds = L.latLngBounds(
      filteredCountries.map((country) => [country.lat, country.lng])
    );

    map.fitBounds(bounds, {
      padding: [45, 45],
      maxZoom: 4
    });
  }
}

searchInput.addEventListener("input", applyFilters);
regionFilter.addEventListener("change", applyFilters);
typeFilter.addEventListener("change", applyFilters);

/* =========================================================
   8. 국제행사 목록
========================================================= */

function renderEvents() {
  const visibleEvents = eventsExpanded ? events : events.slice(0, 4);

  eventList.innerHTML = visibleEvents
    .map(
      (event) => `
        <div class="event-item">
          <div class="event-date">
            <strong>${event.day}</strong>
            <span>${event.month}</span>
          </div>

          <div class="event-info">
            <strong>${event.title}</strong>
            <span>📍 ${event.location}</span>
          </div>

          <span class="event-type">${event.type}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("showAllEvents").textContent = eventsExpanded
    ? "접기"
    : "전체 보기";
}

document
  .getElementById("showAllEvents")
  .addEventListener("click", () => {
    eventsExpanded = !eventsExpanded;
    renderEvents();
  });

/* =========================================================
   9. 최근 업무
========================================================= */

function renderTasks() {
  taskList.innerHTML = recentTasks
    .map(
      (task) => `
        <div class="task-item">
          <div class="task-top">
            <strong>${task.title}</strong>
            <span>${task.progress}%</span>
          </div>

          <p>${task.description} · ${task.due}</p>

          <div class="progress-track">
            <div
              class="progress-bar"
              style="width:${task.progress}%"
            ></div>
          </div>
        </div>
      `
    )
    .join("");
}

/* =========================================================
   10. 차트
========================================================= */

function initializeChart() {
  const canvas = document.getElementById("cooperationChart");
  const context = canvas.getContext("2d");

  cooperationChart = new Chart(context, {
    type: "bar",

    data: {
      labels: ["2022", "2023", "2024", "2025", "2026"],
      datasets: [
        {
          label: chartData.meetings.label,
          data: chartData.meetings.values,
          backgroundColor: "rgba(23, 105, 224, 0.72)",
          borderColor: "rgba(23, 105, 224, 1)",
          borderWidth: 1,
          borderRadius: 7,
          maxBarThickness: 45
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      animation: {
        duration: 700
      },

      plugins: {
        legend: {
          display: false
        },

        tooltip: {
          padding: 10,
          displayColors: false,
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.raw}건`;
            }
          }
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          },

          ticks: {
            font: {
              size: 10
            }
          }
        },

        y: {
          beginAtZero: true,

          grid: {
            color: "rgba(120, 135, 155, 0.14)"
          },

          ticks: {
            precision: 0,
            font: {
              size: 9
            }
          }
        }
      }
    }
  });
}

function updateChart(metric) {
  const selectedData = chartData[metric];

  cooperationChart.data.datasets[0].label = selectedData.label;
  cooperationChart.data.datasets[0].data = selectedData.values;
  cooperationChart.update();

  showToast(`${selectedData.label} 실적으로 변경했습니다.`, "📊");
}

chartMetric.addEventListener("change", (event) => {
  updateChart(event.target.value);
});

/* =========================================================
   11. 시계
========================================================= */

function updateClock() {
  const now = new Date();

  const timeText = new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul"
  }).format(now);

  document.getElementById("currentTime").textContent = timeText;
}

setInterval(updateClock, 1000);
updateClock();

/* =========================================================
   12. 다크모드
========================================================= */

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  darkModeButton.textContent = isDarkMode ? "☀️" : "🌙";

  localStorage.setItem("moisDashboardDarkMode", String(isDarkMode));

  showToast(
    isDarkMode ? "다크모드로 변경했습니다." : "라이트모드로 변경했습니다.",
    isDarkMode ? "🌙" : "☀️"
  );
});

function loadDarkModePreference() {
  const savedDarkMode =
    localStorage.getItem("moisDashboardDarkMode") === "true";

  if (savedDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "☀️";
  }
}

/* =========================================================
   13. 사이드바와 메뉴
========================================================= */

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const mobileMenuButton = document.getElementById("mobileMenuButton");

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
}

mobileMenuButton.addEventListener("click", openSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const sectionName = button.dataset.section;

    const messages = {
      dashboard: "종합 현황을 표시합니다.",
      map: "협력 지도로 이동합니다.",
      countries: "국가별 협력 현황으로 이동합니다.",
      events: "국제행사 현황으로 이동합니다.",
      mou: "MOU 현황은 요약 카드와 국가별 표에서 확인할 수 있습니다.",
      projects: "협력사업 현황은 국가별 표와 상세정보에서 확인할 수 있습니다."
    };

    const scrollTargets = {
      dashboard: ".welcome-section",
      map: ".map-panel",
      countries: ".country-table-panel",
      events: ".events-panel",
      mou: ".summary-grid",
      projects: ".country-table-panel"
    };

    const target = document.querySelector(scrollTargets[sectionName]);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    showToast(messages[sectionName], "✓");
    closeSidebar();
  });
});

/* =========================================================
   14. 전체 초기화
========================================================= */

document.getElementById("resetButton").addEventListener("click", () => {
  searchInput.value = "";
  regionFilter.value = "all";
  typeFilter.value = "all";

  filteredCountries = [...cooperationData];

  renderCountryTable(filteredCountries);
  renderMarkers(filteredCountries);
  updateSummaryCards(filteredCountries);

  countryDetail.innerHTML = `
    <div class="detail-placeholder">
      <div class="placeholder-icon">🌐</div>
      <h3>협력 국가를 선택하세요</h3>
      <p>
        지도 마커 또는 아래 국가 목록을 클릭하면 상세정보가
        표시됩니다.
      </p>
    </div>
  `;

  map.setView([25, 35], 2);
  selectedCountryId = null;

  showToast("전체 국제협력 현황으로 초기화했습니다.", "↻");
});

/* =========================================================
   15. 토스트 메시지
========================================================= */

let toastTimer;

function showToast(message, icon = "✓") {
  const toast = document.getElementById("toast");

  document.getElementById("toastMessage").textContent = message;
  document.getElementById("toastIcon").textContent = icon;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* =========================================================
   16. 최초 실행
========================================================= */

function initializeDashboard() {
  loadDarkModePreference();
  initializeMap();
  initializeChart();

  updateSummaryCards(cooperationData);
  renderCountryTable(cooperationData);
  renderEvents();
  renderTasks();

  setTimeout(() => {
    map.invalidateSize();
  }, 200);
}

initializeDashboard();