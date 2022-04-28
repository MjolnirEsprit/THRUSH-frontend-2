import React, {useState, useEffect} from 'react';
import {Button, Fab,
  Card, CardActionArea, 
  CardActions, CardContent, 
  CardMedia, Grid, Typography } from '@material-ui/core';
import db from '@utils/db';
import Instrument from '@models/instrument';
import useStyles from '@utils/styles';
import NextLink from 'next/link'
import Filterbar from '@components/Filterbar';
import axios from 'axios';
import { useRouter } from 'next/router';
import Home from "../courses-marketplace";
import {BaseLayout} from "../../components/common/layout";
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import ShowGuitar  from './ShowGuitar';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;


export default function Store(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen3D = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { instruments } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [listInstruments, setlistInstruments] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=> {
    
    axios.get("http://localhost:2000/api/v1/instruments").then((response) => {
      setlistInstruments(response.data);
      
    })
  },[])

  const GoToProviderPage = () =>{
    router.push('/instruments/addInstrument');
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  const addToCartHandler = (product) => {
    setCartItems([...cartItems, {...product}]);
    alert('Item added to cart!')
  }
  
  const GoToCart = () =>{
    router.push('/instruments/cart');
  }

  return (
    <>      
      <Box sx={{
            borderRadius: 1,
            margin: 30
          }}>
      <Grid container >
        <Grid item md={12}> 
          <Card color='primary'>
            <CardContent>
              <Typography component="h1" variant='h1'>Thrush Store</Typography>
              <Box color='primary'
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:" space-between",
                  borderRadius: 1,
                }}>          
                  <div>               
                    <Typography >You can find selected items here</Typography>
                    <Button variant="contained" color='primary' onClick={()=> GoToCart()}> Cart</Button>
                  </div>
                  <div>               
                    <Typography >3D Models available</Typography>
                    <Button variant="contained" color='primary' onClick={handleOpen3D}> 3D MODELS</Button>
                  </div>
                  <div>
                    <Typography >You can sell instruments here</Typography>
                    <Button variant="contained" color='primary' onClick={()=> GoToProviderPage()}> Sell Instruments</Button>
                  </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
        <Box 
          sx={{
            color:'primary',
            display: "flex",
            flexDirection: "row",
            borderRadius: 3,
          }}
          className={classes.main}>
          <Filterbar />
          <div>
            <Grid container spacing={2}>
              {listInstruments.map((product) => (
                <Grid item md={4} key={product.name}>
                  <Card className={classes.card}>
                    <NextLink href={`/instruments/${product._id}`} passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}></CardMedia>
                        <CardContent>
                          <Typography>{product.name}</Typography>
                          <CardActions>
                            <Typography>${product.price}</Typography>
                            <Button color='primary'>Add to cart</Button>
                          </CardActions>
                        </CardContent>
                      </CardActionArea>
                    </NextLink>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
        </Box>
        <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box>
                        <ShowGuitar />
                    </Box>
                </StyledModal>
    </>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const instruments = await Instrument.find({}).lean();
  await db.disconnect();
  return {
    props: {
      instruments: instruments.map(db.convertDocToObj),
    },
  };
}

Store.Layout = BaseLayout
