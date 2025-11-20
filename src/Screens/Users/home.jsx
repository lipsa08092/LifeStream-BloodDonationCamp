import React from 'react'
import Hero from "../../Pages/Hero"
import Statistics from '../../Pages/Statistics';
import CampDetails from '../../Pages/CampDetails';
// import RegistrationForm from '../../Pages/RegistrationForm';
import Process from '../../Pages/Process';
import Eligibility from '../../Pages/Eligibility';
import Testimonials from '../../Pages/Testimonials';
import FAQ from '../../Pages/FAQ';
import CTA from '../../Pages/CTA';
import AboutSection from '../../Pages/About/AboutSection';



const home = () => {
  return (
    <div >
        <Hero/>
        <Statistics/>
        <AboutSection/>
        <CampDetails/>
        {/* <RegistrationForm/> */}
        <Process/>
        <Eligibility/>
        <Testimonials/>
        <FAQ/>
        <CTA/>
    </div>
  )
}

export default home
