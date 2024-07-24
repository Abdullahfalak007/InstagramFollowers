// // // BuyFollowers.js
// // import React from "react";
// // import styled from "styled-components";
// // import options from "../data/options.json";

// // const BuyFollowers = () => {
// //   return (
// //     <Wrapper>
// //       <div className="card">
// //         <div className="options">
// //           {options.map((option, index) => (
// //             <div
// //               key={index}
// //               className={`option ${option.highlighted ? "highlighted" : ""}`}
// //             >
// //               <div className="amount">{option.amount}</div>
// //               <div className="label">{option.label}</div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="price">$1.38</div>
// //         <button className="order-button">Order Now</button>
// //       </div>
// //     </Wrapper>
// //   );
// // };

// // const Wrapper = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh;
// //   background-color: #ffffff;
// //   margin-top: 2rem;

// //   .card {
// //     background-color: white;
// //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //     border-radius: 8px;
// //     padding: 24px;
// //     max-width: auto;
// //     text-align: center;
// //   }

// //   .options {
// //     display: grid;
// //     grid-template-columns: repeat(4, 1fr);
// //     gap: 16px;
// //     margin-bottom: 16px;
// //   }

// //   .option {
// //     background-color: #f2efef;
// //     border-radius: 8px;
// //     padding: 24px;
// //     text-align: center;
// //     transition: background-color 0.3s, color 0.3s;
// //     cursor: pointer;

// //     &:hover {
// //       background-color: #ff6347;
// //       color: white;
// //     }

// //     &.highlighted {
// //       background-color: #ff6347;
// //       color: white;
// //     }

// //     .amount {
// //       font-size: 1.9rem;
// //       font-weight: bolder;
// //     }

// //     .label {
// //       font-size: 2rem;
// //       color: #000000;

// //       &.highlighted {
// //         color: #ffffff;
// //       }
// //     }
// //   }

// //   .price {
// //     font-size: 4rem;
// //     font-weight: bold;
// //     margin-bottom: 16px;
// //   }

// //   .order-button {
// //     background: linear-gradient(to right, #bbaec4, #1433ff, #030141);
// //     color: white;
// //     border: none;
// //     padding: 12px 24px;
// //     border-radius: 8px;
// //     cursor: pointer;
// //     font-size: 3rem;
// //     transition: background 0.3s;

// //     &:hover {
// //       background: linear-gradient(to right, #070380, #1433ff, #bbaec4);
// //     }
// //   }
// // `;

// // export default BuyFollowers;

// // BuyFollowers.js
// import React from "react";
// import options from "../data/options.json";
// import { Button } from "../styles/Button";
// import GetStarted from "./GetStarted";
// import { useNavigate } from "react-router-dom";

// const BuyFollowers = () => {
//   const navigate = useNavigate();

//   const handleOrderNowClick = () => {
//     navigate("/getstarted"); // Make sure your route is set up correctly
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-white">
//         <div className="bg-stone-100 shadow-lg rounded-lg p-6 c text-center ">
//           <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-4">
//             {options.map((option, index) => (
//               <div
//                 key={index}
//                 className={`bg-gray-200 rounded-lg p-6 cursor-pointer transition duration-300 ease-in-out hover:bg-red-600 hover:text-white ${
//                   option.highlighted ? "bg-red-600 text-white" : ""
//                 } w-45 h-45`}
//               >
//                 <div className="text-2xl font-bold">{option.amount}</div>
//                 <div className="text-3xl mt-2">{option.label}</div>
//               </div>
//             ))}
//           </div>
//           <div className="text-6xl font-bold mb-4">$1.38</div>
//           <Button onClick={handleOrderNowClick}>Order Now</Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BuyFollowers;

// import React from "react";
// import styled from "styled-components";
// import options from "../data/options.json";
// import { useNavigate } from "react-router-dom";

// const BuyFollowers = () => {
//   const navigate = useNavigate();

//   const handleOrderNowClick = () => {
//     navigate("/getstarted"); // Make sure your route is set up correctly
//   };

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="header">
//           <h1>
//             Buy Instagram Likes <span>with Instant Delivery</span>
//           </h1>
//           <p>
//             At Twicsy, you can buy Instagram likes quickly, safely, and easily
//             with just a few clicks. See our deals below!
//           </p>
//         </div>
//         <div className="content">
//           <div className="column">
//             <div className="card high-quality">
//               <h2>High Quality Likes</h2>
//               <ul>
//                 <li>REAL likes from REAL people</li>
//                 <li>Guaranteed Instant Delivery</li>
//                 <li>Option to split likes on multiple pictures</li>
//                 <li>Includes video views</li>
//                 <li>No password required</li>
//                 <li>Fast Delivery (gradual or instant)</li>
//                 <li>24/7 support</li>
//               </ul>
//             </div>
//           </div>
//           <div className="column">
//             <div className="card premium">
//               <h2>Premium Likes</h2>
//               <ul>
//                 <li>REAL likes from ACTIVE people</li>
//                 <li>Increased chance to reach explore page</li>
//                 <li>Guaranteed Instant Delivery</li>
//                 <li>Option to split likes on multiple pictures</li>
//                 <li>Includes video views</li>
//                 <li>No password required</li>
//                 <li>Fast Delivery (gradual or instant)</li>
//                 <li>24/7 support</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="pricing">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               className={`price-option ${
//                 option.highlighted ? "highlighted" : ""
//               }`}
//             >
//               <div className="amount">{option.amount}</div>
//               <div className="discount">{option.discount}% off</div>
//             </div>
//           ))}
//         </div>
//         <div className="price-info">
//           <div className="final-price">$1.47</div>
//           <div className="savings">You're saving $0.52</div>
//         </div>
//         <button className="order-button" onClick={handleOrderNowClick}>
//           Buy Now
//         </button>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   .container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 2rem;
//     background-color: #ffffff;
//   }

//   .header {
//     text-align: center;
//     margin-bottom: 2rem;

//     h1 {
//       font-size: 2.5rem;
//       font-weight: bold;

//       span {
//         color: #ff6347;
//       }
//     }

//     p {
//       font-size: 1rem;
//       color: #666;
//     }
//   }

//   .content {
//     display: flex;
//     justify-content: center;
//     gap: 2rem;
//     margin-bottom: 2rem;

//     .column {
//       flex: 1;

//       .card {
//         background-color: #f2f2f2;
//         border-radius: 8px;
//         padding: 1rem;
//         text-align: left;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//         h2 {
//           font-size: 1.5rem;
//           font-weight: bold;
//           margin-bottom: 1rem;
//         }

//         ul {
//           list-style-type: none;
//           padding: 0;

//           li {
//             font-size: 1rem;
//             margin-bottom: 0.5rem;
//           }
//         }
//       }

//       .high-quality {
//         background-color: #ffffff;
//       }

//       .premium {
//         background-color: #ff6347;
//         color: #ffffff;
//       }
//     }
//   }

//   .pricing {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 1rem;
//     margin-bottom: 2rem;

//     .price-option {
//       background-color: #f2f2f2;
//       border-radius: 8px;
//       padding: 1rem;
//       text-align: center;
//       width: 100px;
//       transition: background-color 0.3s, color 0.3s;
//       cursor: pointer;

//       &:hover {
//         background-color: #ff6347;
//         color: white;
//       }

//       &.highlighted {
//         background-color: #ff6347;
//         color: white;
//       }

//       .amount {
//         font-size: 1.5rem;
//         font-weight: bold;
//       }

//       .discount {
//         font-size: 1rem;
//       }
//     }
//   }

//   .price-info {
//     text-align: center;
//     margin-bottom: 2rem;

//     .final-price {
//       font-size: 2rem;
//       font-weight: bold;
//     }

//     .savings {
//       font-size: 1rem;
//       color: #666;
//     }
//   }

//   .order-button {
//     background: linear-gradient(to right, #ff6347, #ff4500);
//     color: white;
//     border: none;
//     padding: 1rem 2rem;
//     border-radius: 8px;
//     cursor: pointer;
//     font-size: 1rem;
//     transition: background 0.3s;

//     &:hover {
//       background: linear-gradient(to right, #ff4500, #ff6347);
//     }
//   }
// `;

// export default BuyFollowers;
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import options from "../data/options.json";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";

const BuyFollowers = () => {
  const navigate = useNavigate();
  const [highQualityActive, setHighQualityActive] = useState(false);
  const [activeFollowersActive, setActiveFollowersActive] = useState(false);

  const handleHighQualityClick = () => {
    setHighQualityActive(true);
    setActiveFollowersActive(false);
  };

  const handleActiveFollowersClick = () => {
    setActiveFollowersActive(true);
    setHighQualityActive(false);
  };

  const handleOrderNowClick = () => {
    navigate("/getstarted"); // Make sure your route is set up correctly
  };

  return (
    <div className="container min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Buy Instagram Likes{" "}
              <span className="text-orange-600">with Instant Delivery</span>
            </h1>
            <p className="text-gray-600 mt-4">
              At Twicsy, you can buy Instagram likes quickly, safely, and easily
              with just a few clicks. See our deals below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              onClick={handleHighQualityClick}
              className={`relative bg-white border ${
                highQualityActive ? "border-red-500" : "border-white-500"
              } h-96 p-8 rounded-lg shadow-md cursor-pointer border-2`}
            >
              <h2 className="text-xl font-bold mb-4 text-red-600">
                High Quality Followers
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  High quality followers
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Fast Delivery
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  No password required
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 support
                </li>
                {/* Other list items */}
              </ul>
              <div className="absolute bottom-4 right-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-red-600 rounded-full"
                />
              </div>
            </div>
            <div
              onClick={handleActiveFollowersClick}
              className={`relative bg-white border ${
                activeFollowersActive ? "border-orange-600" : "border-white-500"
              } h-96 p-8 rounded-lg shadow-md cursor-pointer border-2`}
            >
              <h2 className="text-xl font-bold mb-4 text-orange-600">
                Active Followers
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Real Active followers
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Guaranteed Delivery
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  30 day refills
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  No password required
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 support
                </li>
                {/* Other list items */}
              </ul>
              <div className="absolute bottom-4 right-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-orange-600 rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center shadow-md ${
                  option.highlighted
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                <div className="text-2xl font-bold">{option.amount}</div>
                <div className="text-lg">{option.discount}% off</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">$1.47</div>
            <div className="text-gray-600">You're saving $0.52</div>
          </div>
          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full shadow-md hover:from-orange-600 hover:to-orange-700 transition"
              onClick={handleOrderNowClick}
            >
              Buy Now
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="../images/insta.png" alt="Slide 1" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src="../images/instalikes.png" alt="Slide 2" />
            </div>
            <div>
              <img src="../images/insta.png" alt="Slide 3" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BuyFollowers;
