const SkillsTools = () => {
  return (
    <section id="skill" className="py-20">
      {/* header section */}
      <div className="mb-16 flex flex-col">
        <h2 className="text-4xl font-extrabold text-white">ทักษะ</h2>
        <div className="mt-4 h-1 w-25 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </div>

      <div className="mb-10">
        <h3 className="mb-5 text-center text-2xl font-bold text-[#0c78e5]">
          LANGUAGES
        </h3>

        <div className="mt-4 mb-4 flex flex-wrap items-center justify-center gap-3">
          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 1052 1052"
            >
              <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
              <path
                d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                fill="#323330"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              JavaScript
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 256 256"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
                fill="#3178C6"
              />
              <path
                d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
                fill="#FFF"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              TypeScript
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="#777BB4"
            >
              <title>PHP</title>
              <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              PHP
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="mb-5 text-center text-2xl font-bold text-[#0c78e5]">
          FRONTEND
        </h3>

        <div className="mt-4 mb-4 flex flex-wrap items-center justify-center gap-3">
          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-8 md:w-10 lg:w-12"
            >
              <defs>
                <linearGradient
                  id="SVGrDou6dwg"
                  x1="55.633%"
                  x2="83.228%"
                  y1="56.385%"
                  y2="96.08%"
                >
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="SVG9onTObtB"
                  x1="50%"
                  x2="49.953%"
                  y1="0%"
                  y2="73.438%"
                >
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <circle id="SVGN5eQqeMK" cx="128" cy="128" r="128" />
              </defs>
              <mask id="SVGMX2wGdvm" fill="#fff">
                <use href="#SVGN5eQqeMK" />
              </mask>
              <g mask="url(#SVGMX2wGdvm)">
                <circle cx="128" cy="128" r="128" />
                <path
                  fill="url(#SVGrDou6dwg)"
                  d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
                />
                <path
                  fill="url(#SVG9onTObtB)"
                  d="M163.556 76.8h17.067v102.4h-17.067z"
                />
              </g>
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Next.js
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 569 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-227, -256)"
                  fill="#58C4DC"
                  fillRule="nonzero"
                >
                  <g transform="translate(227, 256)">
                    <path
                      d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201"
                      id="Path"
                    ></path>
                    <path
                      d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              React
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 256 221"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"
                fill="#41B883"
              />
              <path
                d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"
                fill="#41B883"
              />
              <path
                d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"
                fill="#35495E"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Vue
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 256 168"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              preserveAspectRatio="xMidYMid"
            >
              <path
                fill="#00DC82"
                d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115 16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113 17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975A16.302 16.302 0 0 0 0 150.325c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115 17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Nuxt
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 256 154"
            >
              <defs>
                <linearGradient
                  id="SVGJSB7ld0l"
                  x1="-2.778%"
                  x2="100%"
                  y1="32%"
                  y2="67.556%"
                >
                  <stop offset="0%" stopColor="#2298bd" />
                  <stop offset="100%" stopColor="#0ed7b5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#SVGJSB7ld0l)"
                d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Tailwind CSS
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 256 204"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              preserveAspectRatio="xMidYMid"
            >
              <path
                fill="#7E13F8"
                d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Bootstrap 5
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              fill="none"
            >
              <rect
                width="512"
                height="256"
                x="256"
                y="670.72"
                fill="#1AD1A5"
                rx="128"
              />
              <circle cx="512" cy="353.28" r="256" fill="#fff" />
              <circle
                cx="512"
                cy="353.28"
                r="261"
                stroke="#000"
                strokeOpacity=".2"
                strokeWidth="10"
              />
              <circle cx="512" cy="353.28" r="114.688" fill="#FF9903" />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              daisyUI
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 452 520"
            >
              <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
              <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
              <path
                fill="#ecedee"
                d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
              />
              <path
                fill="#fff"
                d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              HTML
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              aria-labelledby="css-logo-title css-logo-description"
              viewBox="0 0 1000 1000"
            >
              <path
                fill="#639"
                d="M0 0h840a160 160 0 0 1 160 160v680a160 160 0 0 1-160 160H160A160 160 0 0 1 0 840V0Z"
              />
              <path
                fill="#fff"
                d="M816.54 919.9c-32.39 0-57.16-9.42-74.5-28.35-17.15-19.03-26.08-46.18-26.88-81.64h69.8c.4 31.36 11.42 47.08 33.08 47.08 11.04 0 18.86-3.5 23.37-10.42 4.41-6.9 6.72-17.93 6.72-33.05 0-12.02-3.01-22.04-8.83-29.95a73.2 73.2 0 0 0-29.48-21.14L783.95 750c-23.06-11.02-39.81-24.04-50.14-39.27-10.03-15.13-15.04-36.36-15.04-63.5 0-30.36 8.83-55 26.37-73.94 18.05-18.93 42.62-28.34 74-28.34 30.3 0 53.76 9.31 70.3 27.84 16.85 18.64 25.67 45.28 26.38 80.14h-67.19c.4-11.4-1.9-22.72-6.72-33.06-3.8-7.6-11.23-11.41-22.26-11.41-19.65 0-29.48 11.71-29.48 35.05 0 11.83 2.4 21.04 7.22 28.05A65.18 65.18 0 0 0 822.76 689l24.77 10.92c25.57 11.72 44.02 26.05 55.35 43.38 11.43 17.23 17.05 40.27 17.05 69.12 0 34.56-9.03 61.1-27.38 79.63-18.25 18.53-43.62 27.85-76 27.85Zm-225.42 0c-32.4 0-57.16-9.42-74.51-28.35-17.15-19.03-26.07-46.18-26.87-81.64h69.79c.4 31.36 11.43 47.08 33.1 47.08 11.02 0 18.84-3.5 23.25-10.42 4.52-6.9 6.72-17.93 6.72-33.05 0-12.02-2.9-22.04-8.72-29.95a73.2 73.2 0 0 0-29.48-21.14L558.53 750c-23.07-11.02-39.81-24.04-50.14-39.27-10.03-15.13-15.04-36.36-15.04-63.5 0-30.36 8.82-55 26.37-73.94 18.05-18.93 42.62-28.34 74-28.34 30.29 0 53.75 9.31 70.2 27.84 17.05 18.64 25.77 45.28 26.47 80.14h-67.18c.4-11.4-1.9-22.72-6.72-33.06-3.81-7.6-11.23-11.41-22.26-11.41-19.66 0-29.49 11.71-29.49 35.05 0 11.83 2.41 21.04 7.22 28.05A65.18 65.18 0 0 0 597.33 689l24.77 10.92c25.57 11.72 44.02 26.05 55.36 43.38 11.33 17.23 17.04 40.27 17.04 69.12 0 34.56-9.12 61.1-27.37 79.63-18.25 18.53-43.62 27.85-76.01 27.85Zm-234.75 0c-31.7 0-56.86-8.62-75.51-25.85-18.65-17.12-27.88-42.87-27.88-76.93V648.83c0-33.85 9.83-59.5 29.48-77.13 19.96-17.43 46.13-26.24 78.52-26.24 31.39 0 56.15 9.01 74.5 26.84 18.56 17.93 27.88 44.58 27.88 80.14v13.32h-73.9v-12.92c0-13.72-3.01-23.84-8.83-30.45a26.46 26.46 0 0 0-21.66-10.32c-12.03 0-20.55 4.1-25.37 12.42a79.04 79.04 0 0 0-6.72 36.66v146.26c0 30.55 10.74 46.08 32.1 46.38 10.02 0 17.54-3.61 22.76-10.82a51.74 51.74 0 0 0 7.72-30.46V801.6h73.9v11.42c0 23.74-4.61 43.57-13.94 59.4a88.8 88.8 0 0 1-38.2 35.66 121.46 121.46 0 0 1-54.85 11.82Z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              CSS
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 256 257"
            >
              <defs>
                <linearGradient
                  id="SVGmrugVdcL"
                  x1="-.828%"
                  x2="57.636%"
                  y1="7.652%"
                  y2="78.411%"
                >
                  <stop offset="0%" stopColor="#41D1FF" />
                  <stop offset="100%" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient
                  id="SVGqn4NsbfA"
                  x1="43.376%"
                  x2="50.316%"
                  y1="2.242%"
                  y2="89.03%"
                >
                  <stop offset="0%" stopColor="#FFEA83" />
                  <stop offset="8.333%" stopColor="#FFDD35" />
                  <stop offset="100%" stopColor="#FFA800" />
                </linearGradient>
              </defs>
              <path
                fill="url(#SVGmrugVdcL)"
                d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.5 6.5 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62"
              />
              <path
                fill="url(#SVGqn4NsbfA)"
                d="M185.432.063L96.44 17.501a3.27 3.27 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Vite
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="mb-5 text-center text-2xl font-bold text-[#0c78e5]">
          BACKEND
        </h3>

        <div className="mt-4 mb-4 flex flex-wrap items-center justify-center gap-3">
          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 264"
              className="w-8 md:w-10 lg:w-12"
            >
              <path
                d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z"
                fill="#FF2D20"
              />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Laravel
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 256 289"
            >
              <path
                fill="#539e43"
                d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Node.js
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 32 32"
              width="64"
              height="64"
            >
              <path
                fill="#fff"
                d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Express.js
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 264.6 255.6"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z"
                fill="#e0234e"
                fillRule="evenodd"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              NestJS
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="mb-5 text-center text-2xl font-bold text-[#0c78e5]">
          DATABASE & TOOLS
        </h3>

        <div className="mt-4 mb-4 flex flex-wrap items-center justify-center gap-3">
          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 512 349"
            >
              <path
                fill="#00758f"
                d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026q12.765-34.188 17.839-74.513h18.71q-12.069 65.65-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525q8.565-.002 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505zM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34q-1.044-50.148-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176q-3.325 42.422-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346z"
              />
              <path
                fill="#f29111"
                d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485q-7.026 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909m-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816 816 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a898 898 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231q10.066-8.862 25.968-8.862m175.895 1.584v103.788h37.238v14.558h-56.124V199.266zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5zM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69"
              />
              <path
                fill="#00758f"
                d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554l-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168m46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718"
              />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              MySQL
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-10 lg:w-12"
            >
              <path
                fill="#cfd8dc"
                d="M23.084 11.277c-1.633-2.449-1.986-5.722-2.063-7.067-4.148.897-8.269 2.506-8.031 3.691.03.149.218.328.53.502l-.488.873c-.596-.334-.931-.719-1.022-1.179-.269-1.341 1.25-2.554 4.642-3.709a42.152 42.152 0 0 1 4.751-1.279l.597-.12V3.6c0 .042.026 4.288 1.916 7.123l-.832.554zM24.751 43H24.5c-8.192 0-17.309-2.573-18.386-6.879-.657-2.63 1.492-5.536 6.214-8.401l.52.854c-4.249 2.579-6.296 5.172-5.763 7.305.935 3.738 9.575 6.068 17.153 6.12.901-1.347 5.742-9.26 2.979-19.873l.967-.252c3.149 12.092-3.218 20.837-3.282 20.924l-.151.202z"
              />
              <path
                fill="#cfd8dc"
                d="M9.931 39.306c-.539 0-.806-.059-.85-.07a.498.498 0 0 1-.233-.84c.072-.072 7.197-7.208 8.159-12.978l.986.164c-.827 4.964-5.715 10.623-7.656 12.707 1.939-.111 6.835-1.019 16.234-6.28-7.335-.804-8.495-6.676-8.507-6.739l.983-.181c.047.246 1.226 6.011 9.244 6.011h.008a.5.5 0 0 1 .251.933c-11.235 6.509-16.683 7.272-18.619 7.273z"
              />
              <path
                fill="#cfd8dc"
                d="M14.524 41.7a.499.499 0 0 1-.291-.907c.034-.025 1.813-1.338 3.706-4.228a19.896 19.896 0 0 1-2.196-1.137c-.888-.533-1.559-1.105-2.06-1.691-2.57.678-4.942.946-7.025.769l.084-.996c1.876.159 4.009-.063 6.321-.64-1.573-2.688-.129-5.356-.109-5.392l.874.487c-.067.122-1.265 2.37.249 4.633 2.201-.632 4.549-1.567 6.979-2.782a32.189 32.189 0 0 0 1.225-6.276.501.501 0 0 1 .706-.406c.032.015 3.264 1.491 5.604 2.454a.5.5 0 0 1 .091.876 62.494 62.494 0 0 1-6.778 4.042 27.19 27.19 0 0 1-2.459 5.591c3.702 1.383 6.915 1.404 6.956 1.404a.5.5 0 0 1 .243.938c-4.54 2.522-11.767 3.232-12.072 3.261h-.048zm4.385-4.733c-1.04 1.614-2.062 2.773-2.826 3.53 1.998-.294 5.501-.938 8.408-2.139a23.733 23.733 0 0 1-5.582-1.391zm-4.142-3.536c.393.392.883.775 1.49 1.14.736.442 1.483.817 2.22 1.135a26.116 26.116 0 0 0 2.142-4.568c-2.021.962-3.983 1.73-5.852 2.293zm8.435-9.102a33.95 33.95 0 0 1-.913 4.85 62.45 62.45 0 0 0 5.062-3.026 207.1 207.1 0 0 1-4.149-1.824zM17.924 10.6a.504.504 0 0 1-.325-.12c-1.61-1.378-3.505-4.182-3.585-4.301a.5.5 0 0 1 .654-.718c.011.003.938.385 7.217 1.431a.499.499 0 0 1 .29.828c-1.758 1.953-3.979 2.813-4.073 2.848a.527.527 0 0 1-.178.032zm-2.277-3.854c.631.849 1.54 1.996 2.372 2.769a11.186 11.186 0 0 0 2.744-1.798c-2.583-.441-4.159-.755-5.116-.971z"
              />
              <path
                fill="#b71c1c"
                d="M21.843 24.4a.5.5 0 0 1-.497-.552c.292-2.749-3.926-3.852-3.969-3.862a.5.5 0 0 1-.23-.838c.207-.207 5.139-5.098 11.327-7.784a.5.5 0 0 1 .689.559c-1.186 5.744-6.71 12.044-6.944 12.309a.51.51 0 0 1-.376.168zm-3.388-5.115c1.184.445 3.258 1.475 3.783 3.356 1.449-1.808 4.542-5.973 5.697-9.934-4.387 2.11-8.081 5.292-9.48 6.578z"
              />
              <path
                fill="#b71c1c"
                d="m13.079 28.36-.475-.88c1.883-1.015 4.04-2.883 5.807-5.054-1.504 1.03-2.365 1.735-2.392 1.758l-.639-.77c.039-.032 1.764-1.447 4.631-3.22.787-1.266 1.392-2.568 1.703-3.816.053-.212.099-.417.136-.615-1.925-.687-3.701-1.094-4.921-1.269a.5.5 0 0 1-.297-.835c.085-.092 2.116-2.268 4.654-3.463a.5.5 0 0 1 .581.114c.067.073 1.44 1.615 1.091 4.805 1.155.45 2.345.997 3.491 1.648 2.759-1.24 5.892-2.356 9.229-3.03a.51.51 0 0 1 .481.168c.117.14.149.333.083.503-1.3 3.332-4.786 6.891-4.934 7.041a.503.503 0 0 1-.748-.04c-1.12-1.408-2.584-2.574-4.163-3.523a55.136 55.136 0 0 0-5.684 3.049c-2.02 3.153-5.069 6.048-7.634 7.429zm14.413-10.964c1.29.832 2.491 1.81 3.484 2.948.828-.898 2.815-3.168 3.942-5.422-2.65.61-5.158 1.493-7.426 2.474zm-4.693-1.274c-.033.163-.071.33-.113.5-.21.839-.544 1.701-.972 2.561a56.183 56.183 0 0 1 3.618-1.898 25.476 25.476 0 0 0-2.533-1.163zm-4.751-2.45c1.111.218 2.48.574 3.941 1.086.152-1.843-.346-2.972-.647-3.472-1.376.718-2.581 1.728-3.294 2.386z"
              />
              <path
                fill="#b71c1c"
                d="M18.05 18.5c0 4.38-3.65 7.86-6.28 10.4-.44.43-1.93.5-1.93.5.37-.38.79-.78 1.24-1.21 2.5-2.42 5.97-5.73 5.97-9.69 0-4.69-1.89-6.54-3.38-8.02-.66-.67-1.22-1.31-1.56-2.09l.31-.13c.34.15.73.32 1.03.45.24.35.56.69.93 1.06 1.53 1.53 3.67 3.63 3.67 8.73z"
              />
              <path
                fill="#b71c1c"
                d="M42.935 19.794s-.605.086-.775.106c-8.76.97-17.8 3.49-22.97 5.56-1.87.75-3.81 1.66-5.58 2.68-.01.01-.02.01-.04.02-1.04.6-3.57 1.84-5.62 2.93 3-3.19 8.62-5.65 10.86-6.55 5.07-2.03 13.78-4.48 22.35-5.53-1.01-1.18-3.48-3.68-8.34-5.54-2.84-1.1-7.16-1.72-10.97-2.27-6.06-.87-9.51-1.45-9.84-3.1-.07-.33-.02-.66.13-.98.33.54.8.92 1.11 1.14.15.1.26.16.3.18l.01.01c1.42.75 5.25 1.3 8.44 1.76 3.86.56 8.23 1.19 11.18 2.32 6.87 2.65 9.24 6.44 9.34 6.6.09.15.415.664.415.664z"
              />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Microsoft SQL Server
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 256 310"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                fill="#fff"
                d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"
              />
            </svg>
            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Prisma
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              className="w-8 md:w-10 lg:w-12"
              viewBox="0 0 256 256"
            >
              <path
                d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
                fill="#DE4C36"
              />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Git
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 1024 1024"
              fill="none"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
                fill="#ffffff"
              />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              GitHub
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              viewBox="0 0 256 256"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z"
                fill="#FF6C37"
              />
              <path
                d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z"
                fill="#FFF"
              />
              <path
                d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z"
                fill="#FF6C37"
              />
              <path
                d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z"
                fill="#FFF"
              />
              <path
                d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z"
                fill="#FF6C37"
              />
              <path
                d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z"
                fill="#FFF"
              />
              <path
                d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z"
                fill="#FF6C37"
              />
              <path
                d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z"
                fill="#FFF"
              />
              <path
                d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z"
                fill="#FF6C37"
              />
              <path
                d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z"
                fill="#FFF"
              />
              <path
                d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z"
                fill="#FF6C37"
              />
              <path
                d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z"
                fill="#FFF"
              />
              <path
                d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z"
                fill="#FF6C37"
              />
              <path
                d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z"
                fill="#FFF"
              />
              <path
                d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z"
                fill="#FF6C37"
              />
              <path
                d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z"
                fill="#FFF"
              />
              <path
                d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z"
                fill="#FF6C37"
              />
              <path
                d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z"
                fill="#FFF"
              />
              <path
                d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z"
                fill="#FF6C37"
              />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Postman
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <img
              src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxh29Yv.2Ja4TSAEgerhoTfMgbt5tHz4C1ymm_O7w50cOpajGRr5nAMi3.OdbSH02ZAQ.uAnle8wNsjhPw1MJ5MY-&format=source&h=210"
              alt="Navicat"
              className="w-8 md:w-10 lg:w-12"
            />

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Navicat
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 md:w-10 lg:w-12"
              fill="#008fe2"
            >
              <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Docker
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>

          <div className="group/tooltip relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700/50 bg-neutral-800 transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700 md:h-18 md:w-18 lg:h-20 lg:w-20">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-8 md:w-10 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="#E95420"
            >
              <title>Ubuntu</title>
              <path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z" />
            </svg>

            <span className="pointer-events-none absolute -top-10 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100">
              Ubuntu
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-neutral-700 bg-neutral-800"></div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
