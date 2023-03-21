import React from 'react';
const card1 = "https://i.ibb.co/ZXYxVqG/02-Home-15.png";
const card1Avatar = "https://i.ibb.co/ZT7673g/02-Home-16.png"

const OurArticles = () => {
    return (
        <div className='container mb-20'>
            {/* ___heading____ */}
            <div className="mt-20 mb-10 text-center">
                <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i> Our Articles <i className="fa-solid fa-minus"></i></p>
                <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Our Latest Blog Post </h1>
            </div>
            {/* ___Card___ */}
            <div className="">
                <div className="grid gap-7 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center">
                    {/* _____single___card____ */}
                    <div className="">
                        <div className="">
                            <img src={card1} alt="" />
                        </div>
                        <div className="bg-[#c7c5c5a3] rounded-2xl mt-[-50px] w-full md:w-[60%] lg:w-[93%]">
                            <div className="flex items-center justify-end relative bg-[#dbd6d6] rounded-t-2xl">
                                <p className='bg-primary pl-5 pr-1 text-white text-[16px] py-3'>12 May 21</p>
                                <div className="flex gap-1 pr-3 ml-1">
                                    <p className='text-[16px] text-black'>Posted: <span className='text-primary'>karin</span></p>
                                    <p className='text-[16px] text-black'>- 8 Comments</p>
                                </div>
                                <div className="absolute left-[7px] top-[-30px]">
                                    <img src={card1Avatar} alt="" />
                                </div>
                            </div>
                            <div className="py-3 px-7">
                                <h6 className='text-[22px] font-medium pb-2 text-black'>Strategy For Norway's Peion Fund Global</h6>
                                <p className='text-[16px] font-normal text-black pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga!</p>
                            </div>
                        </div>
                    </div>
                    {/* _____single___card____ */}
                    <div className="">
                        <div className="">
                            <img src={card1} alt="" />
                        </div>
                        <div className="bg-[#c7c5c5a3] rounded-2xl mt-[-50px] w-full md:w-[60%] lg:w-[93%]">
                            <div className="flex items-center justify-end relative bg-[#dbd6d6] rounded-t-2xl">
                                <p className='bg-primary pl-5 pr-1 text-white text-[16px] py-3'>12 May 21</p>
                                <div className="flex gap-1 pr-3 ml-1">
                                    <p className='text-[16px] text-black'>Posted: <span className='text-primary'>karin</span></p>
                                    <p className='text-[16px] text-black'>- 8 Comments</p>
                                </div>
                                <div className="absolute left-[7px] top-[-30px]">
                                    <img src={card1Avatar} alt="" />
                                </div>
                            </div>
                            <div className="py-3 px-7">
                                <h6 className='text-[22px] font-medium pb-2 text-black'>Strategy For Norway's Peion Fund Global</h6>
                                <p className='text-[16px] font-normal text-black pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga!</p>
                            </div>
                        </div>
                    </div>
                    {/* _____single___card____ */}
                    <div className="">
                        <div className="">
                            <img src={card1} alt="" />
                        </div>
                        <div className="bg-[#c7c5c5a3] rounded-2xl mt-[-50px] w-full md:w-[60%] lg:w-[93%]">
                            <div className="flex items-center justify-end relative bg-[#dbd6d6] rounded-t-2xl">
                                <p className='bg-primary pl-5 pr-1 text-white text-[16px] py-3'>12 May 21</p>
                                <div className="flex gap-1 pr-3 ml-1">
                                    <p className='text-[16px] text-black'>Posted: <span className='text-primary'>karin</span></p>
                                    <p className='text-[16px] text-black'>- 8 Comments</p>
                                </div>
                                <div className="absolute left-[7px] top-[-30px]">
                                    <img src={card1Avatar} alt="" />
                                </div>
                            </div>
                            <div className="py-3 px-7">
                                <h6 className='text-[22px] font-medium pb-2 text-black'>Strategy For Norway's Peion Fund Global</h6>
                                <p className='text-[16px] font-normal text-black pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurArticles;