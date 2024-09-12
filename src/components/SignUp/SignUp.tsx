import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; // External CSS file
import googleSvg from "../../assets/google.svg";
import SignUpImage from "../../assets/SignUpImage.png";

// Todo: let's create a very demure signup page.

const SignInPage = () => {
  return (
    // note: Full-screen container to center the sign-in form

    <section className="p-5 ml-0 mr-0 flex justify-center h-screen gap-32 font-open-sans">
      <aside className="w-96">
        //note: Heading for the sign-up form
        <br />
        <h2 className="text-2xl text-b-700 text-left">
          Join Zip Logistics Today!
        </h2>
        <br />
        // note: Subheading explaining the benefits of signing up
        <p className="mb-8 text-xl leading-9 font-semibold">
          Experience seamless, fast, and reliable shipping with an account
          tailored to your logistics needs
        </p>
        // note: The sign-up form
        <form className="mt-4">
          // note: Sign-up button using Google login /* The button is styled to
          resemble Google's branding, with an image icon and text */
          <button className="mb-4 p-2 w-full border border-b-900 rounded flex justify-center items-center shadow-sm hover:bg-gray-50">
            // note: Google logo on the button
            <img className="w-5 h-5 mr-2" src={googleSvg} alt="Google logo" />
            Sign up with Google
          </button>
          // note: Separator between Google login and manual email/password
          registration
          <div className="my-4 flex justify-center items-center">
            <hr className="w-1/5 border-gray-300 justify-center" />
            <span className="px-4 text-gray-500">or</span>
            <hr className="w-1/5 border-gray-300 justify-center" />
          </div>
          // note: Email input field // Todo: This input takes the user's email
          and uses basic styling for consistency
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="mb-4 p-2 w-full border border-grey-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          // note: Password input field // note: The user can input their
          password here
          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 w-full border border-grey-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          // Note: Confirm Password input field // Todo: Users input their
          password the second time to make sure it corresponds to the above
          password
          <div className="mt-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="=mb-4 p-2 w-full border border-grey-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          // Note: Sign-up button // Todo: When clicked, this will submit the
          form
          <div className="mt-6 flex justify-center">
            <button className="w-1/2 rounded p-1 bg-blue-700 text-white font-bold justify-center">
              Sign Up
            </button>
          </div>
        </form>
        // note: Link to log in if the user already has an account
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="../Login/Login.tsx"
            className="text-blue-500 font-bold hover:underline"
          >
            Log In
          </a>
        </p>
      </aside>
      // note: SignUp side image
      <aside className="relative ">
        <img className="h-full" src={SignUpImage} alt="SignUp Image" />
        // note: Grid image
        <div className="absolute top-0 w-full items-center place-items-center text-white grid grid-cols-3 h-full gap-2">
          <article className="w-full h-full rounded-lg outline outline-8 "></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
          <article className="w-full h-full rounded-lg outline outline-8"></article>
        </div>
      </aside>
    </section>
  );
};

export default SignInPage;
