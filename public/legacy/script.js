/* =========================================================
   1. 샘플 데이터
   실제 업무에 사용할 때 이 부분의 데이터만 수정하면 됩니다.
========================================================= */

const cooperationData = [
  {
    "id": 1,
    "country": "조지아",
    "englishName": "Georgia",
    "flag": "🇬🇪",
    "region": "Europe",
    "regionKorean": "유럽",
    "lat": 41.7151,
    "lng": 44.8271,
    "types": [
      "디지털정부",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "조지아 협력기관 (가상)",
    "description": "조지아와 디지털정부 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "디지털정부 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 2,
    "country": "이집트",
    "englishName": "Egypt",
    "flag": "🇪🇬",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 30.0444,
    "lng": 31.2357,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 3,
    "mous": 0,
    "visits": 3,
    "status": "planned",
    "statusText": "예정",
    "organization": "이집트 협력기관 (가상)",
    "description": "이집트와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 3,
    "country": "우즈베키스탄",
    "englishName": "Uzbekistan",
    "flag": "🇺🇿",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 41.2995,
    "lng": 69.2401,
    "types": [
      "디지털정부",
      "정책교류"
    ],
    "projects": 1,
    "mous": 1,
    "visits": 4,
    "status": "completed",
    "statusText": "완료",
    "organization": "우즈베키스탄 협력기관 (가상)",
    "description": "우즈베키스탄와 디지털정부 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "디지털정부 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 4,
    "country": "베트남",
    "englishName": "Vietnam",
    "flag": "🇻🇳",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 21.0285,
    "lng": 105.8542,
    "types": [
      "주소",
      "정책교류"
    ],
    "projects": 2,
    "mous": 0,
    "visits": 1,
    "status": "active",
    "statusText": "진행 중",
    "organization": "베트남 협력기관 (가상)",
    "description": "베트남와 주소 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "주소 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 5,
    "country": "인도",
    "englishName": "India",
    "flag": "🇮🇳",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 28.6139,
    "lng": 77.209,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 3,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "인도 협력기관 (가상)",
    "description": "인도와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 6,
    "country": "인도네시아",
    "englishName": "Indonesia",
    "flag": "🇮🇩",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": -6.2088,
    "lng": 106.8456,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 1,
    "mous": 0,
    "visits": 3,
    "status": "planned",
    "statusText": "예정",
    "organization": "인도네시아 협력기관 (가상)",
    "description": "인도네시아와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 7,
    "country": "말레이시아",
    "englishName": "Malaysia",
    "flag": "🇲🇾",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 3.139,
    "lng": 101.6869,
    "types": [
      "주소",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 4,
    "status": "completed",
    "statusText": "완료",
    "organization": "말레이시아 협력기관 (가상)",
    "description": "말레이시아와 주소 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "주소 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 8,
    "country": "뉴질랜드",
    "englishName": "New Zealand",
    "flag": "🇳🇿",
    "region": "Oceania",
    "regionKorean": "오세아니아",
    "lat": -41.2865,
    "lng": 174.7762,
    "types": [
      "공공행정",
      "정책교류"
    ],
    "projects": 3,
    "mous": 0,
    "visits": 1,
    "status": "active",
    "statusText": "진행 중",
    "organization": "뉴질랜드 협력기관 (가상)",
    "description": "뉴질랜드와 공공행정 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "공공행정 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 9,
    "country": "사우디아라비아",
    "englishName": "Saudi Arabia",
    "flag": "🇸🇦",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 24.7136,
    "lng": 46.6753,
    "types": [
      "디지털정부",
      "정책교류"
    ],
    "projects": 1,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "사우디아라비아 협력기관 (가상)",
    "description": "사우디아라비아와 디지털정부 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "디지털정부 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 10,
    "country": "체코",
    "englishName": "Czechia",
    "flag": "🇨🇿",
    "region": "Europe",
    "regionKorean": "유럽",
    "lat": 50.0755,
    "lng": 14.4378,
    "types": [
      "공공행정",
      "정책교류"
    ],
    "projects": 2,
    "mous": 0,
    "visits": 3,
    "status": "planned",
    "statusText": "예정",
    "organization": "체코 협력기관 (가상)",
    "description": "체코와 공공행정 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "공공행정 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 11,
    "country": "미국",
    "englishName": "United States",
    "flag": "🇺🇸",
    "region": "Americas",
    "regionKorean": "미주",
    "lat": 38.9072,
    "lng": -77.0369,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 3,
    "mous": 1,
    "visits": 4,
    "status": "completed",
    "statusText": "완료",
    "organization": "미국 협력기관 (가상)",
    "description": "미국와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 12,
    "country": "일본",
    "englishName": "Japan",
    "flag": "🇯🇵",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 35.6762,
    "lng": 139.6503,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 1,
    "mous": 0,
    "visits": 1,
    "status": "active",
    "statusText": "진행 중",
    "organization": "일본 협력기관 (가상)",
    "description": "일본와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 13,
    "country": "중국",
    "englishName": "China",
    "flag": "🇨🇳",
    "region": "Asia",
    "regionKorean": "아시아",
    "lat": 39.9042,
    "lng": 116.4074,
    "types": [
      "공공행정",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "중국 협력기관 (가상)",
    "description": "중국와 공공행정 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "공공행정 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 14,
    "country": "호주",
    "englishName": "Australia",
    "flag": "🇦🇺",
    "region": "Oceania",
    "regionKorean": "오세아니아",
    "lat": -35.2809,
    "lng": 149.13,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 3,
    "mous": 0,
    "visits": 3,
    "status": "planned",
    "statusText": "예정",
    "organization": "호주 협력기관 (가상)",
    "description": "호주와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 15,
    "country": "독일",
    "englishName": "Germany",
    "flag": "🇩🇪",
    "region": "Europe",
    "regionKorean": "유럽",
    "lat": 52.52,
    "lng": 13.405,
    "types": [
      "디지털정부",
      "정책교류"
    ],
    "projects": 1,
    "mous": 1,
    "visits": 4,
    "status": "completed",
    "statusText": "완료",
    "organization": "독일 협력기관 (가상)",
    "description": "독일와 디지털정부 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "디지털정부 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 16,
    "country": "영국",
    "englishName": "United Kingdom",
    "flag": "🇬🇧",
    "region": "Europe",
    "regionKorean": "유럽",
    "lat": 51.5074,
    "lng": -0.1278,
    "types": [
      "공공행정",
      "정책교류"
    ],
    "projects": 2,
    "mous": 0,
    "visits": 1,
    "status": "active",
    "statusText": "진행 중",
    "organization": "영국 협력기관 (가상)",
    "description": "영국와 공공행정 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "공공행정 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 17,
    "country": "아르헨티나",
    "englishName": "Argentina",
    "flag": "🇦🇷",
    "region": "Americas",
    "regionKorean": "미주",
    "lat": -34.6037,
    "lng": -58.3816,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 3,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "아르헨티나 협력기관 (가상)",
    "description": "아르헨티나와 재난안전 분야 정책교류 및 협력사업을 추진하는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "재난안전 협력사업 실무회의 (가상)"
      },
      {
        "date": "2026.09",
        "text": "기관 간 협력의제 검토 (가상)"
      }
    ]
  },
  {
    "id": 18,
    "country": "UNDRR",
    "englishName": "United Nations Office for Disaster Risk Reduction",
    "flag": "🌐",
    "region": "International",
    "regionKorean": "국제기구·지역협력체",
    "lat": 46.2044,
    "lng": 6.1432,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "United Nations Office for Disaster Risk Reduction",
    "description": "UNDRR와의 재난안전 분야 협력 내용을 보여주는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "UNDRR 협력회의 (가상)"
      },
      {
        "date": "2026.08",
        "text": "공동사업 논의 (가상)"
      }
    ]
  },
  {
    "id": 19,
    "country": "ASEAN",
    "englishName": "Association of Southeast Asian Nations",
    "flag": "🌐",
    "region": "International",
    "regionKorean": "국제기구·지역협력체",
    "lat": -6.2,
    "lng": 106.8,
    "types": [
      "공공행정",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "Association of Southeast Asian Nations",
    "description": "ASEAN와의 공공행정 분야 협력 내용을 보여주는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "ASEAN 협력회의 (가상)"
      },
      {
        "date": "2026.08",
        "text": "공동사업 논의 (가상)"
      }
    ]
  },
  {
    "id": 20,
    "country": "APEC",
    "englishName": "Asia-Pacific Economic Cooperation",
    "flag": "🌐",
    "region": "International",
    "regionKorean": "국제기구·지역협력체",
    "lat": 1.3,
    "lng": 103.8,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "Asia-Pacific Economic Cooperation",
    "description": "APEC와의 재난안전 분야 협력 내용을 보여주는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "APEC 협력회의 (가상)"
      },
      {
        "date": "2026.08",
        "text": "공동사업 논의 (가상)"
      }
    ]
  },
  {
    "id": 21,
    "country": "IDB",
    "englishName": "Inter-American Development Bank",
    "flag": "🌐",
    "region": "International",
    "regionKorean": "국제기구·지역협력체",
    "lat": 38.9,
    "lng": -77.04,
    "types": [
      "재난안전",
      "정책교류"
    ],
    "projects": 2,
    "mous": 1,
    "visits": 2,
    "status": "active",
    "statusText": "진행 중",
    "organization": "Inter-American Development Bank",
    "description": "IDB와의 재난안전 분야 협력 내용을 보여주는 가상 시나리오입니다.",
    "activities": [
      {
        "date": "2026.10",
        "text": "IDB 협력회의 (가상)"
      },
      {
        "date": "2026.08",
        "text": "공동사업 논의 (가상)"
      }
    ]
  }
];

const events = [
  {
    "day": "05",
    "month": "NOV",
    "title": "UNDRR 재난위험경감 정책협의 (가상)",
    "location": "온라인",
    "type": "국제기구"
  },
  {
    "day": "12",
    "month": "NOV",
    "title": "ASEAN 디지털정부 협력 워크숍 (가상)",
    "location": "서울",
    "type": "지역협력체"
  },
  {
    "day": "18",
    "month": "NOV",
    "title": "조지아 디지털정부 MOU 이행회의 (가상)",
    "location": "온라인",
    "type": "양자협력"
  },
  {
    "day": "26",
    "month": "NOV",
    "title": "APEC 신종재난 관리 실무회의 (가상)",
    "location": "인천",
    "type": "다자회의"
  },
  {
    "day": "03",
    "month": "DEC",
    "title": "IDB 홍수 조기경보 협력 점검회의 (가상)",
    "location": "온라인",
    "type": "국제기구"
  }
];
const recentTasks = [
  {
    "title": "조지아 협력사업 진행 점검 (가상)",
    "description": "디지털정부 분야 후속조치",
    "due": "2026.11",
    "progress": 30
  },
  {
    "title": "이집트 협력사업 진행 점검 (가상)",
    "description": "재난안전 분야 후속조치",
    "due": "2026.11",
    "progress": 55
  },
  {
    "title": "우즈베키스탄 협력사업 진행 점검 (가상)",
    "description": "디지털정부 분야 후속조치",
    "due": "2026.11",
    "progress": 70
  },
  {
    "title": "베트남 협력사업 진행 점검 (가상)",
    "description": "주소 분야 후속조치",
    "due": "2026.11",
    "progress": 90
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
        <button type="button" class="event-item clickable-record" data-event-index="${events.indexOf(event)}" aria-label="${event.title} 상세보기">
          <div class="event-date">
            <strong>${event.day}</strong>
            <span>${event.month}</span>
          </div>

          <div class="event-info">
            <strong>${event.title}</strong>
            <span>📍 ${event.location}</span>
          </div>

          <span class="event-type">${event.type} · 상세보기 ↗</span>
        </button>
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

// 화면은 한 번에 하나만 표시합니다. 모든 상세 화면을 동시에 노출하지 않습니다.
const pageNames = {
  dashboard: "국제협력 현황", countries: "국가별 협력 현황",
  events: "국제행사", mou: "MOU 관리", translation: "번역센터", glossary: "Glossary"
};
function switchWorkspace(view) {
  if (!Object.prototype.hasOwnProperty.call(pageNames, view)) return;
  document.body.dataset.view = view;
  document.querySelectorAll(".nav-item").forEach(button => {
    const chosen = button.dataset.section === view;
    button.classList.toggle("active", chosen);
    button.setAttribute("aria-current", chosen ? "page" : "false");
  });
  const topTitle = document.querySelector(".header-left h2");
  if (topTitle) topTitle.textContent = pageNames[view];
  closeSidebar();
  window.scrollTo({top: 0, behavior: "instant"});
  if ((view === "map" || view === "dashboard") && map) {
    setTimeout(() => map.invalidateSize(), 80);
  }
}
document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => switchWorkspace(button.dataset.section));
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

function initializeExtendedPanels() {
  const selection = document.getElementById("partnerSelect");
  selection.innerHTML = cooperationData.map(c => `<option value="${c.id}">${c.country}</option>`).join("");
  function drawPartner() {
    const c = cooperationData.find(item => item.id === Number(selection.value));
    document.getElementById("partnerFullDetails").innerHTML = `<div class="extended-grid"><div><strong>협력 대상</strong><p>${c.flag} ${c.country} (${c.englishName})</p></div><div><strong>주요 분야</strong><p>${c.types.join(" · ")}</p></div><div><strong>사업·협약</strong><p>협력사업 ${c.projects}건 · MOU ${c.mous}건 · 진행상태 ${c.statusText}</p></div><div><strong>활동 및 성과 (가상)</strong>${c.activities.map(a=>`<p>${a.date} — ${a.text}</p>`).join("")}</div></div>`;
    document.getElementById("fullProjectList").innerHTML = `<div class="extended-row"><strong>${c.country}</strong><div><strong>${c.types[0]} 분야 협력사업 (가상)</strong><p>${c.description} · 상태: ${c.statusText} · 사업 ${c.projects}건</p></div></div>`;
  }
  selection.addEventListener("change", drawPartner);
  drawPartner();
  document.getElementById("fullEventList").innerHTML = events.map((e,i)=>`<button type="button" class="extended-row clickable-record" data-event-index="${i}"><strong>2026 ${e.month} ${e.day}</strong><div><strong>${e.title}</strong><p>${e.type} · ${e.location} · 상세보기 ↗</p></div></button>`).join("");
  document.getElementById("fullMouList").innerHTML = cooperationData.filter(c=>c.mous).map(c=>`<button type="button" class="extended-row clickable-record" data-mou-id="${c.id}"><strong>${c.country}</strong><div><strong>${c.types[0]} 협력 양해각서 (가상)</strong><p>가상 협약문 열람·사본 다운로드 ↗ · 협력기관: ${c.organization}</p></div></button>`).join("");

}

function initializeDashboard() {
  loadDarkModePreference();
  initializeMap();
  initializeChart();

  updateSummaryCards(cooperationData);
  renderCountryTable(cooperationData);
  renderEvents();
  renderTasks();
  initializeExtendedPanels();

  setTimeout(() => {
    map.invalidateSize();
  }, 200);
}

initializeDashboard();

/* 행사 및 MOU 상세 열람: 모든 문안과 숫자는 교육용 가상 데이터 */
const sampleEventDetails = [
  { time: "14:00–15:30", host: "UNDRR 협력 담당자(가상)", purpose: "재난위험경감 정책의 최신 과제와 교육 협력방안을 논의", agenda: ["재난위험경감 정책 동향 공유", "위험정보 활용과 역량강화", "후속 공동활동 및 담당자 협의"], outcome: "정책자료 공유 및 차기 실무회의 개최 검토 (가상)" },
  { time: "10:00–16:00", host: "ASEAN 협력 실무그룹(가상)", purpose: "디지털정부 혁신사례와 공공서비스 역량강화 경험 공유", agenda: ["디지털 공공서비스 사례 발표", "참가국 경험 공유", "후속 교육 프로그램 협의"], outcome: "워크숍 결과 요약본 및 교류 채널 마련 (가상)" },
  { time: "15:00–16:00", host: "조지아 디지털정부 협력 관계자(가상)", purpose: "디지털정부 협력 MOU 후속조치 점검", agenda: ["협력계획 이행상황 점검", "전문가 교류 및 교육 일정", "차기 협의사항 정리"], outcome: "가상 이행점검표 작성 및 후속회의 예정" },
  { time: "09:30–12:00", host: "APEC 협력 담당자(가상)", purpose: "신종재난 대응과 정보공유 체계에 관한 실무 논의", agenda: ["복합재난 위험 현황", "AI 활용 및 조기경보 경험", "향후 공동워크숍 의제"], outcome: "가상 회의 요약자료 작성" },
  { time: "16:00–17:00", host: "IDB 사업 담당자(가상)", purpose: "홍수 조기경보 역량강화 협력사업의 진행상황 점검", agenda: ["시범사업 진행상황", "교육 수요와 일정", "결과보고 및 후속계획"], outcome: "가상 점검보고서 및 후속조치 목록 작성" }
];
const monthNumbers = { NOV: "11", DEC: "12" };
function openRecordDialog(title, innerHtml) {
  const dialog = document.getElementById("recordDetailDialog");
  document.getElementById("recordDetailTitle").textContent = title;
  document.getElementById("recordDetailBody").innerHTML = innerHtml;
  if (!dialog.open) dialog.showModal();
}
function showEventDetail(index) {
  const e = events[index];
  const d = sampleEventDetails[index];
  if (!e || !d) return;
  openRecordDialog("국제행사 상세정보", `
    <p class="sample-notice">교육용 시제품 · 행사·일정·참석자·의제·성과는 모두 가상 예시입니다.</p>
    <h3>${e.title}</h3>
    <dl class="record-fields">
      <dt>일시</dt><dd>2026년 ${monthNumbers[e.month]}월 ${e.day}일 ${d.time} (가상)</dd>
      <dt>장소</dt><dd>${e.location}</dd><dt>유형</dt><dd>${e.type}</dd>
      <dt>주관·참석</dt><dd>${d.host}</dd><dt>목적</dt><dd>${d.purpose}</dd>
    </dl>
    <h4>주요 의제 (가상)</h4><ol>${d.agenda.map(a=>`<li>${a}</li>`).join("")}</ol>
    <h4>예상 결과 (가상)</h4><p>${d.outcome}</p>
  `);
}
function sampleMouText(c) {
  return `교육용 가상 MOU 사본 — 실제 협약이 아니며 법적 효력이 없습니다.

${c.country} — ${c.types[0]} 협력에 관한 양해각서 (가상)

참여기관: 대한민국 관련 기관 / ${c.organization} (모두 가상 설정)
분야: ${c.types.join(", ")}
체결일: 2026년 9월 15일 (가상)
유효기간: 2026년 9월 15일~2028년 12월 31일 (가상)
상태: 가상 시연 데이터

제1조 목적
참여기관은 상호 존중과 호혜의 원칙에 따라 해당 분야의 정보와 경험을 공유한다.

제2조 협력 분야
1. 정책 및 기술 정보 교류
2. 전문가 교류 및 역량강화 워크숍
3. 상호 합의한 시범사업의 검토

제3조 이행
구체적 활동은 참여기관이 별도 협의하여 정하며, 각자의 국내 법령을 준수한다.

제4조 정보 취급
비공개 정보는 사전에 합의한 목적과 범위에서만 취급한다.

제5조 성격
본 문서는 교육용 시제품의 가상 예시이며 실제 체결 사실이나 법적 의무를 의미하지 않는다.

[가상 서명란]
대한민국 참여기관: __________________
상대 참여기관: __________________
`;
}
function downloadSampleMou(id) {
  const c = cooperationData.find(item=>item.id===id);
  if (!c) return;
  const blob = new Blob(["\uFEFF", sampleMouText(c)], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `sample-MOU-${id}.txt`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function showMouDetail(id) {
  const c = cooperationData.find(item=>item.id===id);
  if (!c) return;
  const text = sampleMouText(c);
  const pre = document.createElement("pre");
  pre.className = "mou-copy-preview";
  pre.textContent = text;
  openRecordDialog("MOU 상세정보 및 가상 사본", `
    <p class="sample-notice">실제 서명된 문서가 아닌 교육용 가상 MOU 사본입니다.</p>
    <h3>${c.country} · ${c.types[0]} 협력 MOU (가상)</h3>
    <dl class="record-fields"><dt>협력기관</dt><dd>${c.organization}</dd><dt>분야</dt><dd>${c.types.join(" · ")}</dd><dt>상태</dt><dd>시연용 가상 데이터</dd></dl>
    <h4>협약문 사본 미리보기</h4><div id="mouPreviewSlot"></div>
    <button class="record-download-button" type="button" id="downloadSampleMou">가상 MOU 사본 TXT 다운로드 ↓</button>
  `);
  document.getElementById("mouPreviewSlot").appendChild(pre);
  document.getElementById("downloadSampleMou").addEventListener("click",()=>downloadSampleMou(id));
}
document.addEventListener("click",event=>{
  const eventButton = event.target.closest("[data-event-index]");
  if (eventButton) showEventDetail(Number(eventButton.dataset.eventIndex));
  const mouButton = event.target.closest("[data-mou-id]");
  if (mouButton) showMouDetail(Number(mouButton.dataset.mouId));
});


/* 통번역 신청 및 승인 — 교육용 로컬 데이터 */
(() => {
const key = "mois-translation-requests-v2";
const statuses = {"검토 대기":["승인","보완 요청"],"보완 요청":["검토 대기"],"승인":["작업 중","보완 요청"],"작업 중":["검토 중"],"검토 중":["회신 완료","작업 중"],"회신 완료":[]};
let records = [];
try { const saved=JSON.parse(localStorage.getItem(key)||"[]"); if(Array.isArray(saved)) records=saved; } catch(e) { console.warn("저장된 신청 정보를 읽지 못했습니다.",e); }
const $ = id => document.getElementById(id);
const fields = ["Dept","Title","Type","Deadline","Notes","Result"];
function persist(){ try {localStorage.setItem(key,JSON.stringify(records));} catch(e) {alert("브라우저 저장 공간을 확인해주세요.");} }
function reset(){ $("translationRequestForm").reset(); $("trEditId").value=""; $("trSaveBtn").textContent="신청 등록"; }
function el(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function btn(text,callback,klass="tr-secondary"){const b=el("button",text,klass);b.type="button";b.addEventListener("click",callback);return b;}
function render(){
  const host=$("trRecords");host.replaceChildren();$("trCount").textContent=`(${records.length}건)`;
  if(!records.length){host.append(el("p","아직 신청 내역이 없습니다. 왼쪽 신청서를 등록해 보세요.","sample-note"));return;}
  records.forEach(record=>{
    const card=el("article",undefined,"tr-record");
    card.append(el("strong",record.title),el("p",`${record.department} · ${record.type} · 기한 ${record.deadline||"미정"}`),el("p",`상태: ${record.status}`,"tr-status"));
    if(record.notes)card.append(el("p",`신청 내용: ${record.notes}`));
    if(record.result)card.append(el("p",`회신/결과: ${record.result}`));
    const actions=el("div",undefined,"tr-actions");
    (statuses[record.status]||[]).forEach(next=>actions.append(btn(next,()=>{record.status=next;persist();render();},"tr-state-button")));
    actions.append(btn("수정",()=>{ $("trEditId").value=record.id;const values=[record.department,record.title,record.type,record.deadline,record.notes,record.result];fields.forEach((field,i)=>$("tr"+field).value=values[i]||"");$("trSaveBtn").textContent="수정 저장";switchWorkspace("translation");}));
    actions.append(btn("삭제",()=>{if(confirm("이 가상 신청을 삭제하시겠습니까?")){records=records.filter(x=>x.id!==record.id);persist();render();if($("trEditId").value===record.id)reset();}},"tr-delete"));
    card.append(actions);host.append(card);
  });
}
$("translationRequestForm").addEventListener("submit",e=>{
 e.preventDefault();
 const data={department:$("trDept").value.trim(),title:$("trTitle").value.trim(),type:$("trType").value,deadline:$("trDeadline").value,notes:$("trNotes").value.trim(),result:$("trResult").value.trim()};
 if(!data.department||!data.title)return;
 const id=$("trEditId").value;
 if(id){records=records.map(r=>r.id===id?{...r,...data}:r);}else{records.unshift({...data,id:crypto.randomUUID(),status:"검토 대기"});}
 persist();render();reset();
});
$("trCancel").addEventListener("click",reset);
function draft(){
 const rec=$("trRecipient").value.trim()||"Partner Institution";
 const subject=$("trSubject").value.trim()||"international cooperation";
 const type=$("trTemplateType").value;
 const bodies={
 thanks:`I would like to express my sincere appreciation for your cooperation in the field of ${subject}. We look forward to continued exchanges and practical collaboration between our organizations.`,
 condolence:`Please accept my heartfelt condolences following the recent difficult circumstances. Our thoughts are with all those affected, and we stand ready to explore appropriate ways of cooperation and support.`,
 proposal:`I am writing to propose further cooperation in the field of ${subject}. We would welcome an opportunity to exchange views and identify areas for mutually beneficial collaboration.`,
 request:`I would appreciate your consideration of opportunities for cooperation in the field of ${subject}. We would welcome your views on possible next steps and areas of common interest.`,
 mou:`DRAFT MEMORANDUM OF UNDERSTANDING (FICTIONAL SAMPLE)\n\nThe Participants intend to promote voluntary cooperation in ${subject}.\n\nArticle 1. Objective\nThe Participants aim to share relevant knowledge and experience.\n\nArticle 2. Areas of Cooperation\nInformation exchange, expert meetings and mutually agreed pilot activities.\n\nArticle 3. Implementation\nActivities will be subject to the Participants' applicable laws and available resources.\n\nArticle 4. Nature of Document\nThis is an educational sample and does not represent an executed agreement.`
 };
 return type==="mou"?`Counterpart: ${rec}\n\n${bodies.mou}`:`Dear ${rec},\n\n${bodies[type]}\n\nYours sincerely,\n[Name / Title]\n\n[Educational fictional draft]`;
}
function updatePreview(){ $("trPreview").value=draft(); }
["trTemplateType","trRecipient","trSubject"].forEach(id=>$(id).addEventListener("input",updatePreview));
$("trDownload").addEventListener("click",()=>{const blob=new Blob(["\uFEFF",draft()],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="translation-center-sample.txt";document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
$("trCopy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(draft());$("trCopy").textContent="복사 완료";setTimeout(()=>$("trCopy").textContent="문안 복사",1500);}catch(e){$("trPreview").focus();$("trPreview").select();document.execCommand("copy");}});
render();updatePreview();
})();

/* Glossary — local browser storage, fully functional sample */
(() => {
  const $ = id => document.getElementById(id);
  const key = "mois-glossary-v1";
  const examples = [
    {id:"g1", category:"재난안전", ko:"재난위험경감", en:"Disaster Risk Reduction", note:"DRR 정책 분야"},
    {id:"g2", category:"재난안전", ko:"조기경보시스템", en:"Early Warning System", note:"재난 예·경보"},
    {id:"g3", category:"디지털정부", ko:"디지털정부 협력센터", en:"Digital Government Cooperation Center", note:"국제협력"},
    {id:"g4", category:"국제협력", ko:"양해각서", en:"Memorandum of Understanding", note:"MOU"},
    {id:"g5", category:"주소", ko:"주소정보", en:"Address Information", note:"주소정책"},
    {id:"g6", category:"지방행정", ko:"지방교부세", en:"Local Allocation Tax", note:"지방재정"},
  ];
  let records;
  try {const stored=JSON.parse(localStorage.getItem(key));records=Array.isArray(stored)?stored:examples;} catch {records=examples;}
  const persist=()=>localStorage.setItem(key,JSON.stringify(records));
  const cancel=()=>{ $("glossaryForm").reset();$("glossaryEditId").value="";$("glossarySave").textContent="용어 추가";};
  function render() {
    const q=$("glossarySearch").value.trim().toLowerCase(), cat=$("glossaryFilter").value;
    const found=records.filter(r=>(cat==="all"||r.category===cat)&&[r.ko,r.en,r.note,r.category].join(" ").toLowerCase().includes(q));
    $("glossaryCount").textContent=`검색 결과 ${found.length}건 / 전체 ${records.length}건`;
    const host=$("glossaryList");host.replaceChildren();
    if(!found.length){const p=document.createElement("p");p.textContent="검색 결과가 없습니다.";host.append(p);return;}
    found.forEach(r=>{
      const row=document.createElement("article");row.className="glossary-record";
      const info=document.createElement("div");
      const title=document.createElement("strong");title.textContent=`${r.ko} · ${r.en}`;
      const note=document.createElement("p");note.textContent=`${r.category} — ${r.note||"설명 없음"}`;
      info.append(title,note);
      const actions=document.createElement("div");actions.className="glossary-actions";
      const edit=document.createElement("button");edit.type="button";edit.textContent="수정";edit.onclick=()=>{$("glossaryEditId").value=r.id;$("glossaryCategory").value=r.category;$("glossaryKo").value=r.ko;$("glossaryEn").value=r.en;$("glossaryNote").value=r.note||"";$("glossarySave").textContent="수정 저장";$("glossaryForm").scrollIntoView({behavior:"smooth",block:"center"});};
      const del=document.createElement("button");del.type="button";del.textContent="삭제";del.onclick=()=>{if(confirm("용어를 삭제하시겠습니까?")){records=records.filter(x=>x.id!==r.id);persist();render();if($("glossaryEditId").value===r.id)cancel();}};
      actions.append(edit,del);row.append(info,actions);host.append(row);
    });
  }
  $("glossaryForm").addEventListener("submit", e=>{e.preventDefault();const id=$("glossaryEditId").value;const entry={id:id||crypto.randomUUID(),category:$("glossaryCategory").value,ko:$("glossaryKo").value.trim(),en:$("glossaryEn").value.trim(),note:$("glossaryNote").value.trim()};if(!entry.ko||!entry.en)return;records=id?records.map(r=>r.id===id?entry:r):[entry,...records];persist();cancel();render();});
  $("glossaryCancel").addEventListener("click",cancel);
  ["glossarySearch","glossaryFilter"].forEach(id=>$(id).addEventListener("input",render));
  render();
})();
