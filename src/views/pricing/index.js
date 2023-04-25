import React, { useState } from "react";
import Layout from "../../layout";
import Button from "../../components/common/Button";
import WebsitePrice from "./WebsitePrice";
import OnlineStorePrice from "./OnlineStorePrice";
import { AiOutlineBars, AiOutlineHeart } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import websiteImage from "../../assets/images/website-teaser.png"
import PrimaryButton from "../../components/common/PrimaryButton";

const Pricing = () => {
  const [togglePricingCards, setTogglePricingCard] = useState(1);
  const [firstToggle, setFirstToggle] = useState(false);
  const [secondToggle, setSecondToggle] = useState(false);
  const [thirdToggle, setThirdToggle] = useState(false);
  const [fourtToggle, setFourtToggle] = useState(false);

  const displayPricingCard = () => {
    switch (togglePricingCards) {
      case 1:
        return <WebsitePrice />;
      case 2:
        return <OnlineStorePrice />;

      default:
        break;
    }
  };
  return (
    <Layout>
      <main className="border mt-28 bg-jdLight">
        <div className="py-24 bg-jdLightNavy2">
          <h1 className="text-center text-7xl font-bold">
            Choose the Jimdo plan that’s right for you
          </h1>
          <div className="my-24 flex items-center justify-center">
            <Button
              onClick={() => setTogglePricingCard(1)}
              className={`shadow-md py-5 px-16 font-bold text-2xl ${
                togglePricingCards === 1
                  ? "bg-jdLightGray text-jdBlue border-b-4 border-jdBlue"
                  : "bg-jdLight border-b-4 hover:border-jdBlue hover:text-jdBlue transition ease-linear"
              }`}
            >
              Website
            </Button>
            <Button
              onClick={() => setTogglePricingCard(2)}
              className={`shadow-md py-5 px-16 font-bold text-2xl ${
                togglePricingCards === 2
                  ? "bg-jdLightGray text-jdBlue border-b-4 border-jdBlue"
                  : "bg-jdLight border-b-4 hover:border-jdBlue hover:text-jdBlue transition ease-linear"
              }`}
            >
              Online Store
            </Button>
          </div>
          <div>{displayPricingCard(togglePricingCards)}</div>
          <div className="px-16">
            <p className="text-xl font-bold mb-2">
              Included in all premium plans:
            </p>
            <div className="flex items-center space-x-5">
              <p className="hover:text-jdBlue cursor-default text-xl">
                Ad-free
              </p>
              <p className="hover:text-jdBlue cursor-default text-xl">
                Connect your own domain
              </p>
              <p className="hover:text-jdBlue cursor-default text-xl">
                Connect your email address
              </p>
              <p className="hover:text-jdBlue cursor-default text-xl">
                Contact forms
              </p>
              <p className="hover:text-jdBlue cursor-default text-xl">
                Image library
              </p>
              <p className="hover:text-jdBlue cursor-default text-xl">
                Mobile-optimized
              </p>
            </div>
            <div className="flex items-center justify-end text-2xl font-bold space-x-2 cursor-pointer">
              <AiOutlineBars />
              <p>Compare all features</p>
            </div>
          </div>
        </div>
        <div className="px-16">
          <h1 className="text-center font-bold text-6xl py-10">
            Find the features you need
          </h1>
          <div className="bg-jdLight">
            <table className=" table-auto w-full ">
              <thead>
                <tr>
                  <th className="p-5 text-2xl font-normal"></th>
                  <th className="p-5 text-2xl font-normal">UNLIMITED</th>
                  <th className="p-5 text-2xl font-normal">GROW</th>
                  <th className="p-5 text-2xl font-normal">START</th>
                  <th className="p-5 text-2xl font-normal">PLAY</th>
                </tr>
                <tr className="border border-jdGray bg-jdLightGray">
                  <th className="p-5 text-2xl font-bold text-start">Hosting</th>
                  <th className="p-5 text-xl font-semibold">US$39</th>
                  <th className="p-5 text-xl font-semibold">US$15</th>
                  <th className="p-5 text-xl font-semibold">US$9</th>
                  <th className="p-5 text-xl font-semibold">US$0</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-jdGray">
                  <td className="p-5 text-2xl font-bold">HTTPS security</td>
                  <td className="text-center text-xl border font-semibold p-5">
                    1
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    2
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    3
                  </td>
                  <td className="text-center border font-semibold p-5">4</td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">Free domain</td>
                  <td className="text-center text-xl border font-semibold p-5"></td>
                  <td className="text-center text-xl border font-semibold p-5"></td>
                  <td className="text-center text-xl border font-semibold p-5"></td>
                  <td className="text-center text-xl border font-semibold p-5">
                    .jimdosite.com subdomain
                  </td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">Storage</td>
                  <td className="text-center border font-semibold p-5">
                    Unlimited
                  </td>
                  <td className="text-center border font-semibold p-5">
                    15 GB
                  </td>
                  <td className="text-center border font-semibold p-5">5 GB</td>
                  <td className="text-center border font-semibold p-5">
                    15 GB
                  </td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">Bandwidth</td>
                  <td className="text-center text-xl border font-semibold p-5">
                    Unlimited
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    20 GB
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    20 GB
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    20 GB
                  </td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">
                    Connect your own domain
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    1
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    1
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    1
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    1
                  </td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">Customer support</td>
                  <td className="text-center text-xl border font-semibold p-5">
                    within 1 hour
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    within 4 hours
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    within 2 hour
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    within 9 hour
                  </td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">
                    Connect your email address
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    1
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    2
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    3
                  </td>
                  <td className="text-center text-xl border font-semibold p-5">
                    4
                  </td>
                </tr>
                <tr className="border border-jdGray">
                  <td className="p-5 font-bold text-2xl">
                    Forwarding email addresses
                  </td>
                  <td className="text-center border text-xl font-semibold p-5">
                    20
                  </td>
                  <td className="text-center border text-xl font-semibold p-5">
                    2
                  </td>
                  <td className="text-center border text-xl font-semibold p-5">
                    30
                  </td>
                  <td className="text-center border text-xl font-semibold p-5">
                    28
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 className="text-center font-semibold text-xl p-16">
            Prices include tax
          </h1>
        </div>
        <div className=" bg-jdLightNavy2 p-16">
          <h1 className="text-6xl text-center font-bold mb-5">
            Questions before starting?
          </h1>
          <p className="text-center text-3xl mb-16">
            Compare and find the perfect plan for your website. Take a look at
            what we offer and <br /> start creating.
          </p>
          <div className="mb-32">
            <div onClick={() => setFirstToggle(!firstToggle)} className=" group cursor-pointer mb-5">
              <div className="flex items-center justify-between pb-10 border-b-4 border-black">
                <p className="text-3xl font-bold">
                  I already have a registered domain, can I connect it to my new
                  Jimdo website?
                </p>
                <BsPlusCircleFill className={`text-4xl ${firstToggle ? 'rotate-45 transition ease-in-out' : null}`} />
              </div>
              <p className={`text-2xl transition ease-linear py-5 ${firstToggle ? 'block' : 'hidden'}`}>
                Sure! With our premium plans, it's easy to transfer your
                existing domain to Jimdo, or keep your domain where it is and  <br /> 
                simply connect it to your Jimdo website. When you sign up, be
                sure to add your registered <br /> domain and confirm that you are the
                owner.
              </p>
            </div>
            <div onClick={() => setSecondToggle(!secondToggle)} className=" group cursor-pointer mb-5">
              <div className="flex items-center justify-between pb-10 border-b-4 border-black">
                <p className="text-3xl font-bold">
                Can I start with a free Play website then upgrade my plan later?
                </p>
                <BsPlusCircleFill className={`text-4xl ${secondToggle ? 'rotate-45 transition ease-in-out' : null}`} />
              </div>
              <p className={`text-2xl transition ease-linear py-5 ${secondToggle ? 'block' : 'hidden'}`}>
                Sure! With our premium plans, it's easy to transfer your
                existing domain to Jimdo, or keep your domain where it is and  <br /> 
                simply connect it to your Jimdo website. When you sign up, be
                sure to add your registered <br /> domain and confirm that you are the
                owner.
              </p>
            </div>
            <div onClick={() => setThirdToggle(!thirdToggle)} className=" group cursor-pointer mb-5">
              <div className="flex items-center justify-between pb-10 border-b-4 border-black">
                <p className="text-3xl font-bold">
                Can I cancel my contract if I change my mind?
                </p>
                <BsPlusCircleFill className={`text-4xl ${thirdToggle ? 'rotate-45 transition ease-in-out' : null}`} />
              </div>
              <p className={`text-2xl transition ease-linear py-5 ${thirdToggle ? 'block' : 'hidden'}`}>
                Sure! With our premium plans, it's easy to transfer your
                existing domain to Jimdo, or keep your domain where it is and  <br /> 
                simply connect it to your Jimdo website. When you sign up, be
                sure to add your registered <br /> domain and confirm that you are the
                owner.
              </p>
            </div>
            <div onClick={() => setFourtToggle(!fourtToggle)} className=" group cursor-pointer">
              <div className="flex items-center justify-between pb-10 border-b-4 border-black">
                <p className="text-3xl font-bold">
                When do I need to pay?
                </p>
                <BsPlusCircleFill className={`text-4xl ${fourtToggle ? 'rotate-45 transition ease-in-out' : null}`} />
              </div>
              <p className={`text-2xl transition ease-linear py-5 ${fourtToggle ? 'block' : 'hidden'}`}>
                Sure! With our premium plans, it's easy to transfer your
                existing domain to Jimdo, or keep your domain where it is and  <br /> 
                simply connect it to your Jimdo website. When you sign up, be
                sure to add your registered <br /> domain and confirm that you are the
                owner.
              </p>
            </div>
          </div>
            <div className="grid grid-cols-2">
              <div className=""><img src={websiteImage} alt="" className="w-full" /></div>
              <div className="flex items-center justify-center">
              <div>
                <h1 className="text-6xl mb-12 ">Want to customize your website <br /> with code? Try our Creator editor</h1>
                <p className="text-2xl mb-12">Creator's coding features give you the freedom to customize <br /> websites for specific needs. Build your navigation menu, online <br /> store, and design elements—just the way you want them.</p>
                <PrimaryButton className="bg-jdBlue2 hover:bg-jdBlue p-8 w-[500px] text-jdLight font-bold text-2xl">Compare Plans</PrimaryButton>
              </div>
              </div>
            </div>
              <div className="py-16">
                <h1 className="text-6xl font-bold text-center mb-24 text-jdNavy">Thank you for over 32 million Jimdo <br /> websites!</h1>
                <div>
                  <div className="flex items-center justify-center"><p className="p-3 text-3xl rounded-full bg-jdPink text-center text-jdLight"><AiOutlineHeart /></p></div>
                  <p className="text-center text-6xl font-light text-jdNavy">Made in Hamburg since 2007</p>
                </div>
              </div>
        </div>
      </main>
    </Layout>
  );
};

export default Pricing;
