import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import app_logo from '../images/app_logo.jpeg';
import AppLogo from './AppLogo';

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#fff' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {/* <img src={app_logo} style={{ width: "120px", height: "100px" }}/> */}
        <AppLogo />
        <Tab label="Home" />
        <Tab label="Profile" />
        <Tab label="Boutiques" />
        <Tab label="Orders"/>
      </Tabs>
    </Box>
  );
}