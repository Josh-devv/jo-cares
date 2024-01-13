// SignUpForm.js

import React from 'react';

const SignUpForm = () => {
  return (
    <div className=" p-8 font-rbt5 font-light  w-[100%] mx-auto">
      

      <form action="#" method="post">

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
          <input type="email" id="email" placeholder='Username or email address' name="email" className="w-full px-3 py-2 border focus:outline-none focus:border-blue-500" required />
          
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input type="password" placeholder='Password' id="password" name="password" className="w-full px-3 py-2 border  focus:outline-none focus:border-blue-500" required />
        </div>

        {/* Other Required Details (Add as needed) */}

        {/* Submit Button */}
        <div className="mb-4">
          <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black">Login</button>
        </div>

      </form>

      {/* Don't have an account? Login Link */}
      <p className="text-gray-600 text-sm">Don't have an account? <a href="#">Login</a></p>

    </div>
  );
}

export default SignUpForm;
