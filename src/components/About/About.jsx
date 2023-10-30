import React from "react";
// import "./About.css";
import { Sectionprop } from "../../reusecomponent";

const About = () => {
  return (
    // <div className="main1">
    <Sectionprop 
    psvg={<svg className="iconcolor" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_702)">
    <path d="M10.9375 1.6875H8.58625C8.35 1.035 7.73125 0.5625 7 0.5625C6.26875 0.5625 5.65 1.035 5.41375 1.6875H3.0625C2.44375 1.6875 1.9375 2.19375 1.9375 2.8125V10.6875C1.9375 11.3062 2.44375 11.8125 3.0625 11.8125H10.9375C11.5562 11.8125 12.0625 11.3062 12.0625 10.6875V2.8125C12.0625 2.19375 11.5562 1.6875 10.9375 1.6875ZM7 1.6875C7.30937 1.6875 7.5625 1.94062 7.5625 2.25C7.5625 2.55938 7.30937 2.8125 7 2.8125C6.69063 2.8125 6.4375 2.55938 6.4375 2.25C6.4375 1.94062 6.69063 1.6875 7 1.6875ZM8.125 9.5625H4.1875V8.4375H8.125V9.5625ZM9.8125 7.3125H4.1875V6.1875H9.8125V7.3125ZM9.8125 5.0625H4.1875V3.9375H9.8125V5.0625Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_1_702">
    <rect width="13.5" height="13.5" fill="white" transform="translate(0.25)"/>
    </clipPath>
    </defs>
    </svg>
    }

    title="About Me"

    svg={<svg className="svgicon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_707)">
    <path d="M2 9.88403V11.5938C2 11.7513 2.12373 11.875 2.28121 11.875H3.99097C4.06409 11.875 4.1372 11.8469 4.18782 11.7906L10.3295 5.65461L8.22039 3.54553L2.08436 9.68155C2.02812 9.7378 2 9.80529 2 9.88403ZM11.9605 4.02359C12.1798 3.80425 12.1798 3.44992 11.9605 3.23058L10.6444 1.91451C10.4251 1.69516 10.0708 1.69516 9.85141 1.91451L8.82218 2.94374L10.9313 5.05282L11.9605 4.02359Z" fill="#5E718D"/>
    </g>
    <defs>
    <clipPath id="clip0_1_707">
    <rect width="13.5" height="13.5" fill="white" transform="translate(0.5 0.25)"/>
    </clipPath>
    </defs>
    </svg>
    }
    para="I am well-versed in frontend frameworks such as React and have a good grasp of backend technologies including Node.js and Express.js. I have also gained exposure to databases like MongoDB and MySQL, enabling me to design and implement efficient data models. I am constantly learning and exploring new technologies to stay updated with the latest trends in the industry."

    />
    // </div>
  );
};

export default About;
