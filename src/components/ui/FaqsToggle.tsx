import React from 'react'
import { Collapse } from '@kunukn/react-collapse'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


const FaqsToggle = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onToggle = () => setIsOpen((s) => !s)


    return (
        <div className="my-component text-white p-4 rounded-lg border border-gray-200 my-5">
            <button onClick={onToggle} className='w-full text-start flex justify-between items-center text-white font-kodeMono'>
                {title}
                <IoMdArrowDropdown size={20} className={isOpen ? 'hidden' : 'block'} />
                <IoMdArrowDropup size={20} className={isOpen ? 'block' : 'hidden'} />
            </button>
            <Collapse
                isOpen={isOpen}
                transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
                <p className='mt-8 text-gray-400'>{content}</p>
            </Collapse>
        </div>
    )
}

export default FaqsToggle