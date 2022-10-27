import { useContext } from "react";
import { AuthContext } from "../../Layout/Main";
import CourseCard from "../Course/CourseCard";
import LeftSideNav from "../SharedComponent/LeftSideNav";

const Courses = () => {
    const { courses } = useContext(AuthContext);
  return (
    <div className="lg:mx-12 mx-4 grid grid-cols-5 md:grid-cols-8">
      <div className="col-span-5 md:col-span-2 mx-auto ">
       <LeftSideNav></LeftSideNav>
      </div>
      <div className="col-span-6 mb-6">
      <h4 className="text-3xl font-semibold my-3 text-center">Total courses: {courses.length}</h4>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
     {
        courses.map(course => <CourseCard key={course.id} course = {course}></CourseCard>)
      }
     </div>
      </div>
    </div>
  );
};

export default Courses;
