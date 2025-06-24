import React from "react";

const Navbar = ()=> {
    return (
    <div className='w-full bg-black py-7 flex justify-between'>
      <div className='text-white text-2xl ml-2'>
        GAJENDRA
      </div>
      <div className='flex align-middle justify-center gap-5 text-xl text-white mr-3'>
        <p>Profile</p>
        <p>Skills</p>
        <p>Projects</p>
      </div>
    </div>   
    )
};

export default Navbar;