import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import facebookIcon from '../facebook-icon.png'
import twitterIcon from '../twitter-logo.png'
import instagramLogo from '../Instagram-logo.png'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function StandartFooter() {
    const classes = useStyles();
    return (
        <footer className="standerd-footer-container">
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <div>
                        <div className="text-primary">Customer Support</div>
                        <ul>
                            <li><a href="tel:555-555-5555">Mob. 9999999999</a></li>
                            <li><a href="mailto:someone@yoursite.com"><span className="secondary-text">Write us on:</span> printbhaskar@gmail.com</a></li>

                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div style={{ width: "90%" }}>
                        <div className="text-primary">Company Info</div>
                        <ul>
                            <li className="secondary-text"><a href="#"></a>About Us</li>
                            <li><p>Thiss is some standerd text which will be replaced by some real text at some later
          point of time.</p></li>

                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div>
                    <div className="text-primary">Follow Us</div>
                    <ul>
                        <li><a href="#" className="footer-social-links"> <span>facebook</span> <img src={facebookIcon} style={{height:"30px", width:"30px"}} ></img></a></li>
                        <li><a href="#" className="footer-social-links"> <span>twitter</span> <img src={twitterIcon} style={{height:"30px", width:"30px"}} ></img></a></li>
                        <li><a href="#" className="footer-social-links"> <span>instagram</span> <img src={instagramLogo} style={{height:"30px", width:"30px"}} ></img></a></li>
                        <li><a href="#" className="footer-social-links"></a></li>
                    </ul>

                </div>
                </Grid>
            </Grid>
        </Grid>
        </footer>
    )

}

