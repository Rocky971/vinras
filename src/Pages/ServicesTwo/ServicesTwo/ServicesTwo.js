import React from 'react';
import ClientChose from '../../HomeTwo/ClientChose/ClientChose';
import CompnaySkills from '../../HomeTwo/CompanySkills/CompnaySkills';
import HomeTwoService from '../../HomeTwo/HomeTwoService/HomeTwoService';
import HTestimonial from '../../HomeTwo/HTestimonial/HTestimonial';
import WeareCommited from '../../HomeTwo/WeareCommited/WeareCommited';
import ServicesHero from '../../Services/ServicesHero/ServicesHero';
import ServicesOurTwo from '../ServicesOurTwo/ServicesOurTwo';

const ServicesTwo = () => {
    return (
        <div>
            <ServicesHero />
            <ServicesOurTwo />
            <WeareCommited />
            <CompnaySkills />
            <ClientChose />
            <HTestimonial />
        </div>
    );
};

export default ServicesTwo;