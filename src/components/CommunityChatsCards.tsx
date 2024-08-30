import React, { useState } from 'react'
import { HiUsers } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { LiaCommentSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import styles from '@/styles'



const CommunityChatsCards = () => {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
      setIsFilled(!isFilled);
    };
    return (
        <div className='text-white border border border-[#3d3d3d] px-[2rem] py-[2rem] rounded-lg my-[1rem] font-rubik'>
            <span className='flex items-center gap-[.3rem] text-dimWhite cursor-pointer hover:underline'>
                <HiUsers className='text-secondary' size={20}/>
                Python LatinoAmerica
            </span>

            <div className='mt-[1rem] flex'>
                <div className='bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]'>
                    S
                </div>

                <div className={`${styles.paragraph}`}>
                    <div className='flex gap-[.5rem] items-center justify-between '>
                        <div className='text-dimWhite gap-[.3rem] flex items-center '>
                            <span className='text-white'>Sebas Mesa</span>
                            <span>@sebasmesa</span>
                            <span>·</span>
                            <span>2h</span>
                        </div>

                        <div>
                            <BsThreeDots size={25}/>
                        </div>
                    </div>


                    <p className={`w-[85%] md:w-full text-white`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque et error repellat aut, voluptates,</p>

                    <div className='flex items-center gap-[1rem] mt-[1.5rem]'>
                        <span className='cursor-pointer' onClick={handleClick}>
                            {isFilled ? <IoMdHeart size={25} color='red'/> : <IoIosHeartEmpty size={25}/>}
                        </span>
                        <span className='cursor-pointer'>
                            <LiaCommentSolid size={25}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CommunityChatsCards