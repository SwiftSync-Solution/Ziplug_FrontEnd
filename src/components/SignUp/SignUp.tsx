import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; // External CSS file
import googleSvg from "../../assets/google.svg";
import SignUpImage from "../../assets/SignUpImage.png";

const SignInPage = () => {
  return (
    // Full-screen container to center the sign-in form
    <section className="p-5 flex justify-center h-screen gap-32 font-open-sans ml-10 -mr-40">
      <aside className="w-92">
        {/* This section is responsible for the visual representation, giving a more appealing look to the sign-in page */}
        <div className="hidden lg:flex lg:w-1/2 bg-200">
          {/* Creating a grid layout (2x2) with small gaps between images */}
          <div className="grid grid-cols-2 gap-1 w-full h-full p-4"></div>
        </div>

        {/* Right side (form section): This will be the main interactive area for users */}
        <div className="w-full lg:w-1/2 p-8">
          {/* Heading for the sign-up form */}
          <h2 className="text-2xl text-gray-700 text-left">
            Join Zip Logistics Today!
          </h2>
          {/* Subheading explaining the benefits of signing up */}
          <p className="mt-2 text-left font-bold text-gray-600">
            Experience seamless, fast, and reliable shipping with an account
            tailored to your logistics needs
          </p>

          {/* The sign-up form */}

          <form className="mt-4">
            {/* Sign-up button using Google login */}
            {/* The button is styled to resemble Google's branding, with an image icon and text */}
            <button className="mb-4 p-2 w-full border border-grey-900 rounded flex justify-center items-center shadow-sm hover:bg-gray-50">
              {/* Google logo on the button */}
              <img className="w-5 h-5 mr-2" src={googleSvg} alt="Google logo" />
              Sign up with Google
            </button>

            {/* Separator between Google login and manual email/password registration */}
            <div className="my-4 flex justify-center items-center">
              <hr className="w-1/5 border-gray-300 justify-center" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="w-1/5 border-gray-300 justify-center" />
            </div>

            {/* Email input field */}
            {/* This input takes the user's email and uses basic styling for consistency */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="mb-4 p-2 w-full border border-grey-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password input field */}
            {/* The user can input their password here */}
            <div className="mt-4">
              <input
                type="password"
                placeholder="Password"
                className="mb-4 p-2 w-full border border-grey-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Confirm Password input field */}
            {/* A second password input to confirm the user's password */}
            <div className="mt-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="=mb-4 p-2 w-full border border-grey-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Sign-up button */}
            {/* When clicked, this will submit the form */}
            <div className="mt-6 flex justify-center">
              <button className="w-1/2 rounded p-1 bg-blue-700 text-white font-bold justify-center">
                Sign Up
              </button>
            </div>
          </form>

          {/* Link to log in if the user already has an account */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="../Login/Login.tsx"
              className="text-blue-500 font-bold hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </aside>

      {/* SignUp side image */}
      <aside className="relative -ml-20 mr-40">
        <img className="h-full" src={SignUpImage} alt="SignUp Image" />
        {/* Grid image */}
        <div className="absolute top-0 w-full items-center place-items-center text-white grid grid-cols-3 h-full gap-2 mr-20">
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
