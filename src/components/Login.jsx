import React from 'react';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  // 1. 환경변수에서 카카오 앱 정보 읽기
  // 2. 카카오 로그인 URL 만들기
  // 3. 사용자를 로그인 페이지로 이동시키기

  const kakaoLogin = () => { //카카오 로그인 시작 함수. 호출되면 카카오 로그인 페이지로 리디렉션
    const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    // 사용자를 카카오 로그인 화면으로 보내는 URL 생성
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile_nickname,profile_image,account_email`;

    //브라우저 주소를 카카오 로그인 페이지로 리디렉션
    window.location.href = kakaoURL;
    
  };

  return (
    <div className={styles.container}>
      <h1>로그인</h1>
      <button onClick={kakaoLogin} className={styles.button}>
        카카오로 로그인
      </button>
    </div>
  );
};

export default LoginPage;
