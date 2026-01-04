import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaCopy } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

const Contacts = () => {
  const email = "cotkgtasa123@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error: any) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      id="contact"
      className="relative bg-gradient-to-b from-zinc-800 via-neutral-800 to-neutral-900"
    >
      <img
        src="/image/stacked-waves-haikei.svg"
        className="absolute inset-0 w-full h-full object-cover  opacity-80"
        alt="background blob"
      />
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center  pt-20 pb-20">
        <h2 className="text-white font-extrabold text-4xl md:text-5xl z-10 ">
          ติดต่อ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3 mt-10">
          <a href="https://github.com/COTKZA" target="_blank">
            <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
              <div className="flex justify-center items-center">
                <BsGithub className="w-30 h-30 transition duration-500 transform group-hover:text-blue-500 " />
              </div>
              <h1 className="text-white text-center text-xl md:text-sm lg:text-xl mt-3">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <a href="https://www.facebook.com/COTKZA" target="_blank">
            <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
              <div className="flex justify-center items-center">
                <BsFacebook className="w-30 h-30 transition duration-500 transform group-hover:text-blue-500 " />
              </div>
              <h1 className="text-white text-center text-xl md:text-sm lg:text-xl mt-3">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
            <div className="flex justify-center items-center">
              <BiLogoGmail className="w-30 h-30 transition duration-500 transform group-hover:text-blue-500 " />
            </div>
            <h1 className="text-white text-center text-xl md:text-sm lg:text-xl mt-3 flex items-center justify-center gap-2">
              {" "}
              {email}
              {copied ? (
                <FaCopy className="text-md text-white" />
              ) : (
                <FaRegCopy
                  onClick={handleCopy}
                  className="text-white text-md cursor-pointer hover:text-blue-400 transition"
                />
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
