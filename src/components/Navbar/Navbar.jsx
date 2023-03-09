import React, {useState} from 'react';
import Dropdown from '../DropDown/Dropdown';
import Search from '../Search/Search';
import './navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
    <div className="container_navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/academiageek/image/upload/v1678052252/MIC/title_i7jm1g.svg"
          alt=""
        />
      </div>
      <div className="menu__mobile mobile">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            src="https://res.cloudinary.com/academiageek/image/upload/v1678127470/MIC/menu_hamburguesa_qzlgty.svg"
            alt=""
          />
        </div>
        <div className="search_icon padding">
          <img
            src="https://res.cloudinary.com/academiageek/image/upload/v1678134155/MIC/busqueda_vokrg5.svg"
            alt=""
          />
        </div>
      </div>
      <div className="options__mobile mobile">
          <div className="user-icon padding">
            <img
              src="https://res.cloudinary.com/academiageek/image/upload/v1678125874/MIC/user_wt5zf6.svg"
              alt=""
            />
          </div>
          <div className="cart_icon padding">
            <img
              src="https://res.cloudinary.com/academiageek/image/upload/v1678125865/MIC/cart_rdxewq.svg"
              alt=""
            />
          </div>
        </div>
      <div className={`nav-elements ${showNavbar && "active"}`}>
        <div className="nav_title">
          <h2 className="title">¡Hola!</h2>
          <span onClick={handleShowNavbar} className="close_nav">
            X
          </span>
        </div>
        <ul className="nav_links">
          <li className="nav_items dropdown-li">Mujer
            <Dropdown/>
          </li>
          <li className="nav_items">Hombre</li>
          <li className="nav_items">New Arrivals</li>
          <li className="nav_items">Básicos</li>
          <li className="nav_items">Cyber Days</li>
        </ul>
      </div>
          <Search/>
      
      <div className="group_icons">
        <div>
          <span>
            <img src="https://res.cloudinary.com/academiageek/image/upload/v1678125668/MIC/contact_oxg1op.svg" alt="" />
          </span>
        </div>

        <div>
        <span>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1678125874/MIC/user_wt5zf6.svg" alt="" />
          </span>
        </div>

        <div>
        <span>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1678125871/MIC/favorite_gc2dzi.svg" alt="" />
          </span>
        </div>

        <div>
        <span>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1678125868/MIC/location_mxzkjf.webp" width="18px" alt="" />
          </span>
        </div>

        <div>
        <span>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1678125865/MIC/cart_rdxewq.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
