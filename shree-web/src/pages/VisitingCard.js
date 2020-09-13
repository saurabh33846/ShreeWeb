import React, { Component , useState, useRef, useCallback} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { makeStyles } from '@material-ui/core/styles';
import SliderMaterial from '../component/SliderMaterial';
import SelectComponent from '../component/selectComponent';
import ListWithTitle from '../component/ListWithTitle';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import firebase from 'firebase';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import { func } from 'prop-types';
import {images} from '../assets/logobanners';

const tutorialStep =[{
    label: 'Visiting Card',
    imgPath:images[1]
  }];

const aBulletPoints = [
    'Dimensions: 89 x 51 mm',
    'Standard matt paper 300 gsm.',
    'Full color printing'
]
const quantityLabel = 'Quantity';
const quantityHelperText = "Select quantity"
const quantityValues = [1000, 2000];

const qualityLabel = 'Quality';
const qualityHelperText = "Select quantity";
const qualityValues = ['Matte', 'Glossy', 'UV', ];

const prodDesList = [{title:"Card Size :", list:["Full Bleed Size Approx : w:91mm X h:61mm (The area that will be cut off after the business card is printed and cut down to the finished size)",
"Final Print Size Approx: w:85mm x h:55mm (Finished size i.e. the delivered product",
"Safety Area Approx : w:75mm X h:45mm (All text should come under this area)"]},
{title:"Paper Stock :", list:[" 300 gsm ma paper which is brighter/whiter.",
"Mae Paper with laminaon : 300 gsm matt paper with plastic lamination. ",
"Lamination increases stiffness of the cards and protects them from regular wear. ",
"Perfect for long lasng cards."]},
{title:"Upload or Designing Specificaon :", list:[" Ensure you have proof-read for spelling, grammar and punctuaon errors.",
"Ensure the text is placed with-in the safety area."]}]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    container:{
        backgroundColor:"white"
    },

    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      marginBottom:"1rem",
      backgroundColor:"white"
    },  
    pageRightTotal:{
        fontWeight:500,
        fontSize:"25px",
        color:"black"
    },
    pageRightList:{
        paddingBottom: ".5rem",
        marginLeft:"1rem",
        listStyle:"disclosure-closed"
    },
    mainHeading:{
        color:"#234262"
    },
    buttonBase:{
        margin:"0 .6rem"
    },
    buttonskyBlue:{
        color:"white",
        backgroundColor:"#42c5f5",
        transition:"transform .4s",
        '&:hover':{
            backgroundColor:"#42a1f5",
            transform:"translateY(-5px)"
        },
        '&:active':{
            transform:"translateY(-2px)"
        }
    },
    buttonOrange:{
        color:"white",
        backgroundColor:"#f59642",
        transition:"transform .4s",
        '&:hover':{
            backgroundColor:"#f58142",
            transform:"translateY(-5px)"
        },
        '&:active':{
            transform:"translateY(-2px)"
        }
    },
    divider:{
        margin:"10px 0"
    },
    seondaryHeading:{
        color:"#f59642",
        fontSize:"1.5rem"
    },
    footerParagraph:{
        width:"60%"
    },
    radiobtn:{
        color:"black"
    }

  }));
  // firebase bucket name
		// REPLACE WITH THE ONE YOU CREATE
		// ALSO CHECK STORAGE RULES IN FIREBASE CONSOLE
		var fbBucketName = 'images';

		// get elements
		//var uploader = document.getElementById('uploader');
		//var fileButton = document.getElementById('fileButton');

		// listen for file selection
		//fileButton.addEventListener('change', function (e) {

			

		//
  const footerDescList = prodDesList.map((listItem)=>{
      return (<ListWithTitle title = {listItem.title} list = {listItem.list}></ListWithTitle>)
  })

  let uploadPercentage = 0;
  let setUploadPercentage;
  let errorAlert = null;
  let successAlert = null;
  let progressbar = null;


  export default function VisitingCard() {
   
    const classes = useStyles();
    const bulletPoints = aBulletPoints.map((bulletpoint)=>{
        return <li className={classes.pageRightList}>{bulletpoint}</li>
    })
    const [totalprice, setTotalPrice] = useState(0);
    const fileInpRef = useRef();

    const [showError, setShowError] = useState(false);

    const percentageUpload = useState(0);
    [uploadPercentage, setUploadPercentage] = percentageUpload;

    const [value, setValue] = React.useState('female');
    const uploadButtonClicked = useCallback(function(event){
        fileInpRef.current.click();
        setValue(event.target.value);
        setShowProgess(true);
    },[])
    const [showProgress, setShowProgess] = useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const [showSuccess, setShowSuccess] = useState(false)
    errorAlert = showError ? <Alert severity="error" color="error">
                        Please log in to upload
                    </Alert>:null
    successAlert = showSuccess ? <Alert severity="success" color="success">
                        File Uploaded successfully
                </Alert>:null
      const uploadFile = useCallback( function(e) {
        // what happened
              console.log('file upload event', e);
  
              // get file
              var file = e.target.files[0];
  
              // create a storage ref
              var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
  
              // upload file
              var uploadTask = storageRef.put(file);
  
              // The part below is largely copy-pasted from the 'Full Example' section from
              // https://firebase.google.com/docs/storage/web/upload-files
  
              // update progress bar
              uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                  function (snapshot) {
                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      //uploader.value = progress;
                      console.log('Upload is ' + progress + '% done');
                      setUploadPercentage(progress);
                      switch (snapshot.state) {
                          case firebase.storage.TaskState.PAUSED: // or 'paused'
                              console.log('Upload is paused');
                              break;
                          case firebase.storage.TaskState.RUNNING: // or 'running'
                              console.log('Upload is running');
                              break;
                      }
                  }, function (error) {
  
                      // A full list of error codes is available at
                      // https://firebase.google.com/docs/storage/web/handle-errors
                      switch (error.code) {
                          case 'storage/unauthorized':
                              // User doesn't have permission to access the object
                            
                            setShowError(true);
                            setTimeout(()=>{
                                setShowError(false)
                            },2000)
                              break;
  
                          case 'storage/canceled':
                              // User canceled the upload
                              break;
  
                          case 'storage/unknown':
                              // Unknown error occurred, inspect error.serverResponse
                              break;
                      }
                  }, function () {
                      setUploadPercentage(0);
                      setShowSuccess(true);
                      setTimeout(()=>{
                          setShowSuccess(false)
                      },2000)
                      setShowProgess(false);
                      // Upload completed successfully, now we can get the download URL
                      // save this link somewhere, e.g. put it in an input field
                      var downloadURL = uploadTask.snapshot.downloadURL;
                      console.log('downloadURL', downloadURL);
                  });
    },[])
    progressbar = showProgress ? (<LinearProgress style={{marginTop:"10px"}} variant="determinate" value={uploadPercentage}></LinearProgress>):null;
        return (
            <div className= {classes.container} >
                <Grid container spacing={3}  justify="flex-end">
                    <Grid item xs={12} sm={5}>
                        {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
                        <SliderMaterial tutorialSteps = {tutorialStep}></SliderMaterial>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <h1 className={classes.mainHeading}>
                            Visiting Card
                        </h1>
                        <h3 className= "paage-right-heading-tertiary">
                        Vising Cards with a professional look.                        
                        </h3>
                        <ul className = {classes.pageRightList}>
                            {bulletPoints}
                        </ul>
                        
                        <Paper className={classes.paper} >
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{display:"block"}}>
                                <FormControlLabel value="singleSide" className={classes.radiobtn} control={<Radio className={classes.radiobtn} />} label="Single Sided" />
                                <FormControlLabel value="bothSide" className={classes.radiobtn}  control={<Radio className={classes.radiobtn}/>} label="Both Sided" />
                            </RadioGroup>
                        <SelectComponent selectOption={quantityValues} label= {quantityLabel} helperText={quantityHelperText}></SelectComponent>
                        <SelectComponent selectOption={qualityValues} label= {qualityLabel} helperText={qualityHelperText}></SelectComponent>
                        <p className={classes.pageRightTotal}>Price : {totalprice}</p>
                        <Button className={`${classes.buttonskyBlue} ${classes.buttonBase}`} onClick = {uploadButtonClicked}><CloudUploadIcon></CloudUploadIcon> &nbsp; &nbsp;Upload Your Design&nbsp;</Button>
                        <Button className={`${classes.buttonOrange} ${classes.buttonBase}`}> &nbsp;Book Your Design&nbsp;</Button>
                        <input style = {{display:"none"}} ref = {fileInpRef} type="file" name="filepicker" id="filePicker" onChange ={uploadFile} >
                        </input>
                        {progressbar}
                        {errorAlert}
                        {successAlert}
                        {/* <progress value="0" max="100" id="uploader">0%</progress> */}
	                    {/* <input type="file" value="upload" accept=".jpg" id="fileButton" onChange = {uploadFile}/>  */}
                        </Paper>
                    </Grid>

                </Grid>
                <Grid container spacing={3}  >
                    <Grid item xs={12} >
                    <h3 className = {classes.seondaryHeading}>About this product</h3>
                    <Divider className = {classes.divider} variant="middle" />
                    <p className={classes.footerParagraph}>Business cards for distinguished introductions. Printbhaskar offers business card
                    and vising card printing online. Upload your business cards and visiting cards file
                    or book your design according to your needs.
                    </p>
                    {footerDescList}
                    </Grid>
                </Grid>

            </div>
        )
}
