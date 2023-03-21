import React from 'react';
import business from '../../../assets/lilveOurBusiness/01_Home (1).png';

const LiveOurBusiness = () => {
    return (
        <div>
            <div className="container">
                <div className="mt-20 mb-16 text-center">
                    <h1 className='text-[50px] text-black font-bold leading-[50px] mb-2'>Live Our Business Discussion</h1>
                    <p className='text-[25px] text-[#878c8f] font-bold'>Ot enim ad minim evniam, quis nostrud</p>
                </div>
                <div className="">
                    <img src={business} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LiveOurBusiness;