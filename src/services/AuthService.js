import { instance } from "./instance";

export const AuthService = async ({ username, password, nickname }) => {
  // try {
  //   const response = await instance.post("/signup", {
  //     username,
  //     password,
  //     nickname,
  //   });

  //   return response.data;
  // } catch (error) {
  //   console.error("회원가입 실패:", error.response?.data || error.message);
  //   throw error;
  // }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📌 회원가입 성공: ", { username, password, nickname });
      resolve({ success: true }); // ✅ 무조건 성공 응답 반환
    }, 500); // ✅ 0.5초 딜레이 후 성공 처리
  });
};