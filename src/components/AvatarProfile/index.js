import "./styles.css";

import { LoginContainer } from "../../container/LoginContext";

export default function AvatarProfile() {
  const { logout } = LoginContainer.useContainer();
  return (
    <div className="avatar__profile">
      <img
        onClick={() => logout()}
        src="http://localhost:3000/images/profile.svg"
        alt="Profile"
      />
    </div>
  );
}
