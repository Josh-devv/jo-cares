import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library


function AOSWrapper() {
  useEffect(() => {
    
        AOS.init({
            offset: 200, // Offset (in px) from the original trigger point
            duration: 800, // Duration of the animation in milliseconds
            easing: 'ease-in-out', // Easing type ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
            delay: 100, // Delay (in ms) for animation to start after scrolling
            once: false, 
      });
  }, []);

  return null; // This component doesn't render anything
}

export default AOSWrapper;
