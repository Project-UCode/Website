import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sidebar } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ScrollToTop from "../../ScrollToTop";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Or another theme like prism-okaidia.css
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import MarkdownRender from "../../Markdown/MarkdownRender";

import LearnNavBar from "../../LearnNavBar";
import Footer from "../../Footer";
import { pythonlessonlist } from "../PythonLessonList";



export default function PythonLessonPage({ lesson, text, prev, post, unit }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const parsedText = text.replace(/\\n/g, '\n').replace('\\n','\n');
    const markdown = parsedText

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            {/* Header Section */}
            <ScrollToTop />
            <div className="totalHeader"></div>
            <header id="learncoursesHeader">
                <LearnNavBar />
            </header>
            <div id="navigation">
                <p href="https://forms.gle/2KzhePquuNrhmY6m8" target="_blank" className="homeinfototal">
                    {/* <div className="header__toggle" id="header-toggle"><i class="fa-solid fa-bars"></i></div> */}
                    <Link to="/courses" className="coursenavlink"><i class="fa-solid fa-house"></i></Link> / <Link to="/courses/intro-to-python" className="coursenavlink">Introduction to Python</Link> / {pythonlessonlist[unit].title}</p>
                <ul>
                    <li>
                        <div className="btn light desktop-btn navbuttonmini header__toggle" onClick={toggle} id="header-toggle"><i class="fa-solid fa-bars"></i></div>
                    </li>
                    <li>
                        <Link to={`/courses/intro-to-python/${prev}`} className="btn light desktop-btn navbutton"><i class="fa-solid fa-chevron-left"></i></Link>
                    </li>
                    <li>
                        <Link to={`/courses/intro-to-python/${post}`} className="btn light desktop-btn navbutton"><i class="fa-solid fa-chevron-right"></i></Link>
                    </li>
                </ul>
            </div>
            {/* Sidebar Section */}
            <div className="">
                <div className="coursesidebar" style={{ left: isOpen ? "0" : "-100%" }} id="coursesidebar">
                    <div className="coursesidebar__container">
                        <div className="coursesidebar__content">
                            <div className="coursesidebar__list">
                                {Array.isArray(pythonlessonlist[unit]?.lessons) ? (
                                    pythonlessonlist[unit].lessons.map((lesson, lessonIndex) => (
                                        <Link key={`${unit}-${lessonIndex}`} to={`/courses/intro-to-python/${lesson.route}`} className="coursesidebar__link">
                                            <span className="coursesidebar__link-name">{lesson.name}</span>
                                            <span className="coursesidebar__floating">{lesson.name}</span>
                                        </Link>
                                    ))
                                ) : (
                                    <p>No lessons available for this unit.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <main className={`lessoncontent ${isOpen ? 'open' : ''}`} id="lessoncontent">
                    <h2>{lesson}</h2>
                    <div>
                        {/* <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || "");
                                    return !inline && match ? (
                                        <pre className={`language-${match[1]} line-numbers`}>
                                            <code className={`language-${match[1]}`} {...props}>
                                                {String(children).replace(/\n$/, "")}
                                            </code>
                                        </pre>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {markdown}
                        </ReactMarkdown> */}
                        <MarkdownRender content={markdown}/>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
