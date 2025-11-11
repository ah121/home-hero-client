import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-emerald-300 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <figure className="w-20">
                <img src="./logo.png" alt="" />
              </figure>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-400 mb-4">
              Connecting you with trusted local service providers—from expert
              plumbers to professional cleaners—right when you need them.
            </p>
            <div className="flex space-x-4 text-2xl">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
              <Link
                to="/"
                className="link link-hover hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="link link-hover hover:text-primary transition-colors"
              >
                All Services
              </Link>
              <Link
                to="/my-bookings"
                className="link link-hover hover:text-primary transition-colors"
              >
                My Bookings
              </Link>
              <Link
                to="/my-services"
                className="link link-hover hover:text-primary transition-colors"
              >
                My Services
              </Link>
              <Link
                to="/add-service"
                className="link link-hover hover:text-primary transition-colors"
              >
                Add Service
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Customer Care
            </h3>
            <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
              <a
                href="#"
                className="link link-hover hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="link link-hover hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="link link-hover hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="link link-hover hover:text-primary transition-colors"
              >
                Help Center
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="flex flex-col space-y-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-primary" />
                <p>23 M M Road, Jashore City, 7400</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary" />
                <p>+8801785644125</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-primary" />
                <p>support@homehero.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 bg-base-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2025 HomeHero. All rights reserved. Designed for the Home
          Service.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
