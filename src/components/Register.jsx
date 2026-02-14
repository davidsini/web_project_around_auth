// src/components/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(data.email, data.password);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Regístrate</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={data.password}
          onChange={handleChange}
          required
        />
        <button className="auth__button" type="submit">
          Regístrate
        </button>
      </form>
      <p className="auth__text">
        ¿Ya eres miembro?{" "}
        <Link to="/signin" className="auth__link">
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}

export default Register;
