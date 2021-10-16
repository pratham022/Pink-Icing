import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function IndividualBoutique(props) {

    const { pic, name, bio, services } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={pic}
        alt="Boutique Photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio.slice(0, 150)}...
        </Typography>
        <div style={{ marginTop: "1rem" }}>
            {services.map(service => (
                <Chip 
                    label={service}
                    style={{margin: "0.2rem"}}
                />
            ))}
        </div>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="small" style={{ margin: "1rem" }}>Learn More</Button>
      </div>
    </Card>
  );
}
