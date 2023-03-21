import React from 'react';
import skills from '../../../assets/Home2/companyskills/02_Home.png';
import live1 from '../../../assets/Home2/companyskills/New folder/02_Home.png';
import live2 from '../../../assets/Home2/companyskills/New folder/02_Home (3).png';
import live3 from '../../../assets/Home2/companyskills/New folder/02_Home (4).png';

const CompnaySkills = () => {
    return (
        <div className='container pb-20'>
            {/* ___heading_progressBar__and__image__ */}
            <div className="grid justify-items-center gap-20 grid-cols-1 lg:grid-cols-2 bg-[#FAFAFA]">
                <div className="">
                    {/* ___heading______ */}
                    <div className="mt-16 mb-9">
                        <p className='text-[23px] text-primary font-bold mb-2'>Company Skills <i className="fa-solid fa-minus"></i></p>
                        <div className="flex justify-between items-center flex-wrap">
                            <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Exclusive Work Skill</h1>
                        </div>
                    </div>
                    {/* __progress__bar___ */}
                    <div className="">
                        <div className="">
                            <div className="flex justify-between text-black font-semibold text-[20px]">
                                <h6>Web design</h6>
                                <p>80%</p>
                            </div>
                            <div className='h-[15px] w-full bg-white rounded-lg'>
                                <div className='h-full w-[80%] bg-primary rounded-lg'></div>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="flex justify-between text-black font-semibold text-[20px]">
                                <h6>Web development</h6>
                                <p>48%</p>
                            </div>
                            <div className='h-[15px] w-full bg-white rounded-lg'>
                                <div className='h-full w-[48%] bg-primary rounded-lg'></div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between text-black font-semibold text-[20px]">
                                <h6>Web Application</h6>
                                <p>28%</p>
                            </div>
                            <div className='h-[15px] w-full bg-white rounded-lg'>
                                <div className='h-full w-[28%] bg-primary rounded-lg'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* __images___ */}
                <div className="">
                    <div className="mt-[-80px]">
                        <img src={skills} alt="" />
                    </div>
                </div>
            </div>
            {/* ___live___preview___ */}
            <div className="bg-[#FAFAFA] grid justify-items-center gap-10 grid-cols-1 lg:grid-cols-3 py-20">
                <div className="flex items-center gap-5">
                    <div className="bg-primary p-4">
                        <img src={live1} alt="" />
                    </div>
                    <div className="text-black">
                        <h6 className='text-[35px] font-bold flex'>20<span className='text-[25px]'>k</span></h6>
                        <p className='text-[20px] font-medium'>Completed Cases</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="bg-primary p-4">
                        <img src={live2} alt="" />
                    </div>
                    <div className="text-black">
                        <h6 className='text-[35px] font-bold flex'>10<span className='text-[25px]'>k</span></h6>
                        <p className='text-[20px] font-medium'>Satisfied Customers</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="bg-primary p-4">
                        <img src={live3} alt="" />
                    </div>
                    <div className="text-black">
                        <h6 className='text-[35px] font-bold flex'>18<span className='text-[25px]'>k</span></h6>
                        <p className='text-[20px] font-medium'>Expert Consultant</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompnaySkills;