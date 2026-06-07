import TextType from "./animation/TextType";
import SplitText from "./animation/SplitText";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Snowfall from "react-snowfall";

const Index = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      id="home"
      className="relative bg-linear-to-b from-zinc-800 via-neutral-800 to-neutral-900 pt-10 sm:pt-0"
    >
      <img
        src="/image/stacked-waves-haikei.svg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        alt="background blob"
      />
      <Snowfall color="#82C3D9" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex min-h-screen flex-col items-center pt-20 pb-20 lg:flex-row lg:justify-between">
          {/* Profile Image */}
          <div className="mt-18 h-auto w-auto shrink-0 sm:h-86 sm:w-86 lg:mt-0 xl:h-130 xl:w-130">
            <LazyLoadImage
              src="/image/profile/profile.jpg"
              className="h-full w-full rounded-full border-4 border-white/80 object-cover"
              effect="blur"
              alt="profile"
            />
          </div>
          {/* Text Section */}
          <div className="mt-8 lg:mt-0">
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
                  "Full Stack Developer",
                  "Front End Developer",
                  "Back End Developer",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#0c78e5"]}
              />
            </span>
            <p className="mt-6 max-w-lg text-base leading-relaxed font-medium text-white md:text-lg">
              ผมเป็น Full Stack Developer ที่ชื่นชอบการเรียนรู้สิ่งใหม่ ๆ
              และพัฒนาตัวเองอยู่เสมอ มีไอเดียและความคิดสร้างสรรค์ในการเขียนโค้ด
              ชอบแก้ปัญหาและสร้างฟีเจอร์ใหม่ ๆ ที่ใช้งานง่าย มีประสิทธิภาพ
              และตอบโจทย์ผู้ใช้งาน
            </p>
            <Link to="contact" smooth={true} duration={1000}>
              <button className="group mt-5 flex transform cursor-pointer items-center gap-3 rounded-lg bg-[#0c78e5] px-10 py-2 text-lg font-semibold text-white transition-colors duration-500 hover:scale-105 hover:bg-[#3587eb] hover:shadow-xl/20 hover:shadow-blue-400">
                ติดต่อ{" "}
                <FaAnglesRight className="transform text-xl transition-transform duration-500 group-hover:translate-x-1/2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
