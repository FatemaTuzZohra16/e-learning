import React from 'react'
import Container from '../Container'
import hero from '../../../assets/hero.png'
import { VscTriangleRight } from "react-icons/vsc";
import Navbar from '../../Navbar/Navbar';

const Hero = () => {
    return (
        <div className='bg-cover bg-center bg-[#49BBBD]'
            style={{ backgroundImage: `url(${hero})` }}>
            <Container>
                <Navbar />
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