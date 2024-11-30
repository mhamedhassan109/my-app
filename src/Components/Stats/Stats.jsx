import "./Stats.css"

function Stats() {
    const ststs = [
        {
            number: 120,
            subject: "years with you",
        },
        {
            number: 400,
            subject: "awords",
        },
        {
            number: 250,
            subject: "doctors",
        },
        {
            number: 800,
            subject: "satisfied client",
        }
    ]
    return (
        <section className='Stats'>
            <div className="container">
                <div className="row">
                    {ststs.map((e) => {
                        return (
                            <div className="col-lg-3 col-sm-12">
                                <div className="statsbox">
                                    <div className="boxing">
                                        <h2>{e.number}</h2>
                                        <h3>{e.subject}</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti?</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default Stats