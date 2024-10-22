import React from "react";
import image1 from '../../../assets/images/Sec1_images/Image.png'
import image2 from '../../../assets/images/Sec1_images/Image (1).png'
import image3 from '../../../assets/images/Sec1_images/Image (2).png'
import image4 from '../../../assets/images/Sec1_images/Image (3).png'
import img from '../../../assets/images/Sec1_images/coffe.png'
import icon from '../../../assets/images/Sec1_images/Icon.png'
import { nanoid } from "nanoid";

import "./Sec1.scss";



const Sec1 = () => {
  const images = [
    {
      id: nanoid(4),
      image: image1,
      name: 'TableWare'
    },
    {
      id: nanoid(4),
      image: image2,
      name: 'Home decor'
    },
    {
      id: nanoid(4),
      image: image3,
      name: 'Holiday'
    },
    {
      id: nanoid(4),
      image: image4,
      name: 'Collection'
    },
  ]


  return (
    <section className="sec1_main">
      <div className="container">
        <img src={img} alt="" />
        <div className="sec1_slide">
          <img src={icon} alt="icon" />
          <div className="sec1_text">
            <p>Handcrafted in Viet Nam since 1650</p>
            <h2>BAT TRANG DINNER SET</h2>
          </div>
          <button>SHOP NOW</button>
        </div>
        <div className="section1_images_main">
        {
          images.map((item)=>{
            return(
              <div key={item.id} className="section1_images">
                <div className="sec1_img_div"><img src={item.image} alt="" /></div>
                <p>{item.name}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
  );
};

export default Sec1;
