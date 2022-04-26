import {Typography} from '@mui/material';
import VideoPlayer from './VideoPlayer';
import Notifications from './Notifications';
import Options from './Options';


const style = {
    wrapper: `flex flex-col items-center w-full mb-24`
}


const KaraokeApp = () => {
   
    return (
        <div className={style.wrapper}>
            <Typography variant="h2" align='center' style={{marginTop:100}}></Typography>
            <VideoPlayer/>
            <Options>
                <Notifications/>
            </Options>
        </div>
    )
}
export default KaraokeApp;
