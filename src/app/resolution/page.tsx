"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import * as imageFirst from "../../asset/360p.png";
import * as imageSecond from "../../asset/480p.png";
import * as imageThird from "../../asset/720p.png";
import * as GFImage from "../../asset/gf.jpg";

const resolution = [
  { key: "360", label: "360p", imageSrc: imageFirst },
  { key: "480", label: "480p", imageSrc: imageSecond },
  { key: "720", label: "720p", imageSrc: imageThird },
  { key: "1080", label: "1080", imageSrc: GFImage },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(resolution[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    closeDropdown();
  };

  return (
    <div className="val-container bg-red-300">
      <div className="flex flex-col text-center space-y-2">
        {selectedOption.imageSrc && (
          <Image
            src={selectedOption.imageSrc}
            alt={`${selectedOption.label} image`}
            width={250}
            height={100}
          />
        )}
        {selectedOption.key === "1080" ? (
          <div className="" style={{ fontSize: 30 }}>
            ตะเล็กคือโลกทั้งใบของพี่นะครับ
          </div>
        ) : null}
      </div>
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          {selectedOption.label}{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="origin-top-right absolute rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {resolution.map((option) => (
                <li key={option.key}>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
