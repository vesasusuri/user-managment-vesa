import Users from '../../components/pages/Users/Users'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Banner/Banner'
import Footer from '../../components/shared/Footer/Footer'
const Home = () => {
    return (
        <div className='home-page'>
            <Navbar/>
            <Banner/>
            <Users/>
            <Footer/>
        </div>
    )
}

export default Home