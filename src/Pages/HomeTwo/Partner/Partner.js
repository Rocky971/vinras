import React from 'react';
import partner from '../../../assets/Home2/Partner/02_Home.png';
import partner1 from '../../../assets/Home2/Partner/02_Home (3).png';
import partner2 from '../../../assets/Home2/Partner/02_Home (4).png';
import partner3 from '../../../assets/Home2/Partner/02_Home (5).png';
import partner4 from '../../../assets/Home2/Partner/02_Home (6).png';

const Partner = () => {
    return (
        <div className='pb-32 pt-10'>
            <div className="flex justify-around flex-wrap">
                <img src={partner} alt="" />
                <img src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
            </div>
        </div>
    );
};

export default Partner;