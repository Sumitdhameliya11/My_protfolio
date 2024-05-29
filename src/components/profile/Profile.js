import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import sumit from "../../images/sumit.jpeg"
import "./profile.css"
const ProfileCard = () => {
  return (
    <div className=" d-flex flex-column align-items-center justify-content-center h-100 px-4" style={{background:"grey"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="p-4  rounded text-start mt-3">
            <img
              src={sumit}
              alt="Profile"
              className="rounded-circle mb-4"
              style={{ width: "150px", height: "150px",textShadow: "1px 3px 3px black", objectFit: "cover"}}
            />
            <h1 className="display mb-2 text-light"style={{textShadow: "1px 3px 3px black"}}>
              Hi, I'm <span className="text-danger">Sumit Dhamaliya</span>
            </h1>
            <h2 className="h4 mb-4 text-light" style={{textShadow: "1px 3px 3px black"}}>Backend Developer.</h2>
            <p className="text-light mb-4 fw-semibold"style={{textShadow: "1px 1px 1px black"}}>
            I am an experienced Backend Developer with over 1 years at Dwarkeshsoft Pvt Ltd in Surat, OR. I specialize in designing and implementing RESTful APIs, optimizing server-side performance, and ensuring seamless database integration. My passion lies in backend operations and delivering high-quality software solutions.
            </p>
            <div className="d-flex gap-3  ">
              <button className="btn d-block btn-danger glow-on-hover fw-bold text-light" type="button" style={{textShadow: "1px 1px 1px black",boxShadow:"0px 0px 3px 0px white"}}>Download My CV</button>
              <button className="btn d-block btn-dark glow-on-hover text-light fw-bold" style={{textShadow: "1px 1px 1px black",boxShadow:"0px 0px 3px 0px white"}}>Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
