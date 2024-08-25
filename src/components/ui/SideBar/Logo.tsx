import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 overflow-hidden mr-[1rem]" >
        <img src="../../../public/logoP.png" alt="" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>route</span></h2>
      </motion.span>
    </Link>
  );
};
