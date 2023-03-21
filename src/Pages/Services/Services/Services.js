import React from 'react';
import Counter from '../../Home/Counter/Counter';
import HowCanHelp from '../../Home/HowCanHelp/HowCanHelp';
import LiveOurBusiness from '../../Home/LiveOurBusiness/LiveOurBusiness';
import Testimonial from '../../Home/Testimonial/Testimonial';
import ServicesHero from '../ServicesHero/ServicesHero';
import ServicesOur from '../ServicesOur/ServicesOur';

const Services = () => {
    return (
        <div>
            <ServicesHero />
            <ServicesOur />
            <LiveOurBusiness />
            <HowCanHelp />
            <Counter />
            <Testimonial />
        </div>
    );
};

export default Services;