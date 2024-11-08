import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="Contact_container">
      
    <div className="contact-info">
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>By Appointment Only</p>
          <p>Hazaribagh , Jharkhand<br />India</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>Mobile Phone</p>
          <p>+91 85210 32214</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-clock"></i>
          <p>Working Hours</p>
          <p>11:00 AM - 9:00 PM</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email</p>
          <p>kyashwant143@gmail.com</p>
        </div>
      </div>
    </div>
    </div>




      {/* //footer */}



      <footer className="footer_divv">
  <section className="footer_section">
    <div className="footer_element_container">
      <div className="footer_element_container_child_01">
        <h4 className="footer_element_container_child_01_tittle">Mr.Yashwant</h4>
        <p className="footer_element_container_child_01_short_para">
          <b style={{color:"#E7F7D0"}}>Come experience the secrets of relaxation.</b><br />
          Come in and our therapists provide the perfect treatment. Our massage is specially designed to help you achieve the perfect mind-body harmony.The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site
        </p>
      </div>

      <div className="footer_element_container_child_02">
        <h4 className="footer_element_container_child_02_tittle">Social</h4>
        <div className="footer_social_icons">
          <a
            href="https://t.me/%20-UyWKYOaH7oxMmM9"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icons"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icons"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icons"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/@yashwantkumar9041"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icons"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/relaxheavan65?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icons"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="footer_link">
      <p className="footer_link_para">
        © Copyright 2024. Made by <a href="#">Yashwant</a>
      </p>
    </div>
  </section>
</footer>



    </>
  );
};

export default Contact;
