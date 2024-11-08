import React from 'react';
import './Gold.css'; 
import { useState,useEffect } from 'react';
import axios from 'axios';
const Gold = () => {


  const [goldData, setGoldData] = useState([]);

  const getGoldData = async () => {
    try {
      const voucherRes = await axios.get('http://localhost:8000/VouchersData');
      console.log(voucherRes.data);
      setGoldData(voucherRes.data);
    } catch (error) {
      console.error('Error fetching Gold data:', error);
    }
  };

  useEffect(() => {
    getGoldData();
  }, []);

  if (!goldData.length) {
    return <div>Loading...</div>;
  }

  const {
    Gold_title,
    Gold_pricing,
    Gold_pricing_time,
    Gold_sub_title,
    Gold_point1,
    Gold_point2,
    Gold_point3,
    Gold_point4,
    Gold_logo,
  } = goldData[2];



  return (
    <div className="Gold_card">
      <img className="diamond-image" src={Gold_logo} alt="Gold" />
      <span className="title">{Gold_title}</span>
      <p className="pricing">{Gold_pricing} <span className="pricing-time">{Gold_pricing_time}</span></p>
      <span className="sub-title">
        {Gold_sub_title}
        <ul className="list">
          <li className="list-item"><span className="check">✓</span>{Gold_point1}</li>
          <li className="list-item"><span className="check">✓</span>{Gold_point2}</li>
          <li className="list-item"><span className="check">✓</span>{Gold_point3}</li>
          <li className="list-item"><span className="check">✓</span>{Gold_point4}</li>
          {/* <li className="list-item"><span className="check">✓</span> Feature</li> */}
        </ul>
        <button className="button">
          <span className="text-button">Get pro now</span>
        </button>
      </span>
    </div>
  );
};

export default Gold;
