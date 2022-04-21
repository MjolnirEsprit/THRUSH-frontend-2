import React, { useContext } from "react";
import NextLink from "next/link";
import Image from "next/image";
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
  CardActions,
} from "@material-ui/core";
import { CartContext } from "../../Helper/Context";
import useStyles from "../../utils/styles";
import { BaseLayout } from "../../components/common/layout";

export default function CartScreen() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const classes = useStyles();

  const removeHandler = (instrumentToRemove) => {
    setCartItems(
      cartItems.filter((instrument)=> instrument !== instrumentToRemove)
    )
  }

  return (
    <>
      <Typography component="h1" variant="h1" color="primary">
        Shopping Cart
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/instruments/${item._id}`} passHref>
                          <Link>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/instruments/${item._id}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="secondary" onClick={()=> removeHandler(item)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal : ${cartItems.reduce((a, c) => a + c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary" fullWidth>
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

CartScreen.Layout = BaseLayout;
