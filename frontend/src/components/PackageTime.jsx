import React from "react";
import "../styles/Tailwind.css"; // Make sure to import the CSS file

const PackageTime = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen background: #C6FFDD p-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-center">
        How to Buy a Package?
      </h1>
      <p className="text-xl sm:text-2xl mb-8 text-center">
        Buying social media packages from Goread.io is simple and fast. Just
        follow these steps
      </p>

      <div className="container bg-white shadow-md rounded-lg p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="text-center">
            <h3 className="font-semibold text-2xl sm:text-3xl pt-4 pb-4 md:pt-6 md:pb-6">
              Choose Package
            </h3>
            <div className="flex items-center justify-center mb-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">
                  1
                </span>
              </div>
              <div className="h-4 flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>
            </div>
            <p className="text-gray-600 px-4 sm:px-16">
              It's easy to get started with us. Choose from our wide range of
              Instagram marketing packages that cater to your requirements
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-2xl sm:text-3xl pt-4 pb-4 md:pt-6 md:pb-6">
              Enter Your Instagram Username
            </h3>
            <div className="flex items-center justify-center mb-2">
              <div className="h-4 flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">
                  2
                </span>
              </div>
              <div className="h-4 flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>
            </div>
            <p className="text-gray-600 px-4 sm:px-16">
              In the order form, simply enter your Instagram username. Our
              system will automatically fetch your public info. We DON’T require
              your password
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-2xl sm:text-3xl pt-4 pb-4 md:pt-6 md:pb-6">
              Wait for results
            </h3>
            <div className="flex items-center justify-center mb-2">
              <div className="h-4 flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">
                  3
                </span>
              </div>
            </div>
            <p className="text-gray-600 px-4 sm:px-16">
              You can pay via any bank card. We will proceed with the order and
              inform you once it's done via email. You can also track your order
              status from the client area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageTime;
