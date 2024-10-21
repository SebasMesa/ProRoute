import React from 'react'
import FaqsToggle from '@/components/ui/FaqsToggle'
import { IoDocumentTextOutline } from "react-icons/io5";
import styles from '@/styles'

interface Props {
  title: string
  items: {
    title: string
    subtitle: string
    sections: string[]
  }
}


const CoursesChapters = ({title, items} : Props) => {
  return (
  
<FaqsToggle title={title} subtitle={items.subtitle} className="my-[0] overflow-hidden border-none bg-glass px-0 rounded-none" classNameTitle="text-secondary font-poppins" classNameSubtitle="text-[17px] mt-[.5rem]">
    <div className="bg-glass px-0 py-0">
      {items.sections.map((section, index) => (
        <ul key={index} className="px-4 py-3 text-white flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="checkbox-round mr-[1rem]" />
            <li>{section}</li>
          </div>
          {/* <IoDocumentTextOutline size={23} className="mr-[1rem] text-secondary" /> */}
        </ul>
      ))}
    </div>
  </FaqsToggle>

)
}

export default CoursesChapters


