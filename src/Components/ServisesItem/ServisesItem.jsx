
import { useEffect, useRef, useState } from "react"
import "./ServisesItem.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyringe, faSuitcase, faSpoon, faMortarPestle, faLungs, faHeartPulse, faHandHoldingDroplet } from "@fortawesome/free-solid-svg-icons"


function ServisesItem() {
    const carsollSlider = useRef()
    const [width, setwidth] = useState(0)
    useEffect(() => {
        console.log(carsollSlider.current.offsetWidth)
        setwidth(carsollSlider.current.scrollWidth - carsollSlider.current.offsetWidth)
    }, [])


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
        },
        {
            icon: faHandHoldingDroplet,
            title: "surgery",
        },
    ]
    return (
        <section className="ServisesItem">
            <div className="row">
                <div className="col-lg-4">
                    <div className="holderServies">
                        <h5>service</h5>
                        <h2>We Cover A Big Variety Of Medical Services</h2>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                        <button>all services</button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <motion.div className="carasol" ref={carsollSlider}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="carasol-inner">


                            {
                                servasCard.map((e) => {
                                    return (
                                        <motion.div className="item">
                                            <div className="cards">
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={e.icon} />
                                                </div>
                                                <div className="infoCard">
                                                    <h3>{e.title}</h3>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi!</p>
                                                    <button>view more</button>
                                                </div>
                                            </div>

                                        </motion.div>
                                    )
                                })
                            }





                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ServisesItem