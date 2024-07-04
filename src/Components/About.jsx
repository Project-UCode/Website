import aboutStyles from './compStyles/about.module.css';

export default function About() {
    return (
        <>
        <header id="aboutHeader" className={aboutStyles.header}>
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">About Us</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <div className="wrapper about-mission hiddenimgleft">
            <section className="testimonials-section">
            <div className="left">
                <img src="Images/ucodemission.png" alt="mission-photo" />
            </div>

            <div className="right">
                <h2>Our Mission</h2>

                <div className="features">
                <p>
                    Our goal at Project UCode is to provide a free, global, and inclusive educational platform where anyone can learn about Computer Science.
                    Moreover, we hope to bridge the digital divide by providing technological access to people around the world currently without means to access the internet.
                </p>

                <p>
                    With your help, either as a learner or volunteer, we hope to do just that!
                </p>
                </div>

                <a href="#" className="btn light desktop-btn">Donate Today!</a>
            </div>
            </section>
        </div>

        {/* <!-- End of testimonials Section --> */}

        <section id="whatWeDoSection" className="courses-section">
            <div className='hiddenimgleft'>
                <h2 className="light">What We Do?</h2>
                <h4 className="whatTxt">
                <b>Free</b> workshops over various programming languages and computer science concepts. <br />
                <b>Free</b> online courses over various technical topics. <br />
                In school volunteering events and tutoring programs. <br />
                Spread educational CS content throughout social media. - Learn with UCode <br />
                </h4>
            </div>
        </section>

        <div id='pushUp'>
            <section className="testimonials-section ateam abtaTeam">
            <h2 id="teamTitle">Our Team</h2>
            </section>

            <section className="testimonials-section team abtTeam">
            <div className="left">
                <img src="Images/akhilphoto.png" alt="akhil-photo" />
            </div>

            <div className="right hiddenimgright">
                <h2>Akhil Kotturi</h2>
                <h3></h3>
                <div className="features team-txt">
                <p>
                    Hello! I am one of the Co-Founders of Project Code. I've always dreamt of changing the world, and I'm very happy to do it through Project UCode.
                </p>
                </div>
            </div>
            </section>

            <section className="testimonials-section team abtTeam">
            <div className="left">
                <img src="Images/puranjayphoto.png" alt="puranjay-photo" />
            </div>

            <div className="right hiddenimgright">
                <h2>Puranjay Prashanth</h2>
                <h3></h3>
                <div className="features team-txt">
                <p>
                    Hello! I am one of the Co-Founders of Project Code. I've always had a passion for programming and managing my own organization. This passion inspired me to help start Project UCode.
                </p>
                </div>
            </div>
            </section>
        </div>
        </>
    )
}
