import React from 'react';
import './Diamond.css'; 
import { useState,useEffect } from 'react';
import axios from 'axios';




const Diamond = () => {


  const [diamondData, setDiamondData] = useState([]);

  const getDiamondData = async () => {
    try {
      const voucherRes = await axios.get('http://localhost:8000/VouchersData');
      console.log(voucherRes.data);
      setDiamondData(voucherRes.data);
    } catch (error) {
      console.error('Error fetching Gold data:', error);
    }
  };

  useEffect(() => {
    getDiamondData();
  }, []);

  if (!diamondData.length) {
    return <div>Loading...</div>;
  }

  const {
    Diamond_title,
    Diamond_pricing,
    Diamond_pricing_time,
    Diamond_sub_title,
    Diamond_point1,
    Diamond_point2,
    Diamond_point3,
    Diamond_point4,
    Diamond_logo,
  } = diamondData[3];





  return (
    <> 
    
      <div className="Diamond_card">
      <img className="diamond-image" src={Diamond_logo}alt="Diamond" />
      <span className="title">{Diamond_title} </span>
      <p className="pricing">{Diamond_pricing}<span className="pricing-time">{Diamond_pricing_time}</span></p>
      <span className="sub-title">
        {Diamond_sub_title}
        <ul className="list">
          <li className="list-item"><span className="check">✓</span> {Diamond_point1}</li>
          <li className="list-item"><span className="check">✓</span> {Diamond_point2}</li>
          <li className="list-item"><span className="check">✓</span>{Diamond_point3}</li>
          <li className="list-item"><span className="check">✓</span> {Diamond_point4}</li>
          {/* <li className="list-item"><span className="check">✓</span> Feature</li> */}
        </ul>
        <button className="button">
          <span className="text-button">BE A SPECIALIZE MEMBER NOW</span>
        </button>
      </span>
    </div>
    </>

  );
};

export default Diamond;
