import React from "react";
import { blogElements } from "./blogElements";
import { Link, NavLink } from "react-router-dom";
import websiteImage from "../../assets/images/website-teaser.png";
import inspirationImageOne from "../../assets/images/amanda-brennan-creative-producer_jimdosite_com.jpg";
import inspirationImageTwo from "../../assets/images/anna-ehrenreich-luftartistik_de.jpg";
import inspirationImageThree from "../../assets/images/craftmans_nl.jpg";
import inspirationImageFour from "../../assets/images/curio-styles-net.jpg";
import inspirationImageFive from "../../assets/images/erikrohrer-com.jpg";
import inspirationImageSix from "../../assets/images/hej-its-her-com.png";
import inspirationImageSeven from "../../assets/images/iamisoulcoaching-com.jpg";
import inspirationImageEight from "../../assets/images/jindo_homepage_hero-image.jpg";
import inspirationImageNine from "../../assets/images/livinggingerdesigns-com.jpg";
import LayoutTwo from "../../layout/LayoutTwo";

const Blog = () => {
  return (
   <LayoutTwo>
    <main className="mt-2 bg-jdLight">
        <nav className="py-5 px-16 sticky top-0 bg-jdLight z-50">
          <div className="flex items-center space-x-10">
            {blogElements.map((items, uid) => (
              <NavLink
                to={items.url}
                key={uid}
                className={({ isActive }) => {
                  return `text-2xl font-bold ${
                    isActive ? "text-jdBlue" : "text-black"
                  }`;
                }}
              >
                {items.title}
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="py-20 px-16 bg-jdLightNavy2">
          <div className="mb-20">
            <h1 className="text-8xl font-bold text-jdNavy">THE JIMDO BLOG</h1>
            <h1 className="text-8xl font-bold text-jdBlue3 mb-16">
              FOR SMALL BUSINESSES
            </h1>
            <p className="text-3xl ">
              Get advice about self-employment, starting a business, website{" "}
              <br /> tips, web design, online stores, SEO, marketing, and more.
            </p>
          </div>
          <div className="flex border-4 border-jdNavy h-[60vh]">
            <Link to={""} className=" w-2/3">
              <img src={websiteImage} alt="" className="w-full h-full" />
            </Link>
            <div className="w-1/3 py-44">
              <p className="text-2xl text-gray-400">NEWS</p>
              <Link to={""} className="text-4xl text-black hover:text-jdBlue">
                Smart Apps: Do Even More <br /> with Your Website!
              </Link>
            </div>
          </div>
          <div className="py-24 grid grid-cols-3 gap-10">
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageOne}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageTwo}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageThree}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-7xl text-jdNavy mb-5">WEBSITE TIPS</h1>
            <div className="flex items-center justify-between">
                <p className="text-3xl">From design tips to content ideas to SEO—everything you need to know <br /> about your online presence.</p>
                <Link to={''} className="text-jdBlue font-bold underline hover:text-jdBlue2 hover:no-underline text-2xl">See More</Link>
            </div>
          </div>
          <div className="py-24 grid grid-cols-3 gap-10">
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageFour}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageFive}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageSix}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-7xl text-jdNavy mb-5">BUSINESS TIPS</h1>
            <div className="flex items-center justify-between">
                <p className="text-3xl">Marketing and social media, tools and productivity, and information on self-employment, <br /> freelancing, and launching your own idea.</p>
                <Link to={''} className="text-jdBlue underline font-bold hover:text-jdBlue2 hover:no-underline text-2xl">See More</Link>
            </div>
          </div>
          <div className="py-24 grid grid-cols-3 gap-10">
          <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageSeven}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageEight}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageNine}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-7xl text-jdNavy mb-5">INSPIRATION</h1>
            <div className="flex items-center justify-between">
                <p className="text-3xl">Real companies, real stories. Get fresh ideas from Jimdo users <br /> already making their mark.</p>
                <Link to={''} className="text-jdBlue underline hover:text-jdBlue2 hover:no-underline text-2xl">See More</Link>
            </div>
          </div>
          <div className="py-24 grid grid-cols-3 gap-10">
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageFour}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2 font-bold">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageFive}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageSix}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2 ">How to create the perfect online shopping experience</Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-7xl text-jdNavy mb-5">NEWS</h1>
            <div className="flex items-center justify-between">
                <p className="text-3xl">The latest updates from Jimdo including new features, community campaigns, <br /> and company news.</p>
                <Link to={''} className="text-jdBlue underline hover:text-jdBlue2 hover:no-underline text-2xl font-bold">See More</Link>
            </div>
          </div>
          <div className="py-24 grid grid-cols-3 gap-10">
          <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageSeven}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageEight}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
            <div className="border-4 border-jdNavy bg-jdLight">
              <div className="relative group cursor-pointer mb-10">
                <img
                  src={inspirationImageNine}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 w-full group-hover:bg-jdNavy"></div>
              </div>
              <div className="p-10">
                <h1 className="text-3xl text-jdGray mb-5">WEBSITE TIPS</h1>
                <Link className="text-3xl hover:text-jdBlue2">How to create the perfect online shopping experience</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
   </LayoutTwo>
  );
};

export default Blog;
