import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  if (!card || !currentUser) {
    return null;
  }

  const { name, link, owner = {}, likes = [] } = card;

  const isOwn = owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  const isLiked = (likes || []).some((user) => user._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleImageClick() {
    onCardClick({ name, link });
  }

  console.log("likes:", likes);
  console.log("currentUser._id:", currentUser._id);

  return (
    <li className="card">
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
        type="button"
      />
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleImageClick}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <span className="card__like-count">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}
