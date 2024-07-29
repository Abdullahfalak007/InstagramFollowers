// // import React from "react";
// // import { useParams } from "react-router-dom";

// // const ProfileDisplay = () => {
// //   const { username } = useParams();
// //   const instagramUrl = `https://www.instagram.com/${username}/`;

// //   return (
// //     <div className="container flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
// //       <div className="customcontainer p-8 bg-white shadow-lg rounded-lg">
// //         <h2 className="text-6xl font-bold text-center mb-8">Profile Details</h2>
// //         <div className="text-center">
// //           <h3 className="mt-4 text-2xl font-bold">{username}</h3>
// //           <div className="mt-4">
// //             <a
// //               href={instagramUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-500"
// //             >
// //               View Instagram Profile
// //             </a>
// //           </div>
// //           <div className="mt-4">
// //             <iframe
// //               src={`https://www.instagram.com/${username}/embed`}
// //               width="400"
// //               height="480"
// //               frameBorder="0"
// //               scrolling="no"
// //               allowtransparency="true"
// //             ></iframe>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileDisplay;

// import React from "react";
// import { useParams, useLocation } from "react-router-dom";

// const ProfileDisplay = () => {
//   const { username } = useParams();
//   const location = useLocation();

//   let profileUrl;
//   if (location.pathname.includes("tiktok")) {
//     profileUrl = `https://www.tiktok.com/@${username}`;
//   } else {
//     profileUrl = `https://www.instagram.com/${username}/embed`;
//   }

//   return (
//     <div className="container flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to green-500">
//       <div className="customcontainer p-8 bg-white shadow-lg rounded-lg">
//         <h2 className="text-6xl font-bold text-center mb-8">Profile Details</h2>
//         <div className="text-center">
//           <h3 className="mt-4 text-2xl font-bold">{username}</h3>
//           <div className="mt-4">
//             <a
//               href={profileUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500"
//             >
//               View Profile
//             </a>
//           </div>
//           <div className="mt-4">
//             <iframe
//               src={profileUrl}
//               width="400"
//               height="480"
//               frameBorder="0"
//               scrolling="no"
//               allowtransparency="true"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDisplay;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../ServiceContext";

const ProfileDisplay = () => {
  const { username } = useParams();
  const { serviceType } = useContext(ServiceContext);

  let profileUrl;
  if (serviceType === "tiktok") {
    profileUrl = `https://www.tiktok.com/@${username}/embed`;
  } else {
    profileUrl = `https://www.instagram.com/${username}/embed`;
  }

  return (
    <div className="container flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
      <div className="customcontainer p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-6xl font-bold text-center mb-8">Profile Details</h2>
        <div className="text-center">
          <h3 className="mt-4 text-2xl font-bold">{username}</h3>
          <div className="mt-4">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
          <div className="mt-4">
            <iframe
              src={profileUrl}
              width="400"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
