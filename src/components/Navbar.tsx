import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonClasses = 'text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration:300'
    const Links = (
        <>
            <Link className={buttonClasses} to="/">Home</Link>
            <Link className={buttonClasses} to="/my-properties">My Properties</Link>
            <Link className={buttonClasses} to="/renovation-calculator">Renovation Calculator</Link>
        </>
    )
  return (
    <nav className="flex space-x-6 w-fullp-4 bg-gray-800">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex flex-row w-full justify-between">
                    <div className="text-gray-100 font-bold text-sm px-2 py-1">
                        REI Calculator
                    </div>
                    <div className="hidden md:block">
                        <div className="flex ml-10 items-baseline space-x-2">
                            {Links}
                    </div>
                </div>
                
                <div className="md:hidden">
                    <button onClick={()=>{setIsOpen(!isOpen)}} type='button' className="fill-gray-100">
                    This should be a picture
                    </button>
                </div>
                </div>
            </div>
        
        </div>
      {
        isOpen && (
            <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2" onClick={()=>{setIsOpen(!isOpen)}}>
                {Links}
            </div>
        )
      }
      
    </nav>
  );
};

export default Navbar;