import React from "react";
import Button from "../../components/common/Button";
import { GrCheckmark } from "react-icons/gr"

const WebsitePrice = () => {
  return (
    <div className="grid grid-cols-4 px-24 items-center mb-24">
      
      <div className="bg-jdLight p-12 h-[75vh]">
        <h1 className="text-center text-2xl font-bold mb-5">UNLIMITED</h1>
        <p className="text-xl text-center mb-8">Your toolbox for success</p>
        <p className="font-bold text-5xl text-center">US$<span className="text-7xl">39</span></p>
        <p className="text-base font-nornal my-4 text-center">per month</p>
        <div className="text-center">
          <Button className='border-4 border-jdGray w-max py-4 px-10 mb-16 text-xl font-bold text-jdBlue2 hover:text-jdBlue'>Get Started</Button>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Everything plus:</h2>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Unlimited storage</span></p>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Professional design analysis</span></p>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Premium support within an hour</span></p>
        </div>
      </div>
      <div className="bg-jdLight shadow-2xl h-[86.5vh]">
        <h1 className="p-3 font-bold tracking-widest text-jdLight text-center bg-jdNavy">BESTSELLER</h1>
      <div className=" p-12">
        <h1 className="text-center text-2xl font-bold mb-5">GROW</h1>
        <p className="text-xl text-center mb-8">For your business website</p>
        <p className="font-bold text-5xl text-center">US$<span className="text-7xl">15</span></p>
        <p className="text-base font-nornal my-4 text-center">per month</p>
        <div className="text-center">
          <Button className='border-4 border-jdLightGray w-max py-4 px-10 bg-jdBlue2 hover:bg-jdBlue mb-16 text-jdLight text-xl font-bold'>Get Started</Button>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">All START features, plus:</h2>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Search Engine Optimization (SEO)</span></p>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Visitor statistics</span></p>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Personalized support within 4 hours</span></p>
        </div>
      </div>
      </div>
      <div className="bg-jdLight p-12 border-r-2 shadow-xl h-[75vh]">
        <h1 className="text-center text-2xl font-bold mb-5">START</h1>
        <p className="text-xl text-center mb-8">For your personal website</p>
        <p className="font-bold text-5xl text-center">US$<span className="text-7xl">9</span></p>
        <p className="text-base font-nornal my-4 text-center">per month</p>
        <div className="text-center">
          <Button className='border-4 border-jdGray w-max py-4 px-10 mb-16 text-xl font-bold text-jdBlue2 hover:text-jdBlue'>Get Started</Button>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">All PLAY features, plus:</h2>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Domain included </span></p>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">Ad-free</span></p>
        </div>
      </div>
      <div className="bg-jdLight p-12 h-[75vh]">
        <h1 className="text-center text-2xl font-bold mb-5">PLAY</h1>
        <p className="text-xl text-center mb-8">Try for free</p>
        <p className="font-bold text-5xl text-center">US$<span className="text-7xl">0</span></p>
        <p className="text-base font-nornal my-4 text-center">per month</p>
        <div className="text-center">
          <Button className='border-4 border-jdGray w-max py-4 px-10 mb-16 text-xl font-bold text-jdBlue2 hover:text-jdBlue'>Get Started</Button>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Includes:</h2>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">All base features</span></p>
          <p className="flex items-center text-xl mb-5"><GrCheckmark className="mr-5" /> <span className="">.jimdosite.com subdomain</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default WebsitePrice;
