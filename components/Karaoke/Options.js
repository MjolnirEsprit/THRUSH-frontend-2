import React from "react";
import { Button, Grid, Card, Typography, Container, Paper, TextField } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from "./SocketContext";
import { useContext } from "react";
import { useState } from "react";


const style = {
    root: `flex flex-column`,
    gridContainer: `w-full`,
    container: `w-110 mt-9 mr-0 p-0`,
    margin: `mt-5`,
    padding: `p-5`,
    paper: `pt-2.5 pr-5 border-2 border-black border-solid`
}


const Options = ({ children }) => {
    const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container className={style.container} sx={{ width : 800, height: 300}}>
            <Card elevation={10}>
                <form className={style.root} noValidate autoComplete="off">
                    <Grid container className={style.gridContainer}>
                        <Grid item xs={12} md={6} className={style.padding}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} color="warning" focused
                            onChange={(e) => setName(e.target.value)} fullWidth/>

                            {console.log(me)}
                            
                            <CopyToClipboard text={me} className={style.margin}>
                                <Button variant="contained" style={{
                                    borderRadius: 5,
                                    backgroundColor: "#fb8a25"
                                }} fullWidth 
                                startIcon={<Assignment fontSize="large"/>} 
                                >
                                   Copy your id
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className={style.padding}>
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField label="ID to Call" value={idToCall} focused color="warning"
                            onChange={(e) => setIdToCall(e.target.value)} fullWidth />

                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color="secondary"
                                    startIcon={<PhoneDisabled fontSize="large" />}
                                    fullWidth
                                    onClick={leaveCall}
                                    className={style.margin}
                                >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button variant="contained"
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "#fb8a25"
                                    }}
                                    startIcon={<Phone fontSize="large" />}
                                    fullWidth
                                    onClick={() => callUser(idToCall)}
                                    className={style.margin}
                                >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Card>
        </Container>
    )
}
export default Options;
