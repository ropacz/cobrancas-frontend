import "./styles.css";

export default function TileStats({ value, iconUrl, title }) {
  return (
    <div className="tile__stats">
      <div className="tile__header">
        <span>
          <img src={iconUrl} alt={title} />
        </span>
        <p>Saldo em conta</p>
      </div>
      <div className="tile__content">
        <p>{value}</p>
      </div>
    </div>
  );
}
