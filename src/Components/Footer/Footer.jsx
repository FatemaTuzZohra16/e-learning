import React from 'react'
import Container from '../Layout/Container'
import footer from '../../assets/footer.png'

const Footer = () => {
  return (
    <div className='text-center bg-[#252641]'>
        <Container>
            <div className='flex gap-[80px] pt-[74px] pb-[95px] items-center justify-center'>
                <img src={footer} alt="" />
                <p className='font-Poppins font-semibold text-[22px] tracking-[4%] text-white border-l pl-[47px]'>Virtual Class <br/> for Zoom</p>
            </div>
            <div className='text-center'>
              <h2 className='font-Poppins font-medium text-[26px] tracking-[4%] text-[#B2B3CF]'>Subscribe to get our Newsletter</h2>
              <div className='pt-5 pb-[96px]'>
                <button className='py-4 pl-7 pr-[258px] font-poppins text-[20px] tracking-[4%] text-[#83839A] border border-[#83839A] rounded-[80px] mr-5'>Your Email</button>
                <button className='font-poppins font-medium text-[22px] bg-[#49BBBD] border border-[#545AE8] text-white py-[14px] px-[34px] rounded-[80px]'>Subscribe</button>
              </div>
              <div className='flex justify-center'>
                <p className='font-poppins text-[22px] tracking-[4%] text-[#B2B3CF] border-r border-[#626381] pr-5'>Careers</p>
                <p className='font-poppins text-[22px] tracking-[4%] text-[#B2B3CF] border-r border-[#626381] px-5'>Privacy Policy</p>
                <p className='font-poppins text-[22px] tracking-[4%] text-[#B2B3CF]  pl-5'>Terms & Conditions</p>
              </div>
              <p className='font-poppins text-[22px] tracking-[4%] text-[#B2B3CF] pt-5 pb-10'>© 2021 Class Technologies Inc. </p>
            </div>
        </Container>
    </div>
  )
}

export default Footer