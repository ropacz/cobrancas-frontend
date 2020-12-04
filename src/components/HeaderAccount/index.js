import AvatarProfile from "../AvatarProfile";

import "./styles.css";

export default function HeaderAccount({ children }) {
  return (
    <div className="header__account">
      <div className="header__container">
        {children}
        <AvatarProfile />
      </div>
    </div>
  );
}
