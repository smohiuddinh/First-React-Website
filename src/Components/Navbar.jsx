import React from 'react';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-10 transition duration-300 sticky-header">
      <div className="bg-customColor">
        <nav className="flex md:justify-between flex-col md:flex-row min-h-10 items-center   container mx-auto  justify-between h-16">
          <div className="logo flex items-center">
            <img src="src/images/logo.png" alt="Logo" className="h-8 mr-2 text-xl " />
            <span className="text-white text-xl font-bold">Co.</span>
          </div>
          <ul class="flex space-x-6 md:space-x-58 justify-center md:justifycenter text-white ">
          <li>
            <a href="#Home" className="text-white hover:text-purple-700">Home</a>
          </li>
          <li>
            <a href="#About" className="text-white hover:text-purple-700">About</a>
          </li>
          <li>
            <a href="#career" className="text-white hover:text-purple-700">Careers</a>
          </li>
          <li>
            <a href="#service" className="text-white hover:text-purple-700">Service</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-purple-700">Contact</a>
          </li>
      </ul>

        </nav>
      </div>
    </div>
  );
}
