import React, {useContext} from "react";
import { Button } from '@mui/material';
import {SocketContext} from './SocketContext' ;


const Notifications = () => {
    const {answerCall, call, callAccepted} = useContext(SocketContext);
    return(
        <>
        {call.isReceivingCall && !callAccepted &&(
            <div style={{display: 'flex', justifyContent: 'center', marginTop:10, marginBottom: 20}}>
                <div style={{fontSize:20}}>{call.name} is calling: </div>
                <Button variant= "contained" color= "secondary" onClick={answerCall}>
                    Answer
                </Button>
            </div>
        )}
       </>
    );
};
export default Notifications;
