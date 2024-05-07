import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Login from "../../login/Login";

const HeroSection = () => {
  const [logged, setLogged] = useState(false);

  const toggleLog = () => {
    setLogged(!logged);
  };

  return (
    <>
      {logged ? <Login /> : null}
      <section className="container">
      <nav>
          <img id="sail_logo" src={assets.sail_logo} alt="logo" />
          <div className="buttons">
            <Link to={"/user"}  onClick={toggleLog}>
            <p className="a">Get Started</p>
          </Link>
        </div>
        </nav>
    <div className="content">
    <h1>
    Discover the Possibilities with
    <span> Artificial Intelligence</span>
</h1>
<p>
    Explore a revolutionary AI project developed by cloudDotz, a dedicated team from the esteemed SAIL tech talent program.
</p>

        <div className="buttons">
            <Link to={"/user"}  onClick={toggleLog}>
            <p className="a">Get Started</p>
          </Link>
        </div>
    </div>
    <div className="image">
        <img src={assets.ai_img}  alt="Digital Agency Image" />
    </div>
</section>
    </>
  );
};

export default HeroSection;
