import React, { useState } from 'react';
import bg from '../../../assets/Home2/Comitted/bg.png';
import images1 from '../../../assets/Home2/Comitted/images1.png';
import images2 from '../../../assets/Home2/Comitted/02_Home (3).png';
import images3 from '../../../assets/Home2/Comitted/02_Home.png';
import card from '../../../assets/Home2/Comitted/card.png';
import card2 from '../../../assets/Home2/Comitted/card2.png';
import card3 from '../../../assets/Home2/Comitted/card3.png';
import card4 from '../../../assets/Home2/Comitted/card4.png';


const WeareCommited = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='mb-32 mt-32 pt-32 pb-12'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="container">
                <div className="">
                    <div className="relative">
                        <img src={images1} alt="" className='-mt-60' />
                        <div className="flex w-full justify-between items-end absolute bottom-0">
                            {/* __text_- */}
                            <div className="bg-white text-black w-[30%] p-10 ml-4">
                                <h6 className='text-[24px] font-semibold mb-3'>  We're committed to trusted financial advisors</h6>
                                <p className='text-primary text-[18px] font-medium tracking-wider'>GET STARTED</p>
                            </div>
                            {/* ___images__ */}
                            <div className="flex mr-4">
                                <img src={images2} alt="" />
                                <img src={images3} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container my-10">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                    {/* ___card__start___ */}
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                        {/* ___single__card_____ */}
                        <div className="bg-[#fff] shadow_primary">
                            <div className="p-5">
                                <p className='text-[18px] text-slate-400 font-normal '>Executer sint occaecat cupladata paroldent sunt in culpa qui offcia deserunt mollianim id est labrum. Sed ut perspiciatis unde</p>
                            </div>
                            <div className="flex gap-3 justify-between items-center pb-4">
                                <div className="">
                                    <span className='text-[20px] font-normal text-black bg-slate-200 px-3 rounded-tr rounded-br py-1'>Business</span>
                                    <h3 className='ml-3 font-bold text-[22px] mt-1 text-black'>App Development</h3>
                                </div>
                                <div className="bg-primary px-2 py-3 rounded-md mr-3">
                                    <img src={card} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* ___single__card_____ */}
                        <div className="bg-[#fff] shadow_primary">
                            <div className="p-5">
                                <p className='text-[18px] text-slate-400 font-normal '>Executer sint occaecat cupladata paroldent sunt in culpa qui offcia deserunt mollianim id est labrum. Sed ut perspiciatis unde</p>
                            </div>
                            <div className="flex gap-3 justify-between items-center pb-4">
                                <div className="">
                                    <span className='text-[20px] font-normal text-black bg-slate-200 px-3 rounded-tr rounded-br py-1'>Business</span>
                                    <h3 className='ml-3 font-bold text-[22px] mt-1 text-black'>Media Marketing</h3>
                                </div>
                                <div className="bg-primary px-2 py-3 rounded-md mr-3">
                                    <img src={card2} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* ___single__card_____ */}
                        <div className="bg-[#fff] shadow_primary">
                            <div className="p-5">
                                <p className='text-[18px] text-slate-400 font-normal '>Executer sint occaecat cupladata paroldent sunt in culpa qui offcia deserunt mollianim id est labrum. Sed ut perspiciatis unde</p>
                            </div>
                            <div className="flex gap-3 justify-between items-center pb-4">
                                <div className="">
                                    <span className='text-[20px] font-normal text-black bg-slate-200 px-3 rounded-tr rounded-br py-1'>Business</span>
                                    <h3 className='ml-3 font-bold text-[22px] mt-1 text-black'>Ui/Ux Design</h3>
                                </div>
                                <div className="bg-primary px-2 py-3 rounded-md mr-3">
                                    <img src={card3} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* ___single__card_____ */}
                        <div className="bg-[#fff] shadow_primary">
                            <div className="p-5">
                                <p className='text-[18px] text-slate-400 font-normal '>Executer sint occaecat cupladata paroldent sunt in culpa qui offcia deserunt mollianim id est labrum. Sed ut perspiciatis unde</p>
                            </div>
                            <div className="flex gap-3 justify-between items-center pb-4">
                                <div className="">
                                    <span className='text-[20px] font-normal text-black bg-slate-200 px-3 rounded-tr rounded-br py-1'>Business</span>
                                    <h3 className='ml-3 font-bold text-[22px] mt-1 text-black'>Digital Marketing</h3>
                                </div>
                                <div className="bg-primary px-2 py-3 rounded-md mr-3">
                                    <img src={card4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ___card___end__ */}
                    {/* ____modal___start__ */}
                    <div className="">
                        {/* ___modal____ */}
                        <div tabindex="0" class="collapse collapse-plus group mb-4">
                            <div class="collapse-title text-[20px] font-normal group-focus:bg-primary group-focus:text-white bg-white shadow_primary">
                                <p className='text-black group-focus:text-secondary'>What Are The Page & Storage Limits?</p>
                            </div>
                            <div class="collapse-content">
                                <p className='text-black py-5 text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.</p>
                            </div>
                        </div>
                        {/* ___modal____ */}
                        <div tabindex="0" class="collapse collapse-plus group mb-4">
                            <div class="collapse-title text-[20px] font-normal group-focus:bg-primary group-focus:text-white bg-white shadow_primary">
                                <p className='text-black group-focus:text-secondary'>We can help your business to grow</p>
                            </div>
                            <div class="collapse-content">
                                <p className='text-black py-5 text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.</p>
                            </div>
                        </div>
                        {/* ___modal____ */}
                        <div tabindex="0" class="collapse collapse-plus group mb-4">
                            <div class="collapse-title text-[20px] font-normal group-focus:bg-primary group-focus:text-white bg-white shadow_primary">
                                <p className='text-black group-focus:text-secondary'>Best financial and consultancy advisors</p>
                            </div>
                            <div class="collapse-content">
                                <p className='text-black py-5 text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.</p>
                            </div>
                        </div>
                        {/* ___modal____ */}
                        <div tabindex="0" class="collapse collapse-plus group">
                            <div class="collapse-title text-[20px] font-normal group-focus:bg-primary group-focus:text-white bg-white shadow_primary">
                                <p className='text-black group-focus:text-secondary'>3 Tips For Offshore Software Development</p>
                            </div>
                            <div class="collapse-content">
                                <p className='text-black py-5 text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.Quod necessitatibus id velit. Rem odio adipisci nulla a dolorem impedit. Assumenda.</p>
                            </div>
                        </div>
                        {/* ___modal____ */}
                    </div>
                    {/* ____modal___end__ */}
                </div>
            </div>

        </div>
    );
};

export default WeareCommited;