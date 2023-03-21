import React from 'react';
import about from '../../../assets/uiux/about.png';
import uihome from '../../../assets/uiux/uiHome.png';


const AboutUsPage = () => {
    return (
        <div className=""
            style={{
                backgroundImage: `url(${uihome})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='container pb-20'>
                <div className="mt-24">
                    <div className="grid grid-cols-1 lg:gird-cols-2 xl:grid-cols-2 items-center gap-14">
                        {/* __image____ */}
                        <div className="">
                            <img src={about} alt="" />
                        </div>
                        {/* ___text____ */}
                        <div className="text-[#878c8f]">
                            <p className='text-[23px] text-primary font-bold'>About Us <i className="fa-solid fa-minus"></i></p>
                            <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>We are good at these areas to work</h1>
                            <p className='text-[16px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque cum corrupti ipsum fugiat voluptatum, rerum voluptatem iste accusamus repudiandae, dolor laborum, neque reprehenderit.</p>
                            <div className="mt-5">
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-check shadow_primary p-1 rounded-full"></i>
                                    <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <i className="fa-solid fa-check shadow_primary p-1 rounded-full"></i>
                                    <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;