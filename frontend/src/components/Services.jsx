import './Services.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {



  const [servicesData, setServicestData] = useState([]);
  const getServicesDetails = async () => {
    try {
      const servicesRes = await axios.get("http://localhost:8000/servicesData");
      console.log(servicesRes);
      setServicestData(servicesRes.data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };
  useEffect(() => {
    getServicesDetails();
  }, []);

  if (servicesData.length === 0) {
    return <div>Loading....<i class="fas fa-spinner fa-spin"></i></div>; 
  }

  const { Service_1_tittle ,Service_1_despcription, Service_1_time,Services_1_price,Services_1_img } = servicesData[0];



  return (
    <div className="massage-container">
       <div className="massage-image">
        <img src={Services_1_img} alt="Massage Image" height={400} />
      </div>
      <div className="massage-details">
        <h1 className="massage-title">{Service_1_tittle}</h1>
        <p className="massage-description">{Service_1_despcription}</p>

        <div className="time-options">
          <button className='time_btn'>{Service_1_time}</button>
        </div>

        <div className="price-section">
          <span className="price">{Services_1_price}</span>
        </div>

        <div className="book-online">
          <a href="#" className="book-link">BOOK ONLINE</a>
        </div>
      </div>

     
    </div>
  );
};

export default Services;
