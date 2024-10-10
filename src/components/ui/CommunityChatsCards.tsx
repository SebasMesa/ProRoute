import React, { useState } from 'react'
import { HiUsers } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { LiaCommentSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import {Link} from 'react-router-dom'
import styles from '@/styles'

type Props = {
    title: string;
    content: string;
    likes: number;
    img?: string;
    id: number;
}

const CommunityChatsCards = ({ img }: any) => {
    const [isLiked, setIsLiked] = useState(false);
    const [like, setLike] = useState(0);
    const [isFilled, setIsFilled] = useState(false);

    const [isCommented, setIsCommented] = useState(false);

    const handleComment = () => {
        if (!isCommented) {
            setIsCommented(true);
        }
    };

    const handleClick = () => {
        setIsFilled(!isFilled);
        if (isFilled) {
            setLike(like - 1);
        } else {
            setLike(like + 1);
        }
    };
    return (
        <div className='text-white border border border-[#3d3d3d] px-[2rem] py-[2rem] rounded-lg my-[1rem] font-rubik'>
            <span className='flex items-center gap-[.3rem] text-dimWhite cursor-pointer hover:underline'>
                <HiUsers className='text-secondary' size={20} />
                Python LatinoAmerica
            </span>

            <div className='mt-[1rem] flex'>
                <div className='bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]'>
                    S
                </div>

                <div className={`${styles.paragraph}`}>
                    <div className='flex gap-[.5rem] items-center justify-between '>
                        <Link to={'/account'} className='text-dimWhite gap-[.3rem] flex items-center hover:underline'>
                            <span className='text-white'>Sebas Mesa</span>
                            <span>@sebasmesa</span>
                            <span>·</span>
                            <span>2h</span>
                        </Link>

                        <div>
                            <BsThreeDots size={25} />
                        </div>
                    </div>


                    <p className={`w-[85%] md:w-full text-white text-[17px]`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque et error repellat aut, voluptates,</p>

                    <img src="https://via.placeholder.com/150x150" alt="Imagen" className={`w-[100%] h-[300px] object-cover mt-[1.5rem] ${img ? '' : 'hidden'}`} />

                    <div className='flex items-center mt-[1.5rem]'>
                        <div className='flex items-center mr-[1.5rem]'>
                            <span className='cursor-pointer mr-[.3rem]' onClick={handleClick}>
                                {isFilled ? <IoMdHeart size={25} color='red' /> : <IoIosHeartEmpty size={25} />}
                            </span>
                            <span className='text-dimWhite'>{like}</span>

                        </div>
                        <span className='cursor-pointer' onClick={handleComment}>
                            <LiaCommentSolid size={25} />
                        </span>
                    </div>


                    <form>
                        <input type="text" placeholder="Escribe un comentario" className={`${isCommented ? 'block' : 'hidden'} mt-[2rem] w-full px-[2rem] pt-[1.5rem] pb-[2rem] bg-transparent border border-[#3d3d3d] rounded-lg mb-[2rem] text-white`} />
                    </form>

                </div>
            </div>
        </div>

    )
}

export default CommunityChatsCards