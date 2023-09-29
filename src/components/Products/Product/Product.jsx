import React, { useState, useEffect } from 'react'
import Commerce from '@chec/commerce.js';
import { Carousel ,Card } from 'react-bootstrap';
import { Container, Col, Row } from "mdbreact";
import useStyles from './styles'
import SliderImage from 'react-zoom-slider';
import './index.css';


import {
  
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Slider,
} from '@material-ui/core'
import { AddShoppingCart, Height } from '@material-ui/icons'
import { useParams, Link } from 'react-router-dom'
import { height } from 'dom-helpers'
import { Dropdown } from 'bootstrap'

const Product = ({ products, onAddToCart }) => {
  const { id } = useParams()
  const classes = useStyles()
  const [Img, setimg] = useState([])
  const [Name, setname] = useState('')
  const [Des,setdes]= useState('')
  const [price, setprice] = useState('')
  const [idd, setidd] = useState('')
  const [size , setsize]= useState('');
  const [Variants, setvariants] = useState([])
  const [Rproducts , setRproducts]= useState([])
  const [data ,  setdata ]  = useState([])
  var Assets = []
  var variants = []
  var rprodcs = []
  const [varintt, setvariantt] = useState({});

  var variant_id = "";
  var option_id = "";
  var myMap = {};

  function updateVarient(varId) {
    variant_id = varId;
    option_id = document.getElementById("verientSpinner").value;
    console.log("VAR ID " + varId)
    console.log({varGroup : variant_id, option : option_id})
  }

  function updateOption(optionId) {
    console.log("Option ID : " + optionId);
  }
  
 
 const handleClick = () => {
    window.location.reload()
  }
  const product = products.filter((product) => product.id == id)

  useEffect(() => {
    
    product.map((product) => {
      const { assets, name, variant_groups, price , description , sku , related_products , id } = product
      Assets = assets
      variants = variant_groups
      rprodcs = related_products
      setname(name)
      setidd(id)
      setprice(price.formatted_with_code)
      setdes(description)
      setsize(sku)

    
    })

    Assets.map((img) => {
      console.log('fewfwe')
      setimg((Img) => [...Img, img])
    })

    variants.map((props) => {
      setvariants((Variants) => [
        ...Variants,
        { options: props.options, name: props.name, id: props.id },
      ])
    })
    rprodcs.map((props) => {
      setRproducts((Rproducts) => [
        ...Rproducts,
        { name: props.name, price:props.price.formatted_with_code  ,id: props.id , image: props.image.url },
      ])
    })
    

    Assets.slice(0,Assets.length).map((props) => {
      console.log("dsda")
      setdata((data) =>[
        ...data,
        {image:props.url , text:"hi"}
      ])

    })

    


  }, [products])
 

  


  const descr = () => {
   return Des;
  }
  console.log(Rproducts)

  if (!data.length) return <p>Loading...</p>
  



  
 return (
      <main className={classes.content}>
       <div className={classes.toolbar} />

       <Container>
  <Row>
    <Col sm={6}>  <SliderImage 
  data={data} 
  showDescription={true} 
  direction="right" 
/></Col>
    <Col sm={6}>   <h1 className="pname">{Name}</h1>
      <h3 className="prc">{price}</h3>
      <div>
        {Variants.map((props) => {
          const { id, name, options } = props

          return (
            <>
              <label className="varna">{name}</label>
              <select key={id} name='' id="verientSpinner" onChange={e =>  updateVarient(id)}>
                {
                options.map((option ) => {
                  const { id, name, price } = option
                  
                  return (
                    <option key={id} value={option.id}>
                      {name}
                    </option>
                  )
                })}
              </select>
            </>
          )
        })}
      </div>


      <button className="cartb" onClick={()=>onAddToCart(idd , 1 , {varGroup : variant_id, option : option_id})
      }> Add to cart</button>
      <button className="cartc" > Check out</button>
      <div className="des" dangerouslySetInnerHTML={{ __html: Des }} />
      <p><img className="sizechart"className="size" src={size}/></p>
      
     
      </Col>
  </Row>
  <div className="product-recommendations">
        <div className="section-header section-header--medium">
          <h2 className="h4">You may also like</h2>
        </div>
        <div className="grid-uniform grid-link__container">
        <Row>
        {Rproducts.map((props) => {
          const { name, price, image, id} = props
          return (
            <>

               <Col sm={3}>
          <Link 
           
            to={`/product/${id}`}>
      <Card onClick="handleClick()" >
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{name}</Card.Title> 
      <Card.Text>
        {price.formatted_with_symbol}
     </Card.Text>
     </Card.Body>
     </Card>  
     </Link> 
     </Col>
            </>
          )
        })}
  

  </Row>
        </div>
      </div>
  
</Container>


     
     
      </main>
  )
      
}

export default Product
