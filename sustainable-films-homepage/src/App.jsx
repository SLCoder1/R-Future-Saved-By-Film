import React, {useState} from 'react';
import Layout from "./components/Layout";

import FloatingLeaves from './components/FloatingLeaves';
import ChatBox from './ChatBox.jsx';
import chatIcon from './components/chatImage.png';
import './App.css'


export default function App() {
    const[showChatBox, setShowChatBox] = useState(false);

    const toggleChatBox = () => {
        setShowChatBox(prev => !prev);
    }
  return (
    <Layout>
      <FloatingLeaves />
        
      <div className="relative overflow-hidden min-h-screen">
        {/* Floating Images */}
        <img src="/img1.jpg" alt="Tree" className="absolute top-28 left-1/4 w-28 h-28 object-cover rounded opacity-80 z-0" />
        <img src="/img2.jpg" alt="Film Reel" className="absolute top-28 right-1/4 w-28 h-28 object-cover rounded opacity-80 z-0" />
        <img src="/img3.jpg" alt="Sky" className="absolute top-1/2 left-10 w-24 h-24 object-cover rounded opacity-80 z-0" />
        <img src="/img4.jpg" alt="Monitor" className="absolute bottom-12 left-20 w-36 h-10 object-cover rounded opacity-80 z-0" />
        <img src="/img5.jpg" alt="Green Line" className="absolute bottom-10 right-12 w-28 h-2 object-cover z-0" />

        {/* Main Heading and Blurb */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-center px-4">
          <h1 className="text-6xl font-[Georgia] font-semibold leading-snug tracking-wide mb-4">
            Green Films for<br />Green Minds
          </h1>
          <p className="text-lg max-w-2xl text-[#e6e5d8] italic">
            Sustainability in film is more than a theme—it's a movement. Through storytelling, we spotlight environmental issues,
            advocate for conscious production, and inspire action for a greener future.
          </p>
        </div>

      </div>
    </Layout>
  );
}
