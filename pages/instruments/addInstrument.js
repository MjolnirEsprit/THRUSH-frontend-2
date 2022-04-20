import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { TextField } from "@mui/material";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {BaseLayout} from "../../components/common/layout";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function AddInstrument() {
  const defaultValues = {
    name: "",
    image: "",
    price: 0,
    description: "",
    stock: 0,
  };
  const [files, setFiles] = useState([]);
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const instrument = formValues;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(instrument);
    axios.post("http://localhost:2000/api/v1/instruments", instrument);
    alert("Item added successfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              className="classes.wFieldset"
              id="price-input"
              name="price"
              label="Price"
              type="number"
              value={formValues.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              className="classes.wFieldset"
              id="stock-input"
              name="stock"
              label="Stock"
              type="number"
              value={formValues.stock}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              className="classes.wFieldset"
              id="description-input"
              name="description"
              label="Description"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
            />
            <div className="App">
              <FilePond
                files={files}
                name="image"
                onupdatefiles={setFiles}
                allowMultiple={false}
                //server="/api"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
AddInstrument.Layout = BaseLayout;
