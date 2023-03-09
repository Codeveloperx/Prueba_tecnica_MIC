import "./modal.css";

const Modal = ({estado, cambiarEstado}) => {
  return (
    <>
      {estado && (
        <div className="overlay">
          <div className="modal_container">
            <img
              src="https://res.cloudinary.com/academiageek/image/upload/v1678345682/MIC/guia-de-tallas_umpdgl.png"
              alt="Guia Tallas"
            />
            <button onClick={() => cambiarEstado(!estado)}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
