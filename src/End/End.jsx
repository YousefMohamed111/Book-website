import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function End() {
  return (
    <div className="w-full bg-red-600 py-6 flex flex-col md:flex-row justify-around text-white text-center md:text-left">
      <div className="grid grid-cols-1">
        <p className="pb-2">We are a book platform</p>
        <p className="pb-2">Based in Egypt</p>
        <p className="pb-2">We hope You discover ❤</p>
      </div>

      <div className="grid grid-cols-1">
        <p className="pb-2 font-semibold">Get in touch with us</p>
        <p className="pb-2">+202320320302</p>
        <p className="pb-2">info@ourbooksite.com</p>
      </div>

      <div className="grid grid-cols-1">
        <p className="mb-2 font-semibold">Follow us on social media!</p>
        <div className="flex justify-center md:justify-start space-x-6">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
      </div>
    </div>
  );
}
