import React from "react";
import HeroSection from "./components/HeroSection";
import BuyFollowers from "./Pages/BuyFollowers";

const Tiktok = () => {
  const data = {
    name: "Tiktok Services ",
    nameservice:
      "Tiktok is one of the best social media platforms to reach millions of followers. Buying active and real Tiktok followers will allow you to increase your network of followers naturally. Not only this but you will also save your precious time and get the job done in an effortless manner.",
    btnservice: ["Tiktok Followers", "Tiktok Likes", "Tiktok Comments"],
  };

  return (
    <>
      <HeroSection myData={data} />;
      <BuyFollowers />;
    </>
  );
};

export default Tiktok;
