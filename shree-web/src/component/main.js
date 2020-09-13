import React, { Component } from 'react'// javascript destructuring 
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
        };


    }
    render() {
        return (
            <div className="main">
            <div className = "services">
            <div className = "service-quote">
            <h1> What We Do</h1>
            <h4> Lorem ipsum</h4>
            </div>
            
            </div>
            <div></div>
            </div>
        )
    }
}