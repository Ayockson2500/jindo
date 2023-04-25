import React from "react";
import Layout from "../../layout";
import PrimaryButton from "../../components/common/PrimaryButton";
import jindoHomePageHero from "../../assets/images/jindo_homepage_hero-image.jpg"
import storeSectionImage from "../../assets/images/shop_section.jpg"
import siteImageTwo from "../../assets/images/website_1.png"
import siteImageThree from "../../assets/images/website_2.png"
import siteImageFour from "../../assets/images/mobile_1.png"
import siteImageFive from "../../assets/images/mobile_2.png"
import siteImageSix from "../../assets/images/mobile_3.png"
import logoOne from "../../assets/images/logo_1.png"
import logoTwo from "../../assets/images/logo_2.png"
import logoThree from "../../assets/images/logo_3.png"
import logoFour from "../../assets/images/logo_4.png"
import logoFive from "../../assets/images/logo_5.png"
import matzeImage from "../../assets/images/matze.jpg"
import CheckBox from "../../components/common/CheckBox";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import DisplayCarousel from "../../components/common/DisplayCarousel";

const Home = () => {
  return (
    <Layout>
      <main className="mt-28 bg-jdLight">
        <div className="bg-jdLightNavy pt-28 px-40">
          <div className="grid grid-cols-2 mb-5">
            <div>
              <h1 className="text-jdNavy text-8xl capitalize font-semibold leading-tight">
                Everything For <br /> Your Business
              </h1>
            </div>
            <div>
              <p className="text-3xl mb-12 leading-normal">
                Help your customers find you with a home for your business
                online. Jimdo has all of the digital tools you need, including a
                customized, compliant website, an online store that's open 24/7,
                and more.
              </p>
              <div>
                <PrimaryButton className="bg-jdBlue text-jdLight w-5/6 p-6 font-semibold text-xl">
                  Start Free
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="">
            <img src={jindoHomePageHero} className="w-full h-auto" alt="" />
          </div>
        </div>
        <div className="bg-jdLightGray py-24 px-24">
          <h1 className="text-6xl text-center mb-10"><span className="text-jdBlue">Websites</span> without the effort</h1>
          <p className="text-center text-3xl mb-32">Design your website exactly how you want it—we provide everything you need to get started.</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className=""><img src={jindoHomePageHero} alt="" className="w-full" /></div>
            <div>
            <div className="space-y-8 mb-16">
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Make changes any time</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Make changes any time</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Make changes any time</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Make changes any time</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Make changes any time</span></div>
            </div>
              <Link className="text-jdBlue underline text-2xl font-semibold flex items-center">How to create a website <BsArrowRight className="ml-2 mt-2" /></Link>
            </div>
          </div>
        </div>
        <div className="bg-jdNavy text-center py-20">
          <p className="text-2xl text-jdLight mb-20">Create your website today.</p>
          <PrimaryButton className="bg-jdBlue text-jdLight w-[500px] font-semibold p-8 text-2xl">Let's get started</PrimaryButton>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-24">
            <h1 className="text-5xl"><span className="text-jdBlue">Selling </span> made simple</h1>
            <p className="text-3xl my-12">Create an independent online store—hassle-free.</p>
            <div>
             <div className="space-y-8 mb-16">
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">No transaction fees (your products, your profit)</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Offer shipping and local pickup options</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Book appointments right on your site</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Manage all your orders in one place</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Take payments via PayPal or Stripe</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Sell on Instagram and Facebook</span></div>
              <div className="flex items-center"><CheckBox type="checkbox" className='h-8 w-8 mr-4' /> <span className="text-3xl">Boost your store with sales & discounts</span></div>
             </div>
              <PrimaryButton className="bg-jdBlue text-jdLight text-center w-96 font-semibold text-lg mb-10 py-9">Let's get started</PrimaryButton>
              <Link className="text-jdBlue underline text-2xl font-semibold flex items-center">How to create an online store <BsArrowRight className="ml-2 mt-2" /></Link>
            </div>
          </div>
          <div><img src={storeSectionImage} className="w-full h-auto" alt="" /></div>
        </div>
        <div className=" bg-jdLightGray py-24">
          <h1 className="text-6xl text-center"><span className=" text-jdBlue">Sites </span> worth seeing</h1>
          <p className="text-3xl text-center my-14">Real people. Real websites. From artists to chefs, freelancers to 
            startups, check out what customers have already built with Jimdo.
          </p>
          <div className="text-center mb-24">
            <PrimaryButton className=" bg-jdBlue text-jdLight font-semibold text-2xl capitalize text-center w-[500px] py-8">More examples</PrimaryButton>
          </div>
          <div className="mb-24">
            <div className="flex items-center overflow-x-scroll scroll-smooth no-scrollbar gap-12">
              <img src={siteImageThree} alt="" />
              <img src={siteImageFive} alt="" />
              <img src={siteImageFour} alt="" />
              <img src={siteImageTwo} alt="" />
              <img src={siteImageSix} alt="" />
              <img src={siteImageThree} alt="" />
              <div className="absolute w-[99.8%] px-8  flex items-center justify-between">
                <div className="p-3 bg-jdLight rounded-full shadow-md hover:text-jdBlue text-4xl text-center"><MdArrowBackIos /></div>
                <div className="p-3 bg-jdLight rounded-full shadow-md hover:text-jdBlue text-4xl text-center"><MdArrowForwardIos /></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10 space-x-2">
              <div className=" rounded-full p-3 cursor-pointer bg-jdlightBlue "></div>
              <div className=" rounded-full p-3 cursor-pointer bg-jdlightBlue "></div>
              <div className=" rounded-full p-3 cursor-pointer bg-jdlightBlue "></div>
              <div className=" rounded-full p-3 cursor-pointer bg-jdlightBlue "></div>
              <div className=" rounded-full p-3 cursor-pointer bg-jdlightBlue "></div>
            </div>
          </div>
          <div>
            <h1 className=" text-jdNavy text-center text-6xl font-semibold">Make it <span className="text-jdBlue">memorable</span> <br /> With a free logo</h1></div>
            <p className="text-3xl text-center my-10">You're building your brand—now get a logo to match. 
              Use our Logo Creator to design your <br /> own business logo and download 
              all the files you need for digital and print. It's free to <br /> use.
            </p>
            <p className="flex items-center justify-center mb-24"> <Link className="text-jdBlue underline text-2xl font-semibold flex items-center">How to create a logo <BsArrowRight className="ml-2 mt-2" /></Link></p>
            <div className="grid grid-cols-5 px-44 mb-12">
              <img src={logoOne} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoThree} alt="" />
              <img src={logoFour} alt="" />
              <img src={logoFive} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <PrimaryButton className="w-[500px] border-[3px] border-jdBlue text-jdBlue p-8 font-bold text-xl hover:text-jdLight hover:bg-jdBlue">Try it free</PrimaryButton>
            </div>
        </div>
        <div className="grid grid-cols-2 p-16 gap-16">
          <div className="relative">
            <img src={matzeImage} alt="" />
            <div className="absolute bottom-16 left-16">
              <h2 className="text-jdNavy text-xl font-bold mb-2">Matthias Henze</h2>
              <p className="text-jdNavy">CEO and founder of Jimdo</p>
            </div>
          </div>
          <div className=" bg-jdLightNavy2 flex items-center justify-center px-16">
            <div>
                <h1 className="text-6xl mb-10 font-bold"><span className="text-jdBlue">Independent</span>  but not alone</h1>
                <p className="text-3xl">We’re passionate about self-employed small business owners like you. Helping you 
                  harness your power and thrive online has been our mission from the beginning.
               </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 p-16 bg-jdLightNavy2"> 
          <div className="space-y-4">
            <p><Link className="hover:text-jdBlue font-bold text-xl">Company Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Portfolio Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Reustarant Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Coaching Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Website Builder</Link></p>
          </div>
          <div className="space-y-4">
            <p><Link className="hover:text-jdBlue font-bold text-xl">Company Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Portfolio Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Reustarant Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Coaching Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Website Builder</Link></p>
          </div>
          <div className="space-y-4">
            <p><Link className="hover:text-jdBlue font-bold text-xl">Company Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Portfolio Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Reustarant Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Coaching Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Website Builder</Link></p>
          </div>
          <div className="space-y-4">
            <p><Link className="hover:text-jdBlue font-bold text-xl">Company Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Portfolio Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Reustarant Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Coaching Website</Link></p>
            <p><Link className="hover:text-jdBlue font-bold text-xl">Website Builder</Link></p>
          </div>
          
        </div>
        <div className="bg-jdNavy text-center py-20">
          <p className="text-3xl text-jdLight font-bold mb-20">Love your website from Day One.</p>
          <PrimaryButton className="bg-jdBlue text-jdLight w-[500px] font-semibold p-8 text-2xl">Let's get started</PrimaryButton>
        </div>
        <DisplayCarousel />
      </main>
    </Layout>
  );
};

export default Home;
