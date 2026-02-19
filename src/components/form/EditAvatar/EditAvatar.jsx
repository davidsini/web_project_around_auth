import { useRef } from "react";

export default function EditAvatar({ onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
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
