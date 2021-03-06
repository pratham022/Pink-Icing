import React from 'react'
import Post from './Post'

import { withStyles } from "@material-ui/core/styles";
import IndividualUser from './IndividualUser';
import ChatScreen from './ChatScreen';

import { boutiques } from '../Data/boutiques';

const styles = theme => ({ 
    cardContainer: {
        margin: "1rem",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr 2fr"
    },
    userListContainer: {

    },
    chatScreenContainer: {
        backgroundColor: '#ffffff',
        marginTop: "0.4rem"
    }
});

const UserList = (props) => {
    const {classes, theme} = props;

    return (
        <div className={classes.cardContainer}>
            <div className={classes.userListContainer}>
                {boutiques.map(boutique => (
                    <IndividualUser 
                        boutiqueName={boutique.name}
                        selected={boutique.name == 'VEEKA Boutique' ? true : false}
                    />
                ))}
            </div>
            <div className={classes.chatScreenContainer}>
                <ChatScreen />
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(UserList);

