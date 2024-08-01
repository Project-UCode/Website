import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sidebar } from "lucide-react";

import LearnNavBar from "./LearnNavBar";
import Footer from "./Footer";


export default function LearnPython() {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <>
            <header id="pythonliveHeader">
                <div className="wrapper">
                <div id="aboutHeroSection" className="hero-section">
                    <div className="middle">
                    <h1 id="abt_txt">Intro To Python</h1>
                    </div>
                </div>
                </div>
            </header>

            {/* <!-- End of the header section --> */}
            
            <div className="wrapper">
                <section id="chapter-testimonials-section" className="testimonials-section live-event-right">
                <div className="left">
                    <img src="Images/pythonlogo.png" alt="volunteer-photo" />
                </div>

                <div className="right course">

                    <div className="features"> 
                        <h2>About The Course</h2>
                        <p>
                            This approximately 10 hour course will teach of the basics of Python, ranging from print statements to functions. 
                        </p>
                        </div>

                        <a href="" target="_blank" className="btn light desktop-btn">Coming Soon</a>
                    </div>
                </section>
            </div>
        </>
    )
}
