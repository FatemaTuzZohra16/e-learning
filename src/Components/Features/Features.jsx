import React from 'react'
import Container from '../Layout/Container'
import features from '../../assets/features.png'
import features1 from '../../assets/features1.png'
import features2 from '../../assets/features2.png'
import features3 from '../../assets/features3.png'
import features4 from '../../assets/features4.png'
import features5 from '../../assets/features5.png'
import features6 from '../../assets/features6.png'
import features7 from '../../assets/features7.png'
import features8 from '../../assets/features8.png'

const Features = () => {
  return (
    <div className='pt-[160px] pb-[57px] text-center'>
      <Container>
        <div>
          <h2 className='font-Poppins font-bold text-[36px] leading-[180%] mb-5'>Our <span className='text-[#00CBB8]'>Features</span></h2>
          <p className='font-Poppins text-[24px] leading-[180%] text-[#696984] mb-[176px]'>This very extraordinary feature, can make learning activities more efficient</p>
          <div>
            <div className="main flex justify-between items-center">
              <div className="left w-[60%] relative">
                <img src={features} alt="" />
                <div className="absolute left-[63px] top-[-27%] z-[-999]">
                  <img src={features1} alt="" />
                </div>
              </div>
              <div className="right w-[40%] text-start">
                <h3 className='font-Poppins font-semibold text-[40px] leading-[160%] text-[#2F327D] mb-[51px]'>A user <span className='text-[#00CBB8]'>interface designed <br /> </span> for the classroom</h3>
                <div>
                  <div className='flex items-center gap-[42px] mb-10'>
                    <div className='p-[17px] border w-[60px] h-[50px] rounded-full shadow-2xl'>
                      <img src={features2} alt="" />
                    </div>
                    <h4 className='font-Poppins text-[22px] leading-[180%] tracking-[2%]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</h4>
                  </div>
                  <div className='flex items-center gap-[42px] mb-10'>
                    <div className='p-[17px] border w-[60px] h-[50px] rounded-full shadow-2xl'>
                      <img src={features3} alt="" />
                    </div>
                    <h4 className='font-Poppins text-[22px] leading-[180%] tracking-[2%]'>TA’s and presenters can be moved to the front of the class.
                    </h4>
                  </div>
                  <div className='flex items-center gap-[42px] mb-10'>
                    <div className='p-[17px] border w-[60px] h-[50px] rounded-full shadow-2xl'>
                      <img src={features4} alt="" />
                    </div>
                    <h4 className='font-Poppins text-[22px] leading-[180%] tracking-[2%]'>Teachers can easily see all students and class data at one time.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-[160px] flex items-center justify-between text-start'>
          <div className="left w-[50%]">
            <h2 className='font-Poppins font-semibold text-[40px] leading-[160%]text-[#2F327D] mb-5'><span className='text-[#00CBB8]'>Tools</span> For Teachers <br/> And Learners</h2>
            <p className='font-Poppins text-[22px] leading-[180%] text-[#696984] max-w-[568px]'>Class has a dynamic set of teaching tools built to be deployed and used during class.
              Teachers can handout assignments in real-time for students to complete and submit.</p>
          </div>
          <div className="right w-[50%]">
            <img src={features5} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between text-start'>
          <div className="right w-[50%]">
            <img src={features6} alt="" />
          </div>
          <div className="left w-[50%]">
            <h2 className='font-Poppins font-semibold text-[40px] leading-[160%]text-[#2F327D] mb-5'>Assessments,<span className='text-[#00CBB8]'>Quizzes</span> , Tests</h2>
            <p className='font-Poppins text-[22px] leading-[180%] text-[#696984] max-w-[568px]'>Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.</p>
          </div>
        </div>
         <div className='py-[160px] flex items-center justify-between text-start'>
          <div className="left w-[50%]">
            <h2 className='font-Poppins font-semibold text-[40px] leading-[160%]text-[#2F327D] mb-5'><span className='text-[#00CBB8]'> Class Management <br/></span>Tools for Educators</h2>
            <p className='font-Poppins text-[22px] leading-[180%] text-[#696984] max-w-[568px]'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
          </div>
          <div className="right w-[50%]">
            <img src={features7} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between text-start'>
          <div className="right w-[50%]">
            <img src={features8} alt="" />
          </div>
          <div className="left w-[50%]">
            <h2 className='font-Poppins font-semibold text-[40px] leading-[160%]text-[#2F327D] mb-5'>One-on-One <br/><span className='text-[#00CBB8]'>Discussions</span></h2>
            <p className='font-Poppins text-[22px] leading-[180%] text-[#696984] max-w-[568px]'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
          </div>
        </div>
        <div className='inline-block border border-[#49BBBD] rounded-[80px] hover:bg-[#28B2DD] hover:border-none mt-[150px]'>
                      <button className='py-6 px-8 font-Poppins font-medium text-[22px] leading-auto text-[#49BBBD] hover:text-white'>See more features</button>
                    </div>
      </Container>
    </div>
  )
}

export default Features