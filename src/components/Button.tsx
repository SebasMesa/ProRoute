import React from 'react'

type Props = {
  title: string
  className?: string
  onClick?: () => void;
}

const Button = ({title, className, onClick} : Props) => {
  return (
    <>
        <button className={`py-3 px-5 bg-blue-gradient rounded-[6px] text-gray-700 font-semibold font-kodeMono ${className} hover:animate-pulse`}>{title}</button>
    </>
  )
}

export default Button