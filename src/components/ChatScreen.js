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
            
            <div className={classes.sentMsgContainer}>
                <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "3px"}}>
                    <Typography component="div">
                        Hello There, I am someone, my name is prathamesh
                    </Typography>
                </Card>
            </div>
            
            <div className={classes.receivedMsgContainer}>
                <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "3px" }}>
                    <Typography component="div">
                        Hello There, I am someone, my name is prathamesh
                    </Typography>
                </Card>
            </div>

            <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "3px" }}>
                <Typography component="div">
                    Hello There, I am someone, my name is prathamesh
                </Typography>
            </Card>

            <Card sx={{ maxWidth: 375, margin: "0.4rem", borderRadius: "28px", padding: "3px" }}>
                <Typography component="div">
                    Hello There, I am someone, my name is prathamesh
                </Typography>
            </Card>

        </div>
    )
}

export default withStyles(styles, { withTheme: true })(ChatScreen);

