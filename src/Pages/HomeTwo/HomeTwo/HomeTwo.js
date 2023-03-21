import React from 'react';
import BuildYourBusiness from '../BuildYourBusiness/BuildYourBusiness';
import ClientChose from '../ClientChose/ClientChose';
import CompnaySkills from '../CompanySkills/CompnaySkills';
import HomeTwoHero from '../HomeTwoHero/HomeTwoHero';
import HomeTwoService from '../HomeTwoService/HomeTwoService';
import HTestimonial from '../HTestimonial/HTestimonial';
import OurArticles from '../OurArticles/OurArticles';
import OurCase from '../OurCase/OurCase';
import OurTeam from '../OurTeam/OurTeam';
import Partner from '../Partner/Partner';
import WeareCommited from '../WeareCommited/WeareCommited';

const HomeTwo = () => {
    return (
        <div>
            <HomeTwoHero />
            <BuildYourBusiness />
            <HomeTwoService />
            <OurCase />
            <Partner />
            <CompnaySkills />
            <WeareCommited />
            <OurTeam />
            <ClientChose />
            <HTestimonial />
            <OurArticles/>
        </div>
    );
};

export default HomeTwo;