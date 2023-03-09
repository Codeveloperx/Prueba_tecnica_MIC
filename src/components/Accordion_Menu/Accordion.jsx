import React, { useState } from "react";
import './accordion.css'

const Accordion = ({title}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="accordion">
        <div className="accordionHeading">
          <div className="contain">
            <p>{title}</p>
            <span onClick={() => setActive(!active)}></span>
          </div>
        </div>

        <div className={`accordionContent  ${active && "show"}`}>
          <div className="contain">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eum voluptatum fugiat omnis, iure non provident. Nobis odio omnis
              iste pariatur, quasi quia earum placeat dignissimos quaerat.
              Assumenda, voluptatibus magni.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
