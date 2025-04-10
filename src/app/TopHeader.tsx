import React from 'react';
import { FaPhone, FaClock } from 'react-icons/fa';

const TopHeader = () => {
  console.log('loaded')
  return (
<div style={{ backgroundColor: '#0285D3' }} className="text-white text-sm">

      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-2 lg:mb-0">
            <p>Welcome to Varenya</p>
          </div>
          <ul className="flex flex-col lg:flex-row items-center space-y-1 lg:space-y-0 lg:space-x-6">
            <li className="flex items-center space-x-1">
              <FaPhone />
              <a href="tel:+19726340122" className="hover:underline">
                +1 (972)-634-0122
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <FaClock />
              <span>2601 Little Elm Pkwy Unit 1602, Suite B Little Elm, TX 75068</span>
            </li>
            <li className="flex items-center space-x-1">
              <FaClock/>
              <span>8:00 AM – 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
