import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import node from "../../images/node.png";
import mongodb from "../../images/monogo db.png";
import mysql from "../../images/my sql.png";
import express from "../../images/exprees js.png";
import javascript from "../../images/javascrpt.png";
import github from "../../images/github.png";
import postman from "../../images/postman.png";
import react from "../../images/react.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import bootstrap from "../../images/bootstrap.png";

// Import custom icons

const AboutMySkill = () => {
  const skills = [
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "Postman", icon: postman },
    { name: "MongoDB", icon: mongodb },
    { name: "MySQL", icon: mysql },
    { name: "JavaScript", icon: javascript },
    { name: "GitHub", icon: github },
  ];

  const skills2 = [
    { name: "html", icon: html },
    { name: "css", icon: css },
    { name: "bootstrap", icon: bootstrap },
    { name: "javascript", icon: javascript },
    { name: "react", icon: react },
  ];

  return (
    <div
      className="container bg-black text-light skill container rounded-3"
      style={{
        borderRadius: "8px",
        boxShadow: "-2px -2px 12px #29323c",
        minWidth: "100px",
        width: "80%",
      }}
    >
      <h2 className="mb-1 pt-2">About My Skill</h2>
      <hr />
      <div className="mb-3">PRIMARY SKILLS ON</div>
      <div className="row">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center mb-2"
            style={{ width: "20" }}
          >
            <div
              className="skill-icon bg-black d-flex align-items-center justify-content-center flex-wrap  text-center overflow-hidden p-2"
              style={{
                height:"70px",
                borderRadius: "8px",
                boxShadow: "-2px -2px 12px #29323c",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mb-3">SECONDERY SKILLS</div>
      <div className="row">
        {skills2.map((skill, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-2"
            style={{ width: "15" }}
          >
            <div
              className="skill-icon bg-black d-flex align-items-center justify-content-center flex-wrap text-center overflow-hidden p-2"
              style={{
                height: "70px",
                borderRadius: "8px",
                boxShadow: "-2px -2px 12px #29323c",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMySkill;
