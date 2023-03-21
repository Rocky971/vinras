import React from 'react';
import MeetSliders from '../../Home/MeetSliders/MeetSliders';
import OurBenifits from '../../Home/OurBenifits/OurBenifits';
import Testimonial from '../../Home/Testimonial/Testimonial';
import AboutUsCounter from '../AboutUsCounter/AboutUsCounter';
import AboutUsHero from '../AboutUsHero/AboutUsHero';
import AboutUsPage from '../AboutUsPage/AboutUsPage';

const AboutUs = () => {
    return (
        <div>
            <AboutUsHero />
            <AboutUsPage />
            <AboutUsCounter />
            <MeetSliders />
            <OurBenifits />
            <Testimonial/>
        </div>
    );
};

export default AboutUs;