import React from 'react'

type Props = {
  title: string
  className?: string
}

const Button = ({title, className} : Props) => {
  return (
    <>
        <button className={`py-3 px-5 bg-blue-gradient rounded-[6px] text-gray-700 font-semibold font-kodeMono ${className}`}>{title}</button>
    </>
  )
}

export default Button