import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import {
  Card,
  CardMedia,
  CardContent,Typography, 
} from '@material-ui/core'
const Collections = ({collections ,  Collections }) => {
  const classes = useStyles()
  console.log(collections);
  if (!collections.length) return <p>Loading...</p>
    return(
<main className={classes.content}>
  <div className={classes.toolbar} />
    <div className="small-container">
      <h1 className="CollName">Collections</h1>\
        <Grid  container justify='center' spacing={4}>
        {collections.map((collection) => (
          <Grid key={collection.id} item xs={12} sm={12} md={6} lg={6}>
            <Link 
            className="reko"
            to={`/collection/${collection.id}`}>
              <Card className={classes.root} >
              <CardMedia
                className={classes.media}
                title={collection.name}
              />
           <CardContent>
              <div className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' style={{fontSize:'1.5rem'}} component='h2'>
                      {collection.name}
                       </Typography>
                  </div>
                 </CardContent>
               </Card>
              </Link> 
            </Grid>
            ))}
        </Grid>
    </div>
</main>
        );
    }
    export default Collections;