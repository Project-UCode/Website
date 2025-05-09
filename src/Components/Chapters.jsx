import Animations from "./Animations"
import ScrollToTop from "./ScrollToTop"
import NumAnimation from "./NumAnimation"

export default function Chapters() {
    return (
        <>
        <ScrollToTop />
        <Animations />
        <header id="chapterHeader">
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">Start A Chapter!</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}
        <div className='quickinfoSection'>
            <div className='NumElement'><span className='NumCounterElement'><NumAnimation from={0} to={4000}/>+</span><br />Students</div>
            <div className='NumElement'><span className='NumCounterElement'><NumAnimation from={0} to={24}/>+</span><br />Chapters</div>
            <div className='NumElement'><span className='NumCounterElement'><NumAnimation from={0} to={15}/>+</span><br />Countries</div>
        </div>

        <div className="wrapper hiddenimgleft">
            <div id="chapter-testimonials-section" className="testimonials-section extra_info_section">
            <div className="left">
                <img src="Images/ucodechapter.png" alt="volunteer-photo" />
            </div>

            <div className="right">

                <div className="features">
                <p>
                    Project UCode is a nonprofit organization dedicated to creating a global, computer-science-focused platform for students everywhere. Chapters help us 
                    expand our impact and make a stronger difference. 
                </p>

                <p>
                    Chapter leaders must take on the responsibity of holding monthly meetings, running local events, connecting students to the organization, and making
                    an impact. 
                </p>
                </div>

                <a href="https://forms.gle/iv9nHQTRghQAbA6x7" target="_blank" className="btn light desktop-btn">Start A Chapter Today!</a>
            </div>
            </div>
        </div>
        </>
    )
}
