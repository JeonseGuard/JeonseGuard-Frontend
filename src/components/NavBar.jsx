import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={pathname === '/' ? 'active' : ''}>홈</Link> |
      <Link to="/upload" className={pathname === '/upload' ? 'active' : ''}>업로드</Link> |
      <Link to="/board" className={pathname === '/mypage' ? 'active' : ''}>게시판</Link> |
      <Link to="/login" className={pathname === '/mypage' ? 'active' : ''}>로그인</Link> |
      <Link to="/mypage" className={pathname === '/mypage' ? 'active' : ''}>마이페이지</Link>
    </nav>
  );
}

export default NavBar;
