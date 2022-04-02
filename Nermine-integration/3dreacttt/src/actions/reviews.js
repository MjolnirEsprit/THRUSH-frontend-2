import { display } from '@mui/system';
import * as api from '../api';

// Action creators: functions that return actions
export const getReviews = () => async (dispatch) => {
    //fetch all data from api
    try {
        //immediately fetch all reviews
        const { data } = await api.fetchReviews();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }//=> dispatching the action in react redux
    
    /*const action =  {type:'FETCH _ALL', payload: []} //payload: data ou on stocke les reviews
    dispatch(action); //thunk does it*/
};

export const createReview = (review) => async (dispatch) => {
    try{
        //make api request server to backend
        const {data} = await api.createReview(review);
        dispatch({type: 'CREATE', payload: data});
    } catch(error){
        console.log(error);
    }
}