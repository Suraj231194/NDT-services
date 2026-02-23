import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer bg-dark section-padding">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col">
                        <h3 className="footer-title">Infinity NDT & Technical Services</h3>
                        <p className="footer-desc">
                            Professional Non-Destructive Testing & Industrial Inspection Experts providing reliable and accurate testing services.
                        </p>
                        <div className="gstin-info">
                            <strong>GSTIN:</strong> 27EAJPS3521M1Z7
                        </div>
                        <div className="social-links-footer">
                            <a href="#" aria-label="Facebook">FB</a>
                            <a href="#" aria-label="LinkedIn">IN</a>
                            <a href="#" aria-label="Twitter">TW</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/blog">News & Updates</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Our Services</h4>
                        <ul className="footer-links">
                            <li><Link href="/services/radiography-testing">Radiography Testing</Link></li>
                            <li><Link href="/services/ultrasonic-testing">Ultrasonic Testing</Link></li>
                            <li><Link href="/services/liquid-penetrant">Liquid Penetrant Testing</Link></li>
                            <li><Link href="/services/magnetic-particle">Magnetic Particle Testing</Link></li>
                            <li><Link href="/services/visual-inspection">Visual Inspection</Link></li>
                            <li><Link href="/services/rla-testing">RLA Testing of Boilers</Link></li>
                            <li><Link href="/services/equipment-distribution">Equipment Distribution</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="icon">📍</span>
                                Plot No. F 59, AMBAD MIDC, <br /> Nashik &ndash; 422010, <br /> Maharashtra, India
                            </li>
                            <li>
                                <span className="icon">📞</span>
                                <a href="tel:+919665854450">09665854450</a> <br />
                                <a href="tel:+919921891766">9921891766</a>
                            </li>
                            <li>
                                <span className="icon">✉️</span>
                                <a href="mailto:infinityndtservices@gmail.com">infinityndtservices@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 Infinity NDT & Technical Services. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
