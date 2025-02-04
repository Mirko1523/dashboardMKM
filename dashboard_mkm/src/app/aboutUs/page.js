"USE CLIENT"

import NavBar from "@/components/navBar/navbar"
import Image from "next/image"
import React from "react"

function AboutUs() {
    return (
        <div>
            <NavBar />
            <section className="flex flex-col items-center text-center py-10 px-5 bg-gray-100">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
                <p className="text-lg text-gray-600 max-w-2xl mb-6">
                    Somos <span className="font-semibold">MKM Agency</span>, una start up de programación enfocada en la
                    creación de sistemas para negocios y el desarrollo de cualquier idea de proyecto desde cero. Transformamos
                    ideas en soluciones tecnológicas innovadoras.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">

                        <Image
                            src="/perfilMirko.jpg"
                            alt="Equipo"
                            className="w-full h-full object-cover"
                            width="100"
                            height="100"
                        />
                    </div>
                    <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">

                        <Image
                            src="/perfilMirko.jpg"
                            alt="Proyecto"
                            className="w-full h-full object-cover"
                            width="100"
                            height="100"
                        />

                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutUs