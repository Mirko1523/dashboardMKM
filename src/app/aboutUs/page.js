"use client";

import NavBar from "@/components/navBar/navbar";
import Image from "next/image";
import React from "react";

function AboutUs() {
    return (
        <div>
            <NavBar />
            <section className="flex flex-col items-center text-center py-10 px-5 bg-gray-100">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
                <p className="text-lg text-gray-600 max-w-2xl mb-6">
                    Nos presentamos somos <span className="font-semibold">MKM Agency</span> una start up de programación enfocada en la
                    creación de sistemas para negocios y el desarrollo de <strong>CUALQUIER IDEA</strong> de proyecto desde cero. Transformamos
                    ideas en soluciones tecnológicas innovadoras.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-Gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                        <a
                            href="https://www.linkedin.com/in/mirko-miler-290bb3295/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar perfil de Mirko en LinkedIn"
                        >
                            <Image
                                src="/perfilMirko.jpg"
                                alt="Perfil de Mirko"
                                className="w-full h-full object-cover"
                                width={160}
                                height={160}
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-lg text-gray-600 max-w-2xl mb-6">
                        <strong>Owner</strong>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;