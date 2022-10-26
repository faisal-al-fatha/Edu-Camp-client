import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Layout/Main";

const LeftSideNav = () => {
  const { courses } = useContext(AuthContext);

  return (
    <div>
        <h4 className="text-3xl font-semibold my-3">Available courses</h4>
      <ul className="menu bg-base-500 w-56">
        {courses.map((course) => (
          <p key={course.id}>
            
              <Link to ={`/courses/${course.id}`} className="btn btn-outline w-full p-4 transition duration-200 bg-white text-black my-3 hover:bg-rose-500 focus:shadow-outline focus:outline-none rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline h-14">{course.name}</Link>
        
          </p>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideNav;
