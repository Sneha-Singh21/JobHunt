import React from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './shared/HeroSection.jsx';
import CategoryCarousel from './shared/CategoryCarousel.jsx';
import LatestJobs from './shared/LatestJobs.jsx';
import Footer from './shared/Footer.jsx';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home;