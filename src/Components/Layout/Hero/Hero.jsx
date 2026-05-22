import React from 'react'
import Container from '../Container'
import hero from '../../../assets/hero.png'
import logo from '../../../assets/logo.png'
import { VscTriangleRight } from "react-icons/vsc";

const Hero = () => {
    return (
        <div className='bg-cover bg-center bg-[#49BBBD]'
            style={{ backgroundImage: `url(${hero})` }}>
            <Container>
                <nav className='pt-[50px]'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} alt="" />
                        <div className='flex gap-[80px]'>
                            <div>
                                <ul className='flex gap-[80px] text-white'>
                                    <li><a href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Home</a></li>
                                    <li><a href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Courses</a></li>
                                    <li><a href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Careers</a></li>
                                    <li><a href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Blog</a></li>
                                    <li><a href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>About Us</a></li>
                                </ul>
                            </div>
                            <div className='flex gap-7'>
                                <button className='font-Poppins font-medium text-[22px] text-[#5B5B5B] py-4 px-12 rounded-[80px] bg-white hover:bg-[#7ECBCC] hover:text-white'>Login</button>
                                <button className='font-Poppins font-medium text-[22px] text-[#5B5B5B] py-4 px-12 rounded-[80px] bg-white hover:bg-[#7ECBCC] hover:text-white'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='pt-[222px] pb-[379px]'>
                    <h2 className='font-Poppins font-bold text-[54px] leading-auto text-white'><span className='text-primary'>Studying</span> Online is now <br /> much easier</h2>
                    <p className='font-Nunito text-[24px] leading-[160%] text-white pt-9 pb-13 max-w-[523px]'>TOTC is an interesting platform that will teach you in more an interactive way</p>
                    <div className='flex gap-10'>
                        <button className='font-Poppins font-semibold text-[24px] text-[#5B5B5B] py-4 px-12 rounded-[80px] bg-white hover:bg-[#7ECBCC] hover:text-white'>Sign Up</button>
                        <div className='flex gap-8 items-center'>
                            <div className='flex justify-center items-center bg-white w-20 h-20 rounded-full'>
                                <div className='text-[#23BDEE]'>
                                    <VscTriangleRight size={30}  className='flex justify-center items-center'/>
                                </div>
                            </div>
                                <div>
                                    <button className='font-Poppins text-[24px] leading-auto text-[#FF383C]'>Watch how it works</button>
                                </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero