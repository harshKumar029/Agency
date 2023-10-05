import React from "react";
import "./weDo.css";

const weDo = () => {
  return (
    <>
      <div className="weDoContainer">
        <div className="flex-box">
          <div className="img-dex"></div>
          <div>
            <div className="weDo">
              <h3>OUR WORK</h3>
              <h1>What We Do at Name</h1>
            </div>
            <div className="img-mob"></div>
            <div className="weDoPara">
              <p>
                Media is one of those rare agencies that actually
                <br /> make your work life easier! They go way beyond <br />{" "}
                checking the basic boxes{" "}
              </p>
            </div>
          </div>
          {/* <div className="flex-cont">
          </div> */}
        </div>
      </div>
    </>
  );
};

export default weDo;
