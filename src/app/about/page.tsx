import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import "./About.css";

export const metadata: Metadata = {
    title: 'About Us | Infinity NDT & Technical Services',
    description: 'Learn about our mission, vision, team, and why we are the leading Non-Destructive Testing experts.',
};

export default function About() {
    return (
        <div className="about-page">
            {/* Page Header */}
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/images/hero_bg.png" alt="Industrial Background" fill style={{ objectFit: 'cover', opacity: 0.3, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>About Us</h1>
                    <p>Securing the future through uncompromising technical excellence</p>
                </div>
            </div>

            <div className="container">
                {/* Company Overview Section */}
                <section className="section-padding overview-section">
                    <div className="overview-content">
                        <div className="about-overview-text">
                            <h2>Infinity NDT & Technical Services</h2>
                            <p><strong>Infinity NDT & Technical Services</strong> is a premier, internationally recognized organization in the field of Non-Destructive Testing (NDT), Industrial Inspection, and Advanced Technical Auditing.</p>
                            <p>Our core mission is to actively assist heavy industries in guaranteeing absolute safety, impeccable quality, and uncompromising structural integrity. We specialize in providing comprehensive testing solutions for mission-critical infrastructure including Boilers, High-Pressure Vessels, Heat Exchangers, LPG Tankers, Cross-Country Pipelines, Refineries, Fertilizer Plants, and Mega Power Projects.</p>
                            <p>We pride ourselves on deploying state-of-the-art diagnostic equipment and adhering to internationally certified techniques to deliver accurate, reliable, and instantaneous results. Whether it&apos;s Gamma Ray Radiography under strict AERB guidelines, advanced Ultrasonic Testing, or complex Remaining Life Assessment (RLA) of industrial Boilers, our experts are systematically trained to meet and exceed stringent global standards.</p>
                        </div>
                    </div>
                    <div className="overview-image">
                        <div className="image-placeholder">
                            <Image src="/images/about_main.png" alt="Industrial Engineers Conducting NDT Testing" fill style={{ objectFit: 'cover' }} className="rounded-img" />
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="mission-vision section-padding pt-0">
                    <div className="mission-card">
                        <div className="card-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>To be the industry&apos;s most trusted NDT partner by offering flawless inspection technologies that ensure structural reliability, minimize unexpected downtime, and secure industrial environments worldwide.</p>
                    </div>
                    <div className="mission-card">
                        <div className="card-icon">👁️</div>
                        <h3>Our Vision</h3>
                        <p>To continuously innovate our inspection methodologies and become a globally recognized benchmark for technical precision, unyielding quality assurance, and comprehensive industrial safety.</p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section-padding bg-light rounded-section">
                    <span className="subtitle">Core Values</span>
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div className="features-grid">
                        <ul className="feature-list">
                            <li><span className="check">✓</span> <strong>Certified Experts:</strong> Team governed by BARC Level II & ASNT Level II certified professionals.</li>
                            <li><span className="check">✓</span> <strong>Advanced Equipment:</strong> Utilizing latest technologies in industrial radiography and ultrasonic testing.</li>
                            <li><span className="check">✓</span> <strong>Industry Compliance:</strong> Adherence to national and international safety codes and testing standards.</li>
                        </ul>
                        <ul className="feature-list">
                            <li><span className="check">✓</span> <strong>Strict Confidentiality:</strong> We guarantee the privacy and safety of all client design drawings and project details.</li>
                            <li><span className="check">✓</span> <strong>Timely Delivery:</strong> We understand project deadlines and promise prompt inspection and reporting.</li>
                            <li><span className="check">✓</span> <strong>Safety First:</strong> Complete compliance with AERB guidelines for radiation safety.</li>
                        </ul>
                    </div>
                </section>

                {/* Team Section */}
                <section className="section-padding team-section">
                    <span className="subtitle">Our Experts</span>
                    <h2 className="section-title">Meet The Core Team</h2>

                    <div className="team-grid">
                        {/* Founder */}
                        <div className="team-card founder-card">
                            <div className="team-avatar">
                                AS
                            </div>
                            <div className="team-info">
                                <h3>Mr. Akash Singh</h3>
                                <p className="team-role">Founder & Technical Expert</p>
                                <div className="team-credentials">
                                    <span>BARC Level II</span>
                                    <span>ASNT Level II</span>
                                </div>
                                <p className="team-bio">With extensive years of field experience in industrial radiography and structural assessments, Mr. Singh leads the technical operations ensuring highest precision and safety standards.</p>
                                <div className="team-contact mt-3">
                                    <a href="tel:+919665854450" className="text-link">📞 Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-minimal section-padding text-center">
                    <h2>Ready to assure the quality of your next project?</h2>
                    <p className="mb-4">Get in touch with our experts to discuss custom NDT solutions for your organization.</p>
                    <Link href="/contact" className="btn btn-primary">Contact Us Today</Link>
                </section>
            </div>
        </div>
    );
}
