"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { service, user, template } from "../../../config"


function SendForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = service;
        const templateId = template;
        const userId = user;

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then(() => {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                setSuccess(false);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-5">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-5">
                Contactanos para que construyamos juntos tu idea!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Tu email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu email..."
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Tu nombre
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="tu nombre..."
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                        Your Message
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="2"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-5 p-2.5"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block mx-auto font-bold py-2 px-5 text-gray-950  rounded-lg hover:bg-blue-950 hover:text-white transition disabled:opacity-50"
                >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>

                {success === true && (
                    <p className="text-green-600 text-center mt-2">
                        ¡Mensaje enviado correctamente! Te responderemos lo antes posible!
                    </p>
                )}
                {success === false && (
                    <p className="text-red-600 text-center mt-2">
                        Ocurrió un error al enviar el mensaje.
                    </p>
                )}
            </form>
        </div>
    );
}

export default SendForm;
