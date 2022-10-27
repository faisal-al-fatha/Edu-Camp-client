import { Link } from "react-router-dom";
import Courses from "../Courses/Courses";
import FAQ from "../FAQ/FAQ";
import SignUp from "../SignUp/SignUp";
const Home = () => {
    return (
        <div>
            <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 mb-32">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                 Fuel your Future <br className="hidden md:block " />
                  <span className="">With more than 10k+</span> <br className="hidden md:block" />
                   Courses online
                </h2>
                <p className="max-w-xl mb-4 text-base text-black md:text-lg">
                  Get access to high quality learning where ever you are, with online courses, degrees and programs created by leading universities
                </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
           
          <Link
                  to="/courses"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-rose-800 hover:text-rose-700 "
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=8Link"
          alt=""
        />
      </div>
    </div>
    <Courses className="mb-16"></Courses>
    <FAQ className="mb-2"></FAQ>
    <SignUp className="mb-16"></SignUp>
        </div>
    );
};

export default Home;