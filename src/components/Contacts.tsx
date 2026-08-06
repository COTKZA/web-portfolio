import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaCopy } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

const Contacts = () => {
  const email = "jirasak.suktakua@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error: any) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div id="contact" className="py-20">
      <div className="relativeflex flex-col justify-center">
        <div className="mb-16 flex flex-col">
          <h2 className="text-4xl font-extrabold text-white">ติดต่อ</h2>
          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
          <a href="https://github.com/COTKZA" target="_blank">
            <div className="group transform rounded-lg border-b border-neutral-800 bg-[#1e1e1e] p-4 shadow-lg backdrop-blur-lg transition duration-500">
              <div className="flex items-center justify-center">
                <BsGithub className="h-30 w-30 transform transition duration-500 group-hover:text-[#0c78e5]" />
              </div>
              <h1 className="mt-3 text-center text-xl text-white md:text-sm lg:text-xl">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <a href="https://www.facebook.com/COTKZA" target="_blank">
            <div className="group transform rounded-lg border-b border-neutral-800 bg-[#1e1e1e] p-4 shadow-lg backdrop-blur-lg transition duration-500">
              <div className="flex items-center justify-center">
                <BsFacebook className="h-30 w-30 transform transition duration-500 group-hover:text-[#0c78e5]" />
              </div>
              <h1 className="mt-3 text-center text-xl text-white md:text-sm lg:text-xl">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <div className="group transform rounded-lg border-b border-neutral-800 bg-[#1e1e1e] p-4 shadow-lg backdrop-blur-lg transition duration-500">
            <div className="flex items-center justify-center">
              <BiLogoGmail className="h-30 w-30 transform transition duration-500 group-hover:text-[#0c78e5]" />
            </div>
            <h1 className="mt-3 flex items-center justify-center gap-2 text-center text-xl text-white md:text-sm lg:text-xl">
              {email}
              {copied ? (
                <FaCopy className="text-md text-white" />
              ) : (
                <FaRegCopy
                  onClick={handleCopy}
                  className="text-md cursor-pointer text-white transition hover:text-blue-400"
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
