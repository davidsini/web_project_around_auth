import React from "react";

export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup ${card ? "popup__opened" : ""}`}>
      <div className="popup__background" onClick={onClose} />

      <div className="imagePopUp__container">
        <button
          className="imagePopUp__close-button"
          type="button"
          onClick={onClose}
        />
        <img src={card?.link} alt={card?.name} className="imagePopUp__image" />
        <p className="imagePopUp__title">{card?.name}</p>
      </div>
    </div>
  );
}
