import React, {useState}  from 'react';
import ShowInstrument from './ShowInstrument';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Header from './Header';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function InstModel() {

    const [open, setOpen] = React.useState(false);
    const handleOpen3D = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div className='instModel'>
                <Header />
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="/guitar.png" alt='0' />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title" style={{fontWeight:'bold', fontSize: 16}}>
                            Classical Guitar model #125
                        </h2>
                      
                        <div class="card-actions justify-center inline-block"  
                        style={{marginBottom: 10}}
                        >
                            <button type="button" onClick={handleOpen3D}>
                                VIEW 3D
                            </button>
                            
                            <Link to="/instrument-details" style={{marginLeft:30}}>
                                VIEW DETAILS
                            </Link>
                        </div>
                    </div>
                </div>

                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box>
                        <ShowInstrument />
                    </Box>
                </StyledModal>
            </div>
        </>
    )

}