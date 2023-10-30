import React from "react";
import "./Sectionprop.css";

const Sectionprop = ({ psvg, title, svg, linupicon, dev, dot, clg, para }) => {
  return (
    <div className="main">
      <div className="heading">
        <div className="iconheading">
          <div className="centericontext">
            <span className="">{psvg}</span> &nbsp;  <span>{title}</span> 
          </div>
        </div>

        <div className="icon">
          <span className="">{svg}</span>
        </div>
      </div>

      <div className="content">
        <p>
          {linupicon}{" "}
          <span>
            {" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_681)">
                <path
                  d="M2.1875 10.0707V11.7807C2.1875 11.9382 2.31125 12.062 2.46875 12.062H4.17875C4.25187 12.062 4.325 12.0338 4.37562 11.9776L10.5181 5.8407L8.40875 3.73133L2.27188 9.8682C2.21563 9.92445 2.1875 9.99195 2.1875 10.0707ZM12.1494 4.20945C12.3687 3.99008 12.3687 3.6357 12.1494 3.41633L10.8331 2.10008C10.6138 1.8807 10.2594 1.8807 10.04 2.10008L9.01062 3.12945L11.12 5.23883L12.1494 4.20945Z"
                  fill="#5E718D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_681">
                  <rect
                    width="13.5"
                    height="13.5"
                    fill="white"
                    transform="translate(0.5 0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
        </p>

        <p>
          <span className="devcntn">{dev}</span>{" "}
          <span className="devcnt1"> {dot}</span>
        </p>
        <p className="devcnt1">{clg}</p>

        <p className="contentpara">{para} </p>
      </div>
    </div>
  );
};

export default Sectionprop;
