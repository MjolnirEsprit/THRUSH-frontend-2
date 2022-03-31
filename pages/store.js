import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import Navbar from '@components/_App/Navbar';
import db from '../utils/db';
import Instrument from '../models/instrument';
import useStyles from '../utils/styles';
import Layout1 from '@components/_App/Layout'
import NextLink from 'next/link'
import Filterbar from '@components/Filterbar';


function store(props) {
    const {instruments} = props;
    const classes = useStyles();
    return(
        <>
            <Navbar />
            <Typography className={classes.storeTitle}>
                Thrush Store
            </Typography>
            <Layout1 >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: 1,
                    
                    }}>
                <Filterbar />
                <div>
                    <Grid container spacing={2}>
                    {instruments.map((product) => (
                        <Grid item md={4} key={product.name}>
                        <Card className={classes.card}>
                            <NextLink href={`${product.id}`} passHref>
                            <CardActionArea>
                                <CardMedia component="img" image={product.image} title={product.name}>
                                </CardMedia>
                                <CardContent>
                                    <Typography>
                                        {product.name}
                                    </Typography>
                                <CardActions>
                                    <Typography>${product.price}</Typography>
                                    <Button>
                                    Add to cart
                                    </Button>
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
                    
                    
            </Layout1>
           
        </>
    )
}

export default store

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