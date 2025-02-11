import React from 'react';
import styled from 'styled-components';
import {Grid2} from '@mui/material';
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
const CCard = () => {
  return (
   
    <div className="flex flex-wrap justify-between items-start w-full px-8 sm:px-12 md:px-16 py-8 bg-gray-100 gap-6">
  {/* Left Card */}
  <div className="w-full sm:w-[48%] max-w-sm">
    <StyledWrapper>
      <div className="card">
        <span className="card__title">
          <MdLocationPin />
          Address
        </span>
        <p className="card__content">
          Centre for Immersive Technologies (CIT)
          <br />
          No. 404 &amp; 405, Third Floor, Centre for Excellence Building
          <br />
          College of Engineering Guindy (CEG)
          <br />
          Anna University, Chennai 600 025
        </p>
      </div>
    </StyledWrapper>
  </div>

  {/* Right Card */}
  <div className="w-full sm:w-[48%] max-w-sm">
    <StyledWrapper>
      <div className="card">
        <span className="card__title">
          <HiPhone />
          Phone Number
        </span>
        <p className="card__content">
          <a href="tel:04422357791" className="text-gray-700 hover:text-blue-500">
            044 2235 7791
          </a>
          <br />
          <a href="tel:04422357792" className="text-gray-700 hover:text-blue-500">
            044 2235 7792
          </a>
          <br />
          <a href="tel:04422357793" className="text-gray-700 hover:text-blue-500">
            044 2235 7793
          </a>
        </p>
        <span className="card__title">
          <HiMail />
          Email
        </span>
        <p className="card__content">
          <a href="mailto:directorcit2023@gmail.com" className="text-gray-700 hover:text-blue-500">
            directorcit2023@gmail.com
          </a>
          <br />
          <a href="mailto:citauceg2023@gmail.com" className="text-gray-700 hover:text-blue-500">
            citauceg2023@gmail.com
          </a>
        </p>
      </div>
    </StyledWrapper>
  </div>
</div>

  );
}

const StyledWrapper = styled.div`
  .card {
    width: 360px;
    height: 300px;
    padding: 20px;
    background: #fff;
    border: 6px solid #1e3c72;
    box-shadow: 12px 12px 0  #1e3c72;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 rgb(8, 32, 77);
  }

  .card__title {
    font-size: 22px;
    font-weight: 700;
    color: #1e3c72;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: inline-flex;
    position: relative;
    overflow: hidden;
     align-items: center; /* Aligns the icon and text vertically */
  gap: 8px;
  }

  .card__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: rgb(8, 32, 77);
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  .card:hover .card__title::after {
    transform: translateX(0);
  }

  .card__content {
    font-size: 16px;
    line-height: 1.4;
    color: rgb(8, 32, 77);
    margin-bottom: 20px;
  }


  @keyframes glitch {
    0% {
      transform: translate(2px, 2px);
    }
    25% {
      transform: translate(-2px, -2px);
    }
    50% {
      transform: translate(-2px, 2px);
    }
    75% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(2px, 2px);
    }
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
      padding: 15px;
      box-shadow: 8px 8px 0 #1e3c72;
    }

    .card__title {
      font-size: 1.125rem;
    }

    .card__content {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      padding: 10px;
      box-shadow: 6px 6px 0 #1e3c72;
    }

    .card__title {
      font-size: 1rem;
    }

    .card__content {
      font-size: 0.875rem;
    }
  }
    
  .glitch {
    animation: glitch 0.3s infinite;
  }`;
export default CCard;
