// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./VideoCarousel.css"; // Custom CSS for additional styling

// const videos = [
//   "https://www.youtube.com/embed/dQw4w9WgXcQ",
//   "https://www.youtube.com/embed/3JZ_D3ELwOQ",
//   "https://www.youtube.com/embed/V-_O7nl0Ii0",
//   "https://www.youtube.com/embed/kJQP7kiw5Fk",
//   "https://www.youtube.com/embed/2Vv-BfVoq4g",
// ];

// const VideoCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "25%",
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="video-carousel-container">
//       <h2>Here’s what our customers say</h2>
//       <Slider {...settings}>
//         {videos.map((video, index) => (
//           <div key={index} className="video-container">
//             <iframe
//               width="100%"
//               height="315"
//               src={video}
//               title={`video-${index}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoCarousel;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoCarousel.css"; // Custom CSS for additional styling

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/V-_O7nl0Ii0",
  "https://www.youtube.com/embed/kJQP7kiw5Fk",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
];

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // No padding to ensure overlap
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentVideo(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "0", // Adjust for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0", // Adjust for smaller screens
        },
      },
    ],
  };

  return (
    <div className="container video-carousel-container min-h-screen">
      <h2 className="text-center text-6xl font-bold mb-12">
        Here’s what our customers say
      </h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-container ${
              index === currentVideo ? "active" : ""
            }`}
          >
            <iframe
              width="100%"
              height="315"
              src={video}
              title={`video-${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
