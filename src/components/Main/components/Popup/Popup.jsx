export default function Popup({ isOpen, onClose, title, children }) {
  return (
    <div className={`popup ${isOpen ? "popup__opened" : ""}`}>
      <div className="popup__background" onClick={onClose} />

      <div className="popup__form-container">
        <button className="popup__close" type="button" onClick={onClose} />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
