// src/components/Home.jsx
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import MainMenuButton from './MainMenuButton';

function Home() {
  const navigate = useNavigate();

  // 버튼 클릭 시 동작할 함수
  const handleButtonClick = (buttonName) => {
    switch(buttonName){
      case '문서 업로드':
        navigate('/document-upload'); // 문서 업로드 페이지로 이동
        break;
      case '게시판':
        navigate('/board'); // 게시판 페이지로 이동
        break;
      case '전세가율 분석':
        navigate('/analysis'); // 전세가율 분석 페이지로 이동
        break;
      case '리포트 보기':
        navigate('/report'); // 리포트 보기 페이지로 이동
        break;
      default:
        break;
    }
    alert(`${buttonName} 버튼 클릭!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#003cff' }}>안녕하세요, 전세가드입니다.</h2>
      <p>문서를 업로드하시면, AI가 요약 분석을 도와드립니다.</p>

      {/* 버튼메뉴뉴들 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MainMenuButton title="문서 업로드" onClick={() => handleButtonClick('문서 업로드')} />
        <MainMenuButton title="게시판" onClick={() => handleButtonClick('게시판')} />
        <MainMenuButton title="전세가율 분석" onClick={() => handleButtonClick('전세가율 분석')} />
        <MainMenuButton title="리포트 보기" onClick={() => handleButtonClick('리포트 보기')} />
      </div>
      
      <SearchBar />
    </div>
  );
}

export default Home;
