const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:2000/api/v1' // development api
    : 'http://localhost:2000/api/v1'; // production api

export {
    apiUrl
};