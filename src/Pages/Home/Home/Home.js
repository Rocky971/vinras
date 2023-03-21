import React from 'react';
import Counter from '../Counter/Counter';
import Herohome from '../Herohome/Herohome';
import HowCanHelp from '../HowCanHelp/HowCanHelp';
import LiveOurBusiness from '../LiveOurBusiness/LiveOurBusiness';
import Map from '../Map/Map';
import MeetSliders from '../MeetSliders/MeetSliders';
import OurArticle from '../OurArticle/OurArticle';
import OurBenifits from '../OurBenifits/OurBenifits';
import OurServices from '../OurServices/OurServices';
import Testimonial from '../Testimonial/Testimonial';
import UiUxCard from '../UiUxCard/UiUxCard';

const Home = () => {
    return (
        <div>
            <Herohome />
            <UiUxCard />
            <OurServices />
            {/* slider */}
            <LiveOurBusiness />
            <HowCanHelp />
            <Counter />
            <MeetSliders />
            <OurBenifits />
            <Testimonial />
            <Map />
            <OurArticle />
        </div>
    );
};

export default Home;