"use client";

import NavBar from "@/components/navBar/navbar";
import React from "react";

function ContactUs() {
  return (
    <div>
      <NavBar />
      <div className="space-y-12">
        <div className="relative w-full h-max mx-auto">

          <video
            className="rounded-lg shadow-lg w-full h-[50vh] object-cover"
            src="./fondo.mp4"
            autoPlay
            loop
            muted
          >
            Tu navegador no soporta la reproducción de videos.
          </video>


          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4">
            <p className="text-white text-4xl md:text-6xl font-bold bg-black bg-opacity-50 px-4 py-2 md:px-6 md:py-3 rounded-lg">
              ---- Programadores web ----
            </p>
            <p className="text-white text-lg md:text-2xl bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              Ofreciendo servicios de manera transparente y profesional
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">
              Tu proyecto en buenas manos
            </h1>
            <p className="text-gray-700 text-center">
              Ofrecemos distintos servicios como sistemas adaptados para cualquier negocio, además aplicaciones y consultas personalizadas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">
              Ten a mano nuestros servicios
            </h1>
            <p className="text-gray-700 text-center">
              Cualquier servicio o proyecto que tengas en mente es posible de crear. Contáctanos para adaptarnos a tus necesidades.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">
              Programamos servicios y páginas desde 0
            </h1>
            <p className="text-gray-700 text-center">
              Programamos a mano con lenguajes específicos para que tu proyecto pueda incluir cualquier funcionalidad requerida.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">
              Realizamos prototipos de tu idea 100% gratis
            </h1>
            <p className="text-gray-700 text-center">
              Creamos segun tus ideas un diseño de tu futura pagina web o sistema, para que puedas ver como quedara tu proyecto final.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">
              Alojamiento y dominio totalmente gratis
            </h1>
            <p className="text-gray-700 text-center">
              Una vez cerrado el trato, te ofrecemos entre 2 a 4 de alojamiento y dominio gratis para que puedas empezar a mostrar tu proyecto al internet.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h1 className="text-2xl font-bold text-blue-950 mb-4 text-center">
              Amamos todas las ideas que nos proponen
            </h1>
            <p className="text-gray-700 text-center">
              Nos encanta escuchar las ideas de nuestros clientes, por eso ofrecemos una primera consulta gratuita para escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;