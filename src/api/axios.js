import axios from "axios";
// axios 인스턴스 만들기

const api = axios.create({
  baseURL: "http://localhost:8080/api", // 백엔드 Spring Boot 기본 API 주소
  timeout: 5000, // 요청 지연 시 자동 종료
  headers: { "Content-type": "application/json" }, // 기본 헤더
});

export default api;
/* 

    axios.create() → 공통 설정된 axios 인스턴스 생성

    baseURL → 백엔드 Spring Boot 기본 API 주소

    timeout → 요청 지연 시 자동 종료

    headers → JSON 요청 기본

---------------------------------------------------

    Spring Boot는 기본 포트 8080에서 실행 중

    DB URL (5432) = Spring Boot가 DB에 접속

    axios baseURL (8080) = 프론트가 Spring Boot API 호출
*/
