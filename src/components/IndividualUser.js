import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function IndividualUser() {
  return (
    <Card sx={{ minWidth: 275, marginTop: "0.4rem", cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Name
        </Typography>
      </CardContent>
    </Card>
  );
}
