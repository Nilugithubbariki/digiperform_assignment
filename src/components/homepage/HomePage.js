import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../footer/Footer";
const HomePage = () => {
  const items = [
    <img
      src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      alt="Image 1"
      style={{ width: "786px" }}
    />,
    <img
      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      alt="Image 2"
      style={{ width: "786px" }}
    />,
    <img
      src="https://live.staticflickr.com/65535/48014587002_8d8be889b0_b.jpg"
      alt="Image 3"
      style={{ width: "786px" }}
    />,
    <img
      src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      alt="Image 1"
      style={{ width: "786px" }}
    />,
    <img
      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      alt="Image 2"
      style={{ width: "786px" }}
    />,
    <img
      src="https://live.staticflickr.com/65535/48014587002_8d8be889b0_b.jpg"
      alt="Image 3"
      style={{ width: "786px" }}
    />,
    // Add more images as needed
  ];
  return (
    <div>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={2000}
        responsive={{
          0: { items: 2 },
          768: { items: 2 },
          1024: { items: 2 },
        }}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
