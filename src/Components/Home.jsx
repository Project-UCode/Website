import homeStyles from './compStyles/home.module.css';
import Animations from './Animations';
import ScrollToTop from './ScrollToTop';

export default function Home() {
    return (
        <>
        <ScrollToTop />
        <Animations />
        <header id="homeHeader" className={homeStyles.header}>
            <div className="wrapper">
                <div id="homeHeroSection" className="hero-section hiddenimgleft hiddenimgleftq">
                <div className="left homeLeft">
                    <h1>
                        It’s Time To <br />
                    Learn to Code!
                    </h1>

                    <p>
                        Get started with your coding journey today! With free live classes and integrated assignments, you will have all the resources you need to succeed.
                    </p>

                    <a href="volunteer" className="btn light enroll-icon">Join Today!</a>
                </div>

                <div className="right">
                </div>

                <div className="achievement-cards">
                    </div>

                    <div className="achievement-card overall-rating">
                    </div>

                    <div className="bg"></div>
                    </div>
            </div>
        </header>
        {/* <!-- End of the header section --> */}

        <div className="wrapper about-mission hiddenimgleft">
        <section className="testimonials-section extra_info_section">
            <div className="left homeLeft">
                <img className="who-are-we-image" id="learn-home" src="Images/ucodelearn.png" alt="" />
            </div>

            <div className="right about-us-section">
            <h2>Who Are We?</h2>

            <div className="features">
                <p className="who-are-we">
                    Project UCode is a non-profit organization established to encourage and foster the education of computer science, engineering, and specifically programming.
                </p>

                <p className="who-are-we">
                    We aim to educate individuals in the ever growing skill of programming.
                </p>
            </div>

            <a href="about" className="btn light desktop-btn">Learn More</a>
            </div>

        </section>
        </div>

        {/* <!-- End of testimonials Section --> */}

        <section className="courses-section">
        <div className="wrapper">
            <h2 className="light">Our Courses</h2>

            <div className="course-cards">
            <div className="course-card">
                <img src="Images/course-1.jpg" alt="" />

                <div className="info">
                <h3>Python Fundamentals</h3>
                </div>
            </div>

            <div className="course-card">
                <img src="Images/course-2.png" alt="" />

                <div className="info">
                <h3>Java Fundamentals</h3>
                </div>
            </div>
            </div>

            <a href="courses" className="btn light">All Courses</a>
        </div>
        </section>


        {/* <!-- End of the app section --> */}
        </>
    )
}
