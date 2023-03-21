import React from 'react';
import ProgressBar from './ProgressBar';
import benifits from '../../../assets/ourbenifits/01_Home (1).png';

const OurBenifits = () => {
    return (
        <div className='bg-[#F7F7F7] mt-40 pb-[80px]'>
            <div className="container">
                <div className="our_wrapper items-center grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    {/* heading___and__arrow__button */}
                    <div className="lg:mb-0 mb-[150px]">
                        <div className="mt-14 mb-10">
                            <p className='text-[23px] text-primary font-bold mb-2'>Our Benifits<i className="fa-solid fa-minus"></i></p>
                            <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Success Building Experience</h1>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-10 items-center">
                            {/* progress___bar */}
                            <div className="flex lg:flex-col items-center gap-5">
                                <div className="border-b py-4">
                                    <ProgressBar value={92} />
                                    <p className='text-black text-[18px] mt-1 font-bold text-center'>AfforDable Cost</p>
                                </div>
                                <div className="">
                                    <ProgressBar value={52} />
                                    <p className='text-black text-center mt-1 text-[18px] font-bold'>Quality of Work</p>
                                </div>
                            </div>
                            {/* __text____ */}
                            <div className="">
                                <div className="flex flex-col gap-5">
                                    <div tabIndex={0} className="collapse collapse-arrow shadow_primary border-base-300 cursor-pointer">
                                        <div className=" text-black flex justify-between items-center px-5 py-4 border-b border-slate-500">
                                            <p className='text-[18px] font-bold'>Think Ahead And Boost Your Business?</p>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-[18px] text-black mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam delectus aliquam aut, ab quasi. Optio veniam delectus aliquam aut, ab quasi</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="collapse collapse-arrow shadow_primary border-base-300 cursor-pointer">
                                        <div className=" text-black flex justify-between items-center px-5 py-4 border-b border-slate-500">
                                            <p className='text-[18px] font-bold'>Maecenas condimentum sollicitudin ligula.</p>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-[18px] text-black mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam delectus aliquam aut, ab quasi. Optio veniam delectus aliquam aut, ab quasi</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="collapse collapse-arrow shadow_primary border-base-300 cursor-pointer">
                                        <div className=" text-black flex justify-between items-center px-5 py-4 border-b border-slate-500">
                                            <p className='text-[18px] font-bold'>What The Best Advice For Growth?</p>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-[18px] text-black mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam delectus aliquam aut, ab quasi. Optio veniam delectus aliquam aut, ab quasi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ___image___ */}
                    <div className="mt-[-150px]">
                        <img src={benifits} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBenifits;