import React from 'react';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Testimonials from '../components/sections/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
};

export default Home;