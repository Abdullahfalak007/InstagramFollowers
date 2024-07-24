import styled from "styled-components";
import ButtonWithDropdown from "../styles/ButtonWithDropdown";

const ServiceDropDown = () => {
  const tiktokDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );

  const instagramDropdownContent = (
    <>
      <DropdownItem href="#">Instagram Content 1</DropdownItem>
      <DropdownItem href="#">Instagram Content 2</DropdownItem>
      <DropdownItem href="#">Instagram Content 3</DropdownItem>
      <DropdownItem href="#">Instagram Content 3</DropdownItem>
    </>
  );
  const youtubeDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const snapchatDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const whatsappDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const facebookDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const threadsDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const pintrestDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const twitterDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const linkedinDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const redditDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const tumblrDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );
  const vimeoDropdownContent = (
    <>
      <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
      <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
      <DropdownItem href="#">Buy TikTok Views</DropdownItem>
    </>
  );

  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3 className="trusted-text">Your Success in Only a Few Clicks</h3>
        <div className="button-grid">
          <ButtonWithDropdown
            imageSrc="/images/tiktokIcon.png"
            buttonText="TikTok"
            dropdownContent={tiktokDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/threadsicon.png"
            buttonText="Threads"
            dropdownContent={threadsDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/instagram.png"
            buttonText="Instagram"
            dropdownContent={instagramDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/facebookicon.png"
            buttonText="Facebook"
            dropdownContent={facebookDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/youtubeicon.png"
            buttonText="YouTube"
            dropdownContent={youtubeDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/snapchaticon.png"
            buttonText="Snapchat"
            dropdownContent={snapchatDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/tiktokIcon.png"
            buttonText="Twitter"
            dropdownContent={twitterDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/tiktokIcon.png"
            buttonText="LinkedIn"
            dropdownContent={linkedinDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/tiktokIcon.png"
            buttonText="Pinterest"
            dropdownContent={pintrestDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/tiktokIcon.png"
            buttonText="Reddit"
            dropdownContent={redditDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/whatsappicon.png"
            buttonText="WhatsApp"
            dropdownContent={whatsappDropdownContent}
          />
          <ButtonWithDropdown
            imageSrc="/images/tiktokIcon.png"
            buttonText="Vimeo"
            dropdownContent={vimeoDropdownContent}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  /* background-color: ${({ theme }) => theme.colors.bg}; */

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

  .button-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    justify-items: center;
    margin-top: 3rem;
  }

  img {
    width: 3rem; /* Fix width */
    height: 3rem; /* Fix height */
    border-radius: 5px;
  }

  .trusted-text {
    margin: 2rem 0;
  }
  button {
    width: 20rem;
    height: 5rem; /* Adjust the height as needed */
    font-size: 1.7rem; /* Ensure the text fits in a single line */
  }
`;
const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default ServiceDropDown;

// import styled from "styled-components";
// import ButtonWithDropdown from "../styles/ButtonWithDropdown";

// const ServiceDropDown = () => {
//   const tiktokDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );

//   const instagramDropdownContent = (
//     <>
//       <DropdownItem href="#">Instagram Content 1</DropdownItem>
//       <DropdownItem href="#">Instagram Content 2</DropdownItem>
//       <DropdownItem href="#">Instagram Content 3</DropdownItem>
//       <DropdownItem href="#">Instagram Content 3</DropdownItem>
//     </>
//   );
//   const youtubeDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const snapchatDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const whatsappDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const facebookDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const threadsDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const pintrestDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const twitterDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const linkedinDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const redditDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const tumblrDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );
//   const vimeoDropdownContent = (
//     <>
//       <DropdownItem href="#">Buy TikTok Followers</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Likes</DropdownItem>
//       <DropdownItem href="#">Buy TikTok Views</DropdownItem>
//     </>
//   );

//   return (
//     <Wrapper className="brand-section">
//       <div className="container">
//         <h3 className="trusted-text">Your Success in Only a Few Clicks</h3>
//         <div className="button-grid">
//           <ButtonWithDropdown
//             imageSrc="/images/tiktokIcon.png"
//             buttonText="TikTok"
//             dropdownContent={tiktokDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/threadsicon.png"
//             buttonText="Threads"
//             dropdownContent={threadsDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/instagram.png"
//             buttonText="Instagram"
//             dropdownContent={instagramDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/facebookicon.png"
//             buttonText="Facebook"
//             dropdownContent={facebookDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/youtubeicon.png"
//             buttonText="YouTube"
//             dropdownContent={youtubeDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/snapchaticon.png"
//             buttonText="Snapchat"
//             dropdownContent={snapchatDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/tiktokIcon.png"
//             buttonText="Twitter"
//             dropdownContent={twitterDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/tiktokIcon.png"
//             buttonText="LinkedIn"
//             dropdownContent={linkedinDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/tiktokIcon.png"
//             buttonText="Pinterest"
//             dropdownContent={pintrestDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/tiktokIcon.png"
//             buttonText="Reddit"
//             dropdownContent={redditDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/whatsappicon.png"
//             buttonText="WhatsApp"
//             dropdownContent={whatsappDropdownContent}
//           />
//           <ButtonWithDropdown
//             imageSrc="/images/tiktokIcon.png"
//             buttonText="Vimeo"
//             dropdownContent={vimeoDropdownContent}
//           />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;

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

//   .button-grid {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 2rem;
//     justify-items: center;
//     margin-top: 3rem;

//     @media (max-width: 1024px) {
//       grid-template-columns: repeat(3, 1fr);
//     }

//     @media (max-width: 768px) {
//       grid-template-columns: repeat(2, 1fr);
//     }

//     @media (max-width: 480px) {
//       grid-template-columns: 1fr;
//     }
//   }

//   img {
//     width: 3rem;
//     height: 3rem;
//     border-radius: 5px;
//   }

//   .trusted-text {
//     margin: 2rem 0;
//   }

//   button {
//     width: 20rem;
//     height: 5rem;
//     font-size: 1.7rem;
//   }
// `;

// const DropdownItem = styled.a`
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

// export default ServiceDropDown;
