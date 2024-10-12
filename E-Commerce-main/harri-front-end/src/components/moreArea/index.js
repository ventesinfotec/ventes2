import React from 'react';
import { FaAward, FaBuilding, FaCar, FaConciergeBell, FaGasPump, FaGraduationCap, FaIndustry, FaNewspaper, FaPills, FaShoppingCart, FaStore, FaTruck } from 'react-icons/fa';

export default function MoreArea() {
  return (
    <div style={{backgroundColor:"#1106af"}}  className='my-4 pt-4 text-white'>
      <div className='row text-center'>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 p-3'></div>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 p-3' style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Available Solution's </div>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 p-3'></div>
      </div>
      <hr
          className="w-75 mx-auto"
          style={{ borderTop: "3px solid blue" }}
      />
      <div className='row p-2 text-center'>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaGraduationCap size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Education</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaPills size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Pharmaceuticals</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaIndustry size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Manufacturing</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaAward size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Government</p>
        </div>
      </div>
      <div className='row p-2 text-center'>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaCar size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Automotive</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaShoppingCart size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>IT/E-commerce</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaTruck size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Logistics & Transportation</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaBuilding size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Banking Financial Services & Insurance</p>
        </div>
      </div>
      <div className='row p-2 text-center'>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaConciergeBell size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Hospitality</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaNewspaper size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Print Media</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaStore size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Retail</p>
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 p-3'>
          <FaGasPump size={40} />
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Oil & Power</p>
        </div>
      </div>
    </div>
  );
}
