import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const IotModal = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="relative z-10 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900 shadow-2xl sm:max-w-2xl lg:max-w-6xl">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
            กิจกรรมอบรมสมรรถนะดิจิทัล การพัฒนางาน Internet of Things (IoT)
            สําหรับนักเรียน
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
                  src="/image/activitys/iot/DSC09710.webp"
                  alt="DSC09710"
                  className="h-48 w-full rounded-lg object-cover sm:h-64"
                />
              </div>

              {/* row1 */}
              <div className="col-span-1">
                <img
                  src="/image/activitys/iot/DSC09725.webp"
                  alt="DSC09725"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/iot/IMG_6261.webp"
                  alt="IMG_6261"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/iot/IMG_6264.webp"
                  alt="IMG_6264"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>

              {/* row2*/}
              <div className="col-span-1">
                <img
                  src="/image/activitys/iot/IMG_6364.webp"
                  alt="IMG_6364"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/iot/IMG_6403.webp"
                  alt="IMG_6474"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/image/activitys/iot/IMG_6622.webp"
                  alt="IMG_6622"
                  className="h-24 w-full rounded-lg object-cover sm:h-32"
                />
              </div>

              <div className="col-span-3">
                <img
                  src="/image/activitys/iot/เกียรติบัตรวิทยากรและผู้ช่วยวิทยากร.webp"
                  alt="เกียรติบัตรวิทยากรและผู้ช่วยวิทยากร"
                  className="h-48 w-full rounded-lg object-contain sm:h-64"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="/image/activitys/iot/ทีมงาน-ประกาศนียบัตร-ผู้เข้าร่วมและผู้ช่วย.webp"
                  alt="ทีมงาน-ประกาศนียบัตร-ผู้เข้าร่วมและผู้ช่วย"
                  className="h-48 w-full rounded-lg object-contain sm:h-64"
                />
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex items-start">
                  <MdOutlineDateRange className="mt-0.5 mr-3 text-2xl text-[#0c78e5]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-md font-semibold text-[#0c78e5]">
                      วัน/เดือน/ปี :
                    </span>
                    <span className="text-md mt-1 font-semibold text-white">
                      13 มิถุนายน 2569 - 14 มิถุนายน 2569
                    </span>
                  </div>
                </div>
                <div className="mt-3 w-full border border-b border-gray-400"></div>
              </div>

              <div>
                <div className="flex items-start">
                  <CiLocationOn className="mt-0.5 mr-3 text-2xl text-[#0c78e5]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-md font-semibold text-[#0c78e5]">
                      สถานที่ :
                    </span>
                    <span className="text-md mt-1 font-semibold text-white">
                      โรงเรียนมุกดาหาร จังหวัดมุกดาหาร
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
                      ผู้ช่วยวิทยากร
                    </span>
                  </div>
                </div>
                <div className="mt-3 w-full border border-b border-gray-400"></div>
              </div>

              <div className="space-y-3 text-white">
                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    วันที่ 13 มิถุนายน 2569 ช่วงเช้า เรียนรู้พื้นฐานการใช้งาน
                    Arduino และ ESP32 ส่วนประกอบและโครงสร้างของโปรแกรม
                    การต่อวงจรเบื้องต้น พื้นฐานภาษา C++ สำหรับ Arduino
                    การอ่านค่าจากเซนเซอร์ (Sensor) และการควบคุมอุปกรณ์เอาต์พุต
                    (Output)
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    วันที่ 13 มิถุนายน 2569 ช่วงบ่าย
                    เรียนรู้และทำความรู้จักโปรแกรม EasyEDA
                    สำหรับการออกแบบวงจรอิเล็กทรอนิกส์เบื้องต้น
                  </span>
                </p>

                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    วันที่ 14 มิถุนายน 2569 ช่วงเช้า เรียนรู้การออกแบบโมเดล 3
                    มิติด้วย SketchUp for Web พร้อมลงมือปฏิบัติและสร้างแบบจำลอง
                    3D Model
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="text-blue-400">◉</span>
                  <span>
                    วันที่ 14 มิถุนายน 2569 ช่วงบ่าย
                    เรียนรู้และฝึกปฏิบัติการบัดกรีอุปกรณ์อิเล็กทรอนิกส์อย่างถูกวิธี
                    การบัดกรีอุปกรณ์ลงบนแผ่นทองแดงอเนกประสงค์
                    การสร้างวงจรเบื้องต้น พร้อมเขียนโปรแกรมและทดสอบการทำงาน
                    จากนั้นประกอบอุปกรณ์เข้ากับเคส 3 มิติ (3D Case)
                    และทดสอบการใช้งานจริง
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

export default IotModal;
