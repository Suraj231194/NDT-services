'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Contact.css";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("Thank you for contacting Infinity NDT & Technical Services. Our team will get back to you shortly.");
        // Optional: clear form
    };

    const whatsappMessage = encodeURIComponent("Hello, I am contacting Infinity NDT & Technical Services regarding your NDT services. Please assist me.");
    const whatsappUrl = `https://wa.me/919665854450?text=${whatsappMessage}`;

    return (
        <div className="contact-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/hero_bg.png" alt="Contact Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Contact Us</h1>
                    <p>Partner with unparalleled expertise for uncompromising industrial safety and structural integrity</p>
                </div>
            </div>

            <div className="container">
                <div className="contact-grid">
                    {/* Contact Details */}
                    <div className="contact-info-block">
                        <h2>Reach Out To Us</h2>
                        <p className="mb-4 text-muted">Whether you need custom testing solutions or equipment quotes, we are here to help.</p>

                        <div className="info-item">
                            <div className="icon-circle">📍</div>
                            <div>
                                <h4>Office Address</h4>
                                <p>Plot No. F 59, AMBAD MIDC,<br />Nashik – 422010,<br />Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">📞</div>
                            <div>
                                <h4>Phone Numbers</h4>
                                <p><a href="tel:09665854450">09665854450</a></p>
                                <p><a href="tel:9921891766">9921891766</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">✉️</div>
                            <div>
                                <h4>Email Address</h4>
                                <p><a href="mailto:infinityndtservices@gmail.com">infinityndtservices@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">💬</div>
                            <div>
                                <h4>WhatsApp</h4>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-block">
                        <h3>Send An Inquiry</h3>
                        {formStatus ? (
                            <div className="success-message">
                                <span className="success-icon">✓</span>
                                <p>{formStatus}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" required placeholder="John Doe" />
                                </div>

                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" required placeholder="john@company.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="+91 99999 99999" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Selection</label>
                                    <select id="service" required>
                                        <option value="">-- Select a Service --</option>
                                        <option value="radiography">Radiography Testing (RT)</option>
                                        <option value="ultrasonic">Ultrasonic Testing (UT)</option>
                                        <option value="penetrant">Liquid Penetrant Testing (LPT)</option>
                                        <option value="magnetic">Magnetic Particle Testing (MPT)</option>
                                        <option value="rla">RLA Testing of Boilers</option>
                                        <option value="equipment">Equipment Distribution</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea id="message" rows={5} required placeholder="Tell us about your project requirements..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section mt-5">
                    <h2 className="text-center mb-4">Find Us On Google Maps</h2>
                    <div className="map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26415052825!2d73.72107873099757!3d19.991110620888285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebdd6c51829a%3A0x874b33b2cc384358!2sAmbad%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715456382098!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
