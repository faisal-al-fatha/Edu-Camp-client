import SignUp from "../SignUp/SignUp";

export const Home = () => {
    return (
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-0 bg-teal-500">
          <svg
            className="absolute inset-x-0 bottom-0 text-gray-100"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 lg:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                 Fuel your Future <br className="hidden md:block " />
                  <span className="">With more than 10k+</span> <br className="hidden md:block" />
                   Courses online
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Get access to high quality learning whereever you are, with online courses, degrees and programs created by leading universities
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-rose-500 hover:text-rose-700 "
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            <SignUp></SignUp>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;