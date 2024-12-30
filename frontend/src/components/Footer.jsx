import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --------- Left Section --------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            nemo neque perferendis alias nobis praesentium incidunt quidem
            inventore et similique, ipsum esse aliquam reprehenderit a ex dicta
            rem assumenda pariatur, totam eligendi laudantium. Adipisci non
            perferendis iure obcaecati mollitia. Dolorum, explicabo. In aliquid
            autem harum.
          </p>
        </div>

        {/* --------- Center Section --------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* --------- Right Section --------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1 234-567-8901</li>
            <li>webdevelopment@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* --------- Copyright Section --------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Prescripto - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
