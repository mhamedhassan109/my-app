import Banner from "../banner/Banner"
import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import blog1 from "../../Assets/blog1.jpg"
import blog2 from "../../Assets/blog2.jpg"
import blog3 from "../../Assets/blog3.jpg"
import blog4 from "../../Assets/blog4.jpg"
import blog5 from "../../Assets/blog5.jpg"
import blog6 from "../../Assets/blog6.jpg"
import blog7 from "../../Assets/blog7.jpg"
import blog8 from "../../Assets/blog8.jpg"
import blog9 from "../../Assets/blog9.jpg"
import team1 from "../../Assets/team1.jpg"
import team2 from "../../Assets/team2.jpg"
import team3 from "../../Assets/team3.jpg"
import team4 from "../../Assets/team4.jpg"
import team5 from "../../Assets/team5.jpg"
import team6 from "../../Assets/team6.jpg"

function Blog() {
    const blogs = [
        {
            img: blog1,
            smallImg: team1,
            doctors: "John deo",
            brithday: "21 July 2021",
            sub: "Dental Care for Women is very important",
        },
        {
            img: blog2,
            smallImg: team2,
            doctors: "Peter Packer",
            brithday: " 20 July 2021",
            sub: "In this hospital there are special surgeon",
        },
        {
            img: blog3,
            smallImg: team3,
            doctors: "Sonar Moyna",
            brithday: "19 July 2021",
            sub: "Why Is Skin Surgeon Considered Underrated",
        },
        {
            img: blog4,
            smallImg: team4,
            doctors: "Sonar Moyna",
            brithday: " 15 July 2021",
            sub: "Ten Gigantic Influences Of Health",
        },
        {
            img: blog5,
            smallImg: team5,
            doctors: "Kalina",
            brithday: "18 July 2021",
            sub: "Understand Health Before You Regret",
        },
        {
            img: blog6,
            smallImg: team6,
            doctors: "Peter Packer",
            brithday: " 16 July 2021",
            sub: "Can you get a diflucan prescription online?",
        },
        {
            img: blog7,
            smallImg: team3,
            doctors: "Michel",
            brithday: " 17 July 2021",
            sub: "Health Will Be A Thing Of The Past And Here",
        },
        {
            img: blog8,
            smallImg: team6,
            doctors: "Kalina",
            brithday: " 14 July 2021",
            sub: "Why Is Skin Surgeon Considered Underrated",
        },
        {
            img: blog9,
            smallImg: team4,
            doctors: "Peter Packer",
            brithday: "16 July 2021",
            sub: "Can you get a diflucan prescription online?",
        },
    ]
    return (
        <>

            <section className="Blog">
                <div className="container">
                    <div className="row">
                        {
                            blogs.map((e) => {
                                return (
                                    <div className="col-12 col-lg-4">
                                        <div className="blogBox">
                                            <div className="blogPhoto">
                                                <img src={e.img} alt="blog1" />
                                            </div>
                                            <div className="blogTittle">
                                                <img className="smallimg" src={e.smallImg} alt="smalimg" />
                                                <h6>{e.doctors}</h6>
                                                <h5>{e.brithday}</h5>

                                            </div>
                                            <div className="blogSub">
                                                <h2>{e.sub}</h2>
                                                <button>read more<span><FontAwesomeIcon icon={faAngleRight} /></span></button>
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

export default Blog