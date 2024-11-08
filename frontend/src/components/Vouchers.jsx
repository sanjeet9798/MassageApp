import React from 'react';
import Bronze from './Bronze';
import Silver from './Silver';
import Gold from './Gold';
import Diamond from './Diamond';
import './Vouchers.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Vouchers = () => {


  const [voucherData, setVoucherData] = useState([]);

  const getVoucherData = async () => {
    try {
      const voucherRes = await axios.get('http://localhost:8000/VouchersData');
      console.log(voucherRes.data);
      setVoucherData(voucherRes.data);
    } catch (error) {
      console.error('Error fetching Silver data:', error);
    }
  };

  useEffect(() => {
    getVoucherData();
  }, []);

  if (!voucherData.length) {
    return <div>Loading...</div>;
  }

  const {
    voucher_heading
  } = voucherData[1];




  return (
    <div className="vouchers_container">
      <h1 className='Voucher_h1'>{voucher_heading}</h1>
      <div className="vouchers">
        <Bronze />
        <Silver />
        <Gold />
        <Diamond />
      </div>
    </div>
  );
};

export default Vouchers;
