import { useState } from "react";
import "./styles.css";

export default function InputPassword({ name, register }) {
  const [hidePassword, sethidePassword] = useState(true);

  return (
    <>
      <div className="container__password">
        {hidePassword ? (
          <input name={name} type="password" ref={register} />
        ) : (
          <input name={name} type="text" ref={register} />
        )}
        <span className="toogle__password">
          <img
            onClick={() => {
              sethidePassword(!hidePassword);
            }}
            src={hidePassword ? "/images/eye-slash.svg" : "/images/eye.svg"}
            alt={hidePassword ? "Senha exibida" : "Senha escondida"}
          />
        </span>
      </div>
    </>
  );
}
