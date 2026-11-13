import React from 'react'
import Container from '../../Layout/Container'
import blog1 from '../../../assets/blog1.png'
import blog2 from '../../../assets/blog2.png'
import logoWemen from '../../../assets/logoWemen.png'
import { IoEyeSharp } from "react-icons/io5";

const Blog = () => {
  return (
    <div className='bg-bg pt-[93px] pb-[66px]'>
        <Container>
            <div>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='font-Poppins font-medium text-[30px] leading-auto tracking-[2%]'>Related Blog </h2> 
                <p className='font-Poppins font-bold text-5 leading-auto text-[#49BBBD]'>See all</p>
            </div>
            <div className='flex items-center gap-[99px]'>
                <div className="left bg-white rounded-[20px] py-15 px-8">
                    <img src={blog1} alt="" />
                    <h3 className='font-Poppins font-medium text-[24px] leading-[180%] mt-3'>Class adds $30 million to its balance sheet for a <br/>Zoom-friendly edtech solution</h3>
                    <div className='pl-6 flex items-center py-6'>
                        <img src={logoWemen} alt="" />
                        <p className='font-Poppins font-medium text-[18px] leading-auto tracking-[2%] pl-4'>Lina</p>
                    </div>
                    <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%]pb-11'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className='flex justify-between items-center mt-11'>
                        <button className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>Read more</button>
                        <div className="flex items-center gap-6">
                            <IoEyeSharp  className='text-[#49BBBD]' size={25}/>
                            <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>251,232</p>
                        </div>
                    </div>
                </div>
                <div className="right bg-white rounded-[20px] py-15 px-8">
                    <img src={blog2} alt="" />
                    <h3 className='font-Poppins font-medium text-[24px] leading-[180%] mt-3'>Class adds $30 million to its balance sheet for a <br/> Zoom-friendly edtech solution</h3>
                    <div className='pl-6 flex items-center py-6'>
                        <img src={logoWemen} alt="" />
                        <p className='font-Poppins font-medium text-[18px] leading-auto tracking-[2%] pl-4'>Lina</p>
                    </div>
                    <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%]pb-11'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className='flex justify-between items-center mt-11'>
                        <button className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>Read more</button>
                        <div className="flex items-center gap-6">
                            <IoEyeSharp  className='text-[#49BBBD]' size={25}/>
                            <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>251,232</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Blog