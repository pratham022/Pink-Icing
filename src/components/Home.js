import React from 'react'
import Post from './Post'

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({ 
    cardContainer: {
        [theme.breakpoints.up("sm")]: {
            margin: "1rem",
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr 1fr 1fr 1fr"
        },
        [theme.breakpoints.down("sm")]: {
        }
    }
});

const Home = (props) => {
    const {classes, theme} = props;

    return (
        <div className={classes.cardContainer}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Home);

