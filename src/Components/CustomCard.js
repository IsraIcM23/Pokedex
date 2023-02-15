import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { v4 as uuidv4 } from 'uuid';
import { width } from '@mui/system';

export default function MediaCard({pokemonImg, pokemonName, pokemonId, pokemonLogo, pokemonAbilities, pokemonTypes}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'green' }}>
      <CardHeader
        avatar={
          <Avatar src={pokemonLogo} sx={{ bgcolor: 'white', boxShadow: 5, padding:'5px', margin: '2px' }} aria-label="recipe" avatar={pokemonLogo}  >
          </Avatar>
        }
        titleTypographyProps={{variant: 'h4', alig: 'left'}}
        title={pokemonName} 
        subheader={pokemonId}
      />  
      <CardMedia
        sx={{ 
            minHeight: '300px',
            maxHeight: '300px',
            padding: '15px',
            objectFit: 'contain',
            backgroundColor: 'skyblue',
            width: 'auto'
        }}
        image={pokemonImg} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>Types: </h3> 
            {
              pokemonTypes.map(item => (
                <div key={uuidv4()}>
                  <label>{item.type.name}</label>
                </div>
              ))
            }
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <h1>Abilities: </h1> 
            {
              pokemonAbilities.map(item => (
                <div key={uuidv4()}>
                  <label>{item.ability.name}</label>
                </div>
              ))
            }
        </Typography>
      </CardContent>
    </Card>
  );
}