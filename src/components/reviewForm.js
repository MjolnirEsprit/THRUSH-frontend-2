import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Reviews from '../actions/reviews';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createReview } from '../api';

const reviewForm = () => {
    const reviews = useSelector((state) => state.reviews);
    //const classes = useStyles();
    
    console.log(reviews);
    const [reviewData, setReviewData] = useState({
        creator: '', title:'', message: '', tags: '', selectedFile:''
    })

    const classes= useStyles();

    const dispatch= useDispatch();
    //dispatch it in handleSubmit, once user submits, nabaathou post request fiha el submitted data 
    const handleSubmit = () => {
        e.preventDefault(); //so the browser does not refresh
        dispatch(createReview(reviewData));   
    }
    
    const clear = () => {

    }

return (
    <div className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
            <Typography variant='Creating a first review'></Typography>
            <TextField 
            name="creator" variant="outlined" label="Creator" fullWidth value={reviewData.creator} 
            onChange={ (e)=> setReviewData({ ...reviewData, creator: e.target.value})}/>
            <TextField name="title" variant= 'outlined' label="title" fullWidth value={reviewData.title}
            onChange= {(e) => setReviewData({...reviewData, title: e.target.value})} />
            <TextField name="message" variant= 'outlined' label="message" fullWidth value={reviewData.message}
            onChange= {(e) => setReviewData({...reviewData, message: e.target.value})} />
            <TextField name="tags" variant= 'outlined' label="tags" fullWidth value={reviewData.tags}
            onChange= {(e) => setReviewData({...reviewData, tags: e.target.value})} />
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone ={({base64})=> setReviewData({...reviewData, selectedFile: base64})}
                />
                <Button className={classes.buttonsubmit} variant="contained"
                color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color= "secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </div>
        </form>
    </div>
)

}