import React from 'react';
import bg from '../../../assets/home/hobebg.png';
import bg1 from '../../../assets/ourArticle/01_Home (1).png';
import bg2 from '../../../assets/ourArticle/01_Home (2).png';
import bg3 from '../../../assets/ourArticle/01_Home (3).png';
import icon from '../../../assets/Home2/servicestwo/02_Home.png';
import icon1 from '../../../assets/Home2/servicestwo/02_Home (1).png';
import icon2 from '../../../assets/Home2/servicestwo/02_Home (2).png';
import first from '../../../assets/Home2/servicestwo/New folder/first.png';
import first1 from '../../../assets/Home2/servicestwo/New folder/first1.png';
import second from '../../../assets/Home2/servicestwo/New folder/second.png';
import second2 from '../../../assets/Home2/servicestwo/New folder/second2.png';
import third from '../../../assets/Home2/servicestwo/New folder/third.png';
import third2 from '../../../assets/Home2/servicestwo/New folder/third2.png';
import fourth from '../../../assets/Home2/servicestwo/New folder/fourth.png';
import fourth2 from '../../../assets/Home2/servicestwo/New folder/fourth2.png';
const ServicesOurTwo = () => {
    return (
        <div className='container'>
            <div className="mt-20 mb-10 text-center">
                <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i>Our Services<i className="fa-solid fa-minus"></i></p>
                <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Our Popular Services</h1>
            </div>
            <div className="card">
                <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 mt-10 mb-16 mx-10">
                    {/* ___first___card___ */}
                    <div className="shadow_primary rounded-lg bg-white">
                        {/* ___image___ */}
                        <div className="">
                            <img src={bg1} className="w-full" alt="" />
                        </div>
                        {/* ___text___ */}
                        <div className="px-5">
                            <div className="flex items-center justify-between gap-8 text-black text-[16px] font-medium  py-4">
                                <p>Creative, Desing, Business</p>
                                <div className="bg-primary py-5 px-5 rounded-t-xl grid text-center mt-[-70px] text-white">
                                    <i class="fa-solid fa-right-from-bracket text-[25px]"></i>
                                </div>
                            </div>
                            {/* ___heading___comment___ */}
                            <div className="text-black flex items-center">
                                <div className="">
                                    <h5 className='text-[24px] font-bold'>Product Engineering</h5>
                                    <p className='text-[19px] pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                </div>
                                <img src={icon} className="" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* ___second___card___ */}
                    <div className="shadow_primary rounded-lg bg-white">
                        {/* ___image___ */}
                        <div className="">
                            <img src={bg2} className="w-full" alt="" />
                        </div>
                        {/* ___text___ */}
                        <div className="px-5">
                            <div className="flex items-center justify-between gap-8 text-black text-[16px] font-medium  py-4">
                                <p>Creative, Desing, Business</p>
                                <div className="bg-primary py-5 px-5 rounded-t-xl grid text-center mt-[-70px] text-white">
                                    <i class="fa-solid fa-right-from-bracket text-[25px]"></i>
                                </div>
                            </div>
                            {/* ___heading___comment___ */}
                            <div className="text-black flex items-center">
                                <div className="">
                                    <h5 className='text-[24px] font-bold'>Marketing Solution</h5>
                                    <p className='text-[19px] pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                </div>
                                <img src={icon1} className="" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* ___third___card___ */}
                    <div className="shadow_primary rounded-lg bg-white">
                        {/* ___image___ */}
                        <div className="">
                            <img src={bg3} className="w-full" alt="" />
                        </div>
                        {/* ___text___ */}
                        <div className="px-5">
                            <div className="flex items-center justify-between gap-8 text-black text-[16px] font-medium  py-4">
                                <p>Creative, Desing, Business</p>
                                <div className="bg-primary py-5 px-5 rounded-t-xl grid text-center mt-[-70px] text-white">
                                    <i class="fa-solid fa-right-from-bracket text-[25px]"></i>
                                </div>
                            </div>
                            {/* ___heading___comment___ */}
                            <div className="text-black flex items-center">
                                <div className="">
                                    <h5 className='text-[24px] font-bold'>Web Devlopment</h5>
                                    <p className='text-[19px] pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                </div>
                                <img src={icon2} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesOurTwo;