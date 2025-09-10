"use client";

import { WhatsAppButton } from "@/components/ButtonWsp/buttonwsp";
import NavBar from "@/components/navBar/navbar";
import ServiceCards from "@/components/ServiceCards/cards";


function ContactUs() {

  return (
    <div>
      <NavBar />
      <WhatsAppButton />

      <section className="relative h-screen bg-[url('/bg.png')] bg-cover text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 border border-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-48 h-48 border border-blue-600/30 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-32 bg-gradient-to-b from-blue-500/40 to-transparent transform rotate-45"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
                  Creamos experiencias<br />
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text italic">
                    digitales unicas
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                  Para empresas y personas que quieren crecer,
                  <br />digitalizarse y optimizar su negocio.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25">
                  Comencemos
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <a href="/projects" className="group border-2 border-blue-400/50 hover:border-blue-400 text-white hover:bg-blue-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  Ver Trabajos Realizados
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
      <ServiceCards />
    </div >
  );
}

export default ContactUs;