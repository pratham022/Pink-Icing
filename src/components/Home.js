import React from 'react'
import Post from './Post'

import { withStyles } from "@material-ui/core/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
      };

    return (
        <div>
            <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="Category"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="boutique">Boutique</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                </Select>
            </FormControl>
            </div>
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
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Home);

