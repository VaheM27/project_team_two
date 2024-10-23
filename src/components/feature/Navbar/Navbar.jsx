import icon from "../../../assets/images/Nav_images/logo.png";
import searchlogo from "../../../assets/images/Nav_images/Search.png";
import avatarlogo from "../../../assets/images/Nav_images/Avatar.png";
import heartlogo from "../../../assets/images/Nav_images/Heart.png";
import shopinglogo from "../../../assets/images/Nav_images/Shopping cart.png";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

import "./Navbar.scss";

export default function Navbar() {
  const images = [
    {
      img: searchlogo,
      id: nanoid(4),
    },
    {
      img: avatarlogo,
      id: nanoid(4),
    },
    {
      img: heartlogo,
      id: nanoid(4),
    },
    {
      img: shopinglogo,
      id: nanoid(4),
    },
  ];

  const navItems = [
    {
      name: "Home",
      id: nanoid(4),
      path: "/",
    },
    {
      name: "Shop",
      id: nanoid(4),
      path: "shop",
    },
    {
      name: "About",
      id: nanoid(4),
      path: "about",
    },
    {
      name: "Contact",
      id: nanoid(4),
      path: "contact",
    },
    {
      name: "Cart",
      id: nanoid(4),
      path: "cart",
    },
  ];
  return (
    <nav>
      <div className="container">
        <div className="nav_main">
          <img src={icon} alt="" />
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className="navImages">
            {images.map((item) => {
              return <img src={item.img} alt="" key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
