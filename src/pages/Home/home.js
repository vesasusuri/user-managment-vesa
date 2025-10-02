import React from 'react'
import Users from '../../components/pages/Users/Users'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Banner/Banner'
const Home = () => {
    return (
        <div className='home-page'>
            <Navbar/>
            <Banner/>
            <Users/>
        </div>
    )
}

export default Home