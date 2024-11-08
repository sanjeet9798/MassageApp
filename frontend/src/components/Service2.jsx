import { useEffect, useState } from 'react';
import './Services2.css';
import axios from 'axios'; // Don't forget to import axios

const Services2 = () => {
  const [services2Data, setServices2Data] = useState([]);

  const getServices2Data = async () => {
    try {
      const services2Res = await axios.get("http://localhost:8000/servicesData");
      console.log("API Response:", services2Res);
      setServices2Data(services2Res.data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching services data...");
    getServices2Data();
  }, []);


  if (services2Data.length === 0) {
    return <div>Loading...</div>;
  }

  const { Service_2_tittle, Service_2_despcription, Service_2_time, Services_2_price, Services_2_img } = services2Data[1];

  return (
    <div className="massage-container2">
      <div className="massage-image">
        <img src={Services_2_img} alt="Massage Image" height={400} />
      </div>

      <div className="massage2-details">
        <h1 className="massage-title">{Service_2_tittle}</h1>
        <p className="massage-description">{Service_2_despcription}</p>

        <div className="time-options">
          <button className='time_btn'>{Service_2_time}</button>
        </div>

        <div className="price-section">
          <span className="price">{Services_2_price}</span>
        </div>

        <div className="book-online">
          <a href="#" className="book-link">BOOK ONLINE</a>
        </div>
      </div>
    </div>
  );
};

export default Services2;
