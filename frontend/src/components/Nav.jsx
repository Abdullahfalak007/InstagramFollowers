// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgClose } from "react-icons/cg";

// const Nav = () => {
//   const [menuIcon, setmenuIcons] = useState(false);

//   const Wrapper = styled.section`
//     .navbar-lists {
//       display: flex;
//       gap: 4.8rem;
//       align-items: center;

//       .navbar-link {
//         &:link,
//         &:visited {
//           display: inline-block;
//           text-decoration: none;
//           font-size: 1.5rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           color: ${({ theme }) => theme.colors.black};
//           transition: color 0.3s linear;
//         }

//         &:hover,
//         &:active,
//         &.active {
//           color: ${({ theme }) => theme.colors.helper};
//           color: rgb(98 84 243);
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

//     .cart-trolley--link {
//       position: relative;

//       .cart-trolley {
//         position: relative;
//         font-size: 3.2rem;
//       }

//       .cart-total--item {
//         width: 2.4rem;
//         height: 2.4rem;
//         position: absolute;
//         background-color: #000;
//         color: white;
//         border-radius: 50%;
//         display: grid;
//         place-items: center;
//         top: -330%;
//         left: 70%;
//         background-color: ${({ theme }) => theme.colors.helper};
//       }
//     }

//     .user-login--name {
//       text-transform: capitalize;
//     }

//     .user-logout,
//     .user-login {
//       font-size: 1.4rem;
//       padding: 0.8rem 1.4rem;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};
//         font-size: 4rem;

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         transition: all 3s linear;
//       }

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//         }
//       }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link home-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Instagram Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/tiktok"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Tiktok Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/threads"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Threads Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/otherservices"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Other Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               FAQ
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>

//         {/* to open and close menu */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setmenuIcons(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setmenuIcons(false)}
//           />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Nav;

//nav dropdown
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgClose } from "react-icons/cg";

// const Nav = () => {
//   const [menuIcon, setmenuIcons] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState({
//     instagram: false,
//     tiktok: false,
//     threads: false,
//     other: false,
//   });

//   const handleMouseEnter = (menu) => {
//     setDropdownOpen((prevState) => ({ ...prevState, [menu]: true }));
//   };

//   const handleMouseLeave = (menu) => {
//     setDropdownOpen((prevState) => ({ ...prevState, [menu]: false }));
//   };

//   const Wrapper = styled.section`
//     .navbar-lists {
//       display: flex;
//       gap: 4.8rem;
//       align-items: center;

//       .navbar-link {
//         &:link,
//         &:visited {
//           display: inline-block;
//           text-decoration: none;
//           font-size: 1.5rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           color: ${({ theme }) => theme.colors.black};
//           transition: color 0.3s linear;
//         }

//         &:hover,
//         &:active,
//         &.active {
//           color: ${({ theme }) => theme.colors.helper};
//           color: rgb(98 84 243);
//         }
//       }

//       .dropdown {
//         position: relative;
//         display: inline-block;

//         .dropdown-content {
//           display: none;
//           position: absolute;
//           background-color: #f9f9f9;
//           min-width: 160px;
//           box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//           z-index: 1;

//           a {
//             color: black;
//             padding: 12px 16px;
//             text-decoration: none;
//             display: block;
//             text-align: left;

//             &:hover {
//               background-color: #f1f1f1;
//             }
//           }
//         }

//         &:hover .dropdown-content {
//           display: block;
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

//     .cart-trolley--link {
//       position: relative;

//       .cart-trolley {
//         position: relative;
//         font-size: 3.2rem;
//       }

//       .cart-total--item {
//         width: 2.4rem;
//         height: 2.4rem;
//         position: absolute;
//         background-color: #000;
//         color: white;
//         border-radius: 50%;
//         display: grid;
//         place-items: center;
//         top: -330%;
//         left: 70%;
//         background-color: ${({ theme }) => theme.colors.helper};
//       }
//     }

//     .user-login--name {
//       text-transform: capitalize;
//     }

//     .user-logout,
//     .user-login {
//       font-size: 1.4rem;
//       padding: 0.8rem 1.4rem;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};
//         font-size: 4rem;

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         transition: all 3s linear;
//       }

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//         }
//       }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists">
//           <li
//             className="dropdown"
//             onMouseEnter={() => handleMouseEnter("instagram")}
//             onMouseLeave={() => handleMouseLeave("instagram")}
//           >
//             <NavLink
//               to="/"
//               className="navbar-link home-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Instagram Services
//             </NavLink>
//             {dropdownOpen.instagram && (
//               <div className="dropdown-content">
//                 <NavLink to="/insta-followers">Instagram Followers</NavLink>
//                 <NavLink to="/insta-likes">Instagram Likes</NavLink>
//                 <NavLink to="/insta-comments">Instagram Comments</NavLink>
//               </div>
//             )}
//           </li>
//           <li
//             className="dropdown"
//             onMouseEnter={() => handleMouseEnter("tiktok")}
//             onMouseLeave={() => handleMouseLeave("tiktok")}
//           >
//             <NavLink
//               to="/tiktok"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               TikTok Services
//             </NavLink>
//             {dropdownOpen.tiktok && (
//               <div className="dropdown-content">
//                 <NavLink to="/tiktok-followers">TikTok Followers</NavLink>
//                 <NavLink to="/tiktok-likes">TikTok Likes</NavLink>
//                 <NavLink to="/tiktok-comments">TikTok Comments</NavLink>
//               </div>
//             )}
//           </li>
//           <li
//             className="dropdown"
//             onMouseEnter={() => handleMouseEnter("threads")}
//             onMouseLeave={() => handleMouseLeave("threads")}
//           >
//             <NavLink
//               to="/threads"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Threads Services
//             </NavLink>
//             {dropdownOpen.threads && (
//               <div className="dropdown-content">
//                 <NavLink to="/threads-followers">Threads Followers</NavLink>
//                 <NavLink to="/threads-likes">Threads Likes</NavLink>
//                 <NavLink to="/threads-comments">Threads Comments</NavLink>
//               </div>
//             )}
//           </li>
//           <li
//             className="dropdown"
//             onMouseEnter={() => handleMouseEnter("other")}
//             onMouseLeave={() => handleMouseLeave("other")}
//           >
//             <NavLink
//               to="/otherservices"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Other Services
//             </NavLink>
//             {dropdownOpen.other && (
//               <div className="dropdown-content">
//                 <NavLink to="/other-1">Other Service 1</NavLink>
//                 <NavLink to="/other-2">Other Service 2</NavLink>
//                 <NavLink to="/other-3">Other Service 3</NavLink>
//               </div>
//             )}
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               FAQ
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link"
//               activeClassName="active"
//               onClick={() => setmenuIcons(false)}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>

//         {/* to open and close menu */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setmenuIcons(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setmenuIcons(false)}
//           />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import {
  FaInstagram,
  FaTiktok,
  FaComment,
  FaThumbsUp,
  FaUserFriends,
} from "react-icons/fa";

const Nav = () => {
  const [menuIcon, setmenuIcons] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    instagram: false,
    tiktok: false,
    threads: false,
    other: false,
  });

  const handleMouseEnter = (menu) => {
    setDropdownOpen((prevState) => ({ ...prevState, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen((prevState) => ({ ...prevState, [menu]: false }));
  };

  const Wrapper = styled.section`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active,
        &.active {
          color: ${({ theme }) => theme.colors.helper};
          color: rgb(98 84 243);
        }
      }

      .dropdown {
        position: relative;
        display: inline-block;

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;

          a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            text-align: left;

            &:hover {
              background-color: #f1f1f1;
            }
          }
        }

        &:hover .dropdown-content {
          display: block;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -330%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        font-size: 4rem;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Wrapper>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("instagram")}
            onMouseLeave={() => handleMouseLeave("instagram")}
          >
            <NavLink
              to="/"
              className="navbar-link home-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              Instagram Services
            </NavLink>
            {dropdownOpen.instagram && (
              <div className="dropdown-content">
                <NavLink to="/buy">
                  <FaUserFriends /> Buy Instagram Followers
                </NavLink>
                <NavLink to="/buy">
                  <FaThumbsUp /> Buy Instagram Likes
                </NavLink>
                <NavLink to="/buy">
                  <FaComment /> Buy Instagram Comments
                </NavLink>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("tiktok")}
            onMouseLeave={() => handleMouseLeave("tiktok")}
          >
            <NavLink
              to="/tiktok"
              className="navbar-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              TikTok Services
            </NavLink>
            {dropdownOpen.tiktok && (
              <div className="dropdown-content">
                <NavLink to="/buy">
                  <FaUserFriends /> TikTok Followers
                </NavLink>
                <NavLink to="/buy">
                  <FaThumbsUp /> TikTok Likes
                </NavLink>
                <NavLink to="/buy">
                  <FaComment /> TikTok Comments
                </NavLink>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("threads")}
            onMouseLeave={() => handleMouseLeave("threads")}
          >
            <NavLink
              to="/threads"
              className="navbar-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              Threads Services
            </NavLink>
            {dropdownOpen.threads && (
              <div className="dropdown-content">
                <NavLink to="/buy">
                  <FaUserFriends /> Threads Followers
                </NavLink>
                <NavLink to="/buy">
                  <FaThumbsUp /> Threads Likes
                </NavLink>
                <NavLink to="/buy">
                  <FaComment /> Threads Comments
                </NavLink>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("other")}
            onMouseLeave={() => handleMouseLeave("other")}
          >
            <NavLink
              to="/otherservices"
              className="navbar-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              Other Services
            </NavLink>
            {dropdownOpen.other && (
              <div className="dropdown-content">
                <NavLink to="/buy">
                  <FaUserFriends /> Other Service 1
                </NavLink>
                <NavLink to="/buy">
                  <FaThumbsUp /> Other Service 2
                </NavLink>
                <NavLink to="/buy">
                  <FaComment /> Other Service 3
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              activeClassName="active"
              onClick={() => setmenuIcons(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* to open and close menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setmenuIcons(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setmenuIcons(false)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Nav;
