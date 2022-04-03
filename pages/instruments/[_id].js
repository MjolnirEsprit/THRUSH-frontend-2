import React from 'react'
import db from '@utils/db';
import Instrument from '@models/instrument';
import Layout1 from '@components/layout';
import useStyles  from '@utils/styles';
import {
    Grid,
    Link,
    List,
    ListItem,
    Typography,
    Card,
    Button,
    Box,
    ThemeProvider
  } from '@material-ui/core';
  import NextLink from 'next/link';
  import Navbar from '@components/common/main_navbar';

export default function InstrumentsScreen(props) {
    const {instrument} = props ;
    const classes= useStyles();
   
    
    if (!instrument){
        return <h1>not found sorry :(</h1>
    }
  return (
    <>
    <Navbar />
    <Box 
        sx={{
            borderRadius: 1,
            margin: 30
          }}
    >
    <Layout1 title={instrument.name} description={instrument.description}>
          <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
              </Grid>
              <Grid item md={3} xs={12}>
                  <List>
                      <ListItem>
                          <Typography component="h1">{instrument.name}</Typography>
                      </ListItem>
                      <ListItem>
                          <Typography>Price: {instrument.price}</Typography>
                      </ListItem>
                      <ListItem>
                          <Typography>
                              Rating: {instrument.rating} stars ({instrument.numReviews} reviews)
                          </Typography>
                      </ListItem>
                      <ListItem>
                          <Typography> Description: {instrument.description}</Typography>
                      </ListItem>
                  </List>
              </Grid>
              <Grid item md={3} xs={12}>
                  <Card>
                      <List>
                          <ListItem>
                              <Grid container>
                                  <Grid item xs={6}>
                                      <Typography>Price</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                      <Typography>${instrument.price}</Typography>
                                  </Grid>
                              </Grid>
                          </ListItem>
                          <ListItem>
                              <Grid container>
                                  <Grid item xs={6}>
                                      <Typography>Status</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                      <Typography>
                                          {instrument.stock > 0 ? 'In stock' : 'Unavailable'}
                                      </Typography>
                                  </Grid>
                              </Grid>
                          </ListItem>
                          <ListItem>
                              <Button fullWidth variant="contained" >
                                  Add to cart
                              </Button>
                          </ListItem>
                      </List>
                  </Card>
              </Grid>
          </Grid>
      </Layout1>
      </Box>
      </>
  )
}


export async function getServerSideProps(context) {
    const{params} = context;
    const {_id} =  params;
    await db.connect();
    const instrument = await Instrument.findOne({_id}).lean();
    await db.disconnect();
    return {
      props: {
        instrument: db.convertDocToObj(instrument),
      },
    };
  }