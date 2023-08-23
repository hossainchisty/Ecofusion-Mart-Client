/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Carousel = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageUrls]);

  return (
    <><div
    className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrls[currentImageIndex]})`,
        backgroundSize: 'cover',
    }}
>
    <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Discover a World of Style and Convenience</h1>
        <p className="text-xl mb-12">
            Elevate Your Shopping Experience with Us
        </p>
        <a
            href="#"
            className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
        >
            Discover
        </a>
    </div>
</div>

      
      <div className="container mx-auto p-16 pt-10">
      <h2 className="text-2xl font-semibold my-4 pb-8 text-center">Popular Items</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="grid gap-4">
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1502715837142-58627c477625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                              alt="" />
                      </div>
                  </div>
                  <div className="grid gap-4">
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1491852807958-4326560208e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1505801066737-f25b349904b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                              alt="" />
                      </div>
                  </div>
                  <div className="grid gap-4">
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1441014023725-517f53f8ed61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1507003477653-4d1d05d66773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                              alt="" />
                      </div>
                  </div>
                  <div className="grid gap-4">
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1090&q=80"
                              alt="" />
                      </div>
                      <div>
                          <img
                              className="h-auto w-full rounded-lg"
                              src="https://images.unsplash.com/photo-1523916480930-3eb0627839bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                              alt="" />
                      </div>
                  </div>
              </div>
          </div></>
  
  );
};

export default Carousel;


