import "./Title.css"

function Title(props) {
    return (
        <section className="Title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>{props.main}</h5>
                        <h2>{props.scound}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title