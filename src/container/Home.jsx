import React from "react";
import Product from "../components/Description_Product/Product";
import Slider from "../components/Slider/Slider";
import VerticalSlider from "../components/Slider/VerticalSlider";
import {mockImagenes} from '../imagenes.js';
import "./home.css";

const Home = () => {
  return (
    <div class="container">
      <div class="Title_product">
        <span className="breacumber">
          Movies / Hombre / Chaquetas y Buzos /{" "}
          <span className="text_bold">
            Chaqueta género neutro, caqui con cierre de Mandalorian
          </span>
        </span>
      </div>
      <div class="vertical-slider">
        <VerticalSlider />
      </div>
      <div class="Main-slider">
        <Slider imagenes={mockImagenes} />
      </div>
      <div class="Description-Product">
        <Product />
      </div>
    </div>
  );
};

export default Home;
