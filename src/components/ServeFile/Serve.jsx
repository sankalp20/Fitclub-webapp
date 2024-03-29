import React from "react";
import "./Serve.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Serve = () => {
  return (
    <div className="Serve" id="serve">
      <div className="left-serve">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-serve">
        <span>Some reasons to choose us....</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us ?</span>
        </div>

        <div className="details-right">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 360+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN WITH MODERN AND LATEST EQUIPMENTS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>DISCOUNTED MEMBERSHIP OPTIONS FOR SENIOR CITIZEN</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{
            color: "var(--gray)",
            fontWeight: "normal",
        }}>OUR PARTNERS</span>
        <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
      </div>
    </div>

  );
};

export default Serve;
