import React from 'react'
import "./Work.css"
// import "../About/About.css"
import {Sectionprop} from "../../reusecomponent"

const Work = () => {
  return (
  <>
   
    <Sectionprop
    psvg={<svg className="iconcolor1" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_688)">
    <path d="M5.875 9.75V9.1875H1.94313L1.9375 11.4375C1.9375 12.0619 2.43813 12.5625 3.0625 12.5625H10.9375C11.5619 12.5625 12.0625 12.0619 12.0625 11.4375V9.1875H8.125V9.75H5.875ZM11.5 4.6875H9.24437V3.5625L8.11937 2.4375H5.86937L4.74437 3.5625V4.6875H2.5C1.88125 4.6875 1.375 5.19375 1.375 5.8125V7.5C1.375 8.12437 1.87563 8.625 2.5 8.625H5.875V7.5H8.125V8.625H11.5C12.1187 8.625 12.625 8.11875 12.625 7.5V5.8125C12.625 5.19375 12.1187 4.6875 11.5 4.6875ZM8.125 4.6875H5.875V3.5625H8.125V4.6875Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_1_688">
    <rect width="13.5" height="13.5" fill="white" transform="translate(0.25 0.75)"/>
    </clipPath>
    </defs>
    </svg>
    }
    title="Work Experience"
    linupicon="LineupX"
    svg={<svg className='svgicon' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.0625 12.375C6.9058 12.375 6.77623 12.3238 6.67377 12.2213C6.57132 12.1189 6.52009 11.9893 6.52009 11.8326V7.85491H2.54241C2.38571 7.85491 2.25614 7.80368 2.15368 7.70123C2.05123 7.59877 2 7.4692 2 7.3125C2 7.1558 2.05123 7.02623 2.15368 6.92377C2.25614 6.82132 2.38571 6.77009 2.54241 6.77009H6.52009V2.79241C6.52009 2.63571 6.57132 2.50614 6.67377 2.40368C6.77623 2.30123 6.9058 2.25 7.0625 2.25C7.2192 2.25 7.34877 2.30123 7.45123 2.40368C7.55368 2.50614 7.60491 2.63571 7.60491 2.79241V6.77009H11.5826C11.7393 6.77009 11.8689 6.82132 11.9713 6.92377C12.0738 7.02623 12.125 7.1558 12.125 7.3125C12.125 7.4692 12.0738 7.59877 11.9713 7.70123C11.8689 7.80368 11.7393 7.85491 11.5826 7.85491H7.60491V11.8326C7.60491 11.9893 7.55368 12.1189 7.45123 12.2213C7.34877 12.3238 7.2192 12.375 7.0625 12.375Z" fill="#5E718D"/>
    </svg>
    }
    dev="Frontend Developer"
    dot=". Internship" 
    
    
    para="In this internship, I was part of the UI Design team. I got to work closely with stakeholders of the company in doing the user research & creating mockups. I was working on the design changes to be made for the website by coding in html, css and javascript. I learned and gained a lot of experience and knowledge about the core of UX and UI."
    />    
 </>
  )
}

export default Work
