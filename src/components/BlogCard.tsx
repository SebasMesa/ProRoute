import React from 'react'
import styles from '../styles'

const BlogCard = () => {
  return (
    <div className='bg-glass text-white rounded-lg'>
        <div className='bg-gray-500 h-[250px] rounded-t-lg overflow-hidden'>
            <img src="" alt=""/>
        </div>

        <div className={`p-[2rem] font-rubik`}>
            <span>Insight • Agosto 7, 2024</span>

            <h2 className={`font-poppins text-[1.3rem] my-[1.3rem]`}>Como aprender a programar puede cambiar tu vida</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita nostrum obcaecati. Officia, id animi?</p>
        </div>
    </div> 

  )
}

export default BlogCard