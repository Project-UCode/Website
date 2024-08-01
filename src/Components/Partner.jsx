import Animations from "./Animations"

export default function Partner() {
    return (
        <>
        <Animations />
        <header id="partnerHeader">
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">Partner</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <div className="wrapper hiddenimgleft">
            <section id="volunteer-testimonials-section" className="testimonials-section extra_info_section">
            <div className="left">
                <img src="Images/ucodepartner.png" alt="volunteer-photo" />
            </div>

            <div className="right">

                <div className="features">
                <p>
                    Project UCode is a nonprofit organization dedicated to creating a global, computer-science-focused platform for students everywhere.
                    There are many organizations that have a similar goal of promoting a helpful environment, and we are more than happy to partner with them.
                </p>

                <p>
                    As organizations, collaborations can help us make a larger impact and reach a wider audience. So, send us an email and we will respond as
                    soon as we can!
                </p>
                </div>

                <a href="mailto:support@projectucode.org" target="_blank" className="btn light desktop-btn">Let's Get In Touch!</a>
            </div>
            </section>
        </div>
        </>
    )
}
