import React, { useState } from "react";
import { Button, CardActions,Card, CardContent,Typography, Grid, CardMedia} from "@material-ui/core";
import { TextField } from "@mui/material";
import axios from "axios";
import NextLink from 'next/link';

import {BaseLayout} from "../../components/common/layout";

export default function AddInstrument() {

  const [file, setFile] = useState("");

  const [values, setValues] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
    stock: '',
    price: ''
})
const handleChange = name => event => {
  
  const value = name === 'image'
    ? event.target.value
    : event.target.value
  setValues({...values,  [name]: value })
}
const clickSubmit = (event) => {
  event.preventDefault();
  const instrument = values;
  console.log(instrument);
  axios.post("http://localhost:2000/api/v1/instruments", instrument);
    alert("Item added successfully");
  }

  const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }
    
  
  return (
    <div>
      <Card >
        <CardContent>
       
          <Grid container alignItems="center" justifyContent="center" direction="column">
          <Typography type="headline" component="h2">
            New Instrument
          </Typography><br/>
          <input accept="image/*" value={values.image.name} onChange={handleChange('image')} id="icon-button-file" type="file"/>
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="secondary" component="span">
              Upload Photo
            </Button>
            </label>
             <span>{values.image ? values.image.name : '' }</span><br/>
             <TextField id="name" label="Name" value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rows="5"
            value={values.description}
            onChange={handleChange('description')}
            margin="normal"
          /><br/>
          <TextField id="category" label="Category" value={values.category} onChange={handleChange('category')} margin="normal"/><br/>
          <TextField id="quantity" label="Quantity"value={values.stock} onChange={handleChange('stock')} type="number" margin="normal"/><br/>
          <TextField id="price" label="Price" value={values.price} onChange={handleChange('price')} type="number" margin="normal"/><br/>
          <div id="upload-box">
            <input type="file" onChange={handleUpload} />
            {file && <ImageThumb image={file} />}
            <button >verify</button>
          </div>
          </Grid>

        </CardContent>
        <CardActions>
          <Grid container alignItems="center" justifyContent="center" >
          <Button color="primary" variant="contained" onClick={clickSubmit} >Submit</Button>
          <NextLink href={`/instrument`} passHref><Button variant="contained">Cancel</Button></NextLink>
          </Grid >
        </CardActions>
      </Card>

    </div>
  );
}
AddInstrument.Layout = BaseLayout;