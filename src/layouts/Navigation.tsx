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
    const scrollPos = window.scrollY + 120;

    let currentSection = "home";

    sections.forEach((section) => {
      const el = document.getElementById(section.id);

      if (!el) return;

      const sectionTop = el.getBoundingClientRect().top + window.scrollY;

      if (scrollPos >= sectionTop) {
        currentSection = section.id;
      }
    });

    setActive(currentSection);

    if (mobile) {
      setFixed(true);
    } else {
      const skillSection = document.getElementById("skill");
      if (skillSection) {
        const skillTop =
          skillSection.getBoundingClientRect().top + window.window.scrollY;

        setFixed(window.scrollY >= skillTop);
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
    <header className="dark:bg-[#161616]">
      <nav
        className={`bg-background/40 z-50 w-full border-white/5 backdrop-blur transition-all duration-600 dark:bg-[#161616]/80 ${
          fixed ? "fixed top-0 right-0 left-0" : "relative"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <h1 className="text-2xl font-bold text-white sm:text-4xl">
              Jirasak<span className="text-[#0c78e5]">.com</span>
            </h1>

            {/* Mobile SildeBar */}
            <div className="block md:hidden">
              <div className="flex items-center gap-3">
                <button onClick={() => setSidebar(!slidebar)}>
                  <FaBars className="text-2xl text-white" />
                </button>
              </div>
            </div>

            {/* DeskTop Navbar */}
            <div className="hidden items-center space-x-8 text-white md:flex">
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
        <div className="bg-background/40 fixed top-20 right-0 left-0 z-40 flex flex-col items-center space-y-4 bg-[#161616]/80 py-6 backdrop-blur md:hidden">
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
