// src/components/Header/Header.jsx
import React from "react";
import logo from "../../../public/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "../../../blocks/header.css";

function Header({ email, onSignOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo de Around The U.S." />
      <div className="header__auth-container">
        {email ? (
          <>
            <p className="header__email">{email}</p>
            <button className="header__logout" onClick={onSignOut}>
              Cerrar sesión
            </button>
          </>
        ) : location.pathname === "/signin" ? (
          <Link to="/signup" className="header__link">
            Regístrate
          </Link>
        ) : (
          <Link to="/signin" className="header__link">
            Iniciar sesión
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
