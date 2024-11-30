import Banner from "../banner/Banner"
import "./Alert.css"
import Lottie from "lottie-react"
import alertanimation from "../../../src/anumation.json"

function Alert() {
    return (
        <>
            <Banner tittle="page not found" />
            <section className="Alert">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>4 <span><Lottie animationData={alertanimation} /></span> 4</h2>
                            <h4>The Page you were looking for, couldn't be found.</h4>
                            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            <div className="btns">
                                <button><a href="/home">back</a></button>
                                <button><a href="/home">back to home</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Alert