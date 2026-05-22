import React from 'react'
import Container from '../Layout/Container'
import totc from '../../assets/totc.png'
import totc1 from '../../assets/totc1.png'

const Totc = () => {
  return (
    <div className='pb-[160px]'>
        <Container>
            <div className='text-center'>
                <h2 className='font-Poppins font-semibold text-[44px] leading-[180%] text-[#2F327D]'>What is <span className='text-[#00CBB8]'>TOTC?</span></h2>
                <p className='max-w-[1101px] mx-auto font-Poppins text-[24px] leading-[130%] text-[#696984]pt-5 pb-[77px]'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <div className='flex justify-between items-center'>
                  <div className=' relative'>
                    <img src={totc} alt=""/>
                   <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <h2 className='font-Poppins font-semibold text-[32px] leading-auto pb-4 text-white'>FOR INSTRUCTORS</h2>
                    <div className='border border-white rounded-[80px] hover:bg-[#28B2DD] hover:border-none'>
                      <button className='py-6 px-8 font-Poppins font-medium text-[22px] leading-auto text-white'>Start a class today</button>
                    </div>
                   </div>
                  </div>
                  <div className=' relative'>
                    <img src={totc1} alt=""/>
                   <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <h2 className='font-Poppins font-semibold text-[32px] leading-auto pb-4 text-white'>FOR STUDENTS</h2>
                    <div className='border border-white rounded-[80px] hover:bg-[#28B2DD] hover:border-none'>
                      <button className='py-6 px-10 font-Poppins font-medium text-[22px] leading-auto text-white'>Enter access code</button>
                    </div>
                   </div>
                  </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Totc