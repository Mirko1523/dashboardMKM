"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-blue-950 border-t border-blue-900/10 shadow-md rounded-t-lg">
            {/* extra right padding to avoid floating action buttons (increase if needed) */}
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-10 md:pr-28">
                <hr className="mb-6 border-blue-900/20" />

                <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:items-center md:justify-between">
                    {/* LEFT: logo + copyright + email */}
                    <div className="flex items-start gap-4">
                        <Image
                            src="/logomkm.png"
                            alt="Logo de MKM Agency"
                            width={120}
                            height={60}
                            className="rounded-full object-contain"
                        />
                        <div className="text-sm md:text-base">
                            <div>
                                <span className="font-bold">© 2025</span>{" "}
                                <a href="/" className="font-bold hover:underline">
                                    MKM Agency
                                </a>
                            </div>
                            <div className="text-xs text-blue-950/80">Todos los derechos reservados</div>

                            {/* Email movido aquí para evitar conflicto con botones flotantes */}
                            <a
                                href="mailto:agenciamkm9@gmail.com"
                                className="mt-2 inline-block text-sm px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-blue-900/30"
                                aria-label="Enviar email a MKM Agency"
                            >
                                agenciamkm9@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* MIDDLE: quick links (optional) */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="/" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-900/30 rounded">Home</a>
                        <a href="/projects" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-900/30 rounded">Trabajos</a>
                        <a href="/contact" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-900/30 rounded">Contacto</a>
                    </nav>

                    {/* RIGHT: contact title + social icons */}
                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-sm font-semibold mb-2">Redes sociales</p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/_mkmagency/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar perfil de Mkm Agency en Instagram"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-900/30 z-20 text-blue-950 bg-white/0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-blue-950/70">
                    <span><strong className="hover:underline cursor-pointer">MKM Agency:</strong> crece de la manera más sencilla.</span>
                </div>
            </div>
        </footer>
    );
}
