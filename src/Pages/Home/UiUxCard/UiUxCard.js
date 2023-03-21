import React from 'react';
import './UiUxCard.css'
import first from '../../../assets/uiux/first.png';
import first1 from '../../../assets/uiux/first1.png';
import second from '../../../assets/uiux/second.png';
import second1 from '../../../assets/uiux/second1.png';
import third from '../../../assets/uiux/third.png';
import third1 from '../../../assets/uiux/third1.png';
import fourth from '../../../assets/uiux/fourth.png';
import fourth1 from '../../../assets/uiux/fourth1.png';
import uihome from '../../../assets/uiux/uiHome.png';
import AboutUs from './AboutUs';
import ProgressBar from './ProgressBar';


const UiUxCard = () => {
    return (
        <div className=""
            style={{
                backgroundImage: `url(${uihome})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='mb-20 container'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow_bottom">
                    {/* __firs__card__ */}
                    <div className="ui_wraper bg-white flex gap-4 flex-col items-center py-[30px] cursor-pointer ease-in duration-500 border-r">
                        <div className="p-3 bg-primary uiImage rounded-full ease-in duration-500">
                            <img src={first1} className="image_one ease-in duration-500" alt="" />
                            <img src={first} className="image_two ease-in duration-500" alt="" />
                        </div>
                        <div>
                            <h4 className="text-[30px] font-medium text-black ease-in duration-500">Ui/Ux Design</h4>
                        </div>
                    </div>
                    {/* __second__card__ */}
                    <div className="ui_wraper bg-white flex gap-4 flex-col items-center py-[30px] cursor-pointer ease-in duration-500 border-r">
                        <div className="p-3 bg-primary uiImage rounded-full ease-in duration-500">
                            <img src={second1} className="image_one ease-in duration-500" alt="" />
                            <img src={second} className="image_two ease-in duration-500" alt="" />
                        </div>
                        <div>
                            <h4 className="text-[30px] font-medium text-black ease-in duration-500">Committed Quality</h4>
                        </div>
                    </div>
                    {/* __third__card__ */}
                    <div className="ui_wraper bg-white flex gap-4 flex-col items-center py-[30px] cursor-pointer ease-in duration-500 border-r">
                        <div className="p-3 bg-primary uiImage rounded-full ease-in duration-500">
                            <img src={third1} className="image_one ease-in duration-500" alt="" />
                            <img src={third} className="image_two ease-in duration-500" alt="" />
                        </div>
                        <div>
                            <h4 className="text-[30px] font-medium text-black ease-in duration-500">Tax Counsulting</h4>
                        </div>
                    </div>
                    {/* __fourth__card__ */}
                    <div className="ui_wraper bg-white flex gap-4 flex-col items-center py-[30px] cursor-pointer ease-in duration-500">
                        <div className="p-3 bg-primary uiImage rounded-full ease-in duration-500">
                            <img src={fourth1} className="image_one ease-in duration-500" alt="" />
                            <img src={fourth} className="image_two ease-in duration-500" alt="" />
                        </div>
                        <div>
                            <h4 className="text-[30px] font-medium text-black ease-in duration-500">Tax Strategy</h4>
                        </div>
                    </div>

                </div>
                <AboutUs />
                {/* <ProgressBar /> */}
            </div>
        </div>
    );
};

export default UiUxCard;