import React from 'react';
// import homeimage from 'Website-React/src/images/Home.png';
export default function Home() {
    return (
        <section className="banner bg-customColor text-white py-16" id="Home"  >
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Make your <span className='text-blue-600' >team</span>  <span className=' text-purple-600' >work</span> together</h1>
                        <p className="text-lg leading-relaxed mb-4">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                        </p>
                        <p >
                            Explore our services, learn about our mission, and discover how we can help you achieve
                            your goals.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#About"
                                className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-lg hover:bg-purple-600  transition-colors duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div>
                        < img
                            src="src/images/Home.png"
                            alt="About Us"
                            className="w-full h-auto rounded-md shadow-lg"
                        />
                    </div>
                </div>

            </div>

        </section>

    );
}
