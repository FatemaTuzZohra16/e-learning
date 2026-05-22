import React from 'react'
import Container from '../Layout/Container'

const Success = () => {
  return (
    <div className='py-[134px]'>
        <Container>
            <div>
                <h2 className='font-Poppins font-bold text-[48px] leading-[130%] text-center'>Our Success</h2>
                <p className='max-w-[750px] mx-auto font-Poppins text-[18px] leading-[160%] pt-4'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
            </div>
            <div className='flex gap-[95px] pt-[101px] justify-center'>
                <div>
                    <h1 className='font-Poppins font-light text-[85px] leading-[100%]'>15K+</h1>
                    <p className='font-Poppins font-bold text-[25px] leading-[130%]'>Students</p>
                </div>
                <div>
                    <h1 className='font-Poppins font-light text-[85px] leading-[100%]'>75%</h1>
                    <p className='font-Poppins font-bold text-[25px] leading-[130%]'>Total success</p>
                </div>
                <div>
                    <h1 className='font-Poppins font-light text-[85px] leading-[100%]'>35</h1>
                    <p className='font-Poppins font-bold text-[25px] leading-[130%]'>Main questions</p>
                </div>
                <div>
                    <h1 className='font-Poppins font-light text-[85px] leading-[100%]'>26</h1>
                    <p className='font-Poppins font-bold text-[25px] leading-[130%]'>Chief experts</p>
                </div>
                <div>
                    <h1 className='font-Poppins font-light text-[85px] leading-[100%]'>16</h1>
                    <p className='font-Poppins font-bold text-[25px] leading-[130%]'>Years of experience</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Success