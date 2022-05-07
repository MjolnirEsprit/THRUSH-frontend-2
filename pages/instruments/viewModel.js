import React, { useState } from "react";
import { BaseLayout } from "../../components/common/layout";
<<<<<<< Updated upstream
import {
    Button, Fab,
    Card, CardActionArea,
    CardActions, CardContent,
    CardMedia, Grid, Typography
} from '@material-ui/core';
import "@google/model-viewer";

const style={
    dispo: `flex flex-row inline-block pt-5 justify-center items-center`,
    itemm: `flex flex-row inline-block`
}

export default function ViewModel() {

  
                return (
                    <div className={style.dispo}>
                        <model-viewer className={style.itemm} style={{height: 250, width: 500}} camera-controls shadow-intensity="1"  src='/guitar.glb'></model-viewer>
                        <model-viewer className={style.itemm} style={{height: 250, width: 500}} camera-controls shadow-intensity="1"  src='/guitar2.glb'></model-viewer>
                        <model-viewer className={style.itemm} style={{height: 250, width: 500}} camera-controls shadow-intensity="1"  src='/xiaotiqin.glb'></model-viewer>
                    </div>)

    



}
=======
import { Card } from '@material-ui/core';
import "@google/model-viewer";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const style = {
    dispo: `flex w-full inline-block mt-5 justify-center items-center`,
    itemm: `flex inline-block`
}

const itemData = [
    {
        mod: '/xiaotiqin.glb',
        title: 'Camera',
    },
    {
        mod: '/guitar.glb',
        title: 'Breakfast',
    },
    {
        mod: '/guitar2.glb',
        title: 'Burger',
    },
    {
        mod: '/gangqin.glb',
        title: 'Burger',
    },
    {
        mod: '/trumpet.gltf',
        title: 'Camera',
    }
];

export default function ViewModel() {

    return (
        <ImageList className={style.dispo} sx={{ height: 800 }} cols={3} rowHeight={164}>
            {itemData.map((item) => {
                return (
                    <Card>
                        
                            <ImageListItem style={{ height: 320, width: 400 }} key={item.title}>
                                <model-viewer className={style.itemm} style={{ height: 320, width: 400 }} camera-controls shadow-intensity="1" src={item.mod}></model-viewer>
                            </ImageListItem>
                        
                    </Card>
                )
            })}
        </ImageList>
    );
}


>>>>>>> Stashed changes

ViewModel.Layout = BaseLayout;