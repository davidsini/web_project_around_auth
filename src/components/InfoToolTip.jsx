import React from "react";
import successIcon from "/images/success-icon.png";
import errorIcon from "/images/error-icon.png";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_tooltip">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
        />
        <img
          className="popup__icon"
          src={isSuccess ? successIcon : errorIcon}
          alt={isSuccess ? "Éxito" : "Error"}
        />
        <h3 className="popup__title popup__title_type_tooltip">
          {isSuccess
            ? "¡Correcto! Ya estás registrado."
            : "Uy, algo salió mal. Por favor, inténtalo de nuevo."}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
