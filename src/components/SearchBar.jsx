import '../styles/MainPage.css';
import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar" style={{ margin: '20px 0'}}>
            <input
                type = "text"
                placeholder = "주소 또는 건물명 검색"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">검색</button>
        </div>
    )
}

export default SearchBar;