import Animations from "./Animations"
import ScrollToTop from "./ScrollToTop"

export default function Live() {
    return (
        <>
        <ScrollToTop />
        <Animations />
        <header id="liveHeader">
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">UCode Live</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <section id="" className="live-about-section hiddenimgleft">
            <h2 className="">What Is UCode Live?</h2>
            <p id="live-what-txt">
            UCode Live offers a variety of <b>workshops</b>, <b>bootcamps</b>, and <b>webinars</b> hosted by Project UCode.<br />
            Of course, they are all free as our mission is to provide a platform where all students can<br />
            get quality education at no cost.
            </p>

            <p id="live-what-txt">
            Our live learning events range from short 60-90 minute webinars to 3-5 week long bootcamps.<br />
            We offer programs for students from elementary to high school. Check this page regularly for <br />
            upcoming events and make the most of your learning opportunities!
            </p>
        </section>

        <div className="wrapper">
            <section id="" className="testimonials-section live-event-right">
            <div className="left">
                <img src="Images/pythonlogo.png" alt="volunteer-photo" />
            </div>

            <div className="right">

                <div className="features live-event-text">
                    <span className="minitext bluemini">Beginner</span> <span className="minitext redmini">Bootcamp</span> 
                    <h2>Intro To Python Bootcamp</h2>
                    <p>
                        This 5-6 week long bootcamp will teach of the basics of Python, ranging from print statements to functions. 
                    </p>
                    </div>

                    <a href="/live/python" className="btn light desktop-btn">Learn More</a>
                </div>
            </section>
            <section id="chapter-testimonials-section" className="testimonials-section live-event-left">
            <div className="left course-left">
                <div className="features">
                    <span className="minitext bluemini">Beginner</span> <span className="minitext redmini">Bootcamp</span>
                        <h2>Intro to HTML & CSS Bootcamp</h2>
                        <p>
                            This 5-6 week long bootcamp will teach of the basics of Python, ranging from print statements to functions.
                        </p>
                </div>

                <a href="/live/webdev" className="btn light desktop-btn">Learn More</a>
            </div>


            <div className="right">
                <img className="phscsa" src="Images/htmllogo.png" alt="volunteer-photo" />
            </div>
            </section>
        </div>
        </>
    )
}



