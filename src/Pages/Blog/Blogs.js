
const Blogs = () => {
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
              <span className="font-semibold">Answer:</span> Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
            </p>
            <br />

          </div>
        </div>
        {/* Question 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box bg-white py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
            </p>
            <br />

            <p>
            The best Firebase alternatives-
             <ul>
                <li>Back4App</li>
                <li>Backendless</li>
                <li>Kuzzle</li>
                <li>Pubnub</li>
                <li>Appwrite</li>
                <li>Deployd</li>
                <li>Heroku</li>
             </ul>
            </p>
          </div>
        </div>
        {/* Question 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box bg-white py-4 pl-5"
        >
          <div className="collapse-title text-xl font-medium">
          How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
          </div>
        </div>
        {/* Question 4  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-gray-700 rounded-box bg-white py-4 pl-5  mb-10"
        >
          <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Answer:</span> Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
            </p>
            <br />

            <p>
            t is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blogs;