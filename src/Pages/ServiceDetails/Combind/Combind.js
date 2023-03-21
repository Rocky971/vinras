import React from 'react';
import ServiceDetailsContent from '../ServiceDetailsContent/ServiceDetailsContent';
import SideBar from '../SideBar/SideBar';

const Combind = () => {
    return (
        <div className='flex justify-center container gap-5 flex-wrap'>
            <div className="w-[60%]">
                <ServiceDetailsContent />
            </div>
            <SideBar />
        </div>
    );
};

export default Combind;