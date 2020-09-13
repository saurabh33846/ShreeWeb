import React, { Component } from 'react';
import Main from "./component/main"
import Header from "./component/Header"
import Slider from "./component/slider"
import FloatingBanner from "./component/floatingCard"
<<<<<<< HEAD
import { Button, CircularProgress, TextField } from '@material-ui/core';
import flag from './assets/Flag_of_India.svg'
import HeaderTabs from './component/HeaderTabs'
import classes from './tryStyle.css';
import Poster from './component/poster'
import SeperatorWithText from './component/seperatorWithText';
import StandartFooter from './component/standerdFooter'
import SelectComponent from './component/selectComponent';
import LetterHead from './pages/LetterHead';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import VisitingCard from './pages/VisitingCard';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import UserContext from './context/userContext';
import { images} from './assets/cardImages'
import temp from './assets/visitingcard.png'
import {connect} from 'react-redux'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
const quantityData = []
const posterList = [
    {
        price:"300/1000",
        name:"Visiting Card",
        image:images[1]
    },
    {
        price:"1800/1000",
        name:"Letter head",
        image:images[4]
    },
    {

    price:"120/Print",
    name:"13x19 PrintOut",
    image:images[0]
    },
    {
        price:"7/SqFeet",
        name:"Digital Flex",
        image:images[3]
    },
    {
        price:"1000/Piece",
        name:"Standies",
        image:images[5]
    },

{
    price:"100/Design",
    name:"Designing work",
    image:images[2]
}
]
const firebaseConfig = {
    apiKey: "AIzaSyB37JT1ijdv4NbLNLIiM-qEeIJFJCrSW10",
    authDomain: "shree-web.firebaseapp.com",
    databaseURL: "https://shree-web.firebaseio.com",
    projectId: "shree-web",
    storageBucket: "shree-web.appspot.com",
    messagingSenderId: "842690357021",
    appId: "1:842690357021:web:8962ad4f712b40745423f4",
  };
  var myFirebase;
for(let i=1;i<=10;i++){
    quantityData.push(i*1000);
}
if (!myFirebase) {
    myFirebase = firebase.initializeApp(firebaseConfig);
}
=======
import Footer from "./component/footer"
>>>>>>> c8a8784a773d24f4c898616acefe138e925e1d71

class App extends Component {
    constructor(props){
        super(props);
        this.state= {user:null, busy:false}
    }
    componentDidMount(){
        var that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                let userData = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL
                };
                that.props.setUser({user:userData});
            } else {
                that.props.setUser({user:null});
            }
        });
    }

    signIn() { 
        // var that = this;
        // if(!firebase.auth().currentUser) {
        //     var provider = new firebase.auth.GoogleAuthProvider();
        //     firebase.auth().signInWithPopup(provider).then(function(result) {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         var token = result.credential.accessToken;
        //         // The signed-in user info.
        //         var user = result.user;
        //         that.setState((prevState)=>{
        //             return { user:user}
        //         })

        //         console.log(result);
        //         console.log(user);
        //         // ...
        //       }).catch(function(error) {
        //         // Handle Errors here.
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         // The email of the user's account used.
        //         var email = error.email;
        //         // The firebase.auth.AuthCredential type that was used.
        //         var credential = error.credential;
        //         // ...
        //       });
        // } else {
        //     console.log("Already signed in");
        // }
        this.props.history.push('/signIn');
        console.log(this.props);
    }
    signOut(){
        let that = this;
        firebase.auth().signOut().then(function() {
            that.props.setUser({user:null});
          }).catch(function(error) {
            // An error happened.
          });
    }
    render() {
        let posterListCmp = posterList.map((posterel)=>{
            return (
                <Poster name={posterel.name} image={posterel.image} price={posterel.price}></Poster>
            )
        })
        // let busy = 
        return (
            <Router>
            <div>
            <div style = {{ position: "absolute", width:'100%', height:'100%', backgroundColor: "rgba(0,0,0,0.3)", zIndex:"10", display: this.props.isBusy ? "block":"none"}}>
                <div style = {{position:"relative", left:"50%", top:"50%"}}>
                <CircularProgress style = {{marginLeft:"16px"}}/>
                <p style = {{fontSize:"16px"}}>Please wait...</p>
            </div>
            </div>
                <div className = "preHeader">
                    <Button className = "home-button" style= {{backgroundColor:"white", width:"130px", marginLeft:"10%", height:"80%", marginTop:"5px",
                fontFamily: "'Maven Pro', 'sans-serif'", textTransform:"capitalize"
                }}>Home</Button>
                </div>
                <div className = "start-container">
                <div style= {{display:"flex", flexDirection:"row-reverse"}} >
                    <span style= {{alignSelf:"center", marginLeft:"10px", fontFamily:"'Maven Pro', 'sans-serif'"}}>India</span>
                    <img style= {{width:"40px", height:"40px"}}  src= {flag}></img>
                    
                </div>
                <hr className = "countryLine"/>
                {/* <Header /> */}
                <UserContext.Provider value = {this.props.pUser}>
                <Route>
                <Header style= {{backgroundColor:"#e0e0e0"}} signIn= {this.signIn}  signOut= {this.signOut.bind(this)}/>
                </Route>
                </UserContext.Provider>
                {/* <div className="header-main">
                </div> */}
                <HeaderTabs></HeaderTabs>
                <Route path="/home" exact>
                <div className = "bannerContainer">
                <Slider/>
                
                </div>
                <FloatingBanner/>
                <SeperatorWithText/>
                <div className = "posters-container">
                {/* <Main/> */}
                {posterListCmp}
                </div>
<<<<<<< HEAD
                </Route>
                <Route path="/" exact redi>
                <Redirect
                to={{
                    pathname: "/home",
                    }}/>
                </Route>
                <Route path="/letter-head" exact component={LetterHead}>       
                </Route>
                <Route path="/visiting-card" exact component={VisitingCard}>       
                </Route>
                <Route path="/print" exact component={LetterHead}>       
                </Route>
                <Route path="/flex" exact component={LetterHead}>       
                </Route>
                <Route path="/standees" exact component={LetterHead}>       
                </Route>
                <Route path="/designwork" exact component={LetterHead}>       
                </Route>
                <Route path="/admin" exact component={Admin}>       
                </Route>
                <Route path="/signUp" exact component={SignUp}>       
                </Route>
                <Route path="/signIn" exact component={SignIn}>       
                </Route>
                <StandartFooter/>
                </div>
            </div>
        </Router>)
    }
}
const mapStateToProps = state =>{
    return {
        pUser:state.user,
        isBusy: state.busy
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        setUser : (user)=> dispatch({type:'SET-USER', payload:user}),
=======
                <Footer />
                
            </div>)
>>>>>>> c8a8784a773d24f4c898616acefe138e925e1d71
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);