import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function EditProfile(props) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setDescription(currentUser.about || "");
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        className="popup__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        className="popup__input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Acerca de mí"
        required
      />
      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
