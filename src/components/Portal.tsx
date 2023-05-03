import ReactDOM from "react-dom";

import AddWikiFormModal from "./AddWikiFormModal";

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <AddWikiFormModal
          setOpenModal={function (): void {
            throw new Error("Function not implemented.");
          }}
        />,
        document.getElementById("overlay-root") as HTMLInputElement
      )}
    </>
  );
};

export default Modal;
