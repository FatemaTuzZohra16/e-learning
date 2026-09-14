import React from 'react'
import Container from '../Layout/Container'
import news from '../../assets/news.png'
import news1 from '../../assets/news1.png'
import news2 from '../../assets/news2.png'
import news3 from '../../assets/news3.png'

const News = () => {
  return (
    <div className='pt-[150px]'>
        <Container>
            <div className='text-center'>
                <h1 className='font-sans font-bold text-[36px] leading-[180%] text-[#2F327D]'>Lastest News and Resources</h1>
                <p className='font-Nunito text-[24px] leading-[180%] text-[#696984] pt-5 pb-[100px]'>See the developments that have occurred to TOTC in the world</p>
            </div>
            <div className='flex gap-[120px] items-center pb-[115px]'>
                <div className="left w-[40%]">
                    <img src={news} alt="" />
                    <div className='mt-10 mb-5'>
                        <button className='font-poppins font-medium text-[20px] leading-[180%] tracking-[2%] text-white py-[2px] px-9 bg-[#49BBBD] rounded-[80px]'>NEWS</button>
                    </div>
                    <h3 className='font-poppins font-medium text-[26px] leading-[180%]text-[#252641]'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                    <p className='font-poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984] pt-5 pb-7'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <button className='font-poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984] border-b'>Read more</button>
                </div>
               <div className="right w-[60%]">
                 <div className="flex gap-10">
                    <div>
                        <img src={news1} alt="" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-medium text-[22px] leading-[180%] mb-5'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h2>
                        <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>Class Technologies Inc., the company that created Class,...</p>
                    </div>
                </div>
                 <div className="flex gap-10 mt-[50px]">
                    <div>
                        <img src={news2} alt="" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-medium text-[22px] leading-[180%] mb-5'>Zoom’s earliest investors are betting millions on a better Zoom for schools</h2>
                        <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                    </div>
                </div>
                 <div className="flex gap-10 mt-[50px]">
                    <div>
                        <img src={news3} alt="" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-medium text-[22px] leading-[180%] mb-5'>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h2>
                        <p className='font-Poppins text-[20px] leading-[180%] tracking-[2%] text-[#696984]'>This year, investors have reaped big financial returns from betting on Zoom...</p>
                    </div>
                </div>
               </div>
            </div>
        </Container>
    </div>
  )
}

export default News