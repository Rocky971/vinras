import React from 'react';
import './OurTeam.css';
import meet1 from '../../../assets/Home2/meetour/meet1.png';
import meet2 from '../../../assets/Home2/meetour/meet2.png';
import meet3 from '../../../assets/Home2/meetour/meet3.png';
import meet4 from '../../../assets/Home2/meetour/meet4.png';

const OurTeam = () => {
    return (
        <div>
            <div className="container mb-20">
                {/* __headr___ */}
                <div className="mt-10 mb-10 text-center">
                    <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i> Our Team <i className="fa-solid fa-minus"></i></p>
                    <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Meet Our Amazing team</h1>
                </div>
                {/* __Card____ */}
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* first__card */}
                    <div className="flex justify-center">
                        <div className="ourteam">
                            <div className="ourImage">
                                <img src={meet1} alt="" />
                            </div>
                            <div className="flex items-center text-black gap-3 flex-col our_icon">
                                <i className="fa-brands fa-instagram p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-twitter p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-facebook-f p-2 px-[15px] bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            </div>
                            <div className="name_our">
                            </div>
                            <div className="na__me text-center text-black bg-white shadow_primary border-l-4 border-primary py-3">
                                <h5 className='text-[30px] font-semibold'>Adol Hilter</h5>
                                <p className='text-[18px]'>Killer of Ehudi</p>
                            </div>
                        </div>
                    </div>
                    {/* second__card */}
                    <div className="flex justify-center">
                        <div className="ourteam">
                            <div className="ourImage">
                                <img src={meet2} alt="" />
                            </div>
                            <div className="flex items-center text-black gap-3 flex-col our_icon">
                                <i className="fa-brands fa-instagram p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-twitter p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-facebook-f p-2 px-[15px] bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            </div>
                            <div className="name_our ">
                            </div>
                            <div className="na__me text-center text-black bg-white shadow_primary border-l-4 border-primary py-3">
                                <h5 className='text-[30px] font-semibold'>Mother Tersa</h5>
                                <p className='text-[18px]'>Director</p>
                            </div>
                        </div>
                    </div>
                    {/* third__card */}
                    <div className="flex justify-center">
                        <div className="ourteam">
                            <div className="ourImage">
                                <img src={meet3} alt="" />
                            </div>
                            <div className="flex items-center text-black gap-3 flex-col our_icon">
                                <i className="fa-brands fa-instagram p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-twitter p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-facebook-f p-2 px-[15px] bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            </div>
                            <div className="name_our ">
                            </div>
                            <div className="na__me text-center text-black bg-white shadow_primary border-l-4 border-primary py-3">
                                <h5 className='text-[30px] font-semibold'>Nelson Medela</h5>
                                <p className='text-[18px]'>Producer</p>
                            </div>
                        </div>
                    </div>
                    {/* third__card */}
                    <div className="flex justify-center">
                        <div className="ourteam">
                            <div className="ourImage">
                                <img src={meet4} alt="" />
                            </div>
                            <div className="flex items-center text-black gap-3 flex-col our_icon">
                                <i className="fa-brands fa-instagram p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-twitter p-2 bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                                <i className="fa-brands fa-facebook-f p-2 px-[15px] bg-white hover:text-white hover:bg-primary ease-in duration-500"></i>
                            </div>
                            <div className="name_our ">
                            </div>
                            <div className="na__me text-center text-black bg-white shadow_primary border-l-4 border-primary py-3">
                                <h5 className='text-[30px] font-semibold'>N. Modi</h5>
                                <p className='text-[18px]'>Prime Minister</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;