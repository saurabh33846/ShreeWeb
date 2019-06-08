import React, { Component } from 'react'// javascript destructuring 
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Slide from './slide'
import Circle from './circle'
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
        };


    }
    goToPreviousSlide = () =>{

        if (this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length - 1,
                translateValue: -(this.state.images.length - 1)*this.slideWidth()
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));

    }
    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    goToIndex =(clickIndex)=>{

        this.setState(prevState =>({
            currentIndex: clickIndex,
            translateValue: prevState.translateValue + -(this.slideWidth())*(clickIndex-prevState.currentIndex)
        }));
    }
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }
    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>
                <div className = "circle-wrapper">
                {
                        this.state.images.map((image, i) => (
                            <Circle key={i}  imageId = {i} className= "circle" context= {this} goToIndex = {this.goToIndex}/>
                        ))
                    }
                </div>
                <LeftArrow className = "left-arrow" goToPreviousSlide={this.goToPreviousSlide}/>
                <RightArrow className = "right-arrow" goToNextSlide={this.goToNextSlide} />
                
            </div>
        )
    }
}