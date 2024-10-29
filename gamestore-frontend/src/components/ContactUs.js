import React from 'react';
import { FaEnvelope, FaPhone, FaClock, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="bg-secondary py-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-accent">Contact Us</h2>
        <p className="text-lg mb-8 text-gray-700">
          Get in touch with the right people at GameTopia. We're here to help.
        </p>

        {/* Contact Info - Single Line */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center">
            <FaEnvelope className="text-2xl text-accent mr-2" />
            <span className="text-lg text-gray-800">hewantariku02@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-2xl text-accent mr-2" />
            <span className="text-lg text-gray-800">703-395-0927</span>
          </div>
          <div className="flex items-center">
            <FaClock className="text-2xl text-accent mr-2" />
            <span className="text-lg text-gray-800">
              Monday - Friday: 9 AM - 5 PM
            </span>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="border-t pt-8">
          <h3 className="text-3xl font-semibold mb-6 text-accent">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaFacebook className="text-3xl text-accent hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaInstagram className="text-3xl text-accent hover:text-primary" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaTwitter className="text-3xl text-accent hover:text-primary" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaYoutube className="text-3xl text-accent hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;