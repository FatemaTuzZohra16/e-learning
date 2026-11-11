import React from 'react'
import Container from '../../Layout/Container'
import Navbar2 from '../../Navbar/Navbar2'
import block from '../../../assets/block.png'
import List from './List'
import Blog from './Blog'

const BlockPage = () => {
  return (
    <div>
      <Navbar2 />
      <div className='bg-[#EBF5FF] mt-[32px]'>
        <Container>
          <div className='flex justify-between items-center py-[70px]'>
            <div className='left w-[60%]'>
            <h6 className='font-Poppins text-[24px] leading-auto'>By Themadbrains in <span className='text-[#49BBBD]'>inspiration</span></h6>
              <h2 className='font-Poppins font-semibold text-[44px] leading-auto pt-6 pb-[14px]'>Why Swift UI Should Be on the <br/> Radar of Every Mobile <br/> Developer</h2>
              <p className='font-Poppins text-[24px] leading-[180%] tracking-[2%] text-[#696984]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>  sed do eiusmod tempos Lorem ipsum dolor sitamet, <br/> consectetur adipiscing elit, sed do eiusmod tempor</p>
              <button className='font-Poppins font-bold text-base leading-auto bg-[#49BBBD] text-white rounded-[12px] py-5 px-10 mt-6'>
                Start learning now
              </button>
            </div>
            <div className="right w-[40%]">
              <img src={block} alt="" />
            </div>
          </div>
        </Container>
      </div>
          <List />
          <Blog />
    </div>
  )
}

export default BlockPage