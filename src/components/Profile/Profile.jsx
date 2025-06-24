import React from 'react'

const Profile = () =>{
    return (
    <div className='w-full flex justify-between bg-black text-white'>
      <div className='name-section ml-3 w-1/2'>
       <p className='text-sl'>Hi, I'm</p>
        <p className='text-3xl'>Gajendra</p>
        <p className='text-2xl'>Kumar Kaushik</p>
        <p>Software Engineer with 3.5 years of experience building scalable, 
            high-performance systems. Passionate about blending intuitive front-end design with robust back-end functionality.
        </p>
        <button>Resume</button>

        <div className='social-icon-section flex justify-start gap-2'>
            <p>github</p>
            <p>Linkdin</p>
            <p>Email</p>
            <p>Code,TUF</p>
        </div>

      </div>
      <div className='image-section'>
        
      </div>
    </div>
    )
}

export default Profile;