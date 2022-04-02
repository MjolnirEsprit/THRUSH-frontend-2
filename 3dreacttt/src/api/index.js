import axios from 'axios';

const url= 'http://localhost:3000/posts';//returns the posts we have in DB
export const fetchReviews = () => axios.get(url);
export const createReview = (newReview) => axios.post(url, newReview);

