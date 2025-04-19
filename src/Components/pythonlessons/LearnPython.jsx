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
                            <a href="intro-to-python/welcome" className="btn light desktop-btn">Start Course Now!</a>
                        </div>
                    </div>
                </section>

                <section id="chapter-testimonials-section" className="course-info">
                    <h1 className="syl_title">Courseware</h1>
                    <div className="full_syllabus">
                        {pythonlessonlist.map((item, index) => {
                            return (
                                <div key={index} className="unit_module">
                                    <h2 className="unit_title">{item.unit}: {item.title}</h2>
                                    <div className="lessons_grid">
                                        {item.lessons.map((lesson, lessonIndex) => {
                                            return (
                                                <a href={`/courses/intro-to-python/${lesson.route}`} className="lesson_link">
                                                    <div key={lessonIndex} className="lesson_card">
                                                        <p>
                                                            {lesson.name}
                                                        </p>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </div>
        </>
    )
}
