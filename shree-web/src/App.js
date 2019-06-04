import React, { Component } from 'react';

import Header from "./component/Header"
import Slider from "./component/slider"
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider/>
            </div>)
    }
}
export default App