import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router-dom";
import LeftSideNav from "../SharedComponent/LeftSideNav";


const Course = () => {
  const course = useLoaderData();
  const { id, picture, price, ratings, name, learnObjectives } = course;
  return (
    <div className="lg:mx-12 mx-4 grid grid-cols-5 md:grid-cols-8 my-6">
      <div className="col-span-2">
        <LeftSideNav></LeftSideNav>
      </div>
     <div className="col-span-6 lg:px-40 mb-6">
     <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img src={picture} alt="Album" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-semibold">Learning Objectives : </span>{learnObjectives}</p>
          <p>Ratings: {ratings} <span className="text-amber-500">{<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>}</span></p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-4 text-base">Price: {price}$</div>
            
            <Link to ={`/checkout/${id}`}
              className="w-full h-12 px-6 mt-3 font-medium tracking-wide transition duration-200 rounded-md  shadow-md btn btn-outline bg-rose-500 text-white hover:bg-rose-800 focus:shadow-outline focus:outline-none"
            >
              Purchase this course
            </Link>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Course;
