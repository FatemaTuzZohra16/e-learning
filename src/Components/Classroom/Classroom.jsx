import React from 'react'
import Container from '../Layout/Container'
import classroom1 from '../../assets/classroom1.png'
import classroom2 from '../../assets/classroom2.png'
import classroom3 from '../../assets/classroom3.png'

const Classroom = () => {
  return (
    <div>
        <Container>
            <div className='flex gap-[65px]'>
                <div className='w-[50%]'>
                    <h2 className='font-Poppins font-medium text-[36px] leading-[160%] pb-8 text-[#2F327D]'>Everything you can do in a physical classroom, <span className='text-[#00CBB8]'> you can do with TOTC</span></h2>
                    <p className='font-Poppins text-[24px] leading-[180%] tracking-[2%] text-[#696984] pb-[30px]'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <button className='font-Poppins text-[22px] leading-[180%] text-[#696984] border-b'>Learn more</button>
                </div>
                <div className='w-[50%] relative z-10'>
                    <img src={classroom1} alt=""  className='relative z-10'/>
                    <div className='absolute bottom-[72%] left-[-2%]'>
                        <img src={classroom2} alt="" />
                    </div>
                    <div className='absolute top-[52%] right-[-2%]'>
                        <img src={classroom3} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Classroom