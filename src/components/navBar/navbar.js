"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NavBar() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (route) => {
        router.push("/" + route);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className="lg:px-10 px-4 bg-white flex flex-wrap items-center py-2 shadow-md relative">
                <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="MKM Agency Logo"
                            width={90}
                            height={40}
                            onClick={() => handleNavigation('')}
                            className="cursor-pointer"
                        />
                        <a onClick={() => handleNavigation('')} className="text-blue-950 text-xl font-bold leading-tight">
                            MKM Agency
                        </a>
                    </div>


                    <div className="hidden min-[1054px]:flex items-center space-x-8">
                        <a
                            className="text-blue-950 font-bold cursor-pointer hover:bg-blue-950 hover:text-white px-5 py-3 rounded-xl"
                            onClick={() => handleNavigation('/')}
                        >
                            Home
                        </a>
                        <a
                            className="text-blue-950 font-bold cursor-pointer hover:bg-blue-950 hover:text-white px-5 py-3 rounded-xl"
                            onClick={() => handleNavigation('projects')}
                        >
                            Nuestros trabajos
                        </a>
                        {/* <a
                            className="text-blue-950 font-bold cursor-pointer hover:bg-blue-950 hover:text-white px-5 py-3 rounded-xl"
                            onClick={() => handleNavigation('aboutUs')}
                        >
                            Sobre nosotros
                        </a> */}
                        <a
                            className="bg-blue-950 text-white font-bold cursor-pointer hover:bg-blue-900 px-7 py-3 rounded-xl hover:scale-110 transition-transform"
                            onClick={() => handleNavigation('contact')}
                        >
                            Contactános
                        </a>
                    </div>


                    <label
                        htmlFor="menu-toggle"
                        className="pointer-cursor min-[1054px]:hidden block"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="fill-current text-gray-900 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"

                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                </div>


                <div
                    className={`${menuOpen ? "max-h-screen py-4" : "max-h-0"}
  overflow-hidden transition-all duration-300 ease-in-out 
  absolute top-full right-0 px-2 mt-0.5 bg-white shadow-md z-10 md:hidden`}


                >
                    <nav>
                        <ul className="flex flex-col items-center text-base text-gray-700 space-y-4">
                            <li>
                                <a
                                    className="text-blue-950 font-bold p-4  w-full text-center cursor-pointer hover:bg-blue-950 hover:text-white"
                                    onClick={() => handleNavigation('/')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-blue-950 font-bold p-4 mt-4 w-full text-center cursor-pointer hover:bg-blue-950 hover:text-white "
                                    onClick={() => handleNavigation('projects')}
                                >
                                    Proyectos
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    className="text-blue-950 font-bold p-4  w-full text-center cursor-pointer hover:bg-blue-950 hover:text-white"
                                    onClick={() => handleNavigation('aboutUs')}
                                >
                                    Sobre nosotros
                                </a>
                            </li> */}
                            <li>
                                <a
                                    className="bg-blue-950 text-white font-bold cursor-pointer hover:bg-blue-900 px-10 py-2 rounded-xl hover:scale-110 transition-transform"
                                    onClick={() => handleNavigation('contact')}
                                >
                                    Contactános
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
