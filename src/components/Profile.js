import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { withStyles } from "@material-ui/core/styles";
import { display } from '@mui/system';
import logo1 from '../images/logo1.png';
import Rating from '@mui/material/Rating';

import StarIcon from '@material-ui/icons/Star';
import Typography from '@mui/material/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import boutique1 from '../images/boutique1.jpg';
import Post from './Post';
import IndividualPost from './IndividualPost'

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };


const styles = theme => ({ 

    mainContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5vh",
        

    },

    profileCard:{

        width:"60vw",
        height:"30vh",
        display:"flex"
    },
    logo:{
        height:"23vh",
        width:"15vw",
        marginTop:"2vh",
        marginLeft:"2vw"
    },
    description:{
        marginLeft:"2vh",
        marginTop:"2vh",

    },contactInfo:{
        fontSize:"20px",
    },emailInfo:{
        fontSize:"20px"
    },addressInfo:{
        fontSize:"20px"
    },
    aboutInfo:{
        width:"60vw",
        height:"50vh",
        display:"flex",
        flexDirection:"column",
        marginTop:"4vh",
        overflow:"scroll",
        
    },
    aboutDescription:{
        fontSize:"15px"
    },
    boutiquePhoto:{
        width:"20vw",
        height:"20vh"
    },
    post:{
        [theme.breakpoints.up("sm")]: 
            {
                margin: "1rem",
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "1fr  "
            },
    [theme.breakpoints.down("sm")]: 
    {

    }
}
   
});

function Profile(props) {

    const {classes, theme} = props;
    const [value, setValue] = React.useState(2);

    return (
        <div className={classes.mainContainer}>
            <Card className={classes.profileCard}>
                {/** Image */}
                <div>
                    <img  className={classes.logo} src={logo1} alt="lehenga"/>
                </div>
                {/**Description */}
                <div className={classes.description}>
                    <div>Athithis The Ladies Wear</div>
                    <div>
                        <Typography component="legend">Rating</Typography>
                        <Rating name="read-only" value={value} readOnly />
                    </div>
                    <div className={classes.contactInfo}>
                          <PhoneAndroidIcon/> 7774442323
                    </div>
                    <div className={classes.emailInfo}>
                        <EmailIcon/> athithis@gmail.com
                    </div>
                    <div className={classes.addressInfo}>
                        <LocationOnIcon/> Near Mata Mandir, Chawla sq, Jaripatka Ngp
                    </div>
                </div>
                
            </Card>
            <Card className={classes.aboutInfo}>
                     {/** Image */}
                     <div >
                        <img className={classes.boutiquePhoto} src={boutique1} alt="boutique pic"/>
                    </div>
                    {/**About Section */}
                    <div className={classes.aboutDescription}>
                            <span>
                            <h2>Athithis The Ladies Wear</h2>
                            <h6>- (Plot No. 69,  Near Mata Mandir, Chawla sq, Jaripatka Ngp)</h6>

                            <h4>Athithis Collections is a famous women's clothing store in Jaripatka
                                Nagar for best quality of designer kurtis,
                            dress materials, silk sarees, paithani, leggings and more.</h4>

                                <div>
                                <h3>Our Services:-</h3>
                                <List >
                                <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Exclusive Collection of Designer Kurtis" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Designer Suits" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Dress Materials" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Silk Sarees" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Paithani" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Tops" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem disablePadding>
                                        <ListItemText primary="Leggings" />
                                    </ListItem>
                                    <Divider />
                                </List>
                                </div>
                               

                                <div>
                               <h3> Our Mission:-</h3>

                                Rachana Collections provides customer satisfaction 
                                for our world-class customers at a reasonable price.
                                </div>

                                <div>
                                <h3>Specialties:-</h3>
                                Exclusive collection of designer kurtis, dress materials, 
                                silk sarees, paithani and leggings
                                </div>

                                <div>
                                Do come and explore the lifestyle.
                                </div>
                            </span>
                    </div>
                   
            </Card>
            <div className={classes.post}>
                    <IndividualPost/>
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Profile);
