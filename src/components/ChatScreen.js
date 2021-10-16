import React from 'react'
import Post from './Post'

import { withStyles } from "@material-ui/core/styles";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = theme => ({ 
    cardContainer: {
        position: "relative"
    },
    sentMsgContainer: {
        display: "flex",    
        justifyContent: "flex-end",
    },
    receivedMsgContainer: {
        display: "flex",
        justifyContent: "flex-start"
    }
});

const ChatScreen = (props) => {
    const {classes, theme} = props;

    return (
        <div className={classes.cardContainer}>
            
            <div className={classes.receivedMsgContainer}>
                <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "13px", backgroundColor: "#b3c2ce" }}>
                    <Typography component="div">
                        Greetings from Veeka Boutique. Hope you are doing well
                    </Typography>
                </Card>
            </div>

            <div className={classes.sentMsgContainer}>
                <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "13px", backgroundColor: "#748cf8"}}>
                    <Typography component="div">
                        Hello, I loved your recent bridal designs. I would like to stitch one. What would be the estimate cost?
                    </Typography>
                </Card>
            </div>
            

            <div className={classes.receivedMsgContainer}>
                <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "13px", backgroundColor: "#b3c2ce" }}>
                    <Typography component="div">
                        Sure, please check out our description section of the post for more details about it!
                    </Typography>
                </Card>
            </div>

            <div className={classes.receivedMsgContainer}>
            <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "13px", backgroundColor: "#b3c2ce" }}>
                <Typography component="div">
                    We also like to hear about some of the customizations from you!
                </Typography>
            </Card>
            </div>

        </div>
    )
}

export default withStyles(styles, { withTheme: true })(ChatScreen);

