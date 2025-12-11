import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div className="w-full h-[80vh] bg-white py-20 flex flex-col items-center text-center px-4">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
      >
        No. 1 Job Hunt Website
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold leading-snug mb-4"
      >
        Search, Apply & Get Your <span className="text-purple-600">Dream Jobs</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-500 max-w-xl mb-6"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores sit amet esse fuga!
      </motion.p>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-xl flex items-center bg-white rounded-full shadow-md px-4 py-2 border"
      >
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="flex-1 outline-none text-gray-700"
        />
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full">
       Search
        </button>
      </motion.div>

      {/* Job Category Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex gap-4 mt-8 flex-wrap justify-center text-1.5xl "
      >
        {['Design', 'Development', 'Marketing', 'Finance', 'Sales'].map((category) => (
          <button className='border-2 p-2 rounded-full hover:bg-purple-500 hover:text-white transition'
            key={category}>
            {category}
          </button>
        ))}
        </motion.div>

        
    </div>
  );
}

export default Home