import React, { useState } from "react"; 
import { NavLink } from "react-router-dom"; 
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io"; 
 
const Navbar = () => { 
  // State to manage the visibility of the menu 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
 
  // Function to toggle the menu's visibility 
  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen); 
  }; 
 
  return ( 
    <div> 
      <header className="flex flex-wrap fixed z-50 sm:w-full bg-gray-900 py-4"> 
        <nav 
          className="max-w-[94rem] w-full mx-auto px-4" 
          aria-label="Global" 
        > 
          <div className="flex items-center justify-between"> 
            <a className="flex-none text-xl font-semibold text-white" href="#"> 
              AhmadWaleedHamid
            </a> 
            <div> 
              <button 
                onClick={toggleMenu} // Attach the toggle function to the onClick event 
                type="button" 
                className="text-3xl inline-flex justify-center items-center text-white align-middle " 
                aria-controls="navbar-primary" 
                aria-label="Toggle navigation" 
              > 
                {/* Conditional rendering for the icons based on isMenuOpen state */} 
                {isMenuOpen ? ( 
                  <IoIosArrowDropupCircle /> 
                ) : ( 
                  <IoIosArrowDropdownCircle/> 
                )} 
              </button> 
            </div> 
          </div> 
          {/* Update the className based on isMenuOpen state to show/hide the menu */} 
          <div 
            id="navbar-primary" 
            className={`${ 
              isMenuOpen ? "block" : "hidden" 
            } hs-collapse overflow-hidden transition-all duration-300`} 
          > 
            <div className="flex flex-col gap-5 mt-5"> 
              <button onClick={toggleMenu} className="font-medium text-white border-b border-gray-700" aria-current="page"> 
                <NavLink to='/'>Home</NavLink> 
              </button> 
              <button onClick={toggleMenu} className="font-medium text-gray-300 hover:text-white border-b border-gray-700"> 
              <NavLink to='/products'>Products</NavLink> 
              </button> 
              <button onClick={toggleMenu} className="font-medium text-gray-300 hover:text-white border-b border-gray-700"> 
              <NavLink to='/orders'>Orders</NavLink> 
              </button> 
            </div> 
          </div> 
        </nav> 
      </header> 
    </div> 
  ); 
}; 
 
export default Navbar;