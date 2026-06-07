import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const sections = [
  { id: "home", label: "หน้าแรก" },
  { id: "skill", label: "ทักษะ" },
  { id: "project", label: "ผลงาน" },
  { id: "contact", label: "ติดต่อ" },
];

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [fixed, setFixed] = useState(false);
  const [slidebar, setSidebar] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth < 768);
  };

  const handleScroll = () => {
    const scrollPos = window.scrollY + 100;

    for (let section of sections) {
      const el = document.getElementById(section.id);
      if (el && scrollPos >= el.offsetTop) {
        setActive(section.id);
      }
    }

    if (mobile) {
      setFixed(true);
    } else {
      const skillSection = document.getElementById("skill");
      if (skillSection) {
        setFixed(window.scrollY >= skillSection.offsetTop);
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobile]);

  return (
    <header className="bg-zinc-800">
      <nav
        className={`bg-background/80 z-50 w-full border-b border-zinc-700 bg-zinc-800/80 backdrop-blur-lg transition-all duration-600 ${
          fixed ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <h1 className="text-2xl font-bold text-white sm:text-4xl">
              Portfolio
            </h1>

            {/* Mobile SildeBar */}
            <div className="block md:hidden">
              <button onClick={() => setSidebar(!slidebar)}>
                <FaBars className="text-2xl text-white" />
              </button>
            </div>

            {/* DeskTop Navbar */}
            <div className="hidden space-x-8 text-white md:flex">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  smooth={true}
                  duration={1000}
                  className={`cursor-pointer transition-colors ${
                    active === section.id
                      ? "font-semibold text-[#0c78e5]"
                      : "text-white"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {slidebar && (
        <div className="fixed top-20 right-0 left-0 z-40 flex flex-col items-center space-y-4 bg-zinc-800/40 py-6 backdrop-blur-lg md:hidden">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={1000}
              onClick={() => setSidebar(false)}
              className={`cursor-pointer transition-colors ${
                active === section.id
                  ? "font-semibold text-[#0c78e5]"
                  : "text-white"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
