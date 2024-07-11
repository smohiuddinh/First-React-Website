import React from 'react';

export default function About() {
    return (
        <section className=" bg-aboutColor text-white py-16 rounded-lg " >

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl text-blue-600 font-bold mb-4"> What Makes us Different?                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            We bring solutions to make life easier for our customers.

                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our mission is to provide innovative solutions that empower businesses worldwide.
                            <br />
                            With a focus on quality and customer satisfaction, we aim to exceed expectations.
                        </p>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className='font-bold'>Innovative Thinking
                                </h1>
                                <p className='text-gray-500' >There are many variations of passages of Lorem Ipsum available

                                </p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Creativity</h1>
                                <p className='text-gray-500'>Curabitur blandit lacus porttitor ridiculus mus.</p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className='font-bold' >Rapid Solutions</h1>
                                <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Top-Notch Support
                                </h1>
                                <p className='text-gray-500'> It has survived not only five centuries, but also the leap into electronic typesetting</p>
                            </div>

                        </div>
                       
                    </div>




                    <div>


                        <img
                            src="src/images/About2.png"
                            alt="About Us"
                            className="w-full h-auto rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
