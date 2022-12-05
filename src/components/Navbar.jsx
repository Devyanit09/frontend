import { useState } from "react";
import img from "./images/ministry_logo.png";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav>
        <div className="pt-1.5 w-full bg-[#1F3F7B] shadow">
            <img
                className="h-10 px-11 flex justify-around content-start space-evenly"
                src={img}
                alt="Ministry"
            />
        </div>
            <div className="w-full bg-[#95AFD7] shadow justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="home">
                            <h2 className="text-2xl font-bold text-[#1F3F7B]">AquaProbe</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#1F3F7B]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="home text-white hover:text-indigo-200">
                                <a href="home">Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="about-us">About US</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="contact-us">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <div className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                    <a
                        href="login"
                    >
                        Login
                    </a>
                </div>
                    <a
                        href="signup"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign Up
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Login
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}