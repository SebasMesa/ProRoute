import React from 'react'
import BlogCard from './BlogCard'
import styles from '../styles'

const Blog = () => {
  return (
    <div className={`${styles.marginY} grid md:grid-cols-3 gap-[2rem]`}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
  )
}

export default Blog