import React from 'react'
import Container from '../Layout/Container'
import explore1 from '../../assets/explore1.png'
import explore2 from '../../assets/explore2.png'
import explore3 from '../../assets/explore3.png'

const Explore = () => {
  return (
    <div className='pt-[57px]'>
        <Container>
            <div className='relative pt-[247px] overflow-hidden'>
                 <div className="absolute top-0 left-0 w-[80%] h-full bg-[#EBF5FF] rounded-br-[40px]"></div>
                <div className='pb-[121px] relative z-10'>
                    <h2 className='font-Roboto font-bold text-[40px] text-black/87'>Explore Course</h2>
                    <p className='font-Roboto font-medium text-[24px] mt-6 text-black/50'>Ut sed eros finibus, placerat orci id, dapibus.</p>
                </div>
                <div className='relative z-10 pb-[62px]'>
                    <div><img src={explore1} alt="" /></div>
                <div className='py-[112px]'><img src={explore2} alt="" /></div>
                <div><img src={explore3} alt="" /></div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Explore