import { FaEnvelope,FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#ABCE4E] text-white  lg:rounded-tl-[15%] lg:rounded-tr-[30%]">
      <div className="container mx-auto px-10 md:px-16 lg:px-20 pt-10 md:pr-16 lg:pt-20">
        <div className=" flex flex-col items-center md:flex-row gap-y-10  border-b border-white/30 py-10">
          <div className="space-y-3 lg:flex-1">
            <h3 className="font-bold text-3xl ">Get in touch</h3>
            <p className="font-medium text-lg">
              Uttara, Dhaka-1230, Bangladesh
            </p>
            <div className="flex items-center gap-x-2">
              <FaEnvelope className="text-white" />
              <p className="text-lg">shiyam0sarker@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-2">
              <BsTelephoneFill className="text-white text-lg" />
              <p className="text-lg">+8801590033964</p>
            </div>
          </div>
          <div className=" space-y-4 flex flex-col  items-center lg:flex-1">
            <img
              className="w-[200px]"
              src="../../../src/assets/logo-white.png"
              alt=""
            />
            <h3 className="font-bold text-2xl"> Let&apos;s fun together</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="bg-white hover:bg-[#FEBF05]  rounded ">
                <FaFacebookF className="text-3xl p-1 text-[#FEBF05] hover:text-white duration-500" />
              </div>
              <div className="bg-white hover:bg-[#FEBF05]  rounded ">
                <FaInstagram className="text-3xl p-1 text-[#FEBF05] hover:text-white duration-500" />
              </div>
              <div className="bg-white hover:bg-[#FEBF05]  rounded ">
                <FaTwitter className="text-3xl p-1 text-[#FEBF05] hover:text-white duration-500" />
              </div>
              <div className="bg-white hover:bg-[#FEBF05]  rounded ">
                <FaYoutube className="text-3xl p-1 text-[#FEBF05] hover:text-white duration-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:w-[30%] mx-auto">
            <h3 className="font-bold text-3xl ">Newsletter.</h3>
            <p className="">
              Signup for our newsletter to get updated information, insight, or
              promotions.
            </p>
            <input
              className="p-2 rounded-lg w-auto"
              type="Email"
              placeholder="Email"
            />
            <button className="font-custom px-4 py-2 bg-[#FEBF05] rounded-lg">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <p>
            Copyright © 2022 BeeParty, All rights reserved. Powered by
            MoxCreative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
