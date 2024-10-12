import icon from"../../../asets/images/logo.png";
import searchlogo from"../../../asets/images/Search.png";
import avatarlogo from"../../../asets/images/Avatar.png";
import heartlogo from"../../../asets/images/Heart.png";
import shopinglogo from"../../../asets/images/Shopping cart.png";



import "./Navbar.css";


export default function Navbar() {
  return <div>
    <img src={icon} alt="" className="icon"/>
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className="images">
    <img src={searchlogo} alt="" />
    <img src={avatarlogo} alt="" />
    <img src={heartlogo} alt="" />
    <img src={shopinglogo} alt="" />
    </div>
    

  </div>;
}
