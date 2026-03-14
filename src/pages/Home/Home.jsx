import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from "../Books/Books";
import { useRouteLoaderData } from 'react-router-dom';
const Home = () => {
    const data = useRouteLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;