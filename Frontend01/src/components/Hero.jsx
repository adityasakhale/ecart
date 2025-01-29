import React, { useEffect, useState } from 'react';

const Hero = ({ isSidebarOpen }) => {
  const images = [
    "https://i.ytimg.com/vi/kiHX0-MQHag/maxresdefault.jpg",
    "https://i.pinimg.com/736x/48/71/20/48712084b5580bb9375c92f8e745eba0.jpg",
    "https://i.pinimg.com/236x/cb/d4/bb/cbd4bb63f06d11729c5aa3968aa001d6.jpg",
    "https://www.kpboutique.in/images/bridal-aari-maggam-work-blouse-2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    // Hide Hero component when sidebar (mobile menu) is open
    !isSidebarOpen && (
      <div className="relative hero-container  w-100 h-200 overflow-hidden ">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="hero-image w-100% h-50% w-full"
        />

        {/* Left Arrow Icon */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#8249;
        </button>

        {/* Right Arrow Icon */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#8250;
        </button>
      </div>
    )
  );
};

export default Hero;
