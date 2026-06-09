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
        setCopied(false)
      }, 2000);
    } catch (error: any) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      id="contact"
      className="relative bg-linear-to-b from-zinc-800 via-neutral-800 to-neutral-900"
    >
      <img
        src="/image/stacked-waves-haikei.svg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        alt="background blob"
      />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 pb-20 sm:px-6 lg:px-8">
        <h2 className="z-10 text-4xl font-extrabold text-white md:text-5xl">
          ติดต่อ
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
          <a href="https://github.com/COTKZA" target="_blank">
            <div className="group transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
              <div className="flex items-center justify-center">
                <BsGithub className="h-30 w-30 transform transition duration-500 group-hover:text-blue-500" />
              </div>
              <h1 className="mt-3 text-center text-xl text-white md:text-sm lg:text-xl">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <a href="https://www.facebook.com/COTKZA" target="_blank">
            <div className="group transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
              <div className="flex items-center justify-center">
                <BsFacebook className="h-30 w-30 transform transition duration-500 group-hover:text-blue-500" />
              </div>
              <h1 className="mt-3 text-center text-xl text-white md:text-sm lg:text-xl">
                Jirasak Suktakua
              </h1>
            </div>
          </a>

          <div className="group transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
            <div className="flex items-center justify-center">
              <BiLogoGmail className="h-30 w-30 transform transition duration-500 group-hover:text-blue-500" />
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
