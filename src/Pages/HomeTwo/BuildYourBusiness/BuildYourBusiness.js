import React from 'react';
import build1 from '../../../assets/Home2/buildBusiness/02_Home.png';
import build2 from '../../../assets/Home2/buildBusiness/02_Home (1).png';
import sideimage from '../../../assets/Home2/about/02_Home.png';
import sideimage2 from '../../../assets/Home2/about/02_Home (1).png';
import sideimage3 from '../../../assets/Home2/about/02_Home2.png';
import bg from '../../../assets/uiux/uiHome.png';

const BuildYourBusiness = () => {
    return (
        <div className=''
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container">
                {/* ___header__text___ */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex gap-4 py-7 items-center justify-between px-5 bg-[#FAFAFA] mt-[-60px] z-50 shadow_primary">
                        <div className="">
                            <img src={build1} alt="" />
                        </div>
                        <div className="text-black text-[28px] font-bold">
                            <h6>Build Your Business With <br /> Right Way</h6>
                        </div>
                        <i class="fa-solid fa-right-from-bracket p-4 bg-primary text-white"></i>
                    </div>
                    <div className="flex gap-4 py-7 items-center justify-between px-5 bg-[#FAFAFA] mt-[-60px] z-50 shadow_primary">
                        <div className="">
                            <img src={build2} alt="" />
                        </div>
                        <div className="text-black text-[28px] font-bold">
                            <h6>Build Your Business With <br /> Right Way</h6>
                        </div>
                        <i class="fa-solid fa-right-from-bracket p-4 bg-primary text-white"></i>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:gird-cols-2 xl:grid-cols-2 items-center gap-14 mt-20 mb-[200px]">
                    {/* __image____ */}
                    <div className="">
                        <img src={sideimage} alt="" />
                    </div>
                    {/* ___text____ */}
                    <div className="text-[#878c8f]">
                        <p className='text-[23px] text-primary font-bold'>About Us <i className="fa-solid fa-minus"></i></p>
                        <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>We are more than you <br /> imagine</h1>
                        <div className="flex lg:flex-row flex-col gap-5 py-5">
                            <div className="flex flex-col items-start">
                                <img src={sideimage2} alt="" />
                                <h6 className='font-semibold text-black py-1'>Our Mission</h6>
                                <p className='text-[16px] font-medium'>Multiply moved in also real after fish males best doesn give</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <img src={sideimage3} alt="" />
                                <h6 className='font-semibold text-black'>Brand Solution</h6>
                                <p className='text-[16px] font-medium'>Multiply moved in also real after fish males best doesn give</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='text-[16px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque cum corrupti ipsum fugiat voluptatum, rerum voluptatem iste accusamus repudiandae, dolor laborum, neque reprehenderit.</p>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-10 py-5">
                            <div className="py-2 px-5 rounded flex items-center gap-2 border-dotted border-2 border-black">
                                <h6 className='font-bold text-black text-[50px]'>12+</h6>
                                <p className='text-[18px] text-black font-medium'>Years of <br /> Experience</p>
                            </div>
                            <div className="py-2 px-5 rounded flex items-center gap-2 border-dotted border-2 border-black">
                                <h6 className='font-bold text-black text-[50px]'>70k</h6>
                                <p className='text-[18px] text-black font-medium'>Clients <br /> Individual</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BuildYourBusiness;