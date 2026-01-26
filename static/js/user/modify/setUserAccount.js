// -----------------------------------------
// 유저 수정 페이지 기능

// 계정 부분
const userEmailDiv = document.getElementById("user-email");
const userPasswordDiv = document.getElementById("user-password");
const userPhoneDiv = document.getElementById("user-phone");
const userTypeDiv = document.getElementById("user-regType");

// 계정 부분의 변경 버튼들
const userAccountSettingBtns = userAccountDiv.querySelectorAll(
    ".UserSetting-FormButton",
);

let email = ""; // 유저 이메일
let emailChecked = false; // 이메일 인증 여부
let password = ""; // 유저 비밀번호
let phone = ""; // 유저 전화번호
let regType = ""; // 유저 가입유형

// 회원 이메일 부분
const userEmailComfirm = document.querySelector(".UserSetting-EmailConfirm");
const userEmailChecked = document.querySelector(".UserSetting-Checked");
const userEmailAlert = document.querySelector(".UserSetting-Alert");
const userEmailInput = userEmailDiv.querySelector(".UserSetting-InputWrapper");
const userEmailWrong = userImageUpload.querySelector(".UserSetting-InputWrong");
const userEmailComfirmBtn = userEmailDiv.lastElementChild;

// 회원 비밀번호 부분
const userCurrentPassword = userPasswordDiv.querySelector(
    ".UserSetting-InputWrapper.prevPassword",
);
const userPassword = userPasswordDiv.querySelector(
    ".UserSetting-InputWrapper.password",
);
const userPasswordSubmitBtn = userPasswordDiv.lastElementChild;

// 회원 연락처 부분
