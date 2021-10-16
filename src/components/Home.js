import React from 'react'
import Post from './Post'
import IndividualPost from './IndividualPost';

import { posts } from '../Data/posts'

import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CustomerPost from './CustomerPost';
import posts2 from '../Data/customerPost';


const styles = theme => ({ 
    cardContainer: {
        margin: "1rem",
        display: "grid",
        gap: "1rem",
        marginLeft: "1.8rem",
        gridTemplateColumns: "1fr 1fr 1fr"
    }
});

const Home = (props) => {
    const {classes, theme} = props;
    const [category, setCategory] = React.useState('All');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <div style={{display:"flex",justifyContent:'center',alignContent:'center'}}>
                <Box  sx={{ width: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Boutique">Boutique</MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            </div>
            <div className={classes.cardContainer}>

                {category=='All'&& (
                <>
                {posts.map(post => (
                    <IndividualPost 
                        key={post.id} 
                        pics={post.images} 
                        description={post.description.slice(0, 140)} 
                        boutiqueId={post.boutiqueId}/>
                ))}
                {posts2.map(post=>(
                    <CustomerPost
                        post={post}
                    />
                ))}
                   </>
                )}

            {category=='Boutique'&& (
                <>
                {posts.map(post => (
                    <IndividualPost 
                        key={post.id} 
                        pics={post.images} 
                        description={post.description.slice(0, 140)} 
                        boutiqueId={post.boutiqueId}/>
                ))}
                   </>
                )}

                {category=='Customer'&& (
                <>
                {posts2.map(post=>(
                    <CustomerPost
                        post={post}
                    />
                ))}
                   </>
                )}
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Home);

