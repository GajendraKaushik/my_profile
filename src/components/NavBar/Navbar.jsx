import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="mx-2 px-2 sm:px-16 py-4">
        <div className="flex justify-between items-center">
          <a href='/'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
            >
              Gajendra
            </motion.div>

          </a>

        </div>

      </div>

    </nav>
  )
};

export default Navbar;