import LeftSideNav from "../SharedComponent/LeftSideNav";

const Courses = () => {
  return (
    <div className="lg:mx-12 mx-4 grid grid-cols-5 md:grid-cols-7">
      <div className="col-span-2">
       <LeftSideNav></LeftSideNav>
      </div>
      <div className="col-span-5">Courses here</div>
    </div>
  );
};

export default Courses;
