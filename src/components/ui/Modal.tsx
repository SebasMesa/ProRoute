import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai";
import { ProudCoder } from "undraw-react"
import styles from '@/styles';
import Button from '@/components/Button';

const Modal = () => {
  return (
    <div className='bg-[#0000004d] h-full w-full left-0 top-0 z-[1000] flex justify-center items-center fixed'>
      <div className='bg-glass px-[3rem] w-[1000px] py-[2rem] rounded-lg mx-[1.5rem]'>
        <div className='flex justify-between items-center w-full border-b border-gray-900 pb-[1.5rem]'>
          <Link to={'/'}>
            <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>route</span></h2>
          </Link>

          <div className='cursor-pointer rounded-lg p-[0.5rem] z-1000 hover:bg-glass'>
            <AiOutlineClose size={'25px'} className='text-white' />
          </div>
        </div>

        <div className='mt-[2rem] grid md:grid-cols-2'>
          <div>
            <h2 className={`${styles.heading2}`}>Lorem ipsum dolor sit amet.</h2>
            <p className={`${styles.paragraph} mt-[1rem] md:w-[80%]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illo laborum saepe dolores iste officia ea veritatis, nisi natus sequi?</p>
            <Button title='Empezar' className='mt-[2rem] mb-[1.5rem] md:mb-0' />
          </div>

          {/* <img className='hidden md:block' src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> */}

          <div className="hidden md:block">
            <ProudCoder color="#00f6ff" size={280} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal