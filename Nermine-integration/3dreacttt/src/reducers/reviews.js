export default (reviews = [], action) => { //our state=posts cuz we in posts reducer
   switch(action.type){
       case 'FETCH_ALL':
           return action.payload;
       case 'CREATE':
           return [...reviews, action.payload]; //new review is stored in action.payload
       default:
           return reviews;
    }
}