// src/components/MainMenuButton.jsx
function MainMenuButton({ title, onClick }) {
    return (
      <div onClick={onClick}>
        <button>
          {title}
        </button>
      </div>
    );
  }
  
  export default MainMenuButton;