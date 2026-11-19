import React from 'react'
import Container from '../../Layout/Container'
import { FaPaintBrush } from "react-icons/fa";

const Category = () => {
    const CategoryData = [
        {
        img :"<FaPaintBrush />",
        title: 'Design',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    }]
    return (
        <div>
            <Container>
                <div className='pt-[80px] pb-[100px]'>
                    <h2 className='font-Poppins font-semibold text-[36px] leading-auto text-[#252641]'>Choice favourite course from top category</h2>
                </div>
                <div className="main">
                       {CategoryData.map((item, index) => (
                        <div key={index}>
                            <div>{item.img}</div>
                            <h2>{item.title}</h2>
                            <p>{item.para}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Category