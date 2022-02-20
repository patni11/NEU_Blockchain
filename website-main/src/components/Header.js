import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// markup
const Header = () => {
  return (
    <header>
        {/* display items in flexbox adding 4rem padding to top-bottom and 4rem margin to top(if small make it 12)*/}
        <nav className="container flex items-center py-4 mt-2"> 
            <div className="py-1 cursor-pointer" >
                <img src="https://www.neublockchain.org/static/7928f80e1400540cd6bbc7452eb26f34/ff4be/android-chrome-512x512.png">
                </img>
            </div>
            {/* Make it hidden by default: if small screen display, push items to right and center them with a gap between them(3rem)*/}
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-nub-white uppercase text-xs ">
                <li className="cursor-pointer hover:text-nub-red "> Events </li>
                <li className="cursor-pointer hover:text-nub-red"> Team </li>
                <li className="cursor-pointer hover:text-nub-red"> Research </li>
                <li className="cursor-pointer hover:text-nub-red"> Contact Us </li>
            </ul>
            <div className="flex sm:hidden flex-1 justify-end">
                <FontAwesomeIcon className="text-2xl text-nub-red" icon={faBars} />
            </div>
        </nav>
    </header>
  )
}

export default Header
