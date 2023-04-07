import React from 'react';
import HomeComponent from '../components/Home/HomeComponent';
import WithAnimation from '../components/withAnimation';


const Home = () => {
    return <HomeComponent />
}

export default WithAnimation(Home);