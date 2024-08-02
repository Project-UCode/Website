import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sidebar } from "lucide-react";
import { pythonlessonlist } from "./PythonLessonList";


export default function LearnPython() {

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

                <section id="" className="testimonials-section course-info">
                    <div className="left">
                        <img src="../Images/pythonlogo.png" alt="volunteer-photo" />
                    </div>

                    <div className="right course">

                        <div className="features">
                            <h2>About The Course</h2>
                            <p>
                                This approximately 10 hour course will teach of the basics of Python, ranging from print statements to functions.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="chapter-testimonials-section" className="course-info">
                    <h1 className="syl_title">Courseware</h1>
                    <div className="full_syllabus">
                    {pythonlessonlist.map((item, index) => {
                        return (
                            <div>
                                <section id="" className="unit_module">
                                    <h2>{item.unit}: {item.title}</h2>
                                    <div className="lessons_grid">
                                        {item.lessons.map((alesson) => {
                                            return (
                                                <div>
                                                    <p>
                                                        {alesson}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            </div>
                        );
                    })}
                    </div>
                </section>

            </div>
        </>
    )
}
