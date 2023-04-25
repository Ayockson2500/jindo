import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "../../components/dropdown/Dropdown";
import { helpElements, productElemsnts } from "./navElements";

const NavBar = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  return (
    <Fragment>
      <nav className="flex items-center justify-between bg-jdLight px-16 py-6 shadow-md fixed top-0 w-full z-50">
        <div className="flex items-center justify-center space-x-52">
          <Link to={'/'} className="logo uppercase border-[5px] border-jdNavy p-2 font-bold text-5xl">
            Jindo
          </Link>
          <div className="flex items-center justify-center space-x-20 text-2xl">
            <Link
             to={''}
              onClick={() => setShowProductDropdown(true)}
              className="flex items-center justify-center group relative"
              onMouseEnter={() =>setShowProductDropdown(true)}
              onMouseLeave={() =>setShowProductDropdown(false)}
            >
              <span className=" hover:text-jdBlue">Products </span>
              <FaAngleDown
                className={`ml-2 group-hover:rotate-180 transition ease-in-out ${
                  showProductDropdown ? "rotate-180" : ""
                }`}
              />
              <Dropdown
                className={`absolute bg-jdLight shadow-md border rounded-md top-8 ${showProductDropdown}`}
                show={showProductDropdown}
              >
                <main className=" w-max">
                  {productElemsnts.map((items, uid) => (
                    <Link
                      to={items.url}
                      key={uid}
                      className="hover:text-jdBlue"
                    >
                      <div className="mb-7">
                        <p className="text-2xl text-jdNavy">{items.title}</p>
                        <p className="text-base">{items.text}</p>
                      </div>
                    </Link>
                  ))}
                </main>
              </Dropdown>
            </Link>
            <Link to='/inspiration' className=" hover:text-jdBlue">Inspiration</Link>
            <Link to='/pricing' className=" hover:text-jdBlue">Pricing</Link>
            <Link to='/blog' className=" hover:text-jdBlue">Blog</Link>
            <Link to='/features' className=" hover:text-jdBlue">Features</Link>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-20 text-2xl">
          <Link
            onClick={() => setShowHelpDropdown(true)}
            className="flex items-center justify-center group relative"
            onMouseEnter={() =>setShowHelpDropdown(true)}
            onMouseLeave={() =>setShowHelpDropdown(false)}
          >
            <span className=" hover:text-jdBlue">Help</span>{" "}
            <FaAngleDown
              className={`ml-2 group-hover:rotate-180 transition ease-in-out ${
                showHelpDropdown ? "rotate-180" : ""
              }`}
            />
            <Dropdown
                className={`absolute bg-jdLight shadow-md rounded-md border top-8 ${showHelpDropdown}`}
                show={showHelpDropdown}
              >
                <main className=" w-max">
                  <h1 className="mb-12">How can we help you?</h1>
                  {helpElements.map((items, uid) => (
                    <Link
                      to={items.url}
                      key={uid}
                      className="hover:text-jdBlue"
                    >
                      <div className="mb-7">
                        <p className="text-xl">{items.title}</p>
                        <p className="text-base">{items.text}</p>
                      </div>
                    </Link>
                  ))}
                </main>
              </Dropdown>
          </Link>
          <Link to={'/login'} className=" hover:text-jdBlue">Login</Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
