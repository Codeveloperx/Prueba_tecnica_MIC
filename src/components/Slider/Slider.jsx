import React, { useState } from "react";
import estilos from "./slider.module.css";

const Slider = ({ imagenes }) => {
  console.log(imagenes)
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className={estilos.container}>
      {imagenes.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index
                ? `${estilos.slide} ${estilos.active}`
                : estilos.slide
            }
          >
            {imagenActual === index && (
              <img
                className={estilos.slider_img}
                key={index}
                src={imagen}
                alt="imagen"
              />
            )}
          </div>
        );
      })}
      <div className={estilos.btns}>
        <button onClick={anteriorImagen}>
          <img
            src="https://res.cloudinary.com/academiageek/image/upload/v1678310597/MIC/arrow_color_R_kvac3t.png"
            alt="arrow left"
          />
        </button>
        <button onClick={siguienteImagen}>
          <img
            src="https://res.cloudinary.com/academiageek/image/upload/v1678310597/MIC/arrow_color_L_oiveml.png"
            alt="arrow right"
          />
        </button>
      </div>

      <div className={estilos.oferta}>
        <span>- 10% OFF</span>
      </div>
    </div>
  );
};

export default Slider;
