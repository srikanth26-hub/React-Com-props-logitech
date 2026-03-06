import React from "react";
import Logo from "../page1/logo";

const Footer = () => {
  return (
    <footer className=" text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <Logo />
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/services" className="hover:text-black">Services</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-black">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer