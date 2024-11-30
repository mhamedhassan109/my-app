import "./Home.css"
import headerimg from "../../Assets/header.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCircle } from '@fortawesome/free-solid-svg-icons'
import AboutInfo from "../AboutInfo/AboutInfo";
import Title from "../TittleAddress/Title";
import Blog from "../Blog/Blog";
import Teams from "../Teams/Teams";
import { useEffect, useState } from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import ServisesItem from "../ServisesItem/ServisesItem";



function Home() {
    const [homeScr, sethomeScr] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                sethomeScr(true)
            } else {
                sethomeScr(false)
            }
        })
    }
        , [])
    return (
        <header  >
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <button><a href="#">read more</a></button>
                    </div>
                    <div className="col-md-6 col-lg-6">

                        <div className="holder-box">
                            <img src={headerimg} alt="header" className="imgHome" />
                            <FontAwesomeIcon icon={faSquare} />
                        </div>

                    </div>
                </div>
            </div>
            <span className="plus">+</span>
            <FontAwesomeIcon className="circle" icon={faCircle} />
            {
                homeScr && (
                    <AboutInfo />
                )
            }

            {/* section book appontment */}

            <BookAppointment />

            {/* section slider services */}

            <ServisesItem />


            <Title main="Latest News" scound="Our Latest News" />

            {/* section blog */}
            <Blog />



        </header>





    )
}

export default Home