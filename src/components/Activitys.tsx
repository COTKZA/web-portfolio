import { useState } from "react";
import { GrFormView } from "react-icons/gr";
import AIKnowledgeSkillsModal from "./activitys/AIKnowledgeSkillsModal";
import IotModal from "./activitys/IotModal";

const Activitys = () => {
  const [openAIKnowledgeSkills, setOpenAIKnowledgeSkills] =
    useState<boolean>(false);
  const [openIot, setOpenIot] = useState<boolean>(false);

  return (
    <section id="activitys" className="py-20">
      {/* header section */}
      <div className="mb-16 flex flex-col">
        <h2 className="text-4xl font-extrabold text-white">กิจกรรม</h2>
        <div className="mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </div>

      {/* activitys */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/activitys/ai-google/IMG_6426.webp"
                alt="ai-google"
                loading="lazy"
                className="relative inset-0 z-20 h-full w-full object-cover transition-transform duration-700"
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400  mb-4">
              โครงการพัฒนาความรู้และทักษะด้าน AI โดยทีมงาน Google
            </h3>

            {/* button */}
            <button
              type="button"
              onClick={() => setOpenAIKnowledgeSkills(true)}
              className="group/github relative mt-auto w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />
              <div className="relative z-10 flex items-center justify-center gap-2">
                <GrFormView className="h-6 w-6 shrink-0" />
                <span>อ่านรายละเอียด</span>
              </div>
            </button>
          </div>
        </div>

        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-900/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50">
          <div className="flex flex-col border-b border-neutral-800 bg-[#1e1e1e]">
            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src="/image/activitys/iot/DSC09710.webp"
                alt="ai-google"
                loading="lazy"
                className="relative inset-0 z-20 h-full w-full object-cover transition-transform duration-700"
              />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400 mb-4">
              กิจกรรมอบรมสมรรถนะดิจิทัล การพัฒนางาน Internet of Things (IoT)
              สําหรับนักเรียน
            </h3>

            {/* button */}
            <button
              type="button"
              onClick={() => setOpenIot(true)}
              className="group/github relative mt-auto w-full overflow-hidden rounded-lg border border-[#0c78e5] p-1.5 text-lg font-semibold text-white transition-all duration-300 hover:rounded-none"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#0c78e5] transition-transform duration-300 ease-out group-hover/github:scale-y-100" />
              <div className="relative z-10 flex items-center justify-center gap-2">
                <GrFormView className="h-6 w-6 shrink-0" />
                <span>อ่านรายละเอียด</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <AIKnowledgeSkillsModal
        isOpen={openAIKnowledgeSkills}
        onClose={() => setOpenAIKnowledgeSkills(false)}
      />

      <IotModal isOpen={openIot} onClose={() => setOpenIot(false)} />
    </section>
  );
};

export default Activitys;
