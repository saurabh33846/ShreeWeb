import React from 'react'
const FloatingBanner = (props) => {
    return (
        <div>
            <div className= "floatingCardContainer">
            <div className = "companyName">
                <span>Orbit</span>
                <span style={{"letter-spacing": "-3px"}}>
                    <span style={{"color": "blue"}} >P</span>
                    <span style={{"color":"sky"}}>r</span>
                    <span style={{"color":"green"}}>i</span>
                    <span style={{"color":"yellow"}}>n</span>
                    <span style={{"color":"orange"}}>t</span>
                    <span style={{"color":"red"}}>s</span>
                </span>

                <p className = "quote">Discover..Develop..Deliver!</p>
            </div>
            <div className= "quote2">
                <span style={{"font-size":"35px;"}}>"</span> Your best  printing  partner!
        </div>
        </div>
        </div>
        
    );
}

export default FloatingBanner;