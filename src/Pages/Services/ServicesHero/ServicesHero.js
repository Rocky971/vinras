import React from 'react';
import bg from '../../../assets/Home2/home2hero/02_Home.png';
const ServicesHero = () => {
    return (
        <div className="">
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // height: '90vh',
                marginLeft: '-33px'
            }}>
                <div className="container h-[90vh]">
                    <div className="flex items-center justify-between h-[90vh]">
                        <div className="text-white">
                            <div className="leading-[95px] text-[90px] font-bold">
                                <h4>Services</h4>
                            </div>
                            <div className="text-[30px] py-7 font-normal">
                                <p>Home<i className="fa-solid fa-angles-right ml-2"></i> Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesHero;