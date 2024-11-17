import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkFlow from './components/WorkFlow'
import PricingSection from './components/PricingSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FeatureSection from './components/Featuresection'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <PricingSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App