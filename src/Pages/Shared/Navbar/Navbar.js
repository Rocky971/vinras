import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/navbar/logo.png';
import mobile_icon from '../../../assets/navbar/mobile.png';
const NavBar = () => {
    const [scrollNav, setScrollNav] = useState(false);
    const [toggle, setToggle] = useState(false);
    const stickyNav = () => {
        if (window.scrollY >= 90) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    window.addEventListener("scroll", stickyNav);
    return (
        <div className={`fixed w-full z-50 transition-all duration-500 ${scrollNav ? 'bg-[#f94d1b] text-white' : ''}`}>
            <div className='flex items-center justify-between mx-auto'>
                <div className='flex items-center gap-5'>
                    <div className='flex gap-2 items-center bg-[#f94d1b] border-[#f94d1b] border-t-[2px] md:pl-24 pl-10 pr-4 py-[10px]'>
                        <div><img src={logo} alt="" /></div>
                        <p className='text-[32px] font-bold text-white'>Vinras</p>
                    </div>
                    <div className='flex gap-3 items-center text-[#191919] text-[18px]'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-pinterest-p"></i>
                        <div className='border-[#191919] border-l-[2px] pl-3'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
                <div onClick={() => setToggle(!toggle)} className='lg:hidden block mr-6 text-[22px] cursor-pointer'>
                    {
                        !toggle ? <i class="fa-solid fa-bars"></i> :
                            <i class="fa-solid fa-xmark"></i>
                    }

                </div>
                <div className={`absolute top-20 pl-8 pr-4 py-5 bg-color transition-all duration-500 origin-left ${toggle ? ' scale-x-100' : ' scale-x-0'}`}>
                    <div className='pr-5 py-2'>
                        <ul className='grid gap-2 text-[18px] font-[500]'>
                            <li><Link to='/' href="">Home +</Link></li>
                            <li><Link to='/home-two' className='' href="">Page</Link></li>
                            <li><Link className='' to='/services'>Services +</Link></li>
                            <li><a className='' href="">Team</a></li>
                            <li><a className='' href="">News +</a></li>
                            <li><a className='' href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <div className='flex items-center gap-3'>
                        <div className='border-r pr-5 py-2'>
                            <ul className='flex items-center 2xl:gap-10 gap-5 text-[18px] font-[500]'>
                                <li className='homeHover'><Link to='/' href="">Home +</Link>
                                    <ul className='homeHoverChild text-white w-[110px]'>
                                        <li><Link to='/'>Home 1</Link></li>
                                        <li><Link to='/home-two' className='pt-4'>Home 2</Link></li>
                                    </ul>
                                </li>
                                <li className='homeHover'><Link to='/about' href="">About +</Link>
                                    <ul className='homeHoverChild text-white w-[120px]'>
                                        <li><Link to='/about'>About Us 1</Link></li>
                                        <li><Link to='/about-second' className='pt-4'>About Us 2</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/home-two' className='' href="">Page</Link></li>
                                <li className='homeHover'><Link to='/services' href="">Services +</Link>
                                    <ul className='homeHoverChild text-white w-[120px]'>
                                        <li><Link to='/services'>Services 1</Link></li>
                                        <li><Link to='/Services-second' className='pt-4'>Services 2</Link></li>
                                    </ul>
                                </li>
                                <li><a className='' href="">Team</a></li>
                                <li><a className='' href="">News +</a></li>
                                <li><a className='' href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-3 border-[#f94d1b] border-r-[4px] border-t-[2px] pr-24 ml-3 py-3'>
                            <div>
                                <img className='h-11' src={mobile_icon} alt="" />
                            </div>
                            <div className='text-[14px] font-semibold '>
                                <p>Call Us</p>
                                <p>+8801717425793</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;