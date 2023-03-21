import React from 'react';
import how1 from '../../../assets/howcanhelp/01_Home (1).png';
import how2 from '../../../assets/howcanhelp/01_Home (2).png';
import how3 from '../../../assets/howcanhelp/01_Home (3).png';

const HowCanHelp = () => {
    return (
        <div>
            <div className="container ">
                {/* heading___and__arrow__button */}
                <div className="mt-32 mb-10">
                    <p className='text-[23px] text-primary font-bold mb-2'>How Can Help You<i className="fa-solid fa-minus"></i></p>
                    <div className="flex justify-between items-center flex-wrap">
                        <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>We Make Bright Agency</h1>
                        <div className="flex gap-5">
                            <i className="fa-solid fa-angles-left p-3 shadow-md text-primary ease-in duration-500 hover:text-white cursor-pointer hover:bg-primary"></i>
                            <i className="fa-solid fa-angles-right p-3 shadow-md text-primary ease-in duration-500 hover:text-white cursor-pointer hover:bg-primary"></i>
                        </div>
                    </div>
                </div>
                {/* ____card_______ */}
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* ___first___card___ */}
                    <div className="bg-white text-black py-9 px-7 how_can_card-shadow">
                        <div className="">
                            <img src={how1} alt="" />
                        </div>
                        <div className="">
                            <h5 className='text-[24px] font-medium mt-5 mb-2'>Product Engineering</h5>
                            <p className='text-[18px] font-medium'>Lorem, ipsum dolor sit amet amet amet ipsum dolor</p>
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Logo & Branding</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Website & Design</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Mobile App Design</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Graphic/Print Design</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Video Production</p>
                        </div>
                    </div>
                    {/* ___first___card___ */}
                    <div className="bg-white text-black py-9 px-7 how_can_card-shadow">
                        <div className="">
                            <img src={how2} alt="" />
                        </div>
                        <div className="">
                            <h5 className='text-[24px] font-medium mt-5 mb-2'>Technology Services</h5>
                            <p className='text-[18px] font-medium'>Lorem, ipsum dolor sit amet amet amet ipsum dolor</p>
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Content Management System</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Ecommerce Website</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Theme Devlopment</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Digital Devlopment</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Mobile App Devlopment</p>
                        </div>
                    </div>
                    {/* ___first___card___ */}
                    <div className="bg-white text-black py-9 px-7 how_can_card-shadow">
                        <div className="">
                            <img src={how3} alt="" />
                        </div>
                        <div className="">
                            <h5 className='text-[24px] font-medium mt-5 mb-2'>Digital Solutions</h5>
                            <p className='text-[18px] font-medium'>Lorem, ipsum dolor sit amet amet amet ipsum dolor</p>
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Search Engine Optimization</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Pay-Per-Click</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Email Marketing</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Social Media Marketing</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <i className="fa-solid fa-angles-right text-primary cursor-pointer"></i>
                            <p className='text-[18px] font-medium'>Display Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowCanHelp;