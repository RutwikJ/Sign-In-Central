import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className="flex items-center">
            <img src="./src/assets/signincentralmernapp.jpg" className="w-8 h-8 mr-2 rounded-lg" alt="Icon" />
            <h1 className="text-xl font-bold">SignIn Central</h1>
          </div>
        </Link>
        <ul className="flex gap-3">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign in</li>
          </Link>
          <Link to="/sign-up">
            <li>Sign up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
