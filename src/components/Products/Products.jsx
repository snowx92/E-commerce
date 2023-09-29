
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import './index.css';
import { BsChevronDown } from "react-icons/bs";

import {
  Card,
  CardMedia,
  CardContent,
  
  Typography,
  
} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const click = () => {
 var hover = document.getElementsByClassName("site-nav__dropdown");
 hover[0].hidden=false;
}
const click2 = () => {
  var hover = document.getElementsByClassName("site-nav__dropdown");
  setTimeout(
    function() {
      hover[0].hidden=true;
    }
    .bind(this),
    2000
);
 }


const Products = ({ products, onAddToCart }) => {
const classes = useStyles()
console.log(products);
  if (!products.length) return <p>Loading...</p>

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
     
      <div className="small-container">
      <h1 className="catName">Catgory Name</h1>
      <Grid  container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
           
            <Link 
            className="reko"
            to={`/product/${product.id}`}>
              <Card className={classes.root} >
              <CardMedia
                
                className={classes.media}
                image={product.media.source}
                title={product.name}
        
              />
 <CardContent>
                <div className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' style={{fontSize:'1.5rem'}} component='h2'>
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant='h5' style={{fontSize:'1.5rem'}} component='h2'>
                    {product.price.formatted_with_code}
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
  )
}

export default Products;
