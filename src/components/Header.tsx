'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappMessage = encodeURIComponent("Hello, I am contacting Infinity NDT & Technical Services regarding your NDT services. Please assist me.");
    const whatsappUrl = `https://wa.me/919665854450?text=${whatsappMessage}`;

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="contact-info">
                        <a href="tel:+919766119481">📞 +91 97661 19481</a>
                        <a href="tel:+919665854450" className="hide-mobile">/ +91 96658 54450</a>
                        <a href="mailto:infinityndtservices@gmail.com" style={{ marginLeft: "15px" }}>✉️ infinityndtservices@gmail.com</a>
                        <span className="address-info hide-mobile" style={{ marginLeft: "15px" }}>📍 Plot No. F 59, AMBAD MIDC, Nashik - 422010</span>
                    </div>
                    <div className="social-links">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-top" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/-svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.062 3.963L0 16l4.226-1.108c1.166.621 2.476.948 3.82.948h.005c4.368 0 7.926-3.558 7.93-7.925a7.86 7.86 0 0 0-2.38-5.589zM7.995 14.482h-.004c-1.18 0-2.338-.3-3.348-.868l-.24-.14-2.486.652.664-2.426-.153-.245a6.5 6.5 0 0 1-1-3.483c.004-3.593 2.924-6.513 6.52-6.513a6.5 6.5 0 0 1 4.608 1.912 6.5 6.5 0 0 1 1.908 4.608c-.003 3.594-2.923 6.503-6.519 6.503z" />
                                <path d="M11.594 9.172c-.198-.1-1.173-.58-1.353-.646-.182-.065-.315-.1-.445.1-.131.198-.517.646-.633.78-.117.132-.234.148-.432.05-.198-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.116-.198-.012-.305.087-.404.09-.089.198-.232.296-.348.1-.115.132-.198.198-.33.065-.132.032-.248-.017-.348-.05-.1-.445-1.073-.61-1.468-.16-.385-.32-.333-.445-.34-.116-.006-.248-.006-.38-.006a.75.75 0 0 0-.545.248c-.198.2-.758.74-.758 1.803s.775 2.088.882 2.22c.1.133 1.516 2.316 3.674 3.245.513.221.913.353 1.225.452.513.163.98.14 1.35.084.417-.064 1.282-.524 1.463-1.03.181-.506.181-.94.127-1.03-.054-.089-.198-.133-.396-.233z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav-wrapper">
                <div className="container main-nav">
                    <Link href="/" className="logo hide-text" onClick={closeMenu}>
                        <h3>Infinity NDT</h3>
                        <span>& Technical Services</span>
                    </Link>

                    <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link href="/" className="nav-item" onClick={closeMenu}>Home</Link>

                        <div className="dropdown">
                            <Link href="/about" className="nav-item" onClick={closeMenu}>About Us</Link>
                        </div>

                        <div className="dropdown">
                            <div className="nav-item">Services <span className="caret">▼</span></div>
                            <div className="dropdown-menu">
                                <Link href="/services/radiography-testing" onClick={closeMenu}>Radiography Testing</Link>
                                <Link href="/services/ultrasonic-testing" onClick={closeMenu}>Ultrasonic Testing</Link>
                                <Link href="/services/liquid-penetrant" onClick={closeMenu}>Liquid Penetrant Testing</Link>
                                <Link href="/services/magnetic-particle" onClick={closeMenu}>Magnetic Particle</Link>
                                <Link href="/services/rla-testing" onClick={closeMenu}>RLA Testing of Boilers</Link>
                                <Link href="/services/equipment-distribution" onClick={closeMenu}>Equipment Distribution</Link>
                                <Link href="/services" className="view-all" onClick={closeMenu}>View All Services</Link>
                            </div>
                        </div>

                        <Link href="/gallery" className="nav-item" onClick={closeMenu}>Gallery</Link>
                        <Link href="/blog" className="nav-item" onClick={closeMenu}>News</Link>
                        <Link href="/contact" className="nav-item" onClick={closeMenu}>Contact</Link>

                        <a href={whatsappUrl} className="btn btn-primary ml-4 mobile-full-btn" target="_blank" rel="noopener noreferrer">
                            Get Quote
                        </a>
                    </div>

                    <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
                        <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
