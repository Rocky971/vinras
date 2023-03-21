import React from 'react';
const slide = "https://i.ibb.co/vdVvhJY/02-Home.png"
const slide2 = "https://i.ibb.co/vdVvhJY/02-Home.png"

const OurCase = () => {


    return (
        <div className='z-0 pb-32'>
            <div className="container">
                {/* heading_____ */}
                <div className="mt-32 mb-10">
                    <p className='text-[23px] text-primary font-bold mb-2'>Our Case<i className="fa-solid fa-minus"></i></p>
                    <div className="flex justify-between items-center flex-wrap">
                        <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Amazing Work Showcase</h1>
                        <div className="">
                            <button className='bg-primary px-[40px] py-[15px] rounded-full text-[18px] font-semibold text-white'>All Showcase <i className="fa-solid fa-angles-right ml-2"></i></button>
                        </div>
                    </div>
                </div>
                {/* heading___end___ bn */}
            </div>
            {/* ____slider____ */}
            <div className='relative'>
                <div className="container flex flex-col justify-center">
                    <img className='' src={slide} alt="" />
                </div>
                <div className="absolute left-0 right-0 -bottom-16">
                    <div className="flex gap-7 bg-white items-center shadow_primary px-5 py-10 w-[25%] justify-center mx-auto -mt-4">
                        <div className="">
                            <h6 className='text-black font-bold text-[30px]'>Businesses Growth</h6>
                            <p className='text-black text-[18px]'>Forstry Innovation</p>
                        </div>
                        <i class="fa-solid fa-angles-right px-[22px] py-[20px] text-white rounded-full bg-primary"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCase;