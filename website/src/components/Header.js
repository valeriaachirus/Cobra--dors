import React from 'react';
import "../App.css";
import logo from '../public/logo/logo.jpg'

const Header = () => {
  return (
    <header className="mb-20px bg-white h-[93px] w-full">
      <div className="Logo">
        <img src={logo} alt='Logo' />
      </div>
    </header>
  );
};

export default Header;