import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Banner.css";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import inmy1 from "../../Assets/inmy1.png";


function Banner(props) {
    return (
        <div className="Banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>{props.tittle}</h2>


                        <div className="holder-links">
                            <FontAwesomeIcon icon={faHome} />
                            <Link to="\home">home</Link> <span>/</span>
                            <Link to="\contact">{props.tittle}</Link>
                        </div>



                    </div>
                </div>
                <img className="inmy1" src={inmy1} />
            </div>
        </div>
    )
}

export default Banner