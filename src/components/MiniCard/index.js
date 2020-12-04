import "./styles.css";

export default function MiniCard({ children, title, iconUrl }) {
  return (
    <div className="minicard">
      <div className="minicard__header">
        <img className="minicard__icon" src={iconUrl} alt={title} />
        <h3 className="minicard__title">{title}</h3>
      </div>
      <div className="minicard__content">{children}</div>
    </div>
  );
}
