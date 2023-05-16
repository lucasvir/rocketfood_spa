import { Container } from "./styles";

import addIcon from "../../assets/icon/plus.svg";
import closeIcon from "../../assets/icon/close.svg";

export function TagNew({ isNew = false, onClick, value, ...rest }) {
  return (
    <Container
      isNew={isNew}
      className={isNew ? "tag-add" : "tag-delete"}
    >
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? (
          <img src={addIcon} alt="ícone para adicionar" />
        ) : (
          <img src={closeIcon} alt="ícone para excluir" />
        )}
      </button>
    </Container>
  );
}
