import React from 'react'
import Home from './Home';
import InfoSection from './InfoSection';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TopBar from '../Components/TopBar';

const Main = () => {
  return (
    <div className='w-screen'>
        <TopBar />
        <div className='px-20'>
            <Header />
            <Home />
            <InfoSection />
        </div>
        <Footer />
    </div>
  )
}

export default Main;
