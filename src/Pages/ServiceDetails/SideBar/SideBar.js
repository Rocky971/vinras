import React from 'react';

const SideBar = () => {
    return (
        <div className='flex flex-col gap-7 flex-wrap'>
            <div className=" pt-5 pb-10 lg:mt-20 mt-0 px-4 bg-slate-200 h-[480px]">
                <div className="pb-5">
                    <h4 className='text-black font-bold text-[22px]'>Services Category</h4>
                </div>
                <div className="flex gap-5 items-center justify-between hover:bg-primary text-black font-medium ease-in duration-500 bg-white hover:text-white py-2 px-3 mb-3">
                    <p>Software & Research</p>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="flex gap-5 items-center justify-between hover:bg-primary text-black font-medium ease-in duration-500 bg-white hover:text-white py-2 px-3 mb-3">
                    <p>Relationship Buildup</p>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="flex gap-5 items-center justify-between hover:bg-primary text-black font-medium ease-in duration-500 bg-white hover:text-white py-2 px-3 mb-3">
                    <p>Marketing Strategy</p>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="flex gap-5 items-center justify-between hover:bg-primary text-black font-medium ease-in duration-500 bg-white hover:text-white py-2 px-3 mb-3">
                    <p>Product Strategy</p>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="flex gap-5 items-center justify-between hover:bg-primary text-black font-medium ease-in duration-500 bg-white hover:text-white py-2 px-3">
                    <p>Investment Planing</p>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
            <div className=" pt-5 pb-7 px-4 bg-slate-200 h-[340px]">
                <div className="pb-5">
                    <h4 className='text-black font-bold text-[22px]'>Have Your Question</h4>
                </div>
                <div className="flex gap-5 items-center justify-between text-black font-medium bg-white py-2 px-3 mb-3">
                    <input type="text" name="" className='outline-none font-normal text-[18px]' placeholder='Name' />
                    <i class="fa-regular fa-user text-primary"></i>
                </div>
                <div className="flex gap-5 items-center justify-between text-black font-medium bg-white py-2 px-3">
                    <textarea name="" id="" placeholder='Your Message' className='outline-none font-normal text-[18px]' cols="22" rows="2"></textarea>
                    <i class="fa-regular fa-envelope-open text-primary"></i>
                </div>
                <button className='border py-2 mt-4 px-3 text-[18px] font-normal rounded bg-primary text-white'>Submit Now <i className="fa-solid fa-angles-right"></i></button>
            </div>
            <div className=" pt-5 pb-7 px-4 mb-10 bg-slate-200 h-[180px]">
                <div className="flex justify-between gap-5 items-center text-black font-bold bg-white py-2 px-3 mb-3">
                    <input type="submit" name="" className='outline-none font-bold text-[18px]' value='Download Doc' />
                    <i class="fa-solid fa-cloud-arrow-down "></i>
                </div>
                <div className="flex justify-between gap-5 items-center text-white font-bold bg-primary py-2 px-3 mb-3">
                    <input type="submit" name="" className='outline-none font-bold text-[18px]' value='Download Pdf' />
                    <i class="fa-regular fa-file-pdf"></i>
                </div>

            </div>
        </div>
    );
};

export default SideBar;