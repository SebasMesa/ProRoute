import React from 'react'
import styles from '../styles'


type Props = {
  title: string
  description: string
  date: string
  image?: string | JSX.Element;
  category: string
}

const BlogCard = ({title, description, date, image, category} : Props) => {
  return (
    <div className='bg-glass text-white transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2'>
        <div className='h-[250px] rounded-t-lg overflow-hidden flex justify-center items-center'>
          {/* bg-cover bg-center bg-no-repeat bg-[url("https://via.placeholder.com/1980x920")] */}
          {image}
        </div>

        <div className={`p-[2rem] font-rubik`}>
            <p><span className='text-gradient'>{category}</span> • <span className='bg-glass rounded px-[0.5rem] py-[0.2rem]'>{date}</span></p>

            <h2 className={`font-poppins text-[1.3rem] my-[1.3rem]`}>{title}</h2>

            <p className={`${styles.paragraph}`}>{description}</p>
        </div>
    </div> 

  )
}

export default BlogCard