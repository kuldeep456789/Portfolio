import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Button } from '../components/ui/button';
import { Mail } from 'react-feather';

const contact = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x0a0a0a,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen flex items-center justify-center p-8 text-white">
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Your Message" 
            rows={5} 
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
        <Button asChild className="gap-2 hover:scale-105 transition shadow-lg shadow-primary/20 hover:shadow-primary/30">
          <a href="mailto:example@example.com">
            <Mail size={18} /> Contact Me
          </a>
        </Button>
      </div>
    </div>
  );
};

export default contact;
