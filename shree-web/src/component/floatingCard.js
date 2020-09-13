import React from 'react'
//added test comment
const FloatingBanner = (props) => {
    return (
        <div>
            <div className="floatingCardContainer">
                <div className="companyName">
                    <span>Print &nbsp;</span>
                    <span style={{ "letter-spacing": "3px" }}>
                        <span style={{ "color": "blue" }}>B</span>
                        <span style={{ "color": "sky" }}>h</span>
                        <span style={{ "color": "green" }}>a</span>
                        <span style={{ "color": "#bdb215" }}>s</span>
                        <span style={{ "color": "orange" }}>k</span>
                        <span style={{ "color": "red" }}>a</span>
                        <span style={{ "color": "blue" }} >r</span>
                    </span>

                    <div className="quote">Discover..Develop..Deliver!</div>
                </div>

                <div className = "seperator">
                </div>
                <div className="quote2">
                     <abbr>Your best <br></br>printing partner!</abbr>
        </div>
            </div>
        </div>

    );
}

export default FloatingBanner;