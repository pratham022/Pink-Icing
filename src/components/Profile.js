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

import { boutiques } from '../Data/boutiques';
import { useParams } from 'react-router-dom';
import { posts } from '../Data/posts';

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
        margin: "1rem",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr 1fr"
    }
   
});

function Profile(props) {

    let { id } = useParams();
    const {classes, theme} = props;
    const [value, setValue] = React.useState(4);

    let boutique = boutiques.filter(item => {
        if(item.id == id)
            return item
    })
    boutique = boutique[0]

    const boutiquePosts = posts.filter(item => {
        if(item.boutiqueId == id)
            return item
    })
    console.log(boutiquePosts)
    return (
        <div className={classes.mainContainer}>
            <Card className={classes.profileCard}>
                {/** Image */}
                <div>
                    <img  className={classes.logo} src={boutique.photo} alt="lehenga"/>
                </div>
                {/**Description */}
                <div className={classes.description}>
                    <div>{boutique.name}</div>
                    <div>
                        <Typography component="legend">Rating</Typography>
                        <Rating name="read-only" value={value} readOnly />
                    </div>
                    <div className={classes.contactInfo}>
                          <PhoneAndroidIcon/> {boutique.phone}
                    </div>
                    <div className={classes.emailInfo}>
                        <EmailIcon/> {boutique.email}
                    </div>
                    <div className={classes.addressInfo}>
                        <LocationOnIcon/> {boutique.address.slice(0, 54)}
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
                            <h2>{boutique.name}</h2>
                            <h6>- {boutique.address}</h6>

                            <h4>{boutique.bio.slice(0, 159)}</h4>

                                <div>
                                <h3>Our Services:-</h3>
                                <List >
                                <Divider />
                                {boutique.services.map(service => (
                                    <>
                                    <ListItem disablePadding>
                                        <ListItemText primary={service} />
                                    </ListItem>
                                    <Divider />
                                    </>
                                ))}

                                </List>
                                </div>
                                <div>
                               <h3> Our Mission:-</h3>
                               {boutique.mission}
                                </div>

                                <div>
                                <h3>Specialties:-</h3>
                                {boutique.specialities}
                                </div>
                                <div>
                                Do come and explore the lifestyle.
                                </div>
                            </span>
                    </div>
                   
            </Card>
            <div className={classes.post}>
                    {boutiquePosts.map(post => (
                        <IndividualPost 
                        key={post.id} 
                        pics={post.images} 
                        description={post.description.slice(0, 140)} 
                        boutiqueId={post.boutiqueId}/>
                    ))}
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Profile);
