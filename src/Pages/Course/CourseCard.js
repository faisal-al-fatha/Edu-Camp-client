import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, picture, price, ratings, name } = course;
  return (
    <div>
      <div className="card w-full bg-white shadow-xl rounded-md">
        <figure>
          <img src={picture} alt="Shoes" className="w-full h-48"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
          </h2>
          <p><small>Ratings: {ratings} <span className="text-amber-500">{<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>}</span></small></p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Price: {price}$</div>
            
            <Link to ={`/courses/${id}`}
              className="w-full h-12 px-6 mt-3 font-medium tracking-wide transition duration-200 rounded-md  shadow-md btn btn-outline bg-rose-500 text-white hover:bg-rose-800 focus:shadow-outline focus:outline-none"
            >
              Course Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
