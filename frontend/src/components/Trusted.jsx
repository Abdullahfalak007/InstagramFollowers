// import styled from "styled-components";

// const Trusted = () => {
//   return (
//     <Wrapper className="brand-section">
//       <div className="container">
//         <h3>Trusted By 1000+ Companies</h3>
//         <div className="brand-section-slider">
//           {/* my 1st img  */}
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div className="slide">
//             <img
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
//               alt="trusted-brands"
//             />
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};

//   .brand-section {
//     padding: 12rem 0 0 0;
//   }
//   h3 {
//     text-align: center;
//     text-transform: capitalize;
//     color: ${({ theme }) => theme.colors.text};
//     font-size: 2rem;
//     font-weight: bold;
//   }

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .brand-section-slider {
//     margin-top: 3.2rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .brand-section-slider {
//       margin-top: 3.2rem;
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       /* background-color: red; */
//       text-align: center;
//     }
//   }
// `;

// export default Trusted;

import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { Button } from "../styles/Button";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container ">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
              />
            </div>
            {/* Duplicated slides for seamless animation */}
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
              />
            </div>
          </div>
        </div>
        <div className="stars">
          <FiStar className="fa-solid fa-star" />
          <FiStar className="fa-solid fa-star" />
          <FiStar className="fa-solid fa-star" />
          <FiStar className="fa-solid fa-star" />
          <FiStar className="fa-solid fa-star" />
        </div>
        <h3 className="trusted-text">Trustscore 4.9 | 1200 Reviews</h3>
        <div className="button-container">
          <Button>Get Started</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: #c6ffdd;
  background: -webkit-linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .brand-section {
    padding: 12rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    overflow: hidden;
    position: relative;
  }

  .slide-track {
    display: flex;
    width: calc(250px * 10); /* Adjust based on the number of slides */
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(-250px * 5)
      ); /* Adjust based on the number of slides / 2 */
    }
  }

  .slide {
    display: inline-block;
    width: 250px; /* Adjust based on the desired width of the slides */
    margin-right: 1rem;
  }

  img {
    width: auto;
    height: 10rem;
    border-radius: 5px;
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
  }

  .trusted-text {
    margin: 2rem 0;
  }

  .button-container {
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }

    .slide {
      margin-right: 0;
    }
  }
`;

export default Trusted;
