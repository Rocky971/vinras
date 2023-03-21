import React from 'react';
import bg from '../../../assets/uiux/uiHome.png';
import sideimage from '../../../assets/Home2/about/02_Home.png';
import sideimage2 from '../../../assets/Home2/about/02_Home (1).png';
import sideimage3 from '../../../assets/Home2/about/02_Home2.png';

const AboutUsTwoBuild = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container grid grid-cols-1 lg:gird-cols-2 xl:grid-cols-2 items-center gap-14 mt-20 mb-[200px]">
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
    );
};

export default AboutUsTwoBuild;