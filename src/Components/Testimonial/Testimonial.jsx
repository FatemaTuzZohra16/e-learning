import React from 'react'
import Container from '../Layout/Container'
import testimonial from '../../assets/testimonial.png'
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className='pt-[130px] pb-[150px]'>
        <Container>
           <div className="main flex gap-[158px]">
            <div className="left w-[50%]">
                 <div className=''>
                <h5 className='font-Nunito text-[20px] leading-auto tracking-[20%]'>TESTIMONIAL</h5>
                <h2 className='font-Nunito text-[60px] leading-auto py-[30px] text-[#2F327D]'>What They Say?</h2>
                <p className='font-poppins text-[26px] leading-[160%] tracking-[2%] text-[#696984]'>TOTC has got more than 100k positive ratings from our users around the world. </p>
                <p className='font-poppins text-[26px] leading-[160%] tracking-[2%] text-[#696984] pt-[26px] pb-[46px]'>Some of the students and teachers were greatly helped by the Skilline.</p>
                <p className='font-poppins text-[26px] leading-[160%] tracking-[2%] text-[#696984]'>Are you too? Please give your assessment</p>
            </div>
            </div>
            <div className="w-[50%] right relative">
                <img src={testimonial} alt="" />
                <div className='absolute bg-white pt-10 pb-8 pl-8 pr-[55px] rounded-[20px] top-[492px] left-[70px] shadow-lg w-[680px]'>
                  <h2 className='font-Nunito text-[22px] leading-[180%] tracking-[2%] text-[#5F5F7E] mb-[31px]'>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</h2>
                  <div className='flex items-center justify-between'>
                    <div><h2 className='font-Nunito font-semibold text-[24px] leading-[180%] text-[#5F5F7E]'>Gloria Rose</h2></div>
                    <div>
                      <div className='flex gap-1'>
                      <FaStar  className='text-[#FBA333]' size={23}/>
                      <FaStar  className='text-[#FBA333]' size={23}/>
                      <FaStar  className='text-[#FBA333]' size={23}/>
                      <FaStar  className='text-[#FBA333]' size={23}/>
                      <FaStar  className='text-[#FBA333]' size={23}/>
                    </div>
                    <p className='font-Nunito font-semibold text-[18px] leading-[180%] text-[#80819A] tracking-[2%] mt-3'>12 reviews at Yelp</p>
                    </div>
                  </div>
                </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Testimonial