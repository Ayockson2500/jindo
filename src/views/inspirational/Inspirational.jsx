import React from "react";
import Layout from "../../layout";
import PrimaryButton from "../../components/common/PrimaryButton";
import inspirationImageOne from "../../assets/images/amanda-brennan-creative-producer_jimdosite_com.jpg";
import inspirationImageTwo from "../../assets/images/anna-ehrenreich-luftartistik_de.jpg";
import inspirationImageThree from "../../assets/images/craftmans_nl.jpg";
import inspirationImageFour from "../../assets/images/curio-styles-net.jpg";
import inspirationImageFive from "../../assets/images/erikrohrer-com.jpg";
import inspirationImageSix from "../../assets/images/hej-its-her-com.png";
import inspirationImageSeven from "../../assets/images/iamisoulcoaching-com.jpg";
import inspirationImageEight from "../../assets/images/jindo_homepage_hero-image.jpg";
import inspirationImageNine from "../../assets/images/livinggingerdesigns-com.jpg";

const Inspirational = () => {
  return (
    <Layout>
      <main className=" mt-28 bg-jdLightNavy2">
        <div className="py-24">
          <h1 className="text-6xl font-bold text-center leading-normal">
            Outstanding Jimdo Website <br /> examples. All built with Jimdo.
          </h1>
          <h3 className="text-3xl font-bold text-center my-8">Inspiration</h3>
          <p className="text-center text-3xl mb-20">
            Small businesses, self-employed, artists, freelancers - Jimdo users
            are the creative minds <br /> behind our great websites. Check out
            examples of Jimdo websites from around the world <br /> and get
            inspired for your website.
          </p>
          <div className="flex items-center justify-center">
            <PrimaryButton className="w-[500px] p-8 text-jdLight font-semibold text-2xl text-center bg-jdBlue2 hover:bg-jdBlue">
              Start Now
            </PrimaryButton>
          </div>
        </div>
        <div className="py-24 grid grid-cols-3 gap-10">
          <div className="relative group cursor-pointer">
            <img src={inspirationImageOne} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageTwo} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageThree} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageFour} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageFive} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageSix} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageSeven} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageEight} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={inspirationImageNine} alt="" className="w-full h-auto" />
            <div className="absolute top-0 right-0 bottom-0 left-0 pacity-50 w-full group-hover:bg-jdNavy"></div>
            <div className="hidden group-hover:block z-50 absolute top-[25%] translate-y-1/2 left-[22%]">
              <PrimaryButton className="bg-jdLightGray text-2xl font-semibold hover:bg-jdGray border-[3px] border-jdLightGray hover:border-jdLight text-black p-5 w-96 mb-2">
                Preview
              </PrimaryButton>
              <p className="text-jdLight text-center text-2xl">
                Ayockson.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Inspirational;
