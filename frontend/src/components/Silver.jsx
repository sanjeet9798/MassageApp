import { useEffect , useState } from 'react';
import axios from 'axios';
import React from 'react';
import './Silver.css'; 
const Silver = () => {

  const [silverData, setSilverData] = useState([]);

  const getSilverData = async () => {
    try {
      const voucherRes = await axios.get('http://localhost:8000/VouchersData');
      console.log(voucherRes.data);
      setSilverData(voucherRes.data);
    } catch (error) {
      console.error('Error fetching Silver data:', error);
    }
  };

  useEffect(() => {
    getSilverData();
  }, []);

  if (!silverData.length) {
    return <div>Loading...</div>;
  }

  const {
    Silver_title,
    Silver_pricing,
    Silver_pricing_time,
    Silver_sub_title,
    Silver_point1,
    Silver_point2,
    Silver_point3,
    Silver_point4,
    Silver_logo,
  } = silverData[1];




  return (
    <div className="Silver_card">
      <img className="diamond-image" src={Silver_logo} alt="Silver" />
      <span className="title">{Silver_title} </span>
      <p className="pricing">{Silver_pricing} <span className="pricing-time">{Silver_pricing_time}</span></p>
      <span className="sub-title">
        {Silver_sub_title}
        <ul className="list">
          <li className="list-item"><span className="check">✓</span>{Silver_point1}</li>
          <li className="list-item"><span className="check">✓</span>{Silver_point2}</li>
          <li className="list-item"><span className="check">✓</span>{Silver_point3}</li>
          <li className="list-item"><span className="check">✓</span>{Silver_point4}</li>
          {/* <li className="list-item"><span className="check">✓</span> Feature</li> */}
        </ul>
        <button className="button">
          <span className="text-button">BE A SILVER MEMBER</span>
        </button>
      </span>
    </div>
  );
};

export default Silver;
