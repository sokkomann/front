const apiButtons = document.querySelectorAll(".SoicalLoginButton");
const kakaoLoginButton = document.querySelector("button[name=kakao]");

kakaoLoginButton.addEventListener("click", (e) => {
    // 여기에 카카오 로그인 API 연결
});

apiButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonName = button.getAttribute("name");

        switch (buttonName) {
            case "naver":
                break;
            case "apple":
                break;
            case "email":
                break;
        }
    });
});

const naverLogin = async () => {};

const appleLogin = async () => {};
