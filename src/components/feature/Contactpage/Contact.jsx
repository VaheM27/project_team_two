import React from 'react'
import slider from "../../../assets/images/Contactpage_images/Slider.png"
import sentMasage from "../../../assets/images/Contactpage_images/Arrow rigth.png"


import "./Contact.scss"



const contact = () => {
  return (
    <div>
      <img src={slider} alt="" className="slideerimg" />
      <br /><br /><br />
      <div className="contactPageText">
        <h2>GET IN TOUCH WUTH US</h2>
        <br />
        <span>Lorem ipsum dolar sit ametconsecteur adipiscing eli mattis sit phasellus molliss sit aliquam sit nullam</span>
        <br /><br /><br />
        <h4>Office Hours:</h4>
        <p>Monday-Friday 8:00 am to 5:00pm</p>
        <br /><br />
        <h4>Email:</h4>
        <p>contact@company.com</p>
        <br /><br />
        <h4>Phone:</h4>
        <p>+37498080808</p>
        <br /><br />
        <h4>Location:</h4>
        <p>59 Middle Poind Rd <br />San Francisco,80412</p>
      </div>
      <br /><br /><br />
      <div className="input">
        <div clas>
          <h5>Name </h5>
          <input type="text" placeholder='Samatha Clarken' />
          <br />
          <h5>Email </h5>
          <input type="email" placeholder='example@youremail.com' />
        </div>
        <div>
          <h5>Phone </h5>
          <input type="number" placeholder='+374(**)**-**-**' />
          <br />
          <h5>Company </h5>
          <input type="text" placeholder='Moon' />
        </div>
      </div>
      <div className='inputMasage'>
        <h5>Massage</h5>
        <input type="text" placeholder='Type your massage here....' />
        <br /><br />
        <button>SEND MASSAGE <img src={sentMasage} alt="" className='btnimg' /></button>
      </div>
      <br /><br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97682.10845633782!2d44.476006399999996!3d40.085094399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1729588888262!5m2!1sru!2sam" 
      width="100%"
       height="500" 
       title="map"
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">

       </iframe>
    </div>
  )
}

export default contact;













