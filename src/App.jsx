import { useState } from 'react'

import './App.css'
import logo from '../src/assets/photo/hei.png'
function NavBar() {
 return (
  <nav className='bg-[var(--blue_color)] flex flex-row place-content-around '>
    <div >
      <img src={logo} alt="" className='w-28'/>
    </div>

    <ul className='flex flex-row gap-5 justify-center items-center py-7 text-white text-xl font-semibold'>
      <li>ACCUEIL</li>
      <li>ACTUALITES</li>
      <li>BOURSES D'ETUDES</li>
      <li>INSCRIPTION</li>
      <li><button className='bg-[var(--yellow_color)] px-4 pb-2.5 pt-2 rounded-2xl'>INTRANET</button></li>
    </ul>

    
  </nav>
 )
}

export default NavBar
