import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { withStyles } from "@material-ui/core/styles";


import {Form} from 'react-bootstrap';


import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Carousel from 'react-material-ui-carousel';
import dressPattern from '../images/dressPattern.jpg';
import dressPattern2 from '../images/dressPattern2.png';
import dressPattern3 from '../images/dressPattern3.jpg';
import kurtaDesign from '../images/kurtaDesign.jpg';
import neckPattern from '../images/neckPattern.jpg';
import Button from '@material-ui/core/Button';
import { SketchPicker } from 'react-color';
import ImageUploading from 'react-images-uploading';

const styles = theme => ({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    } ,
    form:{

        width:"60vw",
        height:"150vh",
        marginTop:"4vh",
        marginBottom:"2vh",
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:"column",
        

    },
    selectType:{
        display:"flex",
        

    }

});

function AddCustomerPost(props) {



    const {classes, theme} = props;

    const [dress, setDress] = React.useState('');

    const [upper, setUpper] = React.useState('');

    const [lower, setLower] = React.useState('');

    const [neck, setNeck] = React.useState('');

    const [sleeve, setSleeve] = React.useState('');

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    const handleChange = (event) => {
        setDress(event.target.value);
    };

    const handleChange2 = (event) => {
        setUpper(event.target.value);
    };

    const handleChange3 = (event) => {
        setLower(event.target.value);
    };

    const handleChange4 = (event) => {
        setNeck(event.target.value);
    };

    const handleChange5 = (event) => {
        setSleeve(event.target.value);
    };

    return (
        <div className={classes.container}>
            <Card className={classes.form}>

                <div>
                <Carousel>
                    <img src={dressPattern} alt="1" style={{width:"200px",height:"300px"}}/>
                    <img src={dressPattern2} alt="2" style={{width:"200px",height:"300px"}}/>
                    <img src={dressPattern3} alt="3" style={{width:"200px",height:"300px"}}/>
                </Carousel>
                </div>
                    
                <div className={classes.selectType}>
                    
                    <Box style={{width:"200px"}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Dress Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dress}
                        label="Dress"
                        onChange={handleChange}
                        >
                        <MenuItem value="One Piece">One Piece</MenuItem>
                        <MenuItem value="Frock">Frock</MenuItem>
                        <MenuItem value="Suit">Suit</MenuItem>
                        <MenuItem value="Lehenga">Lehenga</MenuItem>
                        <MenuItem value="Kurta">Kurta</MenuItem>
                        <MenuItem value="Blouse">Blouse</MenuItem>
                        <MenuItem value="Skirt">Skirt</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>

                </div>

                <div className={classes.selectType}>
                <Box style={{width:"200px"}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Upper</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={upper}
                        label="Dress"
                        onChange={handleChange2}
                        >
                        <MenuItem value="A-Line">A-Line</MenuItem>
                        <MenuItem value="Cut">Cut</MenuItem>
                        <MenuItem value="Floor Length">Floor Length</MenuItem>
                        <MenuItem value="Anarkali">Anarkali</MenuItem>
                        <MenuItem value="Tail Cut">Tail Cut</MenuItem>
                        <MenuItem value="Flared">Flared</MenuItem>
                        <MenuItem value="Indo Western">Indo Western</MenuItem>
                        <MenuItem value="Long Straight">Long Straight</MenuItem>
                        <MenuItem value="Printed">Printed</MenuItem>
                        <MenuItem value="Cape Style">Cape Style</MenuItem>
                        <MenuItem value="Denim">Denim</MenuItem>
                        <MenuItem value="Pin Tuck">Pin Tuck</MenuItem>
                        <MenuItem value="">None</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>


                    <Box style={{width:"200px",marginLeft:"4vw"}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Lower</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lower}
                        label="Dress"
                        onChange={handleChange3}
                        >
                        <MenuItem value="Chudidar">Chudidar</MenuItem>
                        <MenuItem value="Salwar">Salwar</MenuItem>
                        <MenuItem value="Dhoti">Dhoti</MenuItem>
                        <MenuItem value="Leggings">Leggings</MenuItem>
                        <MenuItem value="Plazo">Plazo</MenuItem>
                        <MenuItem value="">None</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>

                <div className={classes.selectType}>
                <Box style={{width:"200px"}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Neck</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={neck}
                        label="Dress"
                        onChange={handleChange4}
                        >
                        <MenuItem value="Round">Round</MenuItem>
                        <MenuItem value="U-neck">U-neck</MenuItem>
                        <MenuItem value="V-neck">V-neck</MenuItem>
                        <MenuItem value="Square">Square</MenuItem>
                        <MenuItem value="Scoop">Scoop</MenuItem>
                        <MenuItem value="Sweetheart">Sweetheart</MenuItem>
                        <MenuItem value="Backless">Backless</MenuItem>
                        <MenuItem value="">None</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>

                    <Box style={{width:"200px",marginLeft:"4vw"}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Sleeve Pattern</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sleeve}
                        label="Dress"
                        onChange={handleChange5}
                        >
                        <MenuItem value="Sleeveless">Sleeveless</MenuItem>
                        <MenuItem value="Short">Short</MenuItem>
                        <MenuItem value="Cap">Cap</MenuItem>
                        <MenuItem value="Puffed">Puffed</MenuItem>
                        <MenuItem value="Bell">Bell</MenuItem>
                        <MenuItem value="Leg Mutton">Leg Mutton</MenuItem>
                        <MenuItem value="Circular Flounce">Circular Flounce</MenuItem>
                        <MenuItem value="Long">Long</MenuItem>
                        <MenuItem value="Cuff">Cuff</MenuItem>
                        <MenuItem value="">None</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>

                </div>

                <div className={classes.selectType}>
                    <div>
                        Upper
                        <SketchPicker />
                    </div>
                    <div style={{marginLeft:"2vw"}}>
                        Lower
                        <SketchPicker  />
                    </div>
                </div>

                <div>
                <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                            Upload Images
                            </button>
                            &nbsp;
                            <button onClick={onImageRemoveAll}>Remove all images</button>
                            {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}>Update</button>
                                <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </ImageUploading>
                </div>

                <div>
                <Button variant="contained" color="secondary">Submit</Button>
                </div>

            </Card>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(AddCustomerPost);
