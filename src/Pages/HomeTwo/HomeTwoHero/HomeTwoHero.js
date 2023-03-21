import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import bg from '../../../assets/Home2/home2hero/02_Home.png';

const HomeTwoHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderSettings, setSliderSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,
        afterChange: (current) => setCurrentSlide(current),
    });
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1351) {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 1,
                });
            }
            else if (window.innerWidth >= 750 && window.innerWidth <= 1350) {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 1,
                });
            } else if (window.innerWidth <= 750) {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 1,
                });
            }
            else {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 1,
                });
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [sliderSettings]);
    return (
        <Slider {...sliderSettings}>
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
                                <div className="mb-[35px] text-[30pxpx] font-semibold">
                                    <p>Technology | Business | Consultan</p>
                                </div>
                                <div className="leading-[95px] text-[90px] font-bold">
                                    <h4>Best Grow Your <br /> Business</h4>
                                </div>
                                <div className="text-[30px] py-7 font-normal">
                                    <p>Our Best Business Technology Consulting</p>
                                </div>
                                <div className="">
                                    <button className='bg-primary px-[40px] py-[15px] rounded-full text-[18px] font-semibold text-white'>Free Consultation <i className="fa-solid fa-angles-right ml-2"></i></button>
                                </div>
                            </div>
                            {/* slider___arrow__btttn */}
                            <div className="ml-[5px]">
                                <div className='slide-dots flex flex-col gap-5 max-w-sm'>
                                    {
                                        currentSlide === 0 ? <i className="fa-regular fa-circle-dot text-white"></i> : <i className="fa-solid fa-circle"></i>
                                    }
                                    {
                                        currentSlide === 1 ? <i className="fa-regular fa-circle-dot text-white"></i> : <i className="fa-solid fa-circle"></i>
                                    }
                                    {
                                        currentSlide === 2 ? <i className="fa-regular fa-circle-dot text-white"></i> : <i className="fa-solid fa-circle"></i>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>

    );
};

export default HomeTwoHero;