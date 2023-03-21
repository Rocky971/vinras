import React from 'react';
import services_card from '../../../assets/Services/01_Home (1).png';
import services_cardtwo from '../../../assets/Services/01_Home (2).png';

const ServicesOur = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${services_cardtwo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container">
                <div className="pt-20 mb-10 text-center">
                    <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i>Our Services<i className="fa-solid fa-minus"></i></p>
                    <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Our Popular Services</h1>
                </div>
                <div className="card">
                    <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 mt-10 mb-16 mx-10">
                        {/* ___first___card___ */}
                        <div className="shadow_primary bg-white">
                            {/* ___heading___ */}
                            <div className="flex justify-between">
                                <div className="bg-primary py-1 rounded-r px-3 mt-7">
                                    <p>Business</p>
                                </div>
                                <div className="bg-primary px-5 rounded flex justify-center items-center mr-5">
                                    <img src={services_card} alt="" />
                                </div>
                            </div>
                            {/* ____content____ */}
                            <div className="px-3 mb-7">
                                <h3 className='text-[22px] font-bold mt-2 mb-3 text-[#1c1c1c]'>Business Planning</h3>
                                <p className='text-[15px] text-[#878c8f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, reiciendis reprehenderit ex natus reiciendis reprehenderit ex natus  adipisci repellat.</p>
                            </div>
                        </div>
                        {/* ___second___card___ */}
                        <div className="shadow_primary bg-white">
                            {/* ___heading___ */}
                            <div className="flex justify-between">
                                <div className="bg-primary py-1 rounded-r px-3 mt-7">
                                    <p>Business</p>
                                </div>
                                <div className="bg-primary px-5 rounded flex justify-center items-center mr-5">
                                    <img src={services_card} alt="" />
                                </div>
                            </div>
                            {/* ____content____ */}
                            <div className="px-3 mb-7">
                                <h3 className='text-[22px] font-bold mt-2 mb-3 text-[#1c1c1c]'>Manage Investment</h3>
                                <p className='text-[15px] text-[#878c8f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, reiciendis reprehenderit ex natus reiciendis reprehenderit ex natus  adipisci repellat.</p>
                            </div>
                        </div>
                        {/* ___third___card___ */}
                        <div className="shadow_primary bg-white">
                            {/* ___heading___ */}
                            <div className="flex justify-between">
                                <div className="bg-primary py-1 rounded-r px-3 mt-7">
                                    <p>Business</p>
                                </div>
                                <div className="bg-primary px-5 rounded flex justify-center items-center mr-5">
                                    <img src={services_card} alt="" />
                                </div>
                            </div>
                            {/* ____content____ */}
                            <div className="px-3 mb-7">
                                <h3 className='text-[22px] font-bold mt-2 mb-3 text-[#1c1c1c]'>Insurance Strategy</h3>
                                <p className='text-[15px] text-[#878c8f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, reiciendis reprehenderit ex natus reiciendis reprehenderit ex natus  adipisci repellat.</p>
                            </div>
                        </div>
                        {/* ___fourth___card___ */}
                        <div className="shadow_primary bg-white">
                            {/* ___heading___ */}
                            <div className="flex justify-between">
                                <div className="bg-primary py-1 rounded-r px-3 mt-7">
                                    <p>Business</p>
                                </div>
                                <div className="bg-primary px-5 rounded flex justify-center items-center mr-5">
                                    <img src={services_card} alt="" />
                                </div>
                            </div>
                            {/* ____content____ */}
                            <div className="px-3 mb-7">
                                <h3 className='text-[22px] font-bold mt-2 mb-3 text-[#1c1c1c]'>Audit Marketing</h3>
                                <p className='text-[15px] text-[#878c8f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, reiciendis reprehenderit ex natus reiciendis reprehenderit ex natus  adipisci repellat.</p>
                            </div>
                        </div>
                        {/* ___five___card___ */}
                        <div className="shadow_primary bg-white">
                            {/* ___heading___ */}
                            <div className="flex justify-between">
                                <div className="bg-primary py-1 rounded-r px-3 mt-7">
                                    <p>Business</p>
                                </div>
                                <div className="bg-primary px-5 rounded flex justify-center items-center mr-5">
                                    <img src={services_card} alt="" />
                                </div>
                            </div>
                            {/* ____content____ */}
                            <div className="px-3 mb-7">
                                <h3 className='text-[22px] font-bold mt-2 mb-3 text-[#1c1c1c]'>Digital Marketing</h3>
                                <p className='text-[15px] text-[#878c8f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, reiciendis reprehenderit ex natus reiciendis reprehenderit ex natus  adipisci repellat.</p>
                            </div>
                        </div>
                        {/* ___six___card___ */}
                        <div className="shadow_primary bg-white">
                            {/* ___heading___ */}
                            <div className="flex justify-between">
                                <div className="bg-primary py-1 rounded-r px-3 mt-7">
                                    <p>Business</p>
                                </div>
                                <div className="bg-primary px-5 rounded flex justify-center items-center mr-5">
                                    <img src={services_card} alt="" />
                                </div>
                            </div>
                            {/* ____content____ */}
                            <div className="px-3 mb-7">
                                <h3 className='text-[22px] font-bold mt-2 mb-3 text-[#1c1c1c]'>Web Devlopment</h3>
                                <p className='text-[15px] text-[#878c8f]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, reiciendis reprehenderit ex natus reiciendis reprehenderit ex natus  adipisci repellat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesOur;