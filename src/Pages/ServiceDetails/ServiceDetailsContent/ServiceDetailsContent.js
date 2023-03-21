import React from 'react';
const topImage = "https://i.ibb.co/kmMKzmc/07-Service-Details.png";
const topImage2 = "https://i.ibb.co/4gxRsYS/07-Service-Details-1.png"
const topImage3 = "https://i.ibb.co/TLW7hPv/07-Service-Details-2.png"
const ServiceDetailsContent = () => {
    return (
        <div className='mt-20'>
            <div className="">
                <div className="">
                    <img src={topImage} alt="" />
                </div>
                <div className="text-[18px] pt-7 pb-10 font-normal text-black">
                    <div className="pb-4">
                        <h6 className='text-black text-[24px] font-bold'>Software & Research</h6>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>
                    <p className='py-1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                    <div className="py-5">
                        <p className='pb-4'><i class="fa-solid fa-check p-2 bg-slate-200 text-[20px] mr-1 rounded-full text-black"></i> Nostrud exercitation ullamco laboris consequat.reprehendrit in voluptate velit</p>
                        <p><i class="fa-solid fa-check p-2 bg-slate-200 text-[20px] mr-1 rounded-full text-black"></i> Nostrud exercitation ullamco laboris consequat.reprehendrit in voluptate velit</p>
                    </div>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequun magni dolores eos qui ratione volsnesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                    </p>
                </div>
                <div className="">
                    <img src={topImage2} alt="" />
                </div>
                <div className="text-[18px] pt-5 pb-10 font-normal text-black">
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="">
                        <img src={topImage3} alt="" />
                    </div>
                    <div className="text-[18px] font-medium text-black">
                        <p><i class="fa-solid fa-check  text-[25px] mr-2 mb-3 text-primary"></i> Lorem ipsum dolor sit amet.</p>
                        <p><i class="fa-solid fa-check  text-[25px] mr-2 mb-3 text-primary"></i>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <p><i class="fa-solid fa-check  text-[25px] mr-2 mb-3 text-primary"></i>Lorem ipsum dolor sit amet consectetur.</p>
                        <p><i class="fa-solid fa-check  text-[25px] mr-2 text-primary"></i>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="ml-4 py-10 text-slate-500">
                    <ul className='list-disc text-[18px]'>
                        <li className='mb-2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</li>
                        <li>Sed ut perspiciatis ude omnis iste natus error sit voluptatem accusantium</li>
                    </ul>
                </div>
                <div className="flex gap-5 border-t border-b py-10 mb-20">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="">
                            <i class="fa-solid fa-users p-4 bg-slate-300 text-primary"></i>
                        </div>
                        <div className="text-[20px] text-black font-normal">
                            <p>Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="">
                            <i class="fa-solid fa-message p-4 bg-slate-300 text-primary"></i>
                        </div>
                        <div className="text-[20px] text-black font-normal">
                            <p>Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsContent;