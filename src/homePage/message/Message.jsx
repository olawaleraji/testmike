import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import "./Message.css";

const Message = () => {
  return (
    <div id="message-container">
      <div className="message-img-container">
        <img id="message-img" src={assets.chat} alt="Chat Icon" />
      </div>

      <div className="message-content">
        <h3>What's on your mind?</h3>
        <p>
          Unlock limitless conversations with SAIL ChatBot. Your intelligent
          companion for insightful discussions, where curiosity meets knowledge
          anytime, anywhere!
        </p>
        <Link to={"/user"} className="message-link">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Message;
