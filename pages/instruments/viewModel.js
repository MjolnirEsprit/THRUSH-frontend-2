import React, { useState } from "react";
import { BaseLayout } from "../../components/common/layout";
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

ViewModel.Layout = BaseLayout;