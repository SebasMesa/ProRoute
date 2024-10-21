import React from 'react'
import { Collapse } from '@kunukn/react-collapse'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


interface Props {
    title: string;
    subtitle?: string;
    content?: string;
    children?: React.ReactNode;
    className?: string;
    classNameTitle?: string;
    classNameSubtitle?: string;
}


const FaqsToggle = ({ title, subtitle, content, children, className, classNameTitle, classNameSubtitle }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onToggle = () => setIsOpen((s) => !s)


    return (
        <div className={`my-component text-white rounded-lg border border-gray-200 my-5 ${className}`}>
            <button onClick={onToggle} className='w-full text-start flex justify-between items-center text-white font-poppins p-4'>
                <div>
                    <h2 className={`${classNameTitle}`}>
                        {title}
                    </h2>

                    <h4 className={`${classNameSubtitle}`}>
                        {subtitle}
                    </h4>

                </div>
                <IoMdArrowDropdown size={20} className={isOpen ? 'hidden' : 'block'} />
                <IoMdArrowDropup size={20} className={isOpen ? 'block' : 'hidden'} />
            </button>
            <Collapse
                isOpen={isOpen}
                transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
                <div className='text-gray-400 font-rubik'>
                    {content ? <p className='p-4'>
                        {content}
                    </p>
                        : ''
                    }
                    {children}
                </div>
            </Collapse>
        </div>
    )
}

export default FaqsToggle