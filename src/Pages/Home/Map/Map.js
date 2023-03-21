import React from 'react';
import map from '../../../assets/map/01_Home (1).png';

const Map = () => {
    return (
        <div className='container'>
            {/* __map_image___ */}
            <div className="">
                <img src={map} alt="" />
            </div>
            {/* __from__and__progress__ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* __text__progress__ */}
                <div className="">
                    <div className="mt-14 mb-10">
                        <p className='text-[23px] text-primary font-bold mb-2'>Steps Of Procedure <i className="fa-solid fa-minus"></i></p>
                        <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Creating Value Through Business</h1>
                        <div className="">
                            <p className='text-black text-[18px] mb-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus necessitatibus ducimus facere, ea cum magnam qui nobis eligendi repellat?
                                Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit.
                            </p>
                            {/* ____progress___bar___ */}
                            <div className="">
                                <div className="flex justify-between text-black font-semibold text-[18px] mb-2">
                                    <h6>Client Satisfaction</h6>
                                    <p className='mr-[50px]'>90%</p>
                                </div>
                                <div className='h-[10px] w-full border border-primary py-[1px] pl-[1px]'>
                                    <div className='h-full w-[90%] bg-primary'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* __from___ */}
                <div className="py-7 px-7 mt-[-80px] bg-white shadow_primary w-[70%] mx-auto text-center">
                    <form>
                        <h1 className='pb-5 text-black font-semibold text-[25px]'>GET A FREE QUOTE</h1>
                        <input type="text" placeholder='Your Name' className='rounded-md w-full py-2 pl-3 text-[19px] bg-[#F3F5F7] outline-slate-500 text-black mb-5' name="" id="" />
                        <input type="text" placeholder='Email Address' className='rounded-md w-full py-2 pl-3 text-[19px] bg-[#F3F5F7] outline-slate-500 text-black mb-5' name="" id="" />
                        <input type="text" placeholder='Phone Number' className='rounded-md w-full py-2 pl-3 text-[19px] bg-[#F3F5F7] outline-slate-500 text-black mb-5' name="" id="" />
                        <select name="cars" id="cars" className='rounded-md w-full py-2 pl-3 text-[19px] bg-[#F3F5F7] outline-slate-500 text-black mb-5'>
                            <option value="volvo">Chose Service</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type="submit" value="REQUEST A QUOTE" className='rounded-md w-full py-2 pl-3 text-[19px] bg-primary outline-slate-500 text-white font-medium cursor-pointer' name="" id="" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Map;