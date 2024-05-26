import React from "react";
import SignupFormDemo from "./contect";
import About from "./About";
import AboutMySkill from "./aboutmyskill/aboutchatgpt";
import BootstrapCarousel from "./BootstrapCarousel";
// import Aboutmyskill from './aboutmyskill/Aboutmyskill'

function right() {
  return (
    <div className="d-flex flex-column gap-4 px-3">
      <About />
      <AboutMySkill />
      <SignupFormDemo />
      <BootstrapCarousel />
    </div>
  );
}

export default right;
