import React from 'react'
import { width } from '@material-ui/system';

const Slide = ({ image }) => {
    const styles = {
      // // backgroundImage: `url(${image})`,
      // // backgroundSize: 'cover',
      // // backgroundRepeat: 'no-repeat',
      // // backgroundPosition: '50% 60%',
      // display:'inline-block',
      // backgroundPosition:"top"
    }
    return <div className="slide" style={styles}>
      <img src= {image} style={{height:"100%", width:"100%"}}>
      </img>
    </div>
  }
  

export default Slide