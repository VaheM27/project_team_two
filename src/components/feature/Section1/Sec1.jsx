import React from "react";
import "./Sec1.scss";
import icon from "../../../image/Icon.png";
const img =
  "https://s3-alpha-sig.figma.com/img/bdbb/4583/8f6bfd567de5a4771587a3d4ce6b9a3e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AGj2aK5t58ZWE8WkS5jzsp6pV7ELg1aUPzKwafuPtJt7mPEqRQxGXh8bkW6o9L4PgKTo6BU4trh1Gu0GrQLfLztR3uTOYDSSCthLCSfhjRYuiTjiR6DhijgCafzXNpHkU0zCD0tDeKKINy8kjjWsuERmBPSejTLfP5k3qARrmOeXTEz3M0izyPN3dy8plYLZua6FS1WMFbl6Ai6JzoU4SawdMnSmjcpzRYoARxbrqIsPfanpVbJx~VNMWhTaQ54en2prBPhIRKDQuBaldl6As5mzC5rIrqcyPe-MpGoCUDV3qQNYxaho8XbXBiUMxp1jFob180XVc2Tei5o62Ugz~w__";

const Sec1 = () => {
  return (
    <div className="sec1_main">
      <img src={img} alt="" />
      <div className="sec1_slide">
        <img src={icon} alt="icon" />
        <div className="sec1_text">
          <p>Handcrafted in Viet Nam since 1650</p>
          <h2>BAT TRANG DINNER SET</h2>
        </div>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Sec1;
