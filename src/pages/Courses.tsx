import React from 'react'
import styles from '@/styles'
import CoursesMain from '@/components/CoursesMain'

const Courses = () => {
  return (
    <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <CoursesMain/>
    </div>
  </main>

  )
}

export default Courses