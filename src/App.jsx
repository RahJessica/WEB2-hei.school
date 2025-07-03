import { useState } from 'react'

import './App.css'
import logo from '../src/assets/photo/hei.png'
function NavBar() {
  return (
    <nav className='bg-[var(--blue_color)] flex flex-row place-content-around '>
      <div >
        <img src={logo} alt="" className='w-28' />
      </div>

      <ul className='flex flex-row gap-7 justify-center items-center py-7 text-white text-xl font-semibold'>
        <li className='text-[var(--yellow_color)] cursor-pointer'>ACCUEIL</li>
        <li className='hover:text-[var(--yellow_color)] cursor-pointer'>ACTUALITES</li>
        <li className='hover:text-[var(--yellow_color)] cursor-pointer'>BOURSES D'ETUDES</li>
        <li className='hover:text-[var(--yellow_color)] cursor-pointer'>INSCRIPTION</li>
        <li><button className='bg-[var(--yellow_color)] px-4 pb-2.5 pt-2 hover:text-[var(--blue_color)] rounded-sm'>INTRANET</button></li>
      </ul>

    </nav>
  )
}

export default NavBar
