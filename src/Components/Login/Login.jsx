import "./Login.css"
import logo from "../../Assets/logo.png"

function Login() {
    return (
        <section className="Login">
            <div className="container">
                <div className="row">
                    <div className="boxLogin">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <form action="">
                            <input type="text" placeholder="user name" />
                            <input type="password" placeholder="password" />
                            <input type="submit" value="login" className="submit" />
                        </form>
                        <a href="" className="forgot">forgot password</a>

                        <h6>Dont have any account?</h6>
                        <button><a href="">register</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login