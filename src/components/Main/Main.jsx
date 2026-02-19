import React from "react";
import { useContext } from "react";
import Card from "./components/Card/Card.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="content">
      <section className="profile">
        <div className="profile__main-container">
          <div className="profile__data">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__picture"
                src={currentUser?.avatar}
                alt="Perfil"
              />
              <div
                className="profile__avatar-overlay"
                onClick={onEditAvatarClick}></div>
            </div>
            <div className="profile__info-w-button">
              <div className="profile__info">
                <h1 className="profile__name">{currentUser?.name}</h1>
                <img
                  src="/images/edit-button.svg"
                  className="profile__edit-button"
                  onClick={onEditProfileClick}
                />
              </div>
              <p className="profile__occupation">{currentUser?.about}</p>
            </div>
          </div>
          <button className="profile__add-button" onClick={onAddPlaceClick} />
        </div>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {Array.isArray(cards) &&
            cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
        </ul>
      </section>
    </section>
  );
}
