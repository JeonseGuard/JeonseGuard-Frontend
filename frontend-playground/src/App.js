// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 라우팅 관련 import
import Home from './components/Home';
import DocumentUpload from './components/DocumentUpload';  // 문서 업로드 페이지
import Board from './components/Board';  // 게시판 페이지
import Analysis from './components/Analysis';  // 전세가율 분석 페이지
import Report from './components/Report';  // 리포트 보기 페이지

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: '#003cff' }}>전세가드</h1>
          <p>전세가드에 오신 것을 환영합니다!</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/document-upload" element={<DocumentUpload />} />
            <Route path="/board" element={<Board />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
        <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa' }}>
          <p>© 2025 전세가드. </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
