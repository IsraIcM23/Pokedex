import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { v4 as uuidv4 } from 'uuid';
import { AppStats } from './Stats';
<<<<<<< HEAD
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useState} from 'react';


export default function MediaCard({favorites, AddFav, RemFav, pokemonImg, pokemonName, pokemonId, pokemonLogo, pokemonAbilities, pokemonTypes, pokemonWeight, pokemonHight, pokemonWeaknesses, chartData}) {
    
  const found = favorites.favorites.find(item => item.id==pokemonId);

    
  return (
    
    <Card sx={{ minWidth: 400, backgroundColor:'#215F88' }}>
    {
      found ? (
                <Avatar sx={{ float: 'right', margin:'5px', cursor:'pointer' }} onClick = {() => RemFav(pokemonId)}>
                  <StarIcon  />
                </Avatar>
                
              ) 
            : (
                <Avatar sx={{ float: 'right', margin:'5px', cursor:'pointer' }} onClick = {() => AddFav(pokemonId)}>
                  <StarBorderIcon  />
                </Avatar>
              )
    }

=======

export default function MediaCard({pokemonImg, pokemonName, pokemonId, pokemonLogo, pokemonAbilities, pokemonTypes, pokemonWeight, pokemonHight, pokemonWeaknesses, chartData}) {
  return (
    <Card sx={{ minWidth: 400, backgroundColor:'#215F88' }}>
>>>>>>> e73151dd56775442cdb08b323b6f08c07d8dc6d4
      <CardHeader
        avatar={
          <Avatar src={pokemonLogo} sx={{ bgcolor: 'white', boxShadow: 5, padding:'5px', margin: '2px' }} aria-label="recipe" avatar={pokemonLogo}  >
          </Avatar>
        }
        titleTypographyProps={{variant: 'h4', alig: 'left'}}
        title={pokemonName}
        // subheader=
        // {
        //   <div>
        //     {
        //       pokemonTypes.map(item => (
        //         <div key={uuidv4()} style={{fontWeight:'bold', float:'left', margin: '0 10px 0 10px'}}>
        //           <label style={{backgroundColor:'orange', padding:'3px', borderRadius:'5px'}}>{item.type.name}</label>
        //         </div>
        //       ))
        //     }
        //   </div>
        // } 
      />  
      <CardMedia
        sx={{ 
            minHeight: '400px',
            padding: '15px',
            backgroundColor: 'orange',
            width: 'auto',
            height: 'auto'
        }}
        image={pokemonImg} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Peso: {pokemonWeight} , Altura: {pokemonHight}
        </Typography>
        <Typography>
          <h1>Weakness: </h1> 
          <div>
            {
              pokemonWeaknesses.map((item, index, global) => (
                index + 1 === global.length ? (
                  <label key={uuidv4()}>{item.name}</label>
                ) : (
                  <label key={uuidv4()}>{item.name} / </label>
                )                  
              ))
            }
          </div>
        </Typography>
      </CardContent>
      <CardContent>
        <AppStats data={chartData}/>
        {/* {
          console.log(chartData)
        } */}
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
}


=======
}
>>>>>>> e73151dd56775442cdb08b323b6f08c07d8dc6d4
