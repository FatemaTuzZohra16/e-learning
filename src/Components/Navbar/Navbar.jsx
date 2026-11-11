import React from 'react'
import Container from '../Layout/Container'
import logo from "../../assets/logo.png"
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
        <Container>
            <nav className='pt-[50px]'>
                                <div className='flex justify-between items-center'>
                                    <img src={logo} alt="" />
                                    <div className='flex gap-[80px]'>
                                        <div>
                                            <ul className='flex gap-[80px] text-white'>
                                                <li><Link href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Home</Link></li>
                                                <li><Link href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Courses</Link></li>
                                                <li><Link href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Careers</Link></li>
                                                <li><Link to="/block" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>Blog</Link></li>
                                                <li><Link href="" className='font-Poppins text-[22px] leading-auto tracking-[2%]'>About Us</Link></li>
                                            </ul>
                                        </div>
                                        <div className='flex gap-7'>
                                            <button className='font-Poppins font-medium text-[22px] text-[#5B5B5B] py-4 px-12 rounded-[80px] bg-white hover:bg-[#7ECBCC] hover:text-white'>Login</button>
                                            <button className='font-Poppins font-medium text-[22px] text-[#5B5B5B] py-4 px-12 rounded-[80px] bg-white hover:bg-[#7ECBCC] hover:text-white'>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
        </Container>
    </div>
  )
}

export default Navbar