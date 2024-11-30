import "./Footer.css"
import logoFooter from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import facbookimg from "../../Assets/facbook.png";
import twiterimg from "../../Assets/twiter.png";
import instgramimg from "../../Assets/instgram.png";
import linkedimg from "../../Assets/linked.png";
import { useEffect, useState } from "react";


function Footer() {
    const [top, settop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                settop(true)
            } else {
                settop(false)
            }
        })
    }, [])
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <img src={logoFooter} alt="logo footer" />
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="holder-footer">
                            <div className="iconFooter">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="contactFooter">
                                <h5>Contact Us</h5>
                                <h3>+01 123 456 7890</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Booking</a></li>
                            <li><a href="">Faq's</a></li>
                            <li><a href="">Blogs</a></li>
                            <li><a href="">Out Team</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h4>Our Service</h4>
                        <ul>
                            <li><a href="">Dental Care</a></li>
                            <li><a href="">Cardiac Clinic</a></li>
                            <li><a href="">Massege Therapy</a></li>
                            <li><a href="">Cardiology</a></li>
                            <li><a href="">Precise Diagnosis</a></li>
                            <li><a href="">Abmbulance Services</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h4>Subcribe</h4>
                        <div className="inputFooter">
                            <input type="email" placeholder="email address" />
                            <input type="submit" value="Subcribe now" className="submit" />
                        </div>

                        <div className="socailFooter">

                            <ul className="socilMedia">
                                <li><a href=""><img src={facbookimg} alt="" /></a></li>
                                <li><a href=""><img src={twiterimg} alt="" /></a></li>
                                <li><a href=""><img src={instgramimg} alt="" /></a></li>
                                <li><a href=""><img src={linkedimg} alt="" /></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Copyright © 2024 Design & Developed by <span>ThemeTrades</span></p>
                        </div>
                    </div>
                </div>
                {top && (
                    <button className="top"><a href="#nav"><FontAwesomeIcon icon={faChevronUp} /></a></button>
                )}
            </div>
        </footer>
    )
}

export default Footer