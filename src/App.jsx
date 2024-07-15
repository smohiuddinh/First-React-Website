import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './theme.css'; 
import About from './Components/About';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Test from './Components/Test';
import CardsList from './Components/CardsList';
import CreativeList from './Components/CreativeList';


function App() {
  const cardsData = [
    { heading: 'UI/UX Desginer', p: "We provide services with the best designs than our designer team for your business." },
    { heading: 'Web Developer', p: "We provide services with the best designs than our designer team for your business." },
    { heading: 'Graphic Designer', p: "We provide services with the best designs than our designer team for your business." },
  ];

  const creativeMinds = [
    {
      name: 'Robert Hussain',
      field: 'We provide services with the best designs',
      image: 'src/images/Screenshot 2024-07-11 at 2.46.01 PM.png'
    },
    {
      name: 'Johnson Advertson',
      field: 'We provide services with the best designs',
      image: 'src/images/Screenshot 2024-07-11 at 2.46.22 PM.png'
    },
    {
      name: 'Syed Hussain',
      field: 'We provide services with the best designs',
      image: 'src/images/pq.png'
    }, ];

  return (
    <div>
      <Navbar />
      <Home />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#08111F" fill-opacity="1" d="M0,224L120,218.7C240,213,480,203,720,170.7C960,139,1200,85,1320,58.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <Banner p1="High - Impact Services" h1="We help Brands with" id="service" />

      <div className=" container mx-auto">
        <CardsList cards={cardsData} />
      </div>


      <br /><br />

      <Banner p1="Company Facts" h1="We are proud of our team" id="About" />

      <br /><br />

      <About />
      <br /><br />

      <Banner id="career" p1="Our Project" h1="Some of our finest work." />

      <br /><br />


      <Test />

      <Banner p1="Our Project" h1="Creative Minds" />
      <br /><br />

      <div className=" container mx-auto">
        <CreativeList Creative= {creativeMinds} />
      </div>
      <br /><br />

      <Banner p1="Connect To Web" h1="Contact Us" id='contact' />

      <ContactMe />

      <br /><br />

      <Footer />
    </div>
  );
}

export default App;
