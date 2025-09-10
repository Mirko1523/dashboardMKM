"use client";

const services = [
    {
        id: 1,
        title: "Desarrollo Web desde 0",
        description:
            "Desarrollamos sitios web modernos y optimizados para tu negocio, utilizando las últimas tecnologías y mejores prácticas, adaptándolos a cualquier dispositivo.",
        icon: "code",
    },
    {
        id: 2,
        title: "Atención personalizada 24/7",
        description:
            "Creamos tu proyecto adaptado a tus necesidades específicas brindando soporte continuo y soluciones rápidas para garantizar tu satisfacción total.",
        icon: "support",
    },
    {
        id: 3,
        title: "Estrategia Digital",
        description:
            "Diseñamos una estrategia SEO y de marketing digital personalizada para mejorar tu posicionamiento y aumentar la visibilidad de tu marca en línea.",
        icon: "chart",
    },
    {
        id: 4,
        title: "Amamos las ideas que nos propones",
        description:
            "Nos encanta escuchar tus ideas y convertirlas en realidad, trabajando juntos para crear soluciones innovadoras que impulsen tu negocio al siguiente nivel.",
        icon: "idea",
    },
    {
        id: 5,
        title: "Realizamos tu prototipo en tiempo récord",
        description:
            "Desarrollamos prototipos funcionales y atractivos en tiempo record, permitiéndote visualizar y probar tu proyecto antes de su lanzamiento oficial.",
        icon: "prototype",
    },
    {
        id: 6,
        title: "Soporte y mantenimiento continuo",
        description:
            "Ofrecemos soporte y mantenimiento continuo para asegurar que tu sitio web o aplicación funcione sin problemas, actualizándolo regularmente y solucionando cualquier problema técnico.",
        icon: "wrench",
    },
];


function Icon({ name, className = "w-6 h-6" }) {
    switch (name) {
        case "code":
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "support":
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 1v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 7a8 8 0 0116 0v5a8 8 0 11-16 0V7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "chart":
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 14V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 14v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 14v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "idea":
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2a6 6 0 00-4 10c0 2 1 3 1 4v1h6v-1c0-1 1-2 1-4a6 6 0 00-4-10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "prototype":
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M8 20v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16 20v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case "wrench":
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M14 3l7 7-3 3-7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 6l7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 21a9 9 0 0116-6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        default:
            return null;
    }
}

export default function ServiceCards() {
    return (
        <section className="relative py-24 px-4 bg-gray-100">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                        <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text italic">
                            Nuestros Servicios
                        </span>
                    </h2>
                    <p className="text-sm text-blue-950/70 max-w-2xl mx-auto">
                        Soluciones digitales pensadas para crecer: diseño, desarrollo, estrategia y soporte — todo en un solo lugar.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(({ id, title, description, icon }) => (
                        <article
                            key={id}
                            className="relative group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100"
                            aria-labelledby={`service-${id}`}
                        >

                            <div
                                className={
                                    "inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 " +
                                    (id % 3 === 1
                                        ? "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white"
                                        : id % 3 === 2
                                            ? "bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white"
                                            : "bg-gradient-to-r from-amber-400 via-pink-500 to-rose-500 text-white")
                                }
                                aria-hidden="true"
                            >
                                <Icon name={icon} className="w-6 h-6" />
                            </div>

                            <h3 id={`service-${id}`} className="text-xl font-extrabold mb-2">

                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900">
                                    {title}
                                </span>
                            </h3>

                            <p className="text-sm text-blue-950/75 leading-relaxed mb-4">{description}</p>

                            <div className="mt-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center text-sm font-medium gap-2 group-hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600/30 rounded"
                                >
                                    Saber más
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>


                            <span className="absolute left-6 right-6 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
