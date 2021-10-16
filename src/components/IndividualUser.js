import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function IndividualUser({ boutiqueName, selected }) {
  console.log(selected)
  return (
    <Card sx={{ minWidth: 275, marginTop: "0.4rem", cursor: "pointer", backgroundColor: selected && '	#D3D3D3' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {boutiqueName}
        </Typography>
      </CardContent>
    </Card>
  );
}
