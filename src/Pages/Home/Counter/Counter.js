import React from 'react';
import count1 from '../../../assets/counter/01_Home (1).png';
import count2 from '../../../assets/counter/01_Home (2).png';
import count3 from '../../../assets/counter/01_Home (3).png';
import count4 from '../../../assets/counter/01_Home (4).png';
import count5 from '../../../assets/counter/01_Home (5).png';

const Counter = () => {
    return (
        <div className='bg-primary my-28'>
            <div className="container">
                <div className="grid py-24 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                    {/* __first__card__ */}
                    <div className="bg-white flex flex-col items-center pb-6 rounded-md">
                        <div className="mt-10 mb-3">
                            <img src={count1} alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-[22px] text-black font-semibold mb-3'>Complete Project</p>
                            <h4 className='text-[38px] font-semibold text-primary'>5684</h4>
                        </div>
                    </div>
                    {/* __second__card__ */}
                    <div className="bg-white flex flex-col items-center pb-6 rounded-md">
                        <div className="mt-10 mb-3">
                            <img src={count2} alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-[22px] text-black font-semibold mb-3'>Total Download</p>
                            <h4 className='text-[38px] font-semibold text-primary'>5593</h4>
                        </div>
                    </div>
                    {/* __third__card__ */}
                    <div className="bg-white flex flex-col items-center pb-6 rounded-md">
                        <div className="mt-10 mb-3">
                            <img src={count3} alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-[22px] text-black font-semibold mb-3'>Positive Review</p>
                            <h4 className='text-[38px] font-semibold text-primary'>5487</h4>
                        </div>
                    </div>
                    {/* __fourth__card__ */}
                    <div className="bg-white flex flex-col items-center pb-6 rounded-md">
                        <div className="mt-10 mb-3">
                            <img src={count4} alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-[22px] text-black font-semibold mb-3'>Team Members</p>
                            <h4 className='text-[38px] font-semibold text-primary'>2474</h4>
                        </div>
                    </div>
                    {/* __five__card__ */}
                    <div className="bg-white flex flex-col items-center pb-6 rounded-md">
                        <div className="mt-10 mb-3">
                            <img src={count5} alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-[22px] text-black font-semibold mb-3'>Cup of Coffee</p>
                            <h4 className='text-[38px] font-semibold text-primary'>6497</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Counter;