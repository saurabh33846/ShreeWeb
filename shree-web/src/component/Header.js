import React, {Component} from 'react'
import {TextField, Button, Avatar} from '@material-ui/core/';
import searchIcon from '../search_Icon.png'
import mainIcon from '../assets/Logo.png';
import customerSupport from '../customer-care2.svg';
import signIn from '../sign-in2.svg';
import cart from '../cart.svg';
import UserContext from '../context/userContext';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  render(){
    let user = this.context;
    let signOut = null;
    let avatarURL = user && user.photoURL;
    signOut= user ? (<Button variant="text" color="primary" size="small" onClick={this.props.signOut} >{"Sign out"}</Button>) : null
    console.log("Sign Out button ");
    console.log(signOut);
    return (
    <div className = "first-header" >
      <span style={{alignSelf:"center", marginLeft:"10px"}}>
      <img style= {{width:"150px", height:"55px"}} src= {mainIcon}></img>
      </span>
     
      {/* <TextField  size="small" id="outlined-basic" label="Outlined" variant="outlined" className = "search-header" /> */}
     
     <div  className="header-search-container" >
     <input type="text" className = "header-search" placeholder="  search"/>
    
    {/* <i class="fas fa-search"></i> */}

    <button style= {{ borderRadius:"5px", alignSelf:"center",height:"100%"}}>
    <img style= {{width:"20px", height:"20px"}}  src= {searchIcon}></img>
    </button>
     </div>

      {/* <div style={{alignSelf:"center", width:"60px", height:"95px", marginLeft:"40px", display:"flex", flexDirection:"column"}}>
      <img style= {{width:"60px", height:"95px"}}  src= {customerSupport}></img>
      <span>
      Customer Care
      </span>
        </div> */}
        
        <div className= "customer-care-container">
        <img style= {{width:"35px", height:"35px", alignSelf:"center"}}  src= {customerSupport}></img>
         <span style={{alignSelf:"center", fontFamily:"'Maven Pro', 'sans-serif'", marginLeft:"10px", fontSize:"14px"}} className="hide-text">
          <b> Customer care</b>
          <br/>
          <span style={{fontSize:"12px"}}>help@printbhaskar.com</span>
           </span>
        </div>
         
          <div className="sign-in-container">
          <Avatar alt="User" src={avatarURL} />
          <span style={{alignSelf:"center", fontFamily:"'Maven Pro', 'sans-serif'", marginLeft:"10px", fontSize:"14px"}} >
          <b> <Button variant="text" color="primary" size="small" onClick={this.props.signIn.bind(this)} >{ user && user.displayName ? user.displayName:"Sign In"}</Button></b>
          <br/>
          <span style={{fontSize:"12px"}}> {signOut}</span>
           </span>
           </div>
          
          <div  className="cart-container">
          <img style= {{width:"35px", height:"35px", alignSelf:"center"}}  src= {cart}></img>
          <span style={{alignSelf:"center", fontFamily:"'Maven Pro', 'sans-serif'", marginLeft:"8px", fontSize:"14px"}} className="hide-text">
          <b>Cart</b>
           </span>
          </div>
         

    </div>)
  }
}
Header.contextType= UserContext;
export default withRouter(Header);