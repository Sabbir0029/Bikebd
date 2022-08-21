import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../Sharing/Footer/Footer';
import BikeVideo from '../BikeVideo/BikeVideo';
import Blog from '../Blog/Blog';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Icon from '../../Sharing/icon/Icon';

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <div>
            <Header/>
            <div data-aos="zoom-in-up">
            <Products/>
            </div>
            <div data-aos="flip-left">
            <BikeVideo/>
            </div>
            <div data-aos="fade-down">
            <Feature/>
            </div>
            <div data-aos="flip-right">
            <Blog />
            </div>
            <Icon/>
            <div data-aos="flip-left">
            <Footer/>
            </div>
        </div>
    );
};

export default Home;