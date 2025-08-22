import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between px-4 h-10 item-centre h-16 ">
      <div className="logo font-bold">GetMeaChai !</div>
      <ul className='flex justify-between '>
    <li>home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Sign Up</li>
    <li>Login</li>
    
      </ul>
    </nav>
  )
}

export default Navbar