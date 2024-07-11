import React from 'react';

export default function Header() {
  return (
    <div className=" bg-customColor ">
      <nav className="container mx-auto flex justify-between items-center h-16  ">
        <div className="logo flex items-center">
          <img src="src/images/logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-white text-xl font-bold"></span>
        </div>
        <ul className="flex space-x-3 justify-center md:justify-normal ">
          <li>
            <a href="#Home" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#Home" className="text-white hover:text-gray-300">Landing</a>
          </li>
          <li>
            <a href="#Home" className="text-white hover:text-gray-300">Portfolio</a>
          </li>
          <li>
            <a href="#Home" className="text-white hover:text-gray-300">Service</a>
          </li>
          <li>
            <a href="#About" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//'bg-violet-500 