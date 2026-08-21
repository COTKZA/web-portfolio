import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AIKnowledgeSkillsModal = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-2 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900 shadow-2xl sm:max-w-2xl lg:max-w-6xl">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
            โครงการพัฒนาความรู้และทักษะด้าน AI โดยทีมงาน Google
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-white hover:text-white/80"
          >
            <IoClose />
          </button>
        </div>

        <div className="mt-1 w-full border-2 border-b border-gray-400"></div>

        <div className="min-h-0 flex-1 transform-gpu overflow-y-auto overscroll-contain p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3">
                <img
                  src="/image/activitys/ai-google/IMG_6426.webp"
                  alt="IMG_6426"
                  className="h-48 w-full rounded-lg object-cover sm:h-64"
                />
              </div>

              {/* row1 */}
              <div className="col-span-1">
                <img
                  src="/image/activitys/ai-google/IMG_6419.webp"
                  alt="IMG_6419"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/ai-google/IMG_6430.webp"
                  alt="IMG_6430"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/ai-google/IMG_6443.webp"
                  alt="IMG_6443"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>

              {/* row2*/}
              <div className="col-span-1">
                <img
                  src="/image/activitys/ai-google/IMG_6447.webp"
                  alt="IMG_6447"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/ai-google/IMG_6474.webp"
                  alt="IMG_6474"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/ai-google/IMG_6535.webp"
                  alt="IMG_6535"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex items-start">
                  <MdDateRange  className="mt-0.5 mr-3 text-2xl text-[#0c78e5]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-md font-semibold text-[#0c78e5]">
                      วัน/เดือน/ปี :
                    </span>
                    <span className="text-md mt-1 font-semibold text-white">
                      4 มิถุนายน 2569
                    </span>
                  </div>
                </div>
                <div className="mt-3 w-full border border-b border-gray-400"></div>
              </div>

              <div>
                <div className="flex items-start">
                  <FaLocationDot  className="mt-0.5 mr-3 text-2xl text-[#0c78e5]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-md font-semibold text-[#0c78e5]">
                      สถานที่ :
                    </span>
                    <span className="text-md mt-1 font-semibold text-white">
                      มหาวิทยาลัยศรีปทุม วิทยาเขตขอนแก่น
                    </span>
                  </div>
                </div>
                <div className="mt-3 w-full border border-b border-gray-400"></div>
              </div>

              <div>
                <div className="flex items-start">
                  <FaUserAlt className="mt-0.5 mr-3 text-2xl text-[#0c78e5]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-md font-semibold text-[#0c78e5]">
                      หน้าที่ :
                    </span>
                    <span className="text-md mt-1 font-semibold text-white">
                      ผู้ช่วยวิทยากร / เจ้าหน้าที่ถ่ายภาพ
                    </span>
                  </div>
                </div>
                <div className="mt-3 w-full border border-b border-gray-400"></div>
              </div>

              <div className="text-white  space-y-3">
                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    ภายในกิจกรรมช่วงเช้า ผู้เข้าร่วมได้รับการอบรมการใช้งาน
                    NotebookLM เพื่อประยุกต์ใช้ AI ในการทำงานด้านต่าง ๆ เช่น
                    การสรุปเนื้อหาจากไฟล์และเว็บไซต์
                    การสร้างพอดแคสต์จากเนื้อหาในรูปแบบบทสนทนา
                    และการสร้างสไลด์นำเสนอจากข้อมูลที่กำหนด
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    ในช่วงบ่าย มีการอบรมการใช้งาน Google Stitch สำหรับการออกแบบ
                    UX/UI พร้อมเรียนรู้การ Deploy UI ผ่าน Netlify
                    เพื่อให้ผู้เข้าร่วมสามารถนำผลงานที่พัฒนาขึ้นไปเผยแพร่และเปิดให้ผู้อื่นเข้าถึงได้
                    นอกจากนี้ยังมีการแนะนำ Google Antigravity ซึ่งเป็นเครื่องมือ
                    AI Agent ที่ช่วยสร้าง UI จากคำสั่งที่ผู้ใช้งานกำหนด
                  </span>
                </p>

                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    ช่วงท้ายของกิจกรรมเปิดโอกาสให้ผู้เข้าร่วมสอบถามข้อสงสัยเกี่ยวกับเนื้อหาและการประยุกต์ใช้
                    AI โดยมีวิทยากรให้คำแนะนำและตอบคำถามแก่ผู้เข้าร่วม
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIKnowledgeSkillsModal;
