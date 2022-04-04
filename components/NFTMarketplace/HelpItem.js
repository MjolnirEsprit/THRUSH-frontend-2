import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const style={
  wrapper: `flex justify-center items-center flex-col bg-gradient-to-r from-[#e65c00] via-[#FF512F] to-[#F09819]`
}

const Item = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const HelpItem = () => {
    return (
      
      <div className={style.wrapper}>
      <Box mt={12} sx={{ flexGrow: 1 }}>
        <Grid container direction="row" alignItems="center" justify="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item  xs={3} ml={12} mr={8}>
              <Item style={{backgroundColor:"#FFFFFF"}}>
                <Typography variant="overline" style={{fontSize: 22, fontWeight: 'bold'}} gutterBottom component="div">
                    Create
                </Typography>
                <Typography variant="body1" gutterBottom style={{fontSize: 18, color:"#000000"}}>
                Learn how to make your first NFT + NFT collections to start selling and sharing
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={3} mr={8}>
            <Item style={{backgroundColor:"#FFFFFF"}}>
                <Typography variant="overline" style={{fontSize: 22, fontWeight: 'bold'}} gutterBottom component="div">
                    Sell
                </Typography>
                <Typography variant="body1" gutterBottom style={{fontSize: 18, color:"#000000"}}> 
                Learn how list your NFTs for sale and understand the different ways to list your NFTs
                </Typography>
              </Item>
            </Grid>


            <Grid item xs={3}>
            <Item style={{backgroundColor:"#FFFFFF"}}>
                <Typography variant="overline" style={{fontSize: 22, fontWeight: 'bold'}} gutterBottom component="div">
                Buy
                </Typography>
                <Typography variant="body1" gutterBottom style={{fontSize: 18, color:"#000000"}}>
                Learn how to purchase your first NFT and understand transactions and gas fees
                </Typography>
              </Item>
            </Grid>


            <Grid item xs={3} ml={12} mr={6} display='flex' alignItems="center" justify="center">
            <Item style={{backgroundColor:"#FFFFFF"}}>
                <Typography variant="overline" style={{fontSize: 22, fontWeight: 'bold'}} gutterBottom component="div">
                FAQ
                </Typography>
                <Typography variant="body1" gutterBottom style={{fontSize: 18, color:"#000000"}}>
                    Learn answers to frequently asked questions
                </Typography>
              </Item>
            </Grid>
            
            <Grid item xs={3} mr={8}>
            <Item style={{backgroundColor:"#FFFFFF"}}>
                <Typography variant="overline" style={{fontSize: 22, fontWeight: 'bold'}} gutterBottom component="div">
                    User Safety
                </Typography>
                <Typography variant="body1" gutterBottom style={{color:"#000000"}}>
                    Learn more about anti-fraud and user safety processes on
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={3} mb={7.7}>
            <Item style={{backgroundColor:"#FFFFFF"}}>
                <Typography variant="overline" style={{fontSize: 22, fontWeight: 'bold'}} gutterBottom component="div">
                Buy
                </Typography>
                <Typography variant="body1" gutterBottom style={{fontSize: 18, color:"#000000"}}>
                Learn how to purchase your first NFT and 
                </Typography>
              </Item>
            </Grid>
            
      
      </Grid>
      </Box>

      <div class="card w-96 glass">
  <figure>
    <h3>Blabla</h3>
  </figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
      </div>
    );
  }
  export default HelpItem;