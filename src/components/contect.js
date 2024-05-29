"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function SignupFormDemo() {
  return (
    <div>
      <div
        className="container max-w-md mx-auto p-4 p-md-8  mt-2  rounded-3 bg-black text-start"
        style={{ boxShadow: "-3px -3px 20px  #29323c", width: "80%" }}
      >
        <h2
          className="font-weight-bold text-xl text-light dark:text-light"
          style={{ textShadow: "1px 3px 3px black" }}
        >
          Contact With Me
        </h2>
        <p
          className="text-danger mt-2"
          style={{ textShadow: "1px 3px 3px black" }}
        >
          Login to Aceternity if you can because we don&apos;t have a login flow
          yet.
        </p>

        <form className="my-8">
          <div className="row mb-4 fs-6 fw-semibold ">
            <LabelInputContainer className="col-md-6 w-100 text-light">
              <label
                htmlFor="firstname"
                className="w-100 text-start text-light"
              >
                Full Name :
              </label>
              <input
                id="Name"
                placeholder="Enter The Name"
                type="text"
                className="form-control pt-2"
                style={{
                  background: "black",
                  color: "white",
                  // border: "2px solid white",
                  outline: "none",
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <label htmlFor="email" className="w-100 text-start text-light">
                Email Address :
              </label>
              <input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                className="form-control"
                style={{
                  background: "black",
                  color: "white",
                  // border: "2px solid white",
                  outline: "none",
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="col-md-6 w-100">
              <label
                htmlFor="firstname"
                className="w-100 text-start fs-6 fw-semibold text-light"
              >
                Mobile Number :
              </label>
              <input
                id="mnumber"
                placeholder="Mobile Number"
                type="numeric"
                min={10}
                max={13}
                className="form-control "
                style={{
                  background: "black",
                  color: "white",
                  // border: "2px solid white",
                  outline: "none",
                }}
              />
            </LabelInputContainer>
          </div>
          <button
            className="btn btn-dark btn-block mb-4 fw-semibold fs-4 glow-on-hover"
            type="submit"
            style={{
              textShadow: "1px 1px 1px black",
              boxShadow: "0px 0px 3px 0px white",
            }}
          >
            Contect &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="d-block transition-opacity opacity-0 position-absolute w-100 h-px bottom-0 start-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="d-block transition-opacity opacity-0 position-absolute w-50 h-px mx-auto bottom-0 start-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};
