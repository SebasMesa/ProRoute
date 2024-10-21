import React from 'react'

type Props = {
  title?: string
  className?: string
  onClick?: () => void;
  icono?: React.ReactNode
}

const Button = ({title, className, onClick, icono} : Props) => {
  return (
    <>
        <button className={`py-3 px-5 bg-blue-gradient rounded-[6px] text-gray-700 font-semibold font-kodeMono ${className} hover:animate-pulse`}>{title} {icono}</button>
    </>
  )
}

export default Button