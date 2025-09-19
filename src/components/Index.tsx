import TextType from "./animation/TextType";
import SplitText from "./animation/SplitText";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-scroll";

const Index = () => {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div id="home" className="relative bg-gradient-to-b from-zinc-800 via-neutral-800 to-neutral-900">
            <img
                src="/image/stacked-waves-haikei.svg"
                className="absolute inset-0 w-full h-full object-cover  opacity-80"
                alt="background blob"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center lg:justify-between  pt-20 pb-20 sm:pb-20 sm:pt-20 md:pt-0 md:pb-0">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 w-auto h-auto sm:w-86 sm:h-86 xl:w-130 xl:h-130 mt-18 lg:mt-0">
                        <img
                            src="/image/profile/profile.jpg"
                            className="w-full h-full border-4 border-white/80 rounded-full object-cover"
                            loading="lazy"
                            alt="profile"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="mt-8 lg:mt-0">
                        <h2 className="text-white font-semibold text-4xl md:text-6xl mb-4">
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
                            <span className="ml-3 text-[#0c78e5] font-bold">
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
                        <span className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
                            <TextType
                                text={["Full Stack Developer", "Front End Developer", "Back End Developer"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                textColors={["#0c78e5"]}
                            />
                        </span>
                        <p className="mt-6 text-white text-base md:text-lg max-w-lg leading-relaxed font-medium">ผมเป็น Full Stack Developer ที่ชื่นชอบการเรียนรู้สิ่งใหม่ ๆ และพัฒนาตัวเองอยู่เสมอ มีไอเดียและความคิดสร้างสรรค์ในการเขียนโค้ด ชอบแก้ปัญหาและสร้างฟีเจอร์ใหม่ ๆ ที่ใช้งานง่าย มีประสิทธิภาพ และตอบโจทย์ผู้ใช้งาน</p>
                        <Link to="contact" smooth={true} duration={1000}><button className="px-10 py-2 mt-5 bg-[#0c78e5] text-white font-semibold rounded-lg transform transition-colors duration-500 hover:bg-[#3587eb] hover:shadow-blue-400 hover:shadow-xl/20 hover:scale-105 text-lg flex items-center gap-3 group cursor-pointer">ติดต่อ <FaAnglesRight className="text-xl group-hover:translate-x-1/2 transform transition-transform duration-500" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
