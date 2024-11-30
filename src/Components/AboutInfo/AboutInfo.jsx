import "./AboutInfo.css"
import photo1 from "../../Assets/contactinfo.jpg";
import photo2 from "../../Assets/about1.jpg"
import photo3 from "../../Assets/about2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faHospital, faVial, faTruckMedical } from "@fortawesome/free-solid-svg-icons";

function AboutInfo() {
    const icons = [
        {
            icon: <FontAwesomeIcon icon={faHospital} />,
            name: "Emergency Help"
        },
        {
            icon: <FontAwesomeIcon icon={faVial} />,
            name: "Qualified Doctors"
        },
        {
            icon: <FontAwesomeIcon icon={faTruckMedical} />,
            name: "Best Professionals"
        },
        {
            icon: <FontAwesomeIcon icon={faHeartPulse} />,
            name: "Medical Treatment"
        }
    ];
    return (
        <section className="AboutInfo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="holder-groop">
                            <div className="group-one">
                                <img className="photo1" src={photo1} alt="pho1" />
                                <img className="photo2" src={photo2} alt="pho2" />
                            </div>
                            <div className="group-two">
                                <img className="photo3" src={photo3} alt="pho3" />
                                <div className="number">
                                    <h2>20</h2>
                                    <h4>year experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="holder-information">
                            <h4>About Us</h4>
                            <h2>The Great Place Of Medical Hospital Center</h2>
                            <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital</p>
                            <div className="holder-icons">
                                <div className="icon-card">
                                    {
                                        icons.map((e) => {
                                            return (
                                                <div className="icons">
                                                    <div className="">
                                                        {e.icon}
                                                    </div>
                                                    <h3>{e.name}</h3>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutInfo