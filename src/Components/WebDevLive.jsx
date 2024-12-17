import ScrollToTop from "./ScrollToTop";

export default function WebDevLive() {
    return (
        <>
            <ScrollToTop />
            <header id="webdevliveHeader">
                <div className="wrapper">
                    <div id="aboutHeroSection" className="hero-section">
                        <div className="middle">
                            <h1 id="abt_txt">Learn HTML Live!</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- End of the header section --> */}

            <div className="wrapper">
                <section id="" className="live-about-section hiddenimgleft">
                    <h2 className="">More Information</h2>
                    <p id="python-live-what-txt">
                        This course goes over the basics of HTML & CSS from basic concepts to creating user defined functions.
                        It is meant for students in grades 6-10 and lasts around 5-6 weeks with classes two days a week. For
                        more information, fill out the form below and someone from our team will reach out regarding class availability.
                    </p>
                    <a href="https://forms.gle/BiVgPNZ3cnAHd7Dn6" target="_blank" className="btn light desktop-btn">Sign Up Today!</a>
                </section> 
                <section id="chapter-testimonials-section" className="codeFrame hiddenimgleft">
                    <iframe className="codeFrameide" src="https://trinket.io/embed/html/1100d7e2e605" width="100%" 
                        height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                </section>
            </div>
        </>
    )
}
