import "./Services.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyringe, faSuitcase, faSpoon, faMortarPestle, faLungs, faHeartPulse, faHandHoldingDroplet } from "@fortawesome/free-solid-svg-icons"
import Banner from "../banner/Banner"

function Services() {

    const servasCard = [
        {
            icon: faSyringe,
            title: "emergancy",
        },
        {
            icon: faSuitcase,
            title: "diagnostics",
        },
        {
            icon: faSpoon,
            title: "treatment",
        },
        {
            icon: faMortarPestle,
            title: "surgery",
        },
        {
            icon: faLungs,
            title: "vaccine",
        },
        {
            icon: faHeartPulse,
            title: "heart",
        }

    ]
    return (
        <section className="Services">
            <Banner tittle="Services" />
            <div className="container">
                <div className="row">
                    {
                        servasCard.map((e) => {
                            return (
                                <div className="col-sm-12 col-lg-4">
                                    <div className="cards">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={e.icon} />
                                        </div>
                                        <h2>{e.title}</h2>
                                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                                        <button>view more</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services