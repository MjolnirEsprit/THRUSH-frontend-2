import React from "react";
import { Grid, Typography } from '@mui/material';
import { SocketContext } from "./SocketContext";
import { useContext } from "react";

const style = {
    video: `w-120`,       
    gridContainer: `flex justify-center flex-col`,
  
}


const VideoPlayer = () => {
    
    const { name, callAccepted, myVideo, userVideo, callEnded, 
        stream, call } = useContext(SocketContext);


    return (
        <Grid container className={style.gridContainer}>
       
            {stream &&
                (
                    <Grid item xs={12} md={4} style={{marginLeft:10}}>
                        <Typography variant="h5" style={{fontStyle:"italic", marginBottom:1}} gutterBottom>{name || 'Name'}</Typography>
                        <video
                        playsInline
                        muted 
                        ref={myVideo} 
                        autoPlay 
                        className={style.video} 
                      
                        />
                        
                    </Grid>
                )}

            {callAccepted && !callEnded && (
                   <Grid item xs={12} md={4} style={{marginLeft:20}}>
                        <Typography variant="h5" style={{fontStyle:"italic", marginBottom:1}} gutterBottom>{call.name || 'Callname'}</Typography>
                        <video playsInline ref={userVideo} autoPlay className={style.video} />
                    </Grid>
            )}

        </Grid>
    );
};
export default VideoPlayer;