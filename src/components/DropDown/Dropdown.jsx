import React from "react";
import './dropdown.css'

const Dropdown = () => {
  return (
    <ul className="dropdown">
      <div className="dropdown__title">
        <p>Mujer</p>
        <p>Ver todo</p>
      </div>
      <li className="dropdown_items">Camisetas</li>
      <li className="dropdown_items">Pijamas</li>
      <li className="dropdown_items">Ropa interior</li>
      <li className="dropdown_items">Chaquetas y Buzos</li>
      <li className="dropdown_items">Joggers, pantolones y shorts</li>
      <li className="dropdown_items">Calzado</li>
      <li className="dropdown_items">Accesorios</li>
    </ul>
  );
};

export default Dropdown;
