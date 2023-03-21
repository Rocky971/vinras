import React from 'react';
import article from '../../../assets/ourArticle/01_Home (1).png';
import article2 from '../../../assets/ourArticle/01_Home (2).png';
import article3 from '../../../assets/ourArticle/01_Home (3).png';
import bg from '../../../assets/ourArticle/01_Home (5).png'


const OurArticle = () => {
    return (
        <div className='relative mb-20'>
            <img src={bg} className="w-[14%] absolute left-[-5px] -top-32" alt="" />
            <div className="container">
                {/* __heading___ */}
                <div className="">
                    <div className="mt-20 mb-10 text-center">
                        <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i>Our Articles<i className="fa-solid fa-minus"></i></p>
                        <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Our Latest Blog Post</h1>
                    </div>
                </div>
                {/* ___card___ */}
                <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
                    {/* ___single___card__ */}
                    <div className="shadow_primary rounded-lg">
                        {/* ___image___ */}
                        <div className="">
                            <img src={article2} className="w-full" alt="" />
                        </div>
                        {/* ___text___ */}
                        <div className="px-5">
                            <div className="flex items-center gap-8 text-black text-[18px] font-medium  py-4">
                                <p><i className="fa-regular fa-bookmark text-primary"></i> Admin</p>
                                <p><i className="fa-regular fa-comments text-primary"></i> 02 Comment</p>
                                <div className="bg-primary py-2 px-3 rounded-lg grid text-center mt-[-70px] text-white font-bold">
                                    <p>20</p>
                                    <p>May</p>
                                </div>
                            </div>
                            {/* ___heading___comment___ */}
                            <div className="text-black ">
                                <h5 className='text-[24px] font-bold'>Your Business Advice For Growth</h5>
                                <p className='text-[19px] py-5 border-b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt animi similique.</p>
                            </div>
                            {/* ___readMore__arrow___ */}
                            <div className="flex justify-between items-center mt-2 mb-5 text-slate-500">
                                <p>Read more</p>
                                <span><i className="fa-solid fa-arrow-right-long"></i></span>
                            </div>
                        </div>
                    </div>
                    {/* ___single___card__ */}
                    <div className="shadow_primary rounded-lg">
                        {/* ___image___ */}
                        <div className="">
                            <img src={article} className="w-full" alt="" />
                        </div>
                        {/* ___text___ */}
                        <div className="px-5">
                            <div className="flex items-center gap-8 text-black text-[18px] font-medium  py-4">
                                <p><i className="fa-regular fa-bookmark text-primary"></i> Admin</p>
                                <p><i className="fa-regular fa-comments text-primary"></i> 02 Comment</p>
                                <div className="bg-primary py-2 px-3 rounded-lg grid text-center mt-[-70px] text-white font-bold">
                                    <p>20</p>
                                    <p>May</p>
                                </div>
                            </div>
                            {/* ___heading___comment___ */}
                            <div className="text-black ">
                                <h5 className='text-[24px] font-bold'>Your Business Advice For Growth</h5>
                                <p className='text-[19px] py-5 border-b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt animi similique.</p>
                            </div>
                            {/* ___readMore__arrow___ */}
                            <div className="flex justify-between items-center mt-2 mb-5 text-slate-500">
                                <p>Read more</p>
                                <span><i className="fa-solid fa-arrow-right-long"></i></span>
                            </div>
                        </div>
                    </div>
                    {/* ___single___card__ */}
                    <div className="shadow_primary rounded-lg">
                        {/* ___image___ */}
                        <div className="">
                            <img src={article3} className="w-full" alt="" />
                        </div>
                        {/* ___text___ */}
                        <div className="px-5">
                            <div className="flex items-center gap-8 text-black text-[18px] font-medium  py-4">
                                <p><i className="fa-regular fa-bookmark text-primary"></i> Admin</p>
                                <p><i className="fa-regular fa-comments text-primary"></i> 02 Comment</p>
                                <div className="bg-primary py-2 px-3 rounded-lg grid text-center mt-[-70px] text-white font-bold">
                                    <p>20</p>
                                    <p>May</p>
                                </div>
                            </div>
                            {/* ___heading___comment___ */}
                            <div className="text-black ">
                                <h5 className='text-[24px] font-bold'>Your Business Advice For Growth</h5>
                                <p className='text-[19px] py-5 border-b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt animi similique.</p>
                            </div>
                            {/* ___readMore__arrow___ */}
                            <div className="flex justify-between items-center mt-2 mb-5 text-slate-500">
                                <p>Read more</p>
                                <span><i className="fa-solid fa-arrow-right-long"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurArticle;