import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Intagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
            <img src={Github} alt="" />
            <img src={Intagram} alt="" />
            <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-footer">
            <img src={Logo} alt="" />
        </div>
        </div>

        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
    </div>
  );
};

export default Footer;