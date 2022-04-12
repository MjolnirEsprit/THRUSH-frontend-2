import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Fab,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import db from "@utils/db";
import Instrument from "@models/instrument";
import useStyles from "@utils/styles";
import {BaseLayout} from "@components/common/layout";
import NextLink from "next/link";
import Filterbar from "@components/Filterbar";
import axios from "axios";

export default function store(props) {
  const { instruments } = props;
  const [listInstruments, setlistInstruments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/api/v1/instruments").then((response) => {
      setlistInstruments(response.data);
    });
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
      <BaseLayout>
      <Box>
        <Grid container>
          <Grid item md={12}>
            <Card color="primary">
              <CardContent>
                <Box
                  color="primary"
                  sx={{
                    //display: "flex",
                    //flexDirection: "row",
                    //justifyContent:" space-between",
                    borderRadius: 1,
                  }}
                >
                  <Typography component="h1" variant="h1">
                    Thrush Store
                  </Typography>
                  <div>
                    <Typography>You can find selected items here</Typography>
                    <Button variant="contained" color="primary">
                      {" "}
                      Cart
                    </Button>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{
            color: "primary",
            display: "flex",
            flexDirection: "row",
            borderRadius: 3,
          }}
          className={classes.main}
        >
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
                          title={product.name}
                        />
                        <CardContent>
                          <Typography>{product.name}</Typography>
                          <CardActions>
                            <Typography>${product.price}</Typography>
                            <Button color="primary">Add to cart</Button>
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
      </BaseLayout>
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