import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar drop-shadow-xl bg-black py-5 sticky top-0">
        <div className="flex-1 text-teal-400 lg:ml-20 md:ml-8">
          <div className="text-2xl font-semibold">
            {/* <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> */}
            {<FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>}
          </div>
          <Link
            className="btn btn-ghost normal-case text-2xl font-semibold"
            to="./"
          >
            Edu Camp
          </Link>
        </div>
        <div className="navbar-center text-white hidden lg:flex ml-10">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/home"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                aria-label="Courses"
                title="Courses"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/registration"
                aria-label="Sign Up"
                title="Sign Up"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <label
                for="Toggle1"
                className="inline-flex items-center cursor-pointer dark:text-gray-100"
              >
                <span>Light</span>
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />
                  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-emerald-400"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
                <span>Dark</span>
              </label>
            </li>
          </ul>
        </div>

        {/* dropdown menu starts here  */}
        <div className="flex-none z-50">
          <div className="dropdown dropdown-end z-50  lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-square avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black z-50 text-white rounded-box w-52"
            >
              <li>
                <Link
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Courses"
                  title="Courses"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  aria-label="Blogs"
                  title="Blogs"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  aria-label="Sign Up"
                  title="Sign Up"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
