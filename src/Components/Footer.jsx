import React from 'react';
import List from './List';

export default function Footer() {
  const items = [
    { text: 'UI/UX Designer', href: '#item1' },
    { text: 'Web Developer', href: '#item2' },
    { text: 'Game Developer ', href: '#item3' },

    { text: 'BlockChain Designer', href: '#item1' },
    { text: 'IOS Developer', href: '#item2' },
    { text: 'Andriod Developer ', href: '#item3' },
  ];

  const item2 = [
    { text: 'Software Development', href: '#item1' },
    { text: 'API Development', href: '#item2' },
    { text: 'Cloud Computing Services', href: '#item3' },
    { text: 'Network Management', href: '#item1' },
  ];
  const item3 = [
    { text: 'Analytics', href: '#item1' },
    { text: 'Warehousing', href: '#item2' },
    { text: 'IT Consulting', href: '#item3' },
  ];

  return (
    <footer className="footer bg-customColor text-white py-4 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-semibold">About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esmskmsomsmksm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Menu</h4>
            <ul>
              <List items={items} />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul>
              <List items={item2} />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul>
              <List items={item3} />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <address>
              Shar-e-Faisal, near Habit, Karachi, Pakistan<br />
              Phone: (+92) 33-7890<br />
              Email: <a href="mailto:smohiuddinh@gamil.com" className="text-blue-400 hover:text-blue-200">smohiuddinh@gamil.com</a>
            </address>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Developed By : Syed All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
