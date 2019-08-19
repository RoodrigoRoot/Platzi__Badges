import React, {Fragment} from 'react'
import './styles/Hero.css'
import ast from '../images/astronauts.svg'
import platziLogo from '../images/platziconf-logo.svg'
import {Link} from 'react-router-dom'

function Hero(props){
    return(
        <Fragment>
            <div className="container-Hero">
                <div className="item_Hero">
                    <img src={platziLogo} alt="platziLogo" />
                    <h2>{props.children}</h2>
                    <p>The easiest way to  manage  your conference</p>
                    <Link to="/badges" className="btn btn-primary">
              New Badge
            </Link>
                </div>
                <div>
                    <img src={ast} alt="Astronautas"/>
                </div>

            </div>
        </Fragment>
    )
}
export default Hero