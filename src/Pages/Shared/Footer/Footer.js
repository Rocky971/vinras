import React from 'react';
import logo from '../../../assets/navbar/logo.png';

const Footer = () => {
    return (
        <div className=" bg-[#1F2131]">
            <div className="container">
                {/* ___footer__and___social__icon__ */}
                <div className="flex flex-wrap justify-between items-center py-20">
                    {/* __logo__ */}
                    <div className="flex bg-primary py-3 gap-2 font-bold text-white px-7">
                        <img src={logo} alt="" />
                        <h6>Vinras</h6>
                    </div>
                    {/* __icons__ */}
                    <div className="cursor-pointer">
                        <div className="flex items-center text-black gap-3">
                            <i className="fa-solid fa-plus p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            <i className="fa-brands fa-instagram p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            <i className="fa-brands fa-twitter p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            <i className="fa-brands fa-facebook-f p-2 px-[15px] bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                        </div>
                    </div>
                </div>
                {/* content____________ */}
                <footer className=" text-[#fff] pb-[74px] justify-between flex gap-[3.5rem] flex-wrap">
                    {/* explore______ */}
                    <div className='flex flex-col'>
                        <span className="text-[20px] font-semibold mb-[24px]">EXPLORE</span>
                        <a className="text-[16px] font-normal mb-4">About</a>
                        <a className="text-[16px] font-normal mb-4">Our Team</a>
                        <a className="text-[16px] font-normal mb-4">Services</a>
                        <a className="text-[16px] font-normal mb-4">Gallery</a>
                        <a className="text-[16px] font-normal mb-4">News & Blog</a>
                    </div>
                    {/* Resources_______ */}
                    <div className='flex flex-col'>
                        <span className="text-[20px] font-semibold mb-[24px]">RESOURCES</span>
                        <a className="text-[16px] font-normal mb-4">Become Partner</a>
                        <a className="text-[16px] font-normal mb-4">Our Customer</a>
                        <a className="text-[16px] font-normal mb-4">Working Process</a>
                        <a className="text-[16px] font-normal mb-4">Mange</a>
                        <a className="text-[16px] font-normal mb-4">Managed Website</a>
                    </div>
                    {/* You've question______ */}
                    <div className='flex flex-col'>
                        <span className="text-[20px] font-semibold mb-[24px]">YOU'VE QUESTION?</span>
                        <div className="flex flex-col gap-2 mb-7">
                            <span className="text-[18px] font-semibold text-primary">Get a Quote</span>
                            <a className="text-[16px] font-normal">+00801737-546168</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[18px] font-semibold text-primary">Get a Quote</span>
                            <a className="text-[16px] font-normal">info@envato.com</a>
                        </div>
                    </div>
                    {/* logo_______ */}
                    <div className='lg:w-[30%]'>
                        <p className='mb-[38px] text-[16px] font-normal'>Ziro is a Freelance Landing Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        <div className="">
                            <form className='relative'>
                                <div className="">
                                    <input type="email" placeholder='Email Address' className='w-full py-3 pl-4' />
                                </div>
                                <div className="absolute top-0 bg-primary cursor-pointer text-white py-3 px-4 right-0">
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </div>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
            <div className=" border-t">
                <div className="container py-[26px] flex justify-between text-[16px] text-[#fff] flex-wrap">
                    <p>Copyright © 2022 All Rights Reserved</p>
                    <p>Terms & Condition | Privacy | Support</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;