const FAQ = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 my-14 lg:mx-72 md:mx-48 sm:mx-10">
        {/* Question 1 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box bg-white py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
            How effective is online learning to students??
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> Because online
              courses provide students with full control over their studies,
              they can work at their own pace. Pupils, on average, work faster
              and absorb more information in online courses than they would
              otherwise.
            </p>
            <br />

            <p>
              How effective is online learning than face to face? In many ways,
              online learning is more effective than face to face learning. As
              research shows 80% of organizations believe their use of digital
              learning will remain the same, increase or decrease only slightly
              as restrictions on live training ease..
            </p>
          </div>
        </div>
        {/* Question 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box bg-white py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
            How useful are these courses?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> Because Edu Camp
              certificates are provided by top-level universities and companies,
              they hold value. They are not just a certificate of completion
              like many other platforms offer. This means that the courses that
              you take through Coursera will be valuable to your future and your
              career.
            </p>
            <br />

            <p>
              {" "}
              If you're seeking promotion, looking for a career change, or the
              skills you are learning are highly sought after, then a Coursera
              Certificate does have value and is definitely worth the
              investment. Coursera partners and course providers are world
              class.{" "}
            </p>
          </div>
        </div>
        {/* Question 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box bg-white py-4 pl-5 mb-20"
        >
          <div className="collapse-title text-xl font-medium">
            Is Edu Camp certificate valuable for job?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> Is Coursera
              certificate valuable for job? Add Coursera professional
              certificates to your resume Offered by such world-class partners
              as Google, IBM, and Meta, Coursera's flexible, online professional
              certificates can help you get job-ready for such in-demand careers
              as project manager or data analyst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
