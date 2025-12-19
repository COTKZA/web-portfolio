import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Myproject = () => {
  return (
    <div
      id="project"
      className="relative bg-gradient-to-b from-zinc-800 via-neutral-800 to-neutral-900"
    >
      <img
        src="/image/wave-haikei.svg"
        className="absolute inset-0 w-full h-full object-cover  opacity-80"
        alt="background blob"
      />
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 pb-20 sm:pb-20 sm:pt-20 md:pt-0 md:pb-0">
        <h2 className="text-white font-extrabold text-4xl md:text-5xl z-10 ">
          ผลงาน
        </h2>
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 mt-10 ">
            
            {/* Contact Card */}
            <a href="https://contact-card-mu.vercel.app/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Contact Card
                </h1>

                <LazyLoadImage
                  src="/image/myproject/contact-card.png"
                  className="w-full transition duration-300 rounded-md"
                  effect="blur"
                  alt="contact-card"
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
            </a>

            {/* Bottle Refund */}
            <a href="https://www.bottlerefund.net/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Bottle Refund
                </h1>

                <LazyLoadImage
                  src="/image/myproject/bottle_refund.png"
                  className="w-full transition duration-300 rounded-md"
                  effect="blur"
                  alt="contact-card"
                />
                <div className="flex items-center gap-2 transition duration-300 mt-4">
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/nuxt.svg"
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
            </a>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 mt-10 ">
            {/* Contact Card */}
            <a href="https://contact-card-mu.vercel.app/" target="_blank">
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
            </a>

            {/* Bottle Refund */}
            <a href="https://contact-card-mu.vercel.app/" target="_blank">
              <div className="border border-neutral-500/40 bg-neutral-800/70 backdrop-blur-lg rounded-lg p-4 shadow-lg transition duration-500 transform group hover:border-[#0c78e5]">
                <h1 className="text-white font-bold text-lg lg:text-xl xl:text-2xl mb-3 group-hover:text-[#0c78e5]/90 transition duration-300 transform">
                  Bottle Refund
                </h1>
                <LazyLoadImage
                  src="/image/myproject/bottle_refund.png"
                  className="w-full rounded-md"
                  effect="blur"
                  alt="contact-card"
                />
                <div className="flex items-center gap-2  mt-4">
                  <div className="bg-neutral-700 rounded-full p-1">
                    <img
                      src="/image/logos/nuxt.svg"
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
            </a>

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
