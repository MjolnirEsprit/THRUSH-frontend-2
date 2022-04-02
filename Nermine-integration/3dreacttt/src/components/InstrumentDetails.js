import { ShowInstrument } from './ShowInstrument';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import ZoomImage from './ZoomImage';
import Cart from './Cart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function InstrumentDetails() {

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (

    <div>

      <Box pt={5} mr={20} ml={20} mb={5}>
        <Grid container spacing={10}>
          <Grid item xs={6} md={8}>
            <Box sx={{ boxShadow: 2 }} style={{ width: 600, height: 372 }}> 
            <ZoomImage /> 
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>

            <Item>
              <Typography m={1} gutterBottom variant="h5" component="div" style={{ fontStyle: 'oblique', fontWeight: 600 }}>
                Classical Guitar
              </Typography>
              <Typography variant="body2" color="text.primary">$350</Typography>
              <CardContent>
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body1" color="text.secondary" style={{ fontStyle: 'oblique'}}>Rating: </Typography>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5} 
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </Box>
                <Typography variant="body1" color="text.secondary" mt={3} style={{ fontStyle: 'oblique'}}>About this instrument: </Typography>
                <Typography variant="body2" color="text.secondary" > Beige and blue classical guitar. Model #824 suitable for beginners </Typography>
              </CardContent>
              <Stack m={1} pt={3} mb={4} direction="row" spacing={2}>
                <Button style={{ backgroundColor: "#fb8a25" }} variant="contained">
                  <IconButton style={{ color: "white" }} aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                  Buy now
                </Button>
                <Button style={{ backgroundColor: "#fb8a25" }} variant="contained">
                  <IconButton style={{ color: "white" }} aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                  Add to cart
                </Button>
              </Stack>
            </Item>

          </Grid>
        </Grid>
      </Box>
    </div>

  )
}

export default InstrumentDetails;