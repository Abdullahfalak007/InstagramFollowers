import React from "react";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Function to handle button clicks
  const handleButtonClick = () => {
    navigate("/buy"); // Navigate to "/buy" route upon button click
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center md:justify-start">
          <img
            src="../images/logo.png"
            alt="Twicsy Logo"
            className="mb-5 w-2/4 h-24"
          />
        </div>
        <div className="flex justify-self-start mt-12 ">
          <ul className="text-center md:text-left space-y-2 text-2xl">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Free Instagram Likes</li>
            <li>Free Instagram Followers</li>
            <li>Instagram Video Downloader</li>
            <li>Instagram Profile Picture Viewer</li>
            <li>Instagram Follower Counter</li>
            <li>Instagram Story Downloader</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <Button className="w-full text-base" onClick={handleButtonClick}>
              Instagram Followers
            </Button>
            <p>Starting at $2.97</p>
            <p>5 / 5 - based on 58 reviews</p>
          </div>
          <div className="text-center">
            <Button className="w-full text-base" onClick={handleButtonClick}>
              Instagram Likes
            </Button>
            <p>Starting at $1.47</p>
            <p>5 / 5 - based on 44 reviews</p>
          </div>
          <div className="text-center">
            <Button className="w-full text-base" onClick={handleButtonClick}>
              Instagram Views
            </Button>
            <p>Starting at $1.99</p>
            <p>5 / 5 - based on 31 reviews</p>
          </div>
          <div className="text-center">
            <Button className="w-full text-base" onClick={handleButtonClick}>
              Instagram Comments
            </Button>
            <p>Starting at $9.99</p>
            <p>5 / 5 - based on 44 reviews</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>2024 Twicsy – All Rights Reserved</p>
        <div className="space-x-2">
          <a href="#terms">Terms of Service</a> |{" "}
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
