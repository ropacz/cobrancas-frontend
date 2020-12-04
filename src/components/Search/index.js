import "./styles.css";

import { useForm } from "react-hook-form";

export default function Search({
  textButton,
  iconButton,
  placeholder,
  handleButtonSearch,
}) {
  const { handleSubmit, register } = useForm();

  return (
    <div className="search__form">
      <form onSubmit={handleSubmit(handleButtonSearch)}>
        <input
          placeholder={placeholder}
          type="text"
          name="search"
          ref={register}
        />
        <button>
          {iconButton && <img src={iconButton} alt="Buscar" />}
          {textButton}
        </button>
      </form>
    </div>
  );
}
