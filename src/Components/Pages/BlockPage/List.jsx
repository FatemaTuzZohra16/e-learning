import React from 'react'
import Container from '../../Layout/Container'
import list1 from '../../../assets/list1.png'
import list2 from '../../../assets/list2.png'
import list3 from '../../../assets/list3.png'
import list4 from '../../../assets/list4.png'

const List = () => {
  return (
    <div className='py-[80px]'>
        <Container>
            <div>
                <h2 className='font-Poppins font-bold text-[30px] leading-auto'>Reading blog list</h2>
                <div className='flex flex-wrap items-center gap-18 mt-6'>
                    <img src={list1} alt=""  className="w-74 h-73"/>
                    <img src={list2} alt=""  className="w-74 h-73"/>
                    <img src={list3} alt=""  className="w-74 h-73"/>
                    <img src={list4} alt=""  className="w-74 h-73"/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default List