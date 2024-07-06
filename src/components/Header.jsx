import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-20">
      {/* desktop version */}

      <div>
        <div className="h-20 ">
          <img src={logo} alt="Logo" className="h-full w-30" />
        </div>
      </div>

      {/* mobile version */}
    </header>
  );
};

export default Header;
