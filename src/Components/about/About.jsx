import React from 'react'
import Banner from '../banner/Banner'
import AboutInfo from '../AboutInfo/AboutInfo'
import Stats from '../Stats/Stats'


function About() {
    return (
        <div className='About'>
            <Banner tittle="About" />

            <AboutInfo />
            <Stats />



        </div>
    )
}

export default About