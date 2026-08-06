import TextType from "./animation/TextType";
import SplitText from "./animation/SplitText";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-scroll";

const Index = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div id="home" className="flex min-h-screen items-center">
      <div className="grid w-full items-center gap-16 lg:grid-cols-12">
        {/* Left */}
        <div className="flex justify-center lg:col-span-5">
          <div className="h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-[28rem] xl:w-[28rem]">
            <img
              src="/image/profile/profile.jpg"
              className="h-full w-full rounded-full border-4 border-white/80 object-cover"
              loading="lazy"
              alt="profile"
            />
          </div>
        </div>
        {/* Right */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <h2 className="mb-4 text-4xl font-semibold text-white md:text-6xl">
            <SplitText
              text="สวัสดี ผม"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <span className="ml-3 font-bold text-[#0c78e5]">
              <SplitText
                text="จิระศักดิ์"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </span>
          </h2>
          <span className="text-3xl font-bold text-white drop-shadow-md md:text-5xl">
            <TextType
              text={[
                "Full Stack Internship",
                "Front End Internship",
                "Back End Internship",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#0c78e5"]}
            />
          </span>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg lg:mx-0">
            ผมเป็นนักศึกษาที่มีความสนใจด้าน{" "}
            <span className="font-semibold text-white">
              Full Stack Internship
            </span>{" "}
            ที่ชื่นชอบการเรียนรู้สิ่งใหม่ ๆ และพัฒนาตัวเองอยู่เสมอ
            มีไอเดียและความคิดสร้างสรรค์ในการเขียนโค้ด
            ชอบแก้ปัญหาและสร้างฟีเจอร์ใหม่ ๆ ที่ใช้งานง่าย มีประสิทธิภาพ
            และตอบโจทย์ผู้ใช้งาน
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link to="contact" smooth={true} duration={1000}>
              <button className="group relative overflow-hidden rounded-lg bg-[#0c78e5] px-10 py-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-300 ease-out group-hover:scale-y-100" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-[#0c78e5]">
                  ติดต่อ
                  <FaAnglesRight />
                </span>
              </button>
            </Link>
            <a
              href=""
              className="group relative overflow-hidden rounded-lg border-2 border-[#0c78e5] px-10 py-2 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover:scale-y-100" />
              <span className="relative z-10">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
