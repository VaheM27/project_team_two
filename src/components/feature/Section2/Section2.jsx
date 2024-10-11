import React from "react";
import "./Section2.scss";
import image5 from '../../../image/Image (2).png'

const Section2 = () => {
  const image1 =
    "https://s3-alpha-sig.figma.com/img/e04e/d7ee/144833da2a15af60c326fd7767a48e5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrUgEG2irWkwpdNGEJ6OkS6Wbk42sBfbtb-ualdSWp8WX7S~klXDxTCQKzfDuUyJnOP4xQIyq8N8kSGr46vzjF1tkdCp5HTQ1yCJGtZ098ITrauh-pq4kbLDN04uXkHCP91WuWGBT7PJ09T086ucAZSl0nTBb0oyfiZYr5fMSuWjpoGwFMIJwN~O3b0okj8JxBVVjf6wzzZImND7wI-K-c6EuSyDOGTW0NlH1XNH0jDDeDLzpFHZzoNPj~6lCg-iGubkHQpd0XCV1f8URnDkzn4Jsb2xoFZF65vuglLW8er055g842VNb0~eSkGJqgQLkuYeEZ~PC80s37hD5sHEWA__";
  const image2 =
    "https://s3-alpha-sig.figma.com/img/285b/621f/3f9dc455766672257908e989c6219d12?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JHfWM6dWkNMjqD0kG-gkCFfRD3LHLBhvN8iofV2U4tc7AbBXWnwiiY26Kl4ToZFwrxj~fkLK9eXl-oC2NjhJ6maWhROuWBR5yo0K9LQReCk94oiL6d9HGP7t2XoRoUdBoTr0bZFaUpkO9dHnkhafJkAUaOjX-IFPwbCyhO3V2~631tu1J2ZtqGA0b5V5D13tXzj4g4HsnUrYsZfIa2UtugKxVcNnDhGhmMn8Dk~j0pm4enRGNKWL-K1jYHRkykNbwy4Kxto6Kv9OFPBuJdvKnyVxXW4HVSRguB9BmiVb7cmysvt9-h9Xyovd~jY506x0UwPybpSsxB51-F5tbGFUnw__";
  const image3 =
    "https://s3-alpha-sig.figma.com/img/f3cb/a1d6/5779571795e3a3e8f55f7ec01d571873?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f1RRYJDsqTpLMIciU0NT2i3xA-0mj0BOUF5hERYSET7L8jF7RrwaCq-GTFTlxT2AqruI~qRHI9JeeqCoV0GjhpOXi2cgSAlzWnmYRmzowk-mEKSKqPcGPOP8OgT2jYtTPxcr4~cJzeuaGY-~FTSDmJDyfDKK-M-lXrbPhIVFO6TlfsfiqMYkfMbZSZnwXW2WwEnYOe6Sj6CxVkDn0-Oeq3rHsNEruMVFeMmnxlmtr~R6gDF0BG0lL1g-syIJXDgKdgT0haFvDt1gIH4j-ipmmo0vWxhbh-WCeQPVChYkEcXXk6S7~0dIkRtwUr4ZsC1COxZIMhy1fdDNID~y7KJiUQ__";
  const image4 =
    "https://s3-alpha-sig.figma.com/img/7ee2/a494/8bb51c102a7ace7d433ffe28811bba70?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxquHb51nSWZv6CUte4qwXjQ~anXjDZz1HZ3tDXVtJEoj8pDv6hznK5JrYt1j7nc8eXMIkbp0y~Y9rZR70cjff4q8PX0Iy4e7CA5VMhqTW6T65cmrh13W8aeddyfaQSCNLlN1abWjS36O6EAifvfC1G8lS~xQq02MilymElJjDZN-KKe2DE0xUxFn0PnZ0ER~XQdCnNTu41A7EVI-YNK-dD-PurX3iPNmBvIAQdX6u-re3cW65PtZxpzEKgylHAqrVhTB86CvXQFBmJcRYupuJSacN8zfghmK9m0Uu5Fcn60QtM1V4xQK3qAJD4pML75e5pDjS61BdkEQjC6l2dwNA__";

    return (
    <div className="section2_main">
        <div className="sec2_main">
      <div className="sec2_main_card">
        <img src={image1} alt="" />
        <p>TableWare</p>
      </div>
      <div className="sec2_main_card">
        <img src={image2} alt="" />
        <p>Home decor</p>
      </div>
      <div className="sec2_main_card">
        <img src={image3} alt="" />
        <p>holiday</p>
      </div>
      <div className="sec2_main_card">
        <img src={image4} alt="" />
        <p>Collection</p>
      </div>
    </div>
        <div className="mid_content">
            <div className="mid_content_text"> 
                <h2>Up to 40% off our Christmas collection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                <button>SHOP NOW</button>
            </div>
            <img src={image5} alt="" />
        </div>
    </div>
  );
};

export default Section2;
