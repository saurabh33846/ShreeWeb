import React, { Component } from 'react';

import Header from "./component/Header"
import Slider from "./component/slider"
import FloatingBanner from "./component/floatingCard"
import Footer from "./component/footer"

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className = "bannerContainer">
                <Slider/>
                <FloatingBanner/>
                </div>
                <Footer />
                
            </div>)
    }
}
export default App