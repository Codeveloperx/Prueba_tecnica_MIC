import React, { useState } from "react";
import Accordion from "../Accordion_Menu/Accordion";
import Modal from "../Modal/Modal";
import './product.css'


const Product = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <div className="content">
      <div className="title_container">
        <h1 className="title">
          <span>CHAQUETA GÉNERO NEUTRO, CAQUI CON CIERRE DE MANDALORIAN</span>
        </h1>
      </div>

      <div className="ref">
        <span>STAR WARS</span>
        <span>236732-130908-L</span>
      </div>

      <div className="precios">
        <span>$ 259.990</span>
        <span>$233.991</span>
      </div>

      <div className="tallas">
        <div className="talla">
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>
        <div onClick={()=> cambiarEstadoModal(!estadoModal)} className="guia_tallas">Guia de tallas</div>
        <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}/>
      </div>

      <div className="button_cart">
        <div className="cantidad">
          <button onClick={()=> setCount(count-1)} className={`btns ${(count!==1)? "enabled" : "disabled" }`}>-</button>
          <span>{count}</span>
          <button onClick={()=> setCount(count+1)} className="btns">+</button>
        </div>
        <button className="add_cart">Agregar a mi bolsa</button>
      </div>

      <Accordion title="Descripción de producto" />
      <Accordion title="Especificaciones" />
      <Accordion title="Composición" />
      <Accordion title="Cuidados" />
      <Accordion title="Descubre más" />
    </div>
  );
};

export default Product;
