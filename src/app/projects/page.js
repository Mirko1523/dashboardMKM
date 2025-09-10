"use client"

import NavBar from "@/components/navBar/navbar"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
    const proyectos = [
        { name: "SIIM Ingenieria", url: "https://siimingenieria.com/", preview: "/previews/siim.png" },
        { name: "FAA Agency", url: "https://faascalablesp.netlify.app/", preview: "/previews/bgFAA.png" },
        { name: "Clahé Eventos", url: "https://claheeventos.vercel.app/", preview: "/previews/clahe.png" },
        { name: "Quinta los Buhos", url: "https://quintalosbuhos.vercel.app/", preview: "/previews/quintalosbuhos.png" },
        { name: "Distribuidora Sudamerica", url: "https://distribuidorasudamerica.vercel.app/", preview: "/previews/sudamerica.png" },
        { name: "ConstruMX", url: "https://construmx.vercel.app/", preview: "/previews/construMX.png" },
    ]


    return (
        <div className="min-h-screen bg-neutral-100">
            <NavBar />

            <main className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-900">
                    Sitios Web creados y diseñados por nosotros
                </h2>
                <p className="mb-8 text-gray-600">
                    Estos diseños muestran la estética y funcionalidad que podemos desarrollar en producción. <strong>¿Qué esperas para tener el tuyo?</strong>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyectos.map((p, i) => (
                        <Link
                            key={i}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-2xl shadow-md bg-white transform transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={p.preview}
                                    alt={`Preview de ${p.name}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors">
                                    {p.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}
