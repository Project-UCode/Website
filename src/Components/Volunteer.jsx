export default function Volunteer() {
    return (
        <>
        <header id="volunteerHeader">
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">Volunteer</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <div className="wrapper">
            <section id="volunteer-testimonials-section" className="testimonials-section">
            <div className="left">
                <img src="Images/ucodevolunteer.png" alt="volunteer-photo" />
            </div>

            <div className="right">

                <div className="features">
                <p>
                    Project UCode is a nonprofit organization dedicated to creating a global, computer-science-focused platform for students everywhere.
                    Accessing quality educational resources, especially in CS, can be challenging and costly. 
                </p>

                <p>
                    We need your help as a volunteer to fully run our platform. By joining us as a <b>tutor</b>, <b>developer</b>, <b>chapter leader</b>, 
                    or any in another role, you can assist our mission and change the world for the better!
                </p>
                </div>

                <a href="https://forms.gle/2KzhePquuNrhmY6m8" className="btn light desktop-btn">Become a Volunteer!</a>
            </div>
            </section>
        </div>
        </>
    )
}
