import React from 'react';
import homeHero from '../../../assets/home/01_Home.png';
import homebg from '../../../assets/home/hobebg.png';
const Herohome = () => {
    return (
        <div className=""
            style={{
                backgroundImage: `url(${homebg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className=''>
            {/* grid grid-cols-1 lg:grid-cols-2 items-center */}
                <div className="flex lg:flex-row flex-col-reverse items-center lg:ml-[150px]">
                    {/* __text__section___ */}
                    <div className="text-black">
                        <h5 className='text-[30px] font-medium mb-5'>Welcome To Digital Startup Agency</h5>
                        <h1 className='text-[80px] leading-[85px] font-semibold mb-3'>Digital Startup Agency</h1>
                        <h5 className='text-[30px] font-medium'>Our Best Business Technology Conuslting</h5>
                        <button className='border py-3 mt-7 px-5 rounded-full bg-primary text-white'>Free Consultation <i className="fa-solid fa-angles-right"></i></button>
                    </div>
                    {/* __hero__image__ */}
                    <div className="">
                        <img src={homeHero} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Herohome;