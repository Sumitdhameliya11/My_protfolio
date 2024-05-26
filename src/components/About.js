import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <section
        className="container bg-black mt-5"
        style={{
          minWidth: "100px",
          borderRadius: "8px",
          boxShadow: "-3px -3px 20px  #29323c",
          width: "80%"
        }}
      >
        <div className="d-flex flex-column text-white fw-semibold">
          <div className="title mt-2 fs-4">About US</div>
          <hr />
          <div className="a-c mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos eaque labore a eius. Dolore commodi voluptatem esse
            libero quas sequi et aut eligendi error velit nostrum a aliquid
            explicabo laborum voluptatibus, qui minus magnam dolorem voluptas
            nulla omnis nisi pariatur!
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
