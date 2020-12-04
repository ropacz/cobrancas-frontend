import "./styles.css";

export default function Card({ children, title, iconUrl }) {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__icon" src={iconUrl} alt={title} />
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
}
