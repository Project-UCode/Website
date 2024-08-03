import Animations from "../Animations";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <>
        <Animations />
        <header id="volunteerHeader">
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">Contact Us!</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <div className="wrapper hiddenimgleft">
            <section id="volunteer-testimonials-section" className="testimonials-section contact_section">
                <ContactForm />
            </section>
        </div>
        </>
    )
}
