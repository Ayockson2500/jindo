import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { AiOutlineMail, AiTwotoneLock } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: ""
};

const onSubmit = (values) => {
  console.log("submit data", values);
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Not a valid email format")
    .required("please enter Email!"),
   password: Yup.string().required('please enter password!').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
   "Must be 8 Characters long, One Uppercase, One Number and one special Character")
});

const Login = () => {
    const [typePassword, setTypePassword] = useState('password')

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("visited fields", formik.touched);
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
        <form
          onSubmit={formik.handleSubmit}
          className="px-12 py-12 bored shadow-md bg-jdLight"
        >
          <h2 className="text-4xl font-bold text-bold mb-5">Welcome back</h2>
          <p className="text-2xl">You can log in to your Jimdo account here.</p>
          <div className="my-10">
            <Link
              to={""}
              className="flex items-center justify-center w-full p-4 border-4 border-jdLightNavy mb-6"
            >
              <FcGoogle className="text-4xl mr-4" />
              <p className="text-2xl font-bold ">Login in with Google</p>
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
              className="flex items-center justify-center w-full p-4 border-4 border-jdLightNavy"
            >
              <BsApple className="text-4xl mr-4" />
              <p className="text-2xl font-bold ">Login in with Apple</p>
            </Link>
          </div>
          <div className="flex items-center space-x-3 mb-5">
            <hr className=" w-80 border-2" />{" "}
            <span className="text-2xl">or</span>{" "}
            <hr className="w-80 border-2" />
          </div>
          <div className="mb-5 group">
            <div
              className={`flex items-center border-4 border-jdLightNavy group-focus-within:border-jdBlue p-4 mb-2 ${
                formik.touched.email && formik.errors.email ? "border-jdRed" : "border-jdBlue"
              }`}
            >
              <AiOutlineMail className="text-4xl mr-2" />
              <InputField
                type="email"
                name={"email"}
                id={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-10/12 p-2 outline-none border-0 text-2xl"
                placeholder="Email address"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-600">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="mb-10 group">
            <div className={`flex items-center border-4 border-jdLightNavy group-focus-within:border-jdBlue p-4 mb-2 ${
                formik.touched.password && formik.errors.password ? "border-jdRed" : "border-jdBlue"
              }`}>
              <AiTwotoneLock className="text-4xl " />
              <InputField
                type={typePassword}
                name={"password"}
                id={"password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-10/12 p-2 outline-none border-0 text-2xl mx-2"
                placeholder="Enter password"
              />
              <div className="flex items-center justify-center relative">
              <FaEye onClick={() => setTypePassword('text')} className={`text-2xl cursor-pointer absolute ${typePassword === 'password' ? 'block' : 'hidden' }`} />
              <FaEyeSlash onClick={() => setTypePassword('password')} className={`text-2xl cursor-pointer absolute ${typePassword === 'text' ? 'block' : 'hidden'}`} />
              </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <span className=" text-red-600">{formik.errors.password}</span>
            ) : null}
          </div>
          <p className="mb-16 text-2xl font-semibold">
            <Link to={""} className="text-jdBlue">
              Forgot your password?
            </Link>
          </p>
          <div className="flex items-center justify-center mb-16">
            <PrimaryButton className="text-jdLight bg-jdBlue2 hover:bg-jdBlue py-5 w-full text-2xl font-semibold">
              Log In
            </PrimaryButton>
          </div>
          <hr className="border-2 mb-16" />
          <p className="text-center text-2xl mb-8">New here?</p>
          <div className="flex items-center justify-center mb-10">
            <Link
              to={"/signup"}
              className=" border-4 border-jdBlue text-jdBlue text-center hover:bg-jdLightNavy py-5 w-full text-2xl font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
