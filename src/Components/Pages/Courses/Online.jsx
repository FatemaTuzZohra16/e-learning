import React from 'react'
import Container from '../../Layout/Container'

const Online = () => {
  return (
    <div>
      <Container>
        <div className='pt-[70px] pb-[83px] px-[112px] text-center bg-[#252641] rounded-[37px] text-white'>
          <h2 className='font-Poppins font-semibold text-[36px]'>Online coaching lessons for remote learning.</h2>
          <p className='font-Poppins text-[24px] leading-[180%] tracking-[2%] pt-[30px] pb-[73px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <div>
            <button className='font-Poppins font-bold text-[16px] leading-auto bg-[#49BBBD] rounded-[12px] py-5 px-10 hover:bg-white hover:text-[#49BBBD]'>Start learning now</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Online