import Banner from "../banner/Banner"
import "./Teams.css"
import cicle1 from "../../Assets/circle2.png"
import cicle2 from "../../Assets/circle3.png"
import team1 from "../../Assets/team1.jpg"
import team2 from "../../Assets/team2.jpg"
import team3 from "../../Assets/team3.jpg"
import team4 from "../../Assets/team4.jpg"
import team5 from "../../Assets/team5.jpg"
import team6 from "../../Assets/team6.jpg"
import twiterimg from "../../Assets/twiter.png";
import instgramimg from "../../Assets/instgram.png";
import linkedimg from "../../Assets/linked.png";



function Teams() {
    const teams = [
        {
            img: team1,
            name: "Dr. Addition Smith",
            subTitle: "Dentist"
        },
        {
            img: team2,
            name: "Dr. Mahfuz Riad",
            subTitle: "Chiropractor"
        },
        {
            img: team3,
            name: "Dr. David Benjamin",
            subTitle: "Cardiologist"
        },
        {
            img: team4,
            name: "Dr. Addition Smith",
            subTitle: "Dentist"
        },
        {
            img: team5,
            name: "Dr. Mahfuz Riad",
            subTitle: "Chiropractor"
        },
        {
            img: team6,
            name: "Dr. David Benjamin",
            subTitle: "Cardiologist"
        },
    ]
    return (
        <>
            <Banner tittle="our team" />

            <section className="Teams">

                <div className="container">
                    <div className="row">
                        {
                            teams.map((e) => {
                                return (
                                    <div className="col-lg-4">
                                        <div className="teams">
                                            <div className="imags">
                                                <img className="imgphoto" src={e.img} />
                                                <img className="imgcicle1" src={cicle1} />
                                                <img className="imgcicle2" src={cicle2} />

                                            </div>
                                            <div className="info">
                                                <h2>{e.name}</h2>
                                                <h5>{e.subTitle}</h5>
                                                <div className="socila">
                                                    <ul>
                                                        <li><a href=""><img src={twiterimg} alt="twiter" /></a></li>
                                                        <li><a href=""><img src={linkedimg} alt="linked" /></a></li>
                                                        <li><a href=""><img src={instgramimg} alt="insta" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Teams