import React from "react";
import {
  aboutElemsnts,
  productsElemsnts,
  serviceElemsnts,
} from "./footerElements";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import CanadaIcon from "../../components/flagicons/CanadaIcon";
import UnitedStateIcon from "../../components/flagicons/UnitedStateIcon";

const Footer = () => {
  return (
    <footer className="p-16 bg-jdLight">
      <div className="grid grid-cols-4">
        <div>
          <div className="mb-16">
            <Link className=" uppercase border-[5px] border-jdNavy p-2 font-bold text-5xl">
              Jindo
            </Link>
          </div>
          <div className="flex items-center space-x-8 text-5xl">
            <Link className="hover:text-jdBlue">
              <BsFacebook />
            </Link>
            <Link className="hover:text-jdBlue">
              <AiFillTwitterCircle />
            </Link>
            <Link className="hover:text-jdBlue">
              <IoLogoYoutube />
            </Link>
            <Link className="hover:text-jdBlue">
              <FiInstagram />
            </Link>
            <Link className="hover:text-jdBlue">
              <BsPinterest />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#717677] mb-5">Products</h1>
          {productsElemsnts.map((items, uid) => (
            <p className="text-2xl mb-5 hover:text-jdBlue font-semibold" key={uid}>
              <Link to={items.url}>{items.title}</Link>
            </p>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#717677] mb-5">About us</h1>
          {aboutElemsnts.map((items, uid) => (
            <p className="text-2xl mb-5 hover:text-jdBlue font-semibold" key={uid}>
              <Link to={items.url}>{items.title}</Link>
            </p>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#717677] mb-5">Services</h1>
          {serviceElemsnts.map((items, uid) => (
            <p className="text-2xl mb-5 hover:text-jdBlue font-semibold" key={uid}>
              <Link to={items.url}>{items.title}</Link>
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-5 py-10 text-2xl font-semibold">
          <Link className="hover:text-jdBlue">Legal notice</Link>
          <Link className="hover:text-jdBlue">Terms of Service</Link>
          <Link className="hover:text-jdBlue">Privacy Policy</Link>
          <Link className="hover:text-jdBlue">Cookies Settings</Link>
        </div>
        <div>
          <div className="border text-7xl flex items-center space-x-10">
            <div className="text-5xl flex">
              <CanadaIcon className="rounded-full" />
              <UnitedStateIcon className='rounded-full' />
            </div>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
