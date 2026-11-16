import React from 'react'
import Container from '../../Layout/Container'
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'
import { MdOutlineAccessTime } from "react-icons/md";
import design from '../../../assets/design.png'
import logoWemen from '../../../assets/logoWemen.png'

const Articles = ({title}) => {
  <Articles title="Marketing Articles" />
  return (
    <div className='pt-[80px] pb-[181px]'>
        <Container>
            <div>
                <h2 className='font-Poppins font-medium text-[30px] leading-auto tracking-[2%]'>{title}</h2>
            </div>
            <div className="all flex items-center gap-10">
              <div className="main flex justify-between items-center mt-[47px] shadow-xl/20 rounded-3xl">
              <div className='p-5'>
                <img src={img1} alt="" />
                <div className='flex justify-between items-center py-5'>
                  <div className='flex items-center gap-[10px]'>
                    <img src={design} alt="" />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>Design</p>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <MdOutlineAccessTime />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>3 Month</p>
                  </div>
                </div>
                <h2 className='font-Poppins font-medium text-[24px] leading-auto text-[#252641]'>AWS Certified solutions Architect</h2>
                <p className='font-Poppins text-[18px] leading-[180%] tracking-[2%] text-[#696984] pt-5 pb-4'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='flex justify-between items-center pt-5'>
                  <div className="left flex items-center">
                    <img src={logoWemen} alt="" />
                    <p className='font-Poppins font-medium text-[18px] leading-auto tracking-[2%] pl-[17px]'>Lina</p>
                  </div>
                  <div className="left flex items-center">
                    <p className='font-Poppins text-[18px] leading-auto tracking-[2%] pl-[17px] text-[#696984]'>$100</p>
                    <p className='font-Poppins font-bold text-[24px] leading-auto tracking-[2%] pl-[14px] text-[#49BBBD]'>$80</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main flex justify-between items-center mt-[47px] shadow-xl/20 rounded-3xl">
              <div className='p-5'>
                <img src={img2} alt="" />
                <div className='flex justify-between items-center py-5'>
                  <div className='flex items-center gap-[10px]'>
                    <img src={design} alt="" />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>Design</p>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <MdOutlineAccessTime />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>3 Month</p>
                  </div>
                </div>
                <h2 className='font-Poppins font-medium text-[24px] leading-auto text-[#252641]'>AWS Certified solutions Architect</h2>
                <p className='font-Poppins text-[18px] leading-[180%] tracking-[2%] text-[#696984] pt-5 pb-4'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='flex justify-between items-center pt-5'>
                  <div className="left flex items-center">
                    <img src={logoWemen} alt="" />
                    <p className='font-Poppins font-medium text-[18px] leading-auto tracking-[2%] pl-[17px]'>Lina</p>
                  </div>
                  <div className="left flex items-center">
                    <p className='font-Poppins text-[18px] leading-auto tracking-[2%] pl-[17px] text-[#696984]'>$100</p>
                    <p className='font-Poppins font-bold text-[24px] leading-auto tracking-[2%] pl-[14px] text-[#49BBBD]'>$80</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main flex justify-between items-center mt-[47px] shadow-xl/20 rounded-3xl">
              <div className='p-5'>
                <img src={img3} alt="" />
                <div className='flex justify-between items-center py-5'>
                  <div className='flex items-center gap-[10px]'>
                    <img src={design} alt="" />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>Design</p>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <MdOutlineAccessTime />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>3 Month</p>
                  </div>
                </div>
                <h2 className='font-Poppins font-medium text-[24px] leading-auto text-[#252641]'>AWS Certified solutions Architect</h2>
                <p className='font-Poppins text-[18px] leading-[180%] tracking-[2%] text-[#696984] pt-5 pb-4'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='flex justify-between items-center pt-5'>
                  <div className="left flex items-center">
                    <img src={logoWemen} alt="" />
                    <p className='font-Poppins font-medium text-[18px] leading-auto tracking-[2%] pl-[17px]'>Lina</p>
                  </div>
                  <div className="left flex items-center">
                    <p className='font-Poppins text-[18px] leading-auto tracking-[2%] pl-[17px] text-[#696984]'>$100</p>
                    <p className='font-Poppins font-bold text-[24px] leading-auto tracking-[2%] pl-[14px] text-[#49BBBD]'>$80</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main flex justify-between items-center mt-[47px] shadow-xl/20 rounded-3xl">
              <div className='p-5'>
                <img src={img4} alt="" />
                <div className='flex justify-between items-center py-5'>
                  <div className='flex items-center gap-[10px]'>
                    <img src={design} alt="" />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>Design</p>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <MdOutlineAccessTime />
                    <p className='font-Poppins font-medium text-[14px] leading-[180%] tracking-[2%] text-[#696984]'>3 Month</p>
                  </div>
                </div>
                <h2 className='font-Poppins font-medium text-[24px] leading-auto text-[#252641]'>AWS Certified solutions Architect</h2>
                <p className='font-Poppins text-[18px] leading-[180%] tracking-[2%] text-[#696984] pt-5 pb-4'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='flex justify-between items-center pt-5'>
                  <div className="left flex items-center">
                    <img src={logoWemen} alt="" />
                    <p className='font-Poppins font-medium text-[18px] leading-auto tracking-[2%] pl-[17px]'>Lina</p>
                  </div>
                  <div className="left flex items-center">
                    <p className='font-Poppins text-[18px] leading-auto tracking-[2%] pl-[17px] text-[#696984]'>$100</p>
                    <p className='font-Poppins font-bold text-[24px] leading-auto tracking-[2%] pl-[14px] text-[#49BBBD]'>$80</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Articles