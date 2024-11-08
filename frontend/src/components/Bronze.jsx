import React, { useEffect, useState } from 'react';
import './Bronze.css'; 
import axios from 'axios';

const Bronze = () => {
  
  const [bronzeData, setBronzeData] = useState([]);

  const getBronzeData = async () => {
    try {
      const voucherRes = await axios.get('http://localhost:8000/VouchersData');
      console.log(voucherRes.data);
      setBronzeData(voucherRes.data);
    } catch (error) {
      console.error('Error fetching Bronze data:', error);
    }
  };

  useEffect(() => {
    getBronzeData();
  }, []);

  if (!bronzeData.length) {
    return <div>Loading...</div>;
  }

  const {
    Bronze_title,
    Bronze_pricing,
    Bronze_pricing_time,
    Bronze_sub_title,
    Bronze_point1,
    Bronze_point2,
    Bronze_point3,
    Bronze_point4,
    Bronze_logo,
  } = bronzeData[0];

  return (
    <div className="Bronze_card">
      <img className="diamond-image" src={Bronze_logo} alt="Bronze" />
      <span className="title">{Bronze_title}</span>
      <p className="pricing">
        {Bronze_pricing} <span className="pricing-time">{Bronze_pricing_time}</span>
      </p>
      <span className="sub-title">
        {Bronze_sub_title}
        <ul className="list">
          <li className="list-item"><span className="check">✓</span>{Bronze_point1}</li>
          <li className="list-item"><span className="check">✓</span>{Bronze_point2}</li>
          <li className="list-item"><span className="check">✓</span>{Bronze_point3}</li>
          <li className="list-item"><span className="check">✓</span>{Bronze_point4}</li>
        </ul>
        <button className="button">
          <span className="text-button">BE A BRONZE MEMBER</span>
        </button>
      </span>
    </div>
  );
};

export default Bronze;
