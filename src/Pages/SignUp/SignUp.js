import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../Layout/Main";

const SignUp = () => {
  const { providerLogin, createUser, auth } = useContext(AuthContext);
  const [error, setError]= useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, password, email);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
       
        // update name 
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        })
        .then(()=>{
            toast.success('User Name updated!')
        })
        .catch(error=>{
            toast.error(error.message)
        })

        form.reset();
        setError('')
      })
      .catch(error=> {
        setError(error.message)
    })
  };

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('')
      })
      .catch(error=> {
        setError(error.message)
    })
  };

  const handleGitHubSignIn = () =>{
    providerLogin(gitHubProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error=> console.error(error))
        }

  return (
    <div className="w-full max-w-xl xl:px-8 lg:w-5/12 mx-auto my-5">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Sign up for updates
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Full Name
            </label>
            <input
              placeholder="John Doe"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="photoURL" className="inline-block mb-1 font-medium">
              Photo URL
            </label>
            <input
              placeholder="https//.............."
              type="photoURL"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="photoURL"
              name="photoURL"
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              placeholder="john.doe@example.org"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="password" className="inline-block mb-1 font-medium">
              Password
            </label>
            <input
              placeholder="!@#$%^&*123"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <p className="text-xs mt-3 text-red-600 sm:text-sm text-center">
              {error}
            </p>
            <button
              type="submit"
              className="w-full h-12 px-6 rounded-sm font-medium tracking-wide transition duration-200 shadow-md btn btn-outline bg-rose-500 text-white hover:bg-rose-800 focus:shadow-outline focus:outline-none"
            >
              Register
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full " />
            <p className="px-3 ">OR</p>
            <hr className="w-full " />
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center btn btn-outline w-full p-4 transition duration-200 bg-white text-black hover:bg-rose-500 focus:shadow-outline focus:outline-none rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="ml-3">Login with Google</p>
            </button>
          </div>
          <div>
            <button
             onClick={handleGitHubSignIn}
              aria-label="Login with GitHub"
              type="button"
              className="flex items-center justify-center btn btn-outline w-full p-4 transition duration-200 bg-white text-black hover:bg-rose-500 focus:shadow-outline focus:outline-none rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:shadow-outline h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p className="ml-3">Login with GitHub</p>
            </button>
          </div>
          <p className="text-xs mt-3 text-gray-600 sm:text-sm text-center">
            Already have account? Please{" "}
            <Link to={"/login"} className="link link-primary">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
