import React from 'react'

import AboutSection from '../AboutSection';
import FAQSection from '../FAQSection';
import HeroSection from '../HeroSection';
import StatisticSection from '../StatisticSection';
import CampSection from '../CampSection';
import ProcesSection from '../ProcesSection';
import EligibilitySection from '../EligibilitySection';
import TestimonialSection from '../TestimonialSection';
import CTASection from '../CTASection';



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
