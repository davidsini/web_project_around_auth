import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        ref={avatarRef}
        type="url"
        className="popup__input"
        placeholder="Enlace a la imagen"
        required
      />
      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
