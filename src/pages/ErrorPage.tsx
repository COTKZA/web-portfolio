import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#161616] py-20 text-sm max-md:px-4">
      <h1 className="bg-linear-to-r from-white to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        404 Not Found
      </h1>
      <div className="my-5 h-px w-80 rounded bg-linear-to-r from-gray-400 to-gray-800 md:my-7"></div>
      <p className="max-w-lg text-center text-red-400 md:text-xl">
        The page you are looking for does not exist or has been moved.
      </p>
      <NavLink
        to={"/"}
        className="group mt-10 flex items-center gap-1 rounded-full bg-white px-7 py-2.5 font-medium text-gray-800 transition-all hover:bg-gray-200 active:scale-95"
      >
        Back to Home
        <svg
          className="transition group-hover:translate-x-0.5"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="#1E1E1E"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
