import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import author1 from '../../../assets/Testimonial/01_Home (1).png';
import author2 from '../../../assets/Testimonial/01_Home (2).png';
import author3 from '../../../assets/Testimonial/01_Home (3).png';

const customersSays = [
    {
        image: author1,
        name: 'William Smith',
        profe: 'CEO of True Love Studios',
        rating: 4.8,
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab "
    },
    {
        image: author2,
        name: 'William Smith',
        profe: 'CEO of True Love Studios',
        rating: 4.8,
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab "
    },
    {
        image: author3,
        name: 'William Smith',
        profe: 'CEO of True Love Studios',
        rating: 4.8,
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab "
    },
    {
        image: author3,
        name: 'William Smith',
        profe: 'CEO of True Love Studios',
        rating: 4.8,
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab "
    },
    {
        image: author2,
        name: 'William Smith',
        profe: 'CEO of True Love Studios',
        rating: 4.8,
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab "
    },
]
const Testimonial = () => {
    const settings = {
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-[50px] mb-[-230px] overflow-hidden'>
            <div className="mt-20 mb-10 text-center">
                <p className='text-[23px] text-primary font-bold'><i className="fa-solid fa-minus"></i>Testimonial<i className="fa-solid fa-minus"></i></p>
                <h1 className='text-[50px] text-black font-bold leading-[50px] mb-5'>Our Sweet Client Say</h1>
            </div>
            <Slider {...settings}>
                {
                    customersSays.map((customer, jsx) => <div key={jsx} className='shadow_primary py-9 rounded-[0.93vw] mt-20'>
                        <div className="flex flex-col flex-wrap lg:flex-nowrap items-center justify-center">
                            {/* image___ */}
                            <div className="mt-[-110px]">
                                <img src={customer.image} className="" alt="Slide 1" />
                            </div>
                            {/* name__text__reating__comment__avatar */}
                            <div className="w-full text-center">
                                <div className="mt-[30px]">
                                    <p className='text-[18px] mt-14'>{customer.comment}</p>
                                </div>
                                <div className="">
                                    <div className="flex items-center mt-4 gap-2 text-black justify-center">
                                        <h4 className='text-[20px] font-semibold'>{customer.name}- </h4>
                                        <p className='text-[16px] font-normal'> {customer.profe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </Slider>
        </div>
    );
};

export default Testimonial;