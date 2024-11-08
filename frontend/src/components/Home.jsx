import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

const Home = () => {  
  
  const [homeData, setHomeData] = useState([]);

  const getImg = async () => {
    try {
      const res = await axios.get("http://localhost:8000/homeImgGet");
      console.log(res.data);
      setHomeData(res.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleNavigation = () => {
    window.open('/GoogleForm', '_blank'); 
  };
  
  useEffect(() => {
    getImg();
  }, [setHomeData]);

  return (
    <>      
      <div className="home_cantainer">
            <div className='home_details_cantainer'>
                <div className="home_details" >
                        {homeData.map((element, index) => (
                            <h1 className='home_details_heading' key={index}>{element.home_heading}</h1>
                          ))}  
                        {homeData.map((element, index) => (
                            <p className='home_details_subheading'>{element.home_subHeading}</p>
                          ))}  
                  <button class="home_button" onClick={handleNavigation}>Book Now
                    <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fill-rule="evenodd"d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>

                </div>
            </div>

            <div className="home_img_container">

            {homeData.map((element, index) => (
                <img className='home_img' key={index} src={element.home_img} alt={`image-${index}`} />
            ))}

            </div>

      </div>

    </>
  );
};

export default Home;
