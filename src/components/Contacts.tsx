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
    <div
      id="contact"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 flex-col justify-center py-16 md:py-24"
    >
      <div className="w-full">
        <div className="mb-12 flex flex-col">
          <h2 className="text-4xl font-extrabold text-white">ติดต่อ</h2>
          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a href="https://github.com/COTKZA" target="_blank">
            <div className="group flex flex-col items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-900/60 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
              <div className="flex items-center justify-center">
                <BsGithub className="h-18 w-18 transform text-white transition duration-500 group-hover:text-[#0c78e5] md:h-25 md:w-25 lg:h-30 lg:w-30" />
              </div>
              <h1 className="text-md mt-3 text-center text-white md:text-sm lg:text-xl">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <a href="https://www.facebook.com/COTKZA" target="_blank">
            <div className="group flex flex-col items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-900/60 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
              <div className="flex items-center justify-center">
                <BsFacebook className="h-18 w-18 transform text-white transition duration-500 group-hover:text-[#0c78e5] md:h-25 md:w-25 lg:h-30 lg:w-30" />
              </div>
              <h1 className="text-md mt-3 text-center text-white md:text-sm lg:text-xl">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <div className="group flex flex-col items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-900/60 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-blue-500/50">
            <div className="flex items-center justify-center">
              <BiLogoGmail className="h-18 w-18 transform text-white transition duration-500 group-hover:text-[#0c78e5] md:h-25 md:w-25 lg:h-30 lg:w-30" />
            </div>
            <h1 className="text-md mt-3 flex items-center justify-center gap-2 text-center text-white md:text-sm lg:text-xl">
              <span>{email}</span>
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
