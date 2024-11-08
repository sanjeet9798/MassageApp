import { useEffect,useState } from 'react';
import axios from 'axios';
import './Service3.css'; 

const Services3 = () => {

  

  const [services3Data, setServices3Data] = useState([]);

  const getServices3Data = async () => {
    try {
      const services3Res = await axios.get("http://localhost:8000/servicesData");
      console.log("API Response:", services3Res);
      setServices3Data(services3Res.data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching services data...");
    getServices3Data();
  }, []);


  if (services3Data.length === 0) {
    return <div>Loading...</div>;
  }

  const { Service_3_tittle, Service_3_despcription, Service_3_time, Services_3_price, Services_3_img } = services3Data[2];

  return (
    <div className="massage-container">
      <div className="massage-image">
        <img src={Services_3_img} alt="Relaxing Massage Image" height={400} />
      </div>

      <div className="massage3-details">
        <h1 className="massage-title">{Service_3_tittle}</h1>
        <p className="massage-description">{Service_3_despcription}</p>

        <div className="time-options">
          <button className='time_btn'>{Service_3_time}</button>
        </div>

        <div className="price-section">
          <span className="price">{Services_3_price}</span>
        </div>

        <div className="book-online">
          <a href="#" className="book-link">BOOK NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Services3;
