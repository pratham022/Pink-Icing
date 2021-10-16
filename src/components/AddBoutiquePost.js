import { withStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@material-ui/core/TextField';
import React,{useState} from 'react';

import { SketchPicker } from 'react-color';
import ImageUploading from 'react-images-uploading';
import Button from '@material-ui/core/Button'


const styles = theme => ({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    } ,
    form:{
        width:"60vw",
        height:"120vh",
        marginTop:"4vh",
        marginBottom:"2vh",
         display:'flex',
         flexDirection:'column', 
        justifyContent:'space-evenly',
        alignItems:'center',
        overflow:"scroll"
    },
    selectType:{
        display:"flex",
        

    }
    

});


function AddBoutiquePost(props) {

    const {classes,theme}=props;

    const [name,setName]=useState('');

    const [description, setDescription] = useState('');

    const [colors,setColors]=useState([]);

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    const handleChange = (event) => {
      setDescription(event.target.value);
    };

    return (
        <div className={classes.container}>
                   

                    <Card className={classes.form}>

                                    <div>
                                        Add Images
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
                                            <Button
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            variant="contained"
                                             color="primary"
                                            >
                                            Upload Images
                                            </Button>
                                            &nbsp;
                                            <Button variant="contained" color="secondary" onClick={onImageRemoveAll}>Remove all images</Button>
                                            {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <img src={image['data_url']} alt="" width="100" />
                                                <div className="image-item__btn-wrapper">
                                                <Button variant="contained" color="primary" onClick={() => onImageUpdate(index)}>Update</Button>
                                                <Button variant="contained" color="secondary" onClick={() => onImageRemove(index)}>Remove</Button>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                        )}
                                    </ImageUploading>

                                    </div>


                            <div className={classes.selectType}>

                            <TextField id="standard-basic" label="Name" variant="standard" />
                            <TextField
                                id="standard-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="outlined"
                                style={{marginLeft:"2vw"}}
                                />
                            </div>


                            <div>
                                Colors Available
                                <SketchPicker/>
                                <Button variant="contained" color="primary">Add More Colors</Button>
                            </div>

                            <div>
                            <Button variant="contained" color="secondary">POST</Button>
                            </div>

                            
                    </Card>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(AddBoutiquePost);
