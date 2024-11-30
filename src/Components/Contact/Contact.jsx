import "./Contact.css"
import Banner from "../banner/Banner"
import twiterimg from "../../Assets/twiter.png";
import instgramimg from "../../Assets/instgram.png";
import linkedimg from "../../Assets/linked.png";
import Form from "./Form";


function Contact() {
    return (
        <div className="contact">

            <Banner tittle="contact us" />

            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <Form />

                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <div className="infoForm">
                                <div className="info">
                                    <h2>Contact Us For Any Informations</h2>
                                    <div className="loction">
                                        <h3>Location</h3>
                                        <p>
                                            2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    </div>
                                    <div className="emails">
                                        <h3>Email & Phone</h3>
                                        <p>info@yourdomain.com
                                            (+68) 120034509</p>
                                    </div>
                                    <div className="folow">
                                        <h3>Follow Us</h3>
                                        <ul>
                                            <li><a href=""><img src={twiterimg} alt="twiter" /></a></li>
                                            <li><a href=""><img src={linkedimg} alt="linked" /></a></li>
                                            <li><a href=""><img src={instgramimg} alt="insta" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact