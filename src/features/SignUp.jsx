import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import PrimaryButton from "../components/common/PrimaryButton";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center bg-jdLightGray py-20">
      <div className=" w-[550px]">
        <div className="text-center mb-16 ">
          <Link
            to={"/"}
            className="logo uppercase border-[5px] border-jdNavy py-2 px-4 font-bold text-2xl"
          >
            Jindo
          </Link>
        </div>
        <form className="px-12 py-12 bored shadow-md bg-jdLight">
          <h2 className="text-4xl font-bold text-bold mb-5">First, sign up free</h2>
          <p className="text-2xl">Continue with a free account to start your website or store. We hate paperwork too.</p>
          <div className="my-10">
            <Link
              to={""}
              className="flex items-center justify-center w-full p-4 border-4 border-jdLightNavy mb-6"
            >
              <FcGoogle className="text-4xl mr-4" />
              <p className="text-2xl font-bold ">Continue with Google</p>
            </Link>
            <Link
              to={""}
              className="flex items-center justify-center w-full p-4 border-4 border-jdLightNavy mb-6"
            >
              <GrFacebook className="text-4xl mr-4" />
              <p className="text-2xl font-bold ">Login in with Facebook</p>
            </Link>
            <Link
              to={""}
              className="flex items-center justify-center w-full p-4 border-4 border-jdLightNavy mb-5"
            >
              <BsApple className="text-4xl mr-4" />
              <p className="text-2xl font-bold ">Continue with Apple</p>
            </Link>
            <Link
              to={""}
              className="flex items-center justify-center w-full p-4 border-4 border-jdLightNavy"
            >
              <AiOutlineMail className="text-4xl mr-4" />
              <p className="text-2xl font-bold ">Continue with Email</p>
            </Link>
          </div>
          <p className="mb-10 text-2xl font-semibold text-center">Already registered?</p>
          <div className="flex items-center justify-center mb-10">
            <Link to={'/login'} className=" border-4 border-jdBlue text-jdBlue hover:bg-jdLightNavy py-5 w-full text-2xl font-semibold text-center">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp