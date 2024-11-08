import axios from 'axios'; 
import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  const getAboutDetails = async () => {
    try {
      const aboutRes = await axios.get("http://localhost:8000/aboutData");
      setAboutData(aboutRes.data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    getAboutDetails();
  }, []);

  const handleNavigation = () => {
    window.open('/GoogleForm', '_blank'); 
  };
  
  if (aboutData.length === 0) {
    return <div>Loading....<i className="fas fa-spinner fa-spin"></i></div>; // Handle loading state
  }

  const { owner_name, owner_tag, owner_img, owner_info, point_1, point_2, point_3 } = aboutData[0];

  return (
    <>
      <div className="about_section glassmorphism">
        <div className="about_head_sec">
          <div className="about_owner_name">
            <h1>{owner_name}</h1>
            <h1>{owner_tag} &#10084;</h1>
          </div>
        </div>

        <div className="about_details">
          <div className="about_owner_img">
            <div className="image">
              <img src={owner_img} alt="Owner" />
            </div>
          </div>

          <div className="about_owner_info">
            <div className="information">
              <p>{owner_info}</p>
              <div className="bullet_points">
                <i className="fas fa-check-circle bullet-icon">
                  <span>&nbsp;&nbsp; {point_1}</span>
                </i>
                <i className="fas fa-check-circle bullet-icon">
                  <span>&nbsp;&nbsp; {point_2}</span>
                </i>
                <i className="fas fa-check-circle bullet-icon">
                  <span>&nbsp;&nbsp; {point_3}</span>
                </i>
              </div>
              <button className="book_btn" onClick={handleNavigation}>Book Online</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
