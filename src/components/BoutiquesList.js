import React from 'react'

import { withStyles } from "@material-ui/core/styles";
import IndividualBoutique from './IndividualBoutique';
import { boutiques } from '../Data/boutiques';


const styles = theme => ({ 
    cardContainer: {
        [theme.breakpoints.up("sm")]: {
            margin: "1rem",
            marginLeft: "4rem",
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr 1fr 1fr"
        },
        [theme.breakpoints.down("sm")]: {
        }
    }
});

const BoutiquesList = (props) => {
    const {classes, theme} = props;

    return (
        <div className={classes.cardContainer}>
            {boutiques.map((boutique) => (
                <IndividualBoutique 
                    name={boutique.name} 
                    pic={boutique.photo} 
                    bio={boutique.bio}
                    services={boutique.services}
                />
            ))}
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(BoutiquesList);

