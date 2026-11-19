import React from 'react'
import Container from '../../Layout/Container'
import { FaPaintBrush } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { LiaBusSolid } from "react-icons/lia";
import { BsFileEarmarkEaselFill } from "react-icons/bs";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { MdOutlineVideoCameraFront } from "react-icons/md";


const Category = () => {
    const CategoryData = [
        {
        img :<FaPaintBrush  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Design',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<FaDesktop  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Development',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<FaBurger  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Development',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<LiaBusSolid  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Business',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<BsFileEarmarkEaselFill  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Marketing',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<BiSolidPhotoAlbum  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Photography',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<MdOutlineVideoCameraFront  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Acting',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
        {
        img :<LiaBusSolid  size={30} className='text-[#49BBBD] group-hover:text-[#252641]'/>,
        title: 'Business',
        para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },]
    return (
        <div>
            <Container>
                <div className='pt-[80px] pb-[100px]'>
                    <h2 className='font-Poppins font-semibold text-[36px] leading-auto text-[#252641]'>Choice favourite course from top category</h2>
                </div>
                <div className="main grid grid-cols-4 gap-[30px] text-center">
                       {CategoryData.map((item, index) => (
                        <div key={index}>
                            <div className='pt-[30px] px-[32px] pb-[60px] rounded-[20px] shadow-lg'>
                                <div className='w-[90px] h-[90px] rounded-[4px] bg-[#D9F1F1] hover:bg-[#D1D1D7] flex justify-center items-center mx-auto group'>{item.img}</div>
                            <h2 className='font-Poppins font-semibold text-[30px] leading-auto tracking-[2%] pt-5 pb-6'>{item.title}</h2>
                            <p className='font-Poppins text-[18px] leading-auto tracking-[2%] text-[#696984]'>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Category