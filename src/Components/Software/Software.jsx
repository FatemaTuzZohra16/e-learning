import React from 'react'
import Container from '../Layout/Container'
import sofware1 from '../../assets/software1.png'
import sofware2 from '../../assets/software2.png'
import sofware3 from '../../assets/software3.png'

const Software = () => {
  return (
    <div className='pb-[158px]'>
        <Container>
            <div className='text-center'>
                <h2 className='font-Poppins text-[36px] leading-[180%]'>All-In-One <span className='text-[#00CBB8]'>Cloud Software.</span></h2>
                <p className='max-w-[837px] mx-auto font-Poppins text-[24px] leading-[180%] pb-[103px]'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='relative max-w-[450px] pt-[122px] px-[53px] pb-[50px] bg-white rounded-[20px] drop-shadow-md text-center'>
                <img src={sofware1} alt="" 
                className='absolute bottom-[100%] translate-1/2'
                />
                <h2 className='font-Poppins font-medium text-[30px] leading-auto text-[#2F327D]'>Online Billing, Invoicing, & Contracts</h2>
                <p className='font-Poppins text-[20px] text-[#696984] pt-5'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
              </div>
              <div className='relative max-w-[450px] pt-[122px] px-[53px] pb-[50px] bg-white rounded-[20px] drop-shadow-md text-center'>
                <img src={sofware2} alt="" 
                className='absolute bottom-[100%] translate-1/2'
                />
                <h2 className='font-Poppins font-medium text-[30px] leading-auto text-[#2F327D]'>Easy Scheduling & Attendance Tracking</h2>
                <p className='font-Poppins text-[20px] text-[#696984] pt-5'>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
              </div>
              <div className='relative max-w-[450px] pt-[122px] px-[53px] pb-[50px] bg-white rounded-[20px] drop-shadow-md text-center'>
                <img src={sofware3} alt="" 
                className='absolute bottom-[100%] translate-1/2'
                />
                <h2 className='font-Poppins font-medium text-[30px] leading-auto text-[#2F327D]'>Customer Tracking</h2>
                <p className='font-Poppins text-[20px] text-[#696984] pt-5'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Software