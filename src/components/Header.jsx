import { memo } from "react";

const Header = ({ title, nameButton, onClickButton }) => {
  return (
    <div className="Header">
      <div className="Header__item">
        <h3>{title}</h3>
      </div>
      {nameButton && (
        <div className="Header__item">
          <button onClick={onClickButton}>{nameButton}</button>
        </div>
      )}
    </div>
  );
};

export default memo(Header);
