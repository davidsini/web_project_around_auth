import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        className="popup__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Título"
        required
      />
      <input
        className="popup__input"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enlace de imagen"
        required
      />
      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
