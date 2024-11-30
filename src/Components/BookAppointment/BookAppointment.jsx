import "./BookAppointment.css"
import photomobile from "../../../src/Assets/book.png";
import women from "../../../src/Assets/women.png";
import map from "../../../src/Assets/map.png";
import settings from "../../../src/Assets/settings.png";
import cheak from "../../../src/Assets/cheek.png";

function BookAppointment() {
    return (
        <section className="BookAppointment">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <div className="bookBox">
                            <h2>Book Appointment</h2>
                            <form action="">
                                <select>
                                    <option value="selecty depatmant">selecty depatmant</option>
                                    <option value="one">one</option>
                                    <option value="two">two</option>
                                    <option value="three">three</option>
                                </select>
                                <select>
                                    <option value="selecty dectors">selecty dectors</option>
                                    <option value="one">one</option>
                                    <option value="two">two</option>
                                    <option value="three">three</option>
                                </select>
                                <input type="text" placeholder="your name" />
                                <input type="number" placeholder="phone number" />
                                <input type="date" />
                                <input type="submit" className="submit" value="applaction now" />

                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className="bookImages">
                            <img className="photo1" src={photomobile} alt="mobile" />
                            <img className="photo2" src={women} alt="women" />
                            <img className="map" src={map} alt="women" />
                            <img className="setting" src={settings} alt="women" />
                            <img className="cheak" src={cheak} alt="women" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAppointment