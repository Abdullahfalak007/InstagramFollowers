// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
// import styled from "styled-components";

// const HeroSection = ({ myData }) => {
//   const { name } = myData;

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="hero-section-data">
//             <p className="intro-data">Buy </p>
//             <h1> {name} </h1>
//             <p>
//               Instagram is one of the best social media platforms to reach
//               millions of followers. Buying active and real Instagram followers
//               will allow you to increase your network of followers naturally.
//               Not only this but you will also save your precious time and get
//               the job done in an effortless manner.
//             </p>
//             <NavLink>
//               <Button>show now</Button>
//             </NavLink>
//           </div>
//           {/* our homepage image  */}
//           <div className="hero-section-image">
//             <figure>
//               <img
//                 src="https://goread.io/themes/pergo/assets/images/header_top.webp"
//                 alt="hero-section-photo"
//                 className="img-style"
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 8rem 0;

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }

//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;
//     }

//     .intro-data {
//       margin-bottom: 0;
//     }
//   }

//   .hero-section-image {
//     width: 80%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   figure {
//     position: relative;

//     &::after {
//       content: "";
//       width: 100%;
//       height: 100%;
//       background-color: rgba(81, 56, 238, 0.4);
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//       border-radius: 46% 54% 61% 39% / 17% 30% 70% 83%;
//     }
//   }
//   .img-style {
//     width: 100%;
//     height: auto;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 10rem;
//     }

//     figure::after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       /* bottom: 10%; */
//       background-color: rgba(81, 56, 238, 0.4);
//     }
//   }
// `;

// export default HeroSection;

// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
// import styled from "styled-components";

// const HeroSection = ({ myData }) => {
//   const { name, nameservice, btnservice } = myData;
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 100) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Wrapper isVisible={isVisible}>
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="hero-section-data slide-in-left">
//             <p className="intro-data">Buy </p>
//             <h1> {name} </h1>
//             <p>{nameservice}</p>
//             <div className="button-group">
//               {btnservice.map((service, index) => (
//                 <NavLink key={index}>
//                   <Button>{service}</Button>
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//           <div className="hero-section-image slide-in-right">
//             <figure>
//               <img
//                 src="https://goread.io/themes/pergo/assets/images/header_top.webp"
//                 alt="hero-section-photo"
//                 className="img-style"
//               />
//               <img
//                 src="../images/Animation.gif"
//                 alt="Animation"
//                 className="animation-style"
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 8rem 0;

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }

//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;
//     }

//     .intro-data {
//       margin-bottom: 0;
//     }

//     .button-group {
//       display: flex;
//       gap: 1rem;
//       margin-top: 1.5rem;
//     }
//   }

//   .hero-section-image {
//     width: 80%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative; /* Added position relative */
//   }

//   figure {
//     position: relative;

//     &::after {
//       content: "";
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         270deg,
//         rgba(81, 56, 238, 0.4),
//         rgba(56, 238, 81, 0.4)
//       );
//       background-size: 400% 400%;
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//       border-radius: 46% 54% 61% 39% / 17% 30% 70% 83%;
//       animation: gradientMove 5s ease infinite;
//     }
//   }

//   .img-style {
//     width: 100%;
//     height: auto;
//   }

//   .animation-style {
//     position: absolute;
//     top: 40%;
//     right: -4rem; /* Adjusted position */
//     width: 18rem; /* Adjusted width */
//     height: 14rem; /* Adjusted height */
//     transform: translateY(-50%);
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 10rem;
//     }

//     figure::after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       background-color: rgba(81, 56, 238, 0.4);
//     }

//     .button-group {
//       flex-direction: column;
//       align-items: center;
//     }
//   }

//   button {
//     width: 20rem;
//     height: 5rem; /* Adjust the height as needed */
//     font-size: 1.1rem; /* Ensure the text fits in a single line */
//   }

//   /* Animations */
//   @keyframes slideInLeft {
//     0% {
//       transform: translateX(-100%);
//       opacity: 0;
//     }
//     100% {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }

//   @keyframes slideInRight {
//     0% {
//       transform: translateX(100%);
//       opacity: 0;
//     }
//     100% {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }

//   @keyframes gradientMove {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }

//   ${({ isVisible }) =>
//     isVisible &&
//     `
//     .slide-in-left {
//       animation: slideInLeft 1s ease-out;
//     }

//     .slide-in-right {
//       animation: slideInRight 1s ease-out;
//     }
//   `}
// `;

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const HeroSection = ({ myData }) => {
  const { name, nameservice, btnservice } = myData;
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (service) => {
    if (service === "Instagram Followers") {
      navigate("/buy");
    } else if (service === "Instagram Likes") {
      navigate("/buy");
    } else if (service === "Instagram Comments") {
      navigate("/buy");
    } else if (service === "Tiktok Followers") {
      navigate("/buy");
    } else if (service === "Tiktok Comments") {
      navigate("/buy");
    } else if (service === "Tiktok Likes") {
      navigate("/buy");
    } else if (service === "Thread Followers") {
      navigate("/buy");
    } else if (service === "Thread Comments") {
      navigate("/buy");
    } else if (service === "Thread Likes") {
      navigate("/buy");
    }
  };

  return (
    <Wrapper isVisible={isVisible}>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data slide-in-left">
            <p className="intro-data">Buy </p>
            <h1>{name}</h1>
            <p>{nameservice}</p>
            <div className="button-group">
              {btnservice.map((service, index) => (
                <Button key={index} onClick={() => handleButtonClick(service)}>
                  {service}
                </Button>
              ))}
            </div>
          </div>
          <div className="hero-section-image slide-in-right">
            <figure>
              <img
                src="https://goread.io/themes/pergo/assets/images/header_top.webp"
                alt="hero-section-photo"
                className="img-style"
              />
              {/* <img
                src="../images/Animation.gif"
                alt="Animation"
                className="animation-style"
              /> */}
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
  }

  .hero-section-image {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(
        270deg,
        rgba(81, 56, 238, 0.4),
        rgba(56, 238, 81, 0.4)
      );
      background-size: 400% 400%;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
      border-radius: 46% 54% 61% 39% / 17% 30% 70% 83%;
      animation: gradientMove 5s ease infinite;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  .animation-style {
    position: absolute;
    top: 40%;
    right: -4rem;
    width: 18rem;
    height: 14rem;
    transform: translateY(-50%);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }

    .button-group {
      flex-direction: column;
      align-items: center;
    }
  }

  button {
    width: 20rem;
    height: 5rem;
    font-size: 1.1rem;
  }

  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    `
    .slide-in-left {
      animation: slideInLeft 1s ease-out;
    }

    .slide-in-right {
      animation: slideInRight 1s ease-out;
    }
  `}
`;

export default HeroSection;
