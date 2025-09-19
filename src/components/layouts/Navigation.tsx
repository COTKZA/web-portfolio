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
    const [active, setActive] = useState("home")
    const [fixed, setFixed] = useState(false)
    const [slidebar, setSidebar] = useState(false)
    const [mobile, setMobile] = useState(false)

    const handleResize = () => {
        setMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
        const scrollPos = window.scrollY + 100

        for (let section of sections) {
            const el = document.getElementById(section.id)
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
        <header>
            <nav
                className={`w-full z-50 bg-background/80 bg-zinc-800 backdrop-blur-md border-b border-zinc-700 transition-all duration-600 ${fixed ? "fixed top-0 left-0" : "relative"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex justify-between items-center  h-20">
                        <h1 className="font-bold text-2xl sm:text-4xl text-white">Portfolio</h1>

                        {/* Mobile SildeBar */}
                        <div className="block md:hidden ">
                            <button onClick={() => setSidebar(!slidebar)}><FaBars className="text-white text-2xl" /></button>
                        </div>

                        {/* DeskTop Navbar */}
                        <div className="hidden md:flex space-x-8 text-white">
                            {sections.map((section) => (
                                <Link
                                    key={section.id}
                                    to={section.id}
                                    smooth={true}
                                    duration={1000}
                                    className={`cursor-pointer transition-colors ${active === section.id ? "text-[#0c78e5] font-semibold" : "text-white"}`}>
                                    {section.label}
                                </Link>
                            ))}
                        </div>

                    </nav>
                </div>
            </nav>

            {slidebar && (
                <div className="fixed top-20 right-0 left-0 bg-zinc-800/40 backdrop-blur-lg flex flex-col items-center py-6 space-y-4 z-40 md:hidden">
                    {sections.map((section) => (
                        <Link
                            key={section.id}
                            to={section.id}
                            smooth={true}
                            duration={1000}
                            onClick={() => setSidebar(false)}
                            className={`cursor-pointer transition-colors ${active === section.id ? "text-[#0c78e5] font-semibold" : "text-white"}`}>
                            {section.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navigation