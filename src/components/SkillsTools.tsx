import LogoLoop from "./animation/LogoLoop"

const SkillsTools = () => {
    const frontandback = [
        { src: "/image/logos/react.png", alt: "react", href: "https://reactjs.org" },
        { src: "/image/logos/Laravel.png", alt: "Laravel", href: "https://laravel.com/" },
        { src: "/image/logos/Node.js_logo.png", alt: "Node", href: "https://nodejs.org" },
        { src: "/image/logos/expressjs_logo-1024x729.png", alt: "express", href: "https://expressjs.com/" },
        { src: "/image/logos/Vue.js_Logo_2.svg.png", alt: "Vue", href: "https://vuejs.org/" },
        { src: "/image/logos/Typescript_logo_2020.png", alt: "Typescript", href: "https://www.typescriptlang.org/" },
        { src: "/image/logos/logo-javascript-logo-png-transparent.png", alt: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ];

    const css = [
        { src: "/image/logos/daisyui-logo-2000.png", alt: "daisyui", href: "https://daisyui.com/" },
        { src: "/image/logos/Tailwind_CSS_Logo.png", alt: "Tailwind_CSS", href: "https://tailwindcss.com/" },
        { src: "/image/logos/Bootstrap_logo.png", alt: "Bootstrap_logo", href: "https://getbootstrap.com/docs/5.0/about/brand/" },
        { src: "/image/logos/Vitejs-logo.png", alt: "Vitejs", href: "https://vite.dev/" },
        { src: "/image/logos/HTML5_logo_and_wordmark.png", alt: "Html5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
        { src: "/image/logos/css3-5.png", alt: "Html5", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ];

    
    const tools = [
        { src: "/image/logos/sequelize.png", alt: "sequelize", href: "https://sequelize.org/" },
        { src: "/image/logos/mysql-5-logo-png-transparent.png", alt: "mysql", href: "https://www.mysql.com" },
        { src: "/image/logos/sqlserver.png", alt: "sql-server", href: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads" },
        { src: "/image/logos/docker.png", alt: "docker", href: "https://www.docker.com/" },
        { src: "/image/logos/Git_icon.png", alt: "Git", href: "https://git-scm.com/" },
        { src: "/image/logos/png-transparent-postman-hd-logo.png", alt: "postman", href: "https://www.postman.com/" },
    ];

    return (
        <div id="skill" className="relative bg-gradient-to-b from-zinc-800 via-neutral-800 to-neutral-900">
            <img
                src="/image/blob-scene-haikei (1).svg"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                alt="background blob"
            />
            <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="mb-10 flex items-start z-10">
                    <h2 className="text-white  font-extrabold text-4xl md:text-5xl">ทักษะและเครื่องมือ</h2>
                </div>
                {/* Front Back */}
                <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl border border-zinc-800 p-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20 pointer-events-none z-10"></div>
                    <LogoLoop
                        logos={frontandback}
                        speed={120}
                        direction="right"
                        logoHeight={60}
                        gap={50}
                        pauseOnHover
                        scaleOnHover
                        ariaLabel="Technology partners"
                    />
                </div>

                {/* CSS */}
                <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl border border-zinc-800 p-1 mt-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20 pointer-events-none z-10"></div>
                    <LogoLoop
                        logos={css}
                        speed={120}
                        direction="left"
                        logoHeight={60}
                        gap={50}
                        pauseOnHover
                        scaleOnHover
                        ariaLabel="Technology partners"
                    />
                </div>

                {/* Tools */}
                 <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl border border-zinc-800 p-1 mt-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20 pointer-events-none z-10"></div>
                    <LogoLoop
                        logos={tools}
                        speed={120}
                        direction="right"
                        logoHeight={60}
                        gap={50}
                        pauseOnHover
                        scaleOnHover
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>

        </div>
    )
}

export default SkillsTools