import { useState } from 'react';

export const Carrusel=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    ];
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % items.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };
    return (
        <div className="carousel w-full">
      <div className="carousel-item w-full">
        <img src={items[currentIndex]} className="w-full" alt="carousel item" />
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className={`btn btn-xs ${index === currentIndex ? "btn-active" : ""}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    );

}
