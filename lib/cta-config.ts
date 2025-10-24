// CTA 버튼 설정 파일
// 링크를 쉽게 수정할 수 있도록 별도 파일로 분리

export const CTA_CONFIG = {
  // 상담하러가기 버튼 설정
  consultation: {
    text: "상담하러가기",
    href: "tel:010-5782-5248", // 전화번호 링크
    // 또는 카카오톡, 웹사이트 등 다른 링크로 변경 가능
    // href: "https://open.kakao.com/o/sfbDn3Cf", // 카카오톡 채널
    // href: "https://open.kakao.com/o/sfbDn3Cf", // 웹사이트 상담 페이지
  },
  
  // 단가보러가기 버튼 설정
  pricing: {
    text: "단가보러가기",
    href: "https://www.jjtk1123.com/general-1", // 단가 페이지 링크
    // 또는 다른 링크로 변경 가능
    // href: "https://your-website.com/pricing",
    // href: "https://docs.google.com/spreadsheets/your-pricing-sheet", // 구글 시트
  },
  
  // 전화번호 정보
  phone: {
    number: "010-5782-5248",
    displayText: "24시간 상담 가능",
  },
} as const;

// CTA 버튼 타입 정의
export type CTAButton = {
  text: string;
  href: string;
};
