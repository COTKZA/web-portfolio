import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const Myproject = () => {
  return (
    <section id="project" className="py-20">
      {/* header section */}
      <div className="mb-16 flex flex-col">
        <h2 className="text-4xl font-extrabold text-white">ผลงาน</h2>
        <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </div>

      {/* project */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* bottle refund member */}
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://member.bottlerefund.net
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/member_bottle_refund.webp"
                alt="bottle_refund"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              BottleRefund Member
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              แพลตฟอร์มจัดการการคืนขวดและขยะรีไซเคิล พัฒนาในส่วน Frontend เเละ
              BackEnd สำหรับเช็คข้อมูลสมาชิก คะแนนสะสม และข้อมูลการรีไซเคิล
              เเละระบบจัดการหลังบ้าน โดยเน้น UI/UX ที่ใช้งานง่าย รองรับ
              Responsive Design
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 264"
                >
                  <path
                    d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z"
                    fill="#FF2D20"
                  />
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Laravel
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 252"
                >
                  <path
                    fill="#FFF"
                    d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"
                  />
                  <path
                    fill="#FFF"
                    d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"
                  />
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  MySQL
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://member.bottlerefund.net" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              {/* <a
                href=""
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a> */}
            </div>
          </div>
        </div>

        {/* bottle landing page */}
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://www.bottlerefund.net
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/bottle_refund.webp"
                alt="bottle_refund"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              BottleRefund Landing Page
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              แพลตฟอร์มจัดการการคืนขวดและขยะรีไซเคิล พัฒนาในส่วน Frontend
              พร้อมเชื่อมต่อ REST API สำหรับเช็คข้อมูลสมาชิก คะแนนสะสม
              และข้อมูลการรีไซเคิล โดยเน้น UI/UX ที่ใช้งานง่าย รองรับ Responsive
              Design และการจัดการข้อมูลจาก API
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  viewBox="0 0 256 168"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    fill="#00DC82"
                    d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115 16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113 17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975A16.302 16.302 0 0 0 0 150.325c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115 17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"
                  />
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Nuxt
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <TbApi className="h-5 w-5 text-white" />
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  API Laravel
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://www.bottlerefund.net" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              {/* <a
                href=""
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a> */}
            </div>
          </div>
        </div>

        {/* tharasiri */}
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://tharasiri.jirasak.com
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/tharasiri.webp"
                alt="tharasiri"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              Tharasiri UI Clone
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              เว็บไซต์นำเสนอข้อมูลโครงการบ้านธาราศิริ พัฒนาในส่วน Frontend
              โดยเน้นการออกแบบ UI/UX ที่ทันสมัย สะอาดตา และใช้งานง่าย
              พร้อมรองรับการแสดงผลแบบ Responsive บน Desktop และ Mobile
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 569 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g fill="none" fillRule="evenodd">
                    <g
                      transform="translate(-227, -256)"
                      fill="#58C4DC"
                      fillRule="nonzero"
                    >
                      <g transform="translate(227, 256)">
                        <path
                          d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201"
                          id="Path"
                        ></path>
                        <path
                          d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  React
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://tharasiri.jirasak.com" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/COTKZA/web-tharasiri"
                target="_blank"
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://ticketier.jirasak.com
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/ticketier.webp"
                alt="ticketier"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              Ticketier UI Clone
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              เว็บไซต์สำหรับนำเสนอข้อมูลบัตรคอนเสิร์ต มิวสิคเฟส และแฟนมีต
              พัฒนาในส่วน Frontend โดยเน้น UI/UX ที่ทันสมัย ใช้งานง่าย และรองรับ
              Responsive Design บน Desktop และ Mobile
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  viewBox="0 0 256 221"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"
                    fill="#41B883"
                  />
                  <path
                    d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"
                    fill="#41B883"
                  />
                  <path
                    d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"
                    fill="#35495E"
                  />
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Vue
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://ticketier.jirasak.com" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/COTKZA/web-ticketier"
                target="_blank"
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://promptpay.jirasak.com
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/promptpay.webp"
                alt="promptpay"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
              {/* <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div> */}
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              PromptPay Slip Verification
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              เว็บไซต์สำหรับสร้าง QR PromptPay และตรวจสอบสลิปการโอนเงิน
              พัฒนาระบบ Frontend พร้อมเชื่อมต่อ API
              สำหรับตรวจสอบข้อมูลการชำระเงิน โดยเน้น UI/UX
              ที่ใช้งานง่ายและรองรับ Responsive Design
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 569 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g fill="none" fillRule="evenodd">
                    <g
                      transform="translate(-227, -256)"
                      fill="#58C4DC"
                      fillRule="nonzero"
                    >
                      <g transform="translate(227, 256)">
                        <path
                          d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201"
                          id="Path"
                        ></path>
                        <path
                          d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  React
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <TbApi className="h-5 w-5 text-white" />
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  API
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://promptpay.jirasak.com/" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/COTKZA/web-promptpay"
                target="_blank"
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://readme.mt-xlab.com
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/readme.webp"
                alt="promptpay"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-blue-400 shadow-lg backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                In Development
              </div>
              {/* <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div> */}
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              ReadMe
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              ออกแบบโครงสร้างแบบ Responsive Design
              เพื่อรองรับการจัดเรียงรูปภาพปกและเนื้อหาให้แสดงผลได้อย่างสวยงาม
              สมดุล และลื่นไหลบนทุกขนาดหน้าจออุปกรณ์และพัฒนาเว็บแอปพลิเคชันแบบ
              Full-Stack แพลตฟอร์มอ่านนิยายและมังงะออนไลน์
              โดยแยกสถาปัตยกรรมหน้าบ้าน และหลังบ้าน เชื่อมต่อผ่าน RESTful API
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 569 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g fill="none" fillRule="evenodd">
                    <g
                      transform="translate(-227, -256)"
                      fill="#58C4DC"
                      fillRule="nonzero"
                    >
                      <g transform="translate(227, 256)">
                        <path
                          d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201"
                          id="Path"
                        ></path>
                        <path
                          d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  React
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#fff"
                    d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
                  />
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Express.js
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 252"
                >
                  <path
                    fill="#FFF"
                    d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"
                  />
                  <path
                    fill="#FFF"
                    d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"
                  />
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  MySQL
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://readme.mt-xlab.com/" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              {/* <a
                href="https://github.com/COTKZA/web-promptpay"
                target="_blank"
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a> */}
            </div>
          </div>
        </div>

        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          {/* mac os top bar */}
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            <div className="bg-neutral-800/8- flex items-center px-4 py-5 backdrop-blur-md">
              {/* colors */}
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>

              {/* url */}
              <div className="mx-auto flex h-6 items-center justify-center rounded-md bg-black/30 px-2 text-[10px] tracking-wider text-neutral-400 shadow-inner sm:w-1/2">
                https://gastronomy8riw.com/
              </div>

              <div className="sm:w-[42px]"></div>
            </div>

            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/myproject/gastronomy8riw.png"
                alt="promptpay"
                loading="lazy"
                className="relative inset-0 z-20 h-full object-cover transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-blue-400 shadow-lg backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                In Development
              </div>
              {/* <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div> */}
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              พุงตึงริมกง หลงเสน่ห์แปดริ้ว
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              เป็นเว็บไซต์แนะนำการท่องเที่ยวเชิงอาหารในจังหวัดฉะเชิงเทรา
              ที่รวบรวมข้อมูลร้านอาหารริมแม่น้ำบางปะกง สถานที่ท่องเที่ยว
              และเส้นทางการเดินทาง
              เพื่อช่วยให้นักท่องเที่ยวสามารถค้นหาและวางแผนทริปได้สะดวก
              พร้อมส่งเสริมการท่องเที่ยวและสร้างประโยชน์ให้แก่ชุมชนในพื้นที่
            </p>

            {/* tech stack icon */}
            <div className="mt-4 mb-4 flex flex-wrap items-center gap-3">
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20"
                  height="20">
                  <defs>
                    <linearGradient
                      id="SVGrDou6dwg"
                      x1="55.633%"
                      x2="83.228%"
                      y1="56.385%"
                      y2="96.08%"
                    >
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="SVG9onTObtB"
                      x1="50%"
                      x2="49.953%"
                      y1="0%"
                      y2="73.438%"
                    >
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <circle id="SVGN5eQqeMK" cx="128" cy="128" r="128" />
                  </defs>
                  <mask id="SVGMX2wGdvm" fill="#fff">
                    <use href="#SVGN5eQqeMK" />
                  </mask>
                  <g mask="url(#SVGMX2wGdvm)">
                    <circle cx="128" cy="128" r="128" />
                    <path
                      fill="url(#SVGrDou6dwg)"
                      d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
                    />
                    <path
                      fill="url(#SVG9onTObtB)"
                      d="M163.556 76.8h17.067v102.4h-17.067z"
                    />
                  </g>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Next.js
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
              <div className="group/tooltip relative flex items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 p-2 transition-all hover:border-neutral-500 hover:bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                  width="20"
                  height="20"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
                  Tailwind CSS
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
                </span>
              </div>
            </div>

            {/* button */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-800/50 pt-5">
              <a href="https://gastronomy8riw.com/" target="_blank">
                <button className="group/website relative w-full overflow-hidden rounded-lg bg-[#0c78e5] p-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover/website:scale-y-100" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover/website:text-[#0c78e5]">
                    <BiLinkExternal className="h-4 w-4 shrink-0" />
                    WebSite
                  </span>
                </button>
              </a>
              {/* <a
                href="https://github.com/COTKZA/web-promptpay"
                target="_blank"
                className="group/github relative w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />

                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FaGithub className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myproject;
