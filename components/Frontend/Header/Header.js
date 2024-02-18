import React from "react";
import FindForm from "./FindForm";
import JobBox from "./JobBox";

const Header = () => {
  return (
    <>
      <div className="p-5 bg-primary-color text-center">
        <div className="hero-section">
          <h1 className="display-5 mt-3 mb-2 text-white fw-bolder py-4">
            Welcome to <span className="secondary-color">CareerCatch</span> Find
            what you deserve
          </h1>
          <p className="text-white fs-5">
            Come and find the best job which you deserve <br />
            Discover your potential
          </p>
          <FindForm />
          <p className="text-white fs-6 my-3">
            <span className="fw-bold">Popular Searches: </span>
            <span className="text-decoration-underline">
              Graphic Designer,
            </span>{" "}
            <span className="text-decoration-underline">Web Designer,</span>{" "}
            <span className="text-decoration-underline">Web Developer,</span>{" "}
            <span className="text-decoration-underline">
              Software Engineer,
            </span>{" "}
          </p>
        </div>
        <div className="jobs-list">
          <JobBox />
        </div>
      </div>
    </>
  );
};

export default Header;
