import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstModel from './components/InstModel';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getReviews} from './actions/reviews';//dunction imported bin {}
import useStyles from './styles';
import InstrumentDetails from './components/InstrumentDetails';

/* <Route path="*" : el page eli tlawej aaliha weli mehech l'une des ups does not exist
always LAST ROUTE*/

function App() {
  const dispatch = useDispatch();
  const classes= useStyles();

  useEffect(()=>{
    dispatch(getReviews());
  }, [dispatch])

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<InstModel />}></Route>
          <Route path="/instrument-details" element={<InstrumentDetails />}></Route>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App;












/*
 
  nj={
    instruments: [
      {
        "_id": "1",
        "title": "Classical Guitar",
        "description": "Beige and blue classical guitar model #824",
        "price": 350,
        "count": 1
      }
    ],
    index: 0
  };*/