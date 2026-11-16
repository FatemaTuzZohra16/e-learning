import React from 'react'
import Navbar2 from '../../Navbar/Navbar2'
import Container from '../../Layout/Container'
import course1 from '../../../assets/course1.png'
import course2 from '../../../assets/course2.png'
import course3 from '../../../assets/course3.png'
import Footer from '../../Footer/Footer'
import Category from './Category'
import Articles from '../BlockPage/Articles'
import Online from './Online'

const Course = () => {
  return (
    <div>
        <Navbar2 />
       <div className='bg-bg pt-[50px] pb-[157px] mt-[30px]'>
         <Container>
                <div className='flex justify-between items-center'>
                <h2 className='font-Poppins font-bold text-[36px] leading-auto text-[#252641]'>Welcome back, ready for your next lesson?</h2>
                <button className='font-Poppins font-bold text-[20px] leading-auto text-[#49BBBD]'>View hisotry</button>
            </div>
            <div className="flex items-center ml-[-45px]">
                <img src={course1} alt=""  className='w-[529px] h-[460px]'/>
                <img src={course2} alt=""  className='w-[529px] h-[460px]'/>
                <img src={course3} alt=""  className='w-[529px] h-[460px]'/>
            </div>
        </Container>
       </div>
       <Category />
       <Articles  title="Recommended for you" />
       <Articles  title="Get choice of your course" />
       <Online />
       <Articles  title="The course in personal development" />
       <Articles  title="Student are viewing" />
       <Footer />
    </div>
  )
}

export default Course