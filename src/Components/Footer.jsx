export default function Footer() {
    return (
        <>
            <footer class="homeFooter abtFooter">
                <div className="wrapper">
                    <div className="links-container">
                    <div className="links">
                        <h3>Quick Links</h3>

                        <ul>
                        <li>
                            <a href="about">About Us</a>
                        </li>

                        <li>
                            <a href="mailto:support@projectucode.org">Contact Us</a>
                        </li>

                        <li>
                            <a href="https://drive.google.com/file/d/1mMSoepA8uy4SQNZyev5_NRNcS3eTLolC/view?usp=sharing">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="https://drive.google.com/file/d/1__1xeszHEW3GdMBzNBrDQOD61SleHgkS/view?usp=sharing">Terms & Conditions</a>
                        </li>
                        </ul>
                    </div>

                    <div className="links">
                        <h3>Socials</h3>

                        <ul>
                        <li>
                            <a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ">Youtube</a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/company/project-ucode/">Linkedin</a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/projectucode/">Instagram</a>
                        </li>
                        </ul>
                    </div>

                    <div className="links">
                        <h3>Contact Us</h3>

                        <ul>
                        <li>info@projectucode.org</li>
                        </ul>

                        <div className="social">
                        <a href="#">
                            
                        </a>

                        <a href="#">
                            
                        </a>
                        </div>

                        <form action="mailto:support@projectucode.org">
                        <input type="text" placeholder="Email Address" />
                        <button className="submit-btn">Submit</button>
                        </form>
                    </div>
                    </div>

                    <p className="copyright">This website is developed by Project UCode</p>
                </div>
            </footer>
        </>
    )
}