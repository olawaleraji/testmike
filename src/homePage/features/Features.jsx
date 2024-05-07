import React from "react";
import { assets } from "../../../assets/assets";
import "./Features.css";

const Features = () => {
  return (
    <>
      <div id="features-container">
        <h2 id="features-container-top">SAIL ChatBot</h2>

        <div id="features-container-bottom">
          <div className="features-container-bottomDivs">
            <img src={assets.about} alt="icon" />
            <h3>About</h3>
            <p id="features-container-firstText">
              The SAIL ChatBot utilizes advanced AI technology to provide users with interactive and informative experiences.
            </p>
          </div>

          <div className="features-container-bottomDivs">
            <img src={assets.features} alt="icon" />
            <h3>Key Features</h3>
            <p>• Engaging conversation</p>
            <p>• Text input-output interaction</p>
            <p>• Context Awareness</p>
            <p>• User Privacy and Security</p>
          </div>

          <div className="features-container-bottomDivs">
            <img src={assets.benefits} alt="icon" />
            <h3>Benefits</h3>
            <p>• Quick and reliable responses</p>
            <p>• 24/7 availability</p>
            <p>• Learning aid</p>
            <p>• Personalized interaction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
