import React from 'react'

import AboutSection from '../Screens/AboutSection';
import FAQSection from '../Screens/FAQSection';
import HeroSection from "../Screens/HeroSection";
import StatisticSection from '../Screens/StatisticSection';
import CampSection from '../Screens/CampSection';
import ProcesSection from '../Screens/ProcesSection';
import EligibilitySection from '../Screens/EligibilitySection';
import TestimonialSection from '../Screens/TestimonialSection';
import CTASection from '../Screens/CTASection';



const home = () => {
  return (
    <div >
        <HeroSection/>
        <StatisticSection/>
        <AboutSection/>
        <CampSection/>
        <ProcesSection/>
        <EligibilitySection/>
        <TestimonialSection/>
        <FAQSection/>
        <CTASection/>
    </div>
  )
}

export default home
