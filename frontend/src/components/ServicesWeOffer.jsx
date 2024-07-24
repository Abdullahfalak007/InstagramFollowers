import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Fast Delivery",
    description:
      "We're lightning fast! As soon as your sign up and make your first payment, we begin boosting your Instagram account and finding new followers, likes, views for your account in a matter of minutes. New followers come in at a fast pace as we continue boosting your posts until your purchased amount is reached.",
    image: "./images/fastdelivery.gif", // Replace with the actual path to your image
  },
  {
    title: "Awesome Customer Support",
    description:
      "Technical support for all our services 24/7. To help you, if you have some query, drop an email to our support team. We are delighted to assist you.",
    image: "./images/awesomecustomersupport.gif",
  },
  {
    title: "High Quality Services",
    description:
      "We only give you the highest quality Instagram followers, likes, views. Quality is one of our most important goals at Goread.io. We always make sure that your Instagram followers are long-lasting, reliable, and that the packages are affordable.",
    image: "./images/HighQualityServices.gif",
  },
  {
    title: "Privacy & Safety",
    description:
      "We never ask your password or any private information. We recommend you to protect your password and don't give it to anybody for your safety.",
    image: "../images/privacy.gif",
  },
  {
    title: "Our Guarantee",
    description:
      "Satisfaction is our number one priority. If you are not happy, you will receive a 100% money back guarantee. This is why we stand high and remain the best place to buy all our services.",
    image: "../images/grun.gif",
  },
  {
    title: "Secure Payments",
    description:
      "We have popular methods as paypal and many more can be enabled upon request.",
    image: "../images/sercure.gif",
  },
];

const ServicesWeOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto py-16 ">
      <h2 className="text-center text-6xl font-bold mb-12">
        Services We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
            data-aos="fade-up" // Add AOS animation
          >
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto mb-4 h-55 w-55 object-contain" // Increased the height and width
            />
            <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
