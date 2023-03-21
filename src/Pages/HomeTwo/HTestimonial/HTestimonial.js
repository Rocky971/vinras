import React from 'react';
import './HTestimonial.css';

const person1 = "https://i.ibb.co/HT0hVFp/02-Home-14.png";

const HTestimonial = () => {
    return (
        <div>
            <div className="container">
                <div className="mt-20 mb-10 text-center">
                    <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i> Testimonial <i className="fa-solid fa-minus"></i></p>
                    <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>What Saying Our Client</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* __card__ */}
                    <div className="border px-6 my-10 relative">
                        {/* ___start___ */}
                        <div className="flex gap-1 mt-7 mb-3">
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-regular fa-star text-primary"></i>
                        </div>
                        {/* ___text__ */}
                        <p className='text-[16px] font-normal text-black mb-6'>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non
                        </p>
                        {/* ___image___and__name___ */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="">
                                <img src={person1} alt="" />
                            </div>
                            <div className="">
                                <h6 className='text-[20px] font-bold text-black'>Jhon Smith</h6>
                                <p className='text-[16px] font-normal text-black'>Founder, Seo</p>
                            </div>
                        </div>
                        {/* <div className="borderTwo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,101.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                        </div> */}
                    </div>
                    {/* __card__ */}
                    <div className="border px-6 my-10 relative">
                        {/* ___start___ */}
                        <div className="flex gap-1 mt-7 mb-3">
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-regular fa-star text-primary"></i>
                        </div>
                        {/* ___text__ */}
                        <p className='text-[16px] font-normal text-black mb-6'>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non
                        </p>
                        {/* ___image___and__name___ */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="">
                                <img src={person1} alt="" />
                            </div>
                            <div className="">
                                <h6 className='text-[20px] font-bold text-black'>Jhon Smith</h6>
                                <p className='text-[16px] font-normal text-black'>Founder, Seo</p>
                            </div>
                        </div>
                        {/* <div className="borderTwo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,101.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                        </div> */}
                    </div>
                    {/* __card__ */}
                    <div className="border px-6 my-10 relative">
                        {/* ___start___ */}
                        <div className="flex gap-1 mt-7 mb-3">
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-solid fa-star text-primary"></i>
                            <i class="fa-regular fa-star text-primary"></i>
                        </div>
                        {/* ___text__ */}
                        <p className='text-[16px] font-normal text-black mb-6'>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non
                        </p>
                        {/* ___image___and__name___ */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="">
                                <img src={person1} alt="" />
                            </div>
                            <div className="">
                                <h6 className='text-[20px] font-bold text-black'>Jhon Smith</h6>
                                <p className='text-[16px] font-normal text-black'>Founder, Seo</p>
                            </div>
                        </div>
                        {/* <div className="borderTwo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,101.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HTestimonial;