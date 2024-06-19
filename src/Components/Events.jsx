import eventsStyles from './compStyles/events.module.css';

export default function () {
    return (
        <>
        <header id="aboutHeader" className={eventsStylesStyles.header}>
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">Future Events</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <div className="wrapper">
            <section className="events-section">
            <div className="left">
                <img src="Images/ucodemission.png" alt="mission-photo" />
            </div>

            <div className="right">
                
                <div className="features">
                <p>
                   Project UCode has many events planned in order to bridge the digital divide and provide education about 
                   technology and programming to others!
          
                </p>

        
                </div>


            </div>
            </section>
        </div>

        {/* <!-- End of testimonials Section --> */}

        <section id="EventsSection" className="events-section">
            <h2 className="light">Planned Events!</h2>
            <h4 className="whatTxt">
            <b>Free</b> workshops over various programming languages and computer science concepts. <br />
            <b>Free</b> online courses over various technical topics. <br />
            In school volunteering events and tutoring programs. <br />
            Spread educational CS content throughout social media. - Learn with UCode <br />
            </h4>
        </section>

       
        </>
    )
}
