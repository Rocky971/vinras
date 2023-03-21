import React from 'react';
import AboutUsHero from '../../AboutUs/AboutUsHero/AboutUsHero';
import CompnaySkills from '../../HomeTwo/CompanySkills/CompnaySkills';
import OurTeam from '../../HomeTwo/OurTeam/OurTeam';
import WeareCommited from '../../HomeTwo/WeareCommited/WeareCommited';
import AboutUsTwoBuild from '../AboutUsTwoBuild/AboutUsTwoBuild';

const AboutUsTwo = () => {
    return (
        <div>
            <AboutUsHero />
            <AboutUsTwoBuild />
            <CompnaySkills />
            <WeareCommited />
            <OurTeam />
        </div>
    );
};

export default AboutUsTwo;