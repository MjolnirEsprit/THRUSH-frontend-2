import React from 'react';
import Navbar from '@components/_App/Navbar';
import Footer from '@components/_App/Footer';
import ProductCard from '@components/_App/Instruments/InstrumentCard'

function store() {
    return(
        <>

            <Navbar />

            <ProductCard />


        </>
    )
}

export default store