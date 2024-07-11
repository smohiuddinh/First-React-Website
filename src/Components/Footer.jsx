import React from 'react';

export default function Footer() {
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
                            <li><a href="#home" className="text-blue-400 hover:text-blue-200">Home</a></li>
                            <li><a href="#portfolio" className="text-blue-400 hover:text-blue-200">Portfolio</a></li>
                            <li><a href="#services" className="text-blue-400 hover:text-blue-200">Services</a></li>
                            <li><a href="#team" className="text-blue-400 hover:text-blue-200">Team</a></li>
                            <li><a href="#about" className="text-blue-400 hover:text-blue-200">About Us</a></li>
                            <li><a href="#career" className="text-blue-400 hover:text-blue-200">Career</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold">Services</h4>
                        <ul>
                            <li><a href="#ui-ux" className="text-blue-400 hover:text-blue-200">UI/UX Design</a></li>
                            <li><a href="#web-dev" className="text-blue-400 hover:text-blue-200">Web Development</a></li>
                            <li><a href="#digital-marketing" className="text-blue-400 hover:text-blue-200">Digital Marketing</a></li>
                            <li><a href="#app-dev" className="text-blue-400 hover:text-blue-200">App Development</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Legal</h4>
                        <ul>
                            <li><a href="#terms" className="text-blue-400 hover:text-blue-200">Terms & Conditions</a></li>
                            <li><a href="#privacy" className="text-blue-400 hover:text-blue-200">Privacy Policy</a></li>
                            <li><a href="#faqs" className="text-blue-400 hover:text-blue-200">FAQs</a></li>
                            <li><a href="#blog" className="text-blue-400 hover:text-blue-200">Blog</a></li>
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
