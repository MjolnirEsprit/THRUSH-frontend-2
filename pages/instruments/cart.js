import React, { useContext } from 'react';
import Layout1 from '@components/Layout';
import { Store } from '@utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
  CardContent,
  Box,
  CardActionArea,
  CardMedia,
  CardActions

} from '@material-ui/core';
import { CartContext } from "../../Helper/Context";
import useStyles from '../../utils/styles';
import Navbar from '@components/common/main_navbar';


export default function CartScreen() {
  const {cartItems, setCartItems} = useContext(CartContext);
  const classes = useStyles();
  //const { state } = useContext(Store);
  /*const {
    cart: { cartItems },
  } = state;*/

  return (
    <Layout1 title="Shopping Cart">
      <Navbar />
      <Typography component="h1" variant="h1" color='primary'>
        Shopping Cart
      </Typography>
        
          <div>
            <Grid container spacing={2}>
              {cartItems.map((product) => (
                <Grid item md={4} key={product.name}>
                  <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}
                        ></CardMedia>
                        <CardContent>
                          <Typography>{product.name}</Typography>
                          <CardActions>
                            <Typography>${product.price}</Typography>
                          </CardActions>
                        </CardContent>
                      </CardActionArea>
       
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
      
    </Layout1>
  );
}