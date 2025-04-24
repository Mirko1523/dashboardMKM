"use client"

import NavBar from "@/components/navBar/navbar"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
    const proyectos = [
        { name: "Tienda Reina", url: "https://tiendareina.vercel.app/", preview: "/previews/reina.png" },
        { name: "Andamios Gonpaz", url: "https://andamiosgonpaz.vercel.app/", preview: "/previews/andamiosgonpaz.png" },
        { name: "Transportes JYJ", url: "https://transportesjyj.vercel.app/", preview: "/previews/transportesjyj.png" },
        { name: "Hernan Pinturas S.M.A", url: "https://hernanpinturassma.vercel.app/", preview: "/previews/hernanpinturas.png" },
        { name: "Eventos para Todos", url: "https://eventosparatodos.vercel.app/", preview: "/previews/eventosparatodos.png" },
        { name: "Quinta los Buhos", url: "https://quintalosbuhos.vercel.app/", preview: "/previews/quintalosbuhos.png" },
    ]

    return (
        <div className="min-h-screen bg-neutral-100">
            <NavBar />

            <main className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-900">
                    Prototipos de Sitios Web (Bocetos Virtuales)
                </h2>
                <p className="mb-8 text-gray-600">
                    Estos diseños conceptuales muestran la estética y funcionalidad que puedo desarrollar en producción. ¡Pronto aquí verás proyectos 100% en vivo!
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
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
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
