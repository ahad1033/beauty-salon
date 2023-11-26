import React from "react";
import img1 from "../../../assets/images/Headers/hero-2-img.png";

const HomeBanner = () => {
  return (
    <>
      <section id="hero-2" className="  ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-6">
              <div className="hero-2-txt white--color">
                <h1 className="display-3">Nail Shine Made Simple</h1>
                <p>
                  Feugiat primis and ligula laoreet auctor and mauris undo
                  auctor a laoreet purus sapien integer
                </p>
                <button className="btn btn--tra-black hover--black">
                  Find Out More
                </button>
              </div>
            </div>
            <div className="col-md-5 col-lg-6">
              <div className="hero-2-img text-center">
                <img
                  className="img-fluid custom-img"
                  src={img1}
                  alt="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
            <path
              fill="#F8F5F2"
              fill-opacity="1"
              d="M0,192L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
