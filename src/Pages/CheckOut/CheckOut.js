import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const course = useLoaderData();
    const {  picture, price, name, ratings } = course;
  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-white text-gray-900 mx-auto my-6">
        <h2 className="text-xl font-semibold">Selected Course</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={picture}
                alt="Course"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                     {name}
                    </h3>
                    <p className="text-sm dark:text-gray-400">Ratings: {ratings}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{price} $</p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                 
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{price} $</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes
          </p>
        </div>
        <div className="flex justify-end space-x-4">
        <Link
                to="/courses"
                aria-label="Courses"
                title="Courses"
                className="font-medium tracking-wide btn btn-outline w-60 p-4 transition duration-200 bg-white text-black hover:bg-rose-500 focus:shadow-outline focus:outline-none rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline h-12"
              >
                Back to Courses
              </Link>
          <button
            type="button"
            className="px-6 py-2 border rounded-md btn btn-outline bg-rose-500 text-white hover:bg-rose-800 focus:shadow-outline focus:outline-none"
          >
            <span className="sr-only sm:not-sr-only">Continue to Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
