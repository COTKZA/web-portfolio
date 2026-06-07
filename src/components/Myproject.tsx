import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BiLinkExternal } from "react-icons/bi";

const Myproject = () => {
  return (
    <div
      id="project"
      className="relative bg-linear-to-b from-zinc-800 via-neutral-800 to-neutral-900"
    >
      <img
        src="/image/wave-haikei.svg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        alt="background blob"
      />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 pb-20 sm:px-6 lg:px-8">
        <h2 className="z-10 text-4xl font-extrabold text-white md:text-5xl">
          ผลงาน
        </h2>
        <div className="hidden lg:block">
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {/* Contact Card */}
            {/* <a href="https://contact-card-mu.vercel.app/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group/card hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover/card:text-[#0c78e5]/90 transition duration-300 transform flex items-center justify-between">
                  Contact Card
                  <span>
                    <BiLinkExternal />
                  </span>
                </h1>

                <LazyLoadImage
                  src="/image/myproject/contact-card.png"
                  className="w-full transition duration-300 rounded-md"
                  effect="blur"
                  alt="contact-card"
                />

                <div className="flex items-center gap-2 transition duration-300 mt-4">
                  <div className="relative bg-neutral-800 rounded-full p-1.5 border border-neutral-600/50 group/icon">
                    <img
                      src="/image/logos/react_dark.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />

                    <div className="absolute -top-10 -translate-x-2 bg-white text-black text-sm px-3 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition duration-300 whitespace-nowrap border">
                      React
                      <div className=" absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-white rotate-45  border-b"></div>
                    </div>
                  </div>
                  <div className="relative bg-neutral-800 rounded-full p-1.5 border border-neutral-600/50 group/icon">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />

                    <div className="absolute -top-10 -translate-x-8 bg-white text-black text-sm px-3 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition duration-300 whitespace-nowrap border">
                      Tailwind CSS
                      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-white rotate-45  border-b"></div>
                    </div>
                  </div>
                </div>

         
                <div className="flex items-center gap-2 text-white/80 mt-4 pt-4 px-2 py-3 bg-neutral-900/50 rounded-lg border border-neutral-700/50">
                  <span className="text-sm font-medium">Credit :</span>
                  <div
                    onClick={() =>
                      window.open(
                        "https://web-portfolio-eight-red.vercel.app/",
                        "_blank"
                      )
                    }
                    className="text-sm text-blue-300 hover:text-blue-400 hover:underline transition duration-300 flex items-center gap-1"
                  >
                    <span>Me</span>
                    <BiLinkExternal />
                  </div>
                </div>
              </div>
            </a> */}

            {/* Bottle Refund */}
            <a href="https://www.bottlerefund.net/" target="_blank">
              <div className="group/card transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
                <h1 className="mb-3 flex transform items-center justify-between text-lg font-bold text-white transition duration-300 group-hover/card:text-[#0c78e5]/90 lg:text-xl xl:text-2xl">
                  Bottle Refund
                  <span>
                    <BiLinkExternal />
                  </span>
                </h1>

                <LazyLoadImage
                  src="/image/myproject/bottle_refund.png"
                  className="w-full rounded-md transition duration-300"
                  effect="blur"
                  alt="contact-card"
                />

                {/* Tech */}
                <div className="mt-4 flex items-center gap-2 transition duration-300">
                  <div className="group/icon relative rounded-full border border-neutral-600/50 bg-neutral-800 p-1.5">
                    <img
                      src="/image/logos/nuxt.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />

                    <div className="absolute -top-10 -translate-x-2 rounded-md border bg-white px-3 py-1 text-sm whitespace-nowrap text-black opacity-0 transition duration-300 group-hover/icon:opacity-100">
                      Nuxt
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b bg-white"></div>
                    </div>
                  </div>
                  <div className="group/icon relative rounded-full border border-neutral-600/50 bg-neutral-800 p-1.5">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />

                    <div className="absolute -top-10 -translate-x-8 rounded-md border bg-white px-3 py-1 text-sm whitespace-nowrap text-black opacity-0 transition duration-300 group-hover/icon:opacity-100">
                      Tailwind CSS
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b bg-white"></div>
                    </div>
                  </div>
                </div>

                {/* Credit */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-700/50 bg-neutral-900/50 px-2 py-3 pt-4 text-white/80">
                  <span className="text-sm font-medium">Credit :</span>
                  <div
                    onClick={() =>
                      window.open(
                        "https://web-portfolio-eight-red.vercel.app/",
                        "_blank",
                      )
                    }
                    className="flex items-center gap-1 text-sm text-blue-300 transition duration-300 hover:text-blue-400 hover:underline"
                  >
                    <span>Me</span>
                    <BiLinkExternal />
                  </div>
                </div>
              </div>
            </a>

            {/* Tharasiri */}
            <a href="https://tharasiri.jirasak.com/" target="_blank">
              <div className="group/card transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
                <h1 className="mb-3 flex transform items-center justify-between text-lg font-bold text-white transition duration-300 group-hover/card:text-[#0c78e5]/90 lg:text-xl xl:text-2xl">
                  Tharasiri (Web Clone)
                  <span>
                    <BiLinkExternal />
                  </span>
                </h1>

                <LazyLoadImage
                  src="/image/myproject/tharasiri.png"
                  className="w-full rounded-md transition duration-300"
                  effect="blur"
                  alt="contact-card"
                />

                {/* Tech */}
                <div className="mt-4 flex items-center gap-2 transition duration-300">
                  <div className="group/icon relative rounded-full border border-neutral-600/50 bg-neutral-800 p-1.5">
                    <img
                      src="/image/logos/react_dark.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />

                    <div className="absolute -top-10 -translate-x-2 rounded-md border bg-white px-3 py-1 text-sm whitespace-nowrap text-black opacity-0 transition duration-300 group-hover/icon:opacity-100">
                      React
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b bg-white"></div>
                    </div>
                  </div>
                  <div className="group/icon relative rounded-full border border-neutral-600/50 bg-neutral-800 p-1.5">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />

                    <div className="absolute -top-10 -translate-x-8 rounded-md border bg-white px-3 py-1 text-sm whitespace-nowrap text-black opacity-0 transition duration-300 group-hover/icon:opacity-100">
                      Tailwind CSS
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b bg-white"></div>
                    </div>
                  </div>
                </div>

                {/* Credit */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-700/50 bg-neutral-900/50 px-2 py-3 pt-4 text-white/80">
                  <span className="text-sm font-medium">Credit :</span>
                  <div
                    className="flex items-center gap-1 text-sm text-blue-300 transition duration-300 hover:text-blue-400 hover:underline"
                    onClick={() =>
                      window.open("https://www.tharasiri.com/", "_blank")
                    }
                  >
                    <span>Tharasiri</span>
                    <BiLinkExternal />
                  </div>
                </div>
              </div>
            </a>

            {/* Web ADDA */}
            {/* <a href="https://web-adda.vercel.app/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group/card hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover/card:text-[#0c78e5]/90 transition duration-300 transform flex items-center justify-between">
                  Web ADDA (Early Access)
                  <span>
                    <BiLinkExternal />
                  </span>
                </h1>

                <LazyLoadImage
                  src="/image/myproject/web-adda.png"
                  className="w-full transition duration-300 rounded-md"
                  effect="blur"
                  alt="web-adda"
                />

                <div className="flex items-center gap-2 transition duration-300 mt-4">
                  <div className="relative bg-neutral-800 rounded-full p-1.5 border border-neutral-600/50 group/icon">
                    <img
                      src="/image/logos/vue.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />

                    <div className="absolute top-[-40px] -translate-x-2 bg-white text-black text-sm px-3 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition duration-300 whitespace-nowrap border">
                      Vue
                      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-white rotate-45  border-b"></div>
                    </div>
                  </div>
                  <div className="relative bg-neutral-800 rounded-full p-1.5 border border-neutral-600/50 group/icon">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />

                    <div className="absolute top-[-40px] -translate-x-8 bg-white text-black text-sm px-3 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition duration-300 whitespace-nowrap border">
                      Tailwind CSS
                      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-white rotate-45  border-b"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/80 mt-4 pt-4 px-2 py-3 bg-neutral-900/50 rounded-lg border border-neutral-700/50">
                  <span className="text-sm font-medium">Credit :</span>
                  <div
                    onClick={() =>
                      window.open("https://www.adda.co.th/", "_blank")
                    }
                    className="text-sm text-blue-300 hover:text-blue-400 hover:underline transition duration-300 flex items-center gap-1"
                  >
                    <span>ADDA</span>
                    <BiLinkExternal />
                  </div>
                </div>
              </div>
            </a> */}

            {/* <a href="http://jirasak.duckdns.org:8087/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Shop Game
                </h1>
                <LazyLoadImage
                  src="/image/myproject/shop-game.png"
                  className="w-full transition duration-300 rounded-md"
                  effect="blur"
                  alt="shop-game.png"
                />
                <div className="flex items-center gap-2 transition duration-300 mt-4">
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/laravel.svg"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      loading="lazy"
                      alt="logo"
                    />
                  </div>
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a>

            <a href="http://jirasak.duckdns.org:5173/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Anime Seven (Early Access)
                </h1>
                <LazyLoadImage
                  src="/image/myproject/anime-seven.png"
                  className="w-full transition duration-300 rounded-md"
                  effect="blur"
                  alt="anime-seven"
                />
                <div className="flex items-center gap-2 transition duration-300 mt-4">
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/react_dark.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a> */}
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {/* Contact Card */}
            {/* <a href="https://contact-card-mu.vercel.app/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Contact Card
                </h1>
                <LazyLoadImage
                  src="/image/myproject/contact-card.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="contact-card"
                />
                <div className="flex items-center gap-2  mt-4">
                  <div className="bg-neutral-800 border border-neutral-600/50 rounded-full p-1">
                    <img
                      src="/image/logos/react_dark.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                  <div className="bg-neutral-800 border border-neutral-600/50 rounded-full p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a> */}

            {/* Bottle Refund */}
            <a href="https://www.bottlerefund.net/" target="_blank">
              <div className="group transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
                <h1 className="mb-3 transform text-lg font-bold text-white transition duration-300 group-hover:text-[#0c78e5]/90 lg:text-xl xl:text-2xl">
                  Bottle Refund
                </h1>
                <LazyLoadImage
                  src="/image/myproject/bottle_refund.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="contact-card"
                />
                <div className="mt-4 flex items-center gap-2">
                  <div className="rounded-full border border-neutral-600/50 bg-neutral-800 p-1">
                    <img
                      src="/image/logos/nuxt.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />
                  </div>
                  <div className="rounded-full border border-neutral-600/50 bg-neutral-800 p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* Tharasiri */}
            <a href="https://tharasiri.jirasak.com/" target="_blank">
              <div className="group transform rounded-lg border border-neutral-500/40 bg-neutral-800/70 p-4 shadow-lg backdrop-blur-lg transition duration-500 hover:border-[#0c78e5]">
                <h1 className="mb-3 transform text-lg font-bold text-white transition duration-300 group-hover:text-[#0c78e5]/90 lg:text-xl xl:text-2xl">
                  Tharasiri (Web Clone)
                </h1>
                <LazyLoadImage
                  src="/image/myproject/tharasiri.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="contact-card"
                />
                <div className="mt-4 flex items-center gap-2">
                  <div className="rounded-full border border-neutral-600/50 bg-neutral-800 p-1">
                    <img
                      src="/image/logos/react_dark.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />
                  </div>
                  <div className="rounded-full border border-neutral-600/50 bg-neutral-800 p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="h-8 w-8 p-1 sm:h-10 sm:w-10"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* Web ADDA */}
            {/* <a href="https://web-adda.vercel.app/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Web ADDA (Early Access)
                </h1>
                <LazyLoadImage
                  src="/image/myproject/web-adda.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="web-adda"
                />

                <div className="flex items-center gap-2  mt-4">
                  <div className="bg-neutral-800 border border-neutral-600/50 rounded-full p-1">
                    <img
                      src="/image/logos/vue.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                  <div className="bg-neutral-800 border border-neutral-600/50 rounded-full p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a> */}

            {/* <a href="http://jirasak.duckdns.org:8087/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Shop Game
                </h1>
                <LazyLoadImage
                  src="/image/myproject/shop-game.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="shop-game.png"
                />
                <div className="flex items-center gap-2 mt-4">
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/laravel.svg"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      loading="lazy"
                      alt="logo"
                    />
                  </div>
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a>

            <a href="http://jirasak.duckdns.org:5173/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Anime Seven (Early Access)
                </h1>
                <LazyLoadImage
                  src="/image/myproject/anime-seven.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="anime-seven"
                />
                <div className="flex items-center gap-2 mt-4">
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/react_dark.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/tailwindcss.svg"
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
