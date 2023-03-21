import React from 'react';
import './ClientChose.css'
const heading1 = "https://i.ibb.co/r6kqKjY/02-Home.png";
const heading2 = "https://i.ibb.co/m6jtLWY/02-Home-3.png";
const card1 = "https://i.ibb.co/Pzdw8HD/02-Home-4.png";
const card1White = "https://i.ibb.co/5BLPzb2/02-Home-5.png"
const card2 = "https://i.ibb.co/tbghzjh/02-Home-8.png"
const card2White = "https://i.ibb.co/4svfTrp/02-Home-7.png"
const card3 = "https://i.ibb.co/SNxpnBC/02-Home-10.png"
const card3White = "https://i.ibb.co/ByW0ZCr/02-Home-9.png"
const card4 = "https://i.ibb.co/N9m48MB/02-Home-12.png"
const card4White = "https://i.ibb.co/dJXcvDk/02-Home-11.png"
const background = "https://i.ibb.co/9pQPN62/02-Home-6.png"
const map = "https://i.ibb.co/7ymz4nR/02-Home-13.png"

const ClientChose = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="mb-44"
    >
      {/* __header___ */}
      <div className="container pt-20 pb-28 text-center flex items-center justify-between flex-wrap gap-10">
        <div className="">
          <h1 className='text-[50px] text-black font-bold leading-[50px] mb-2'>Client Choose Wisely</h1>
          <p className='text-[23px] text-primary font-bold text-start'>Why Choose Us</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={heading1} className="w-[25%]" alt="" />
          <div className="text-start">
            <h6 className='text-[60px] font-medium text-black'>28K</h6>
            <p className='text-[18px] text-black font-medium'>Successfull Project</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={heading2} className="w-[25%]" alt="" />
          <div className="text-start  w-full">
            <h6 className='text-[60px] font-medium text-black'>20K</h6>
            <p className='text-[18px] text-black font-medium'>Satisified Work Member</p>
          </div>
        </div>
      </div>
      {/* ___heading__end__ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 relative pb-20 gap-10">
        {/* ___card____ */}
        <div className="grid gap-7 grid-cols-1 md:grid-cols-2 xl:ml-48 ml-[0px] w-[100%] xl:w-[80%] mx-auto">
          {/* ___single__Card___ */}
          <div className="py-9 px-5 main_card bg-[#fff] cursor-pointer h-[270px]">
            <div className="card_img">
              <img src={card1} className='client_red' alt="" />
              <img src={card1White} className='client_white' alt="" />
            </div>
            <div className="client_text">
              <h6 className='text-[20px] font-medium my-4'>Free Consulting</h6>
              <p className='text-[16px] font-normal'>Lorem ipsum dolor, sit amet nop oh consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* ___single__Card___ */}
          <div className="py-9 px-5 main_card bg-[#fff] cursor-pointer mt-[-50px] h-[270px]">
            <div className="card_img">
              <img src={card2} className='client_red' alt="" />
              <img src={card2White} className='client_white' alt="" />
            </div>
            <div className="client_text">
              <h6 className='text-[20px] font-medium my-4'>Expert Member</h6>
              <p className='text-[16px] font-normal'>Lorem ipsum dolor, sit amet nop oh consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* ___single__Card___ */}
          <div className="py-9 px-5 main_card bg-[#fff] cursor-pointer h-[270px]">
            <div className="card_img">
              <img src={card3} className='client_red' alt="" />
              <img src={card3White} className='client_white' alt="" />
            </div>
            <div className="client_text">
              <h6 className='text-[20px] font-medium my-4'>Satisfied Services</h6>
              <p className='text-[16px] font-normal'>Lorem ipsum dolor, sit amet nop oh consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* ___single__Card___ */}
          <div className="py-9 px-5 main_card bg-[#fff] cursor-pointer mt-[-50px] h-[270px]">
            <div className="card_img">
              <img src={card4} className='client_red' alt="" />
              <img src={card4White} className='client_white' alt="" />
            </div>
            <div className="client_text">
              <h6 className='text-[20px] font-medium my-4'>Free Consulting</h6>
              <p className='text-[16px] font-normal'>Lorem ipsum dolor, sit amet nop oh consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        {/* ___map____ */}
        <div className="absolute lg:right-0 hidden lg:block lg:w-[40%] xl:bottom-[-80px] right-[20%] ">
          <img src={map} alt="" />
        </div>

      </div>
    </div>
  );
};

export default ClientChose;