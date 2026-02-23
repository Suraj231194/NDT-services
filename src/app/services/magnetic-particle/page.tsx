import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "../Services.css";

export const metadata: Metadata = {
    title: 'Magnetic Particle Testing | Infinity NDT',
    description: 'Identify critical surface and shallow subsurface anomalies rapidly using Magnetic Particle Testing.',
};

export default function MagneticParticleTesting() {
    const serviceName = "Magnetic Particle Testing (MPT)";
    const getServiceMsg = encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="service-detail-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/mpt_service.png" alt="Magnetic Particle Testing Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>{serviceName}</h1>
                    <p>Rapid electromagnetic detection for discontinuities in ferromagnetic materials</p>
                </div>
            </div>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-main-info">
                        <h2>Overview</h2>
                        <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image src="/images/mpt_service.png" alt="Magnetic Particle Testing Yoke" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>Magnetic Particle Testing (MPT/MPI) relies on the fundamental physics of electromagnetism to detect fine surface and slightly subsurface flaws exclusively in ferromagnetic materials (such as carbon steel, cast iron, and specific high-strength alloys). Using a specialized Magnetic Yoke, our certified technicians forcefully induce a magnetic field into the test subject.</p>
                        <p>Fine ferromagnetic particles (applied as a dry powder or suspended dynamically in liquid, often fluorescent to maximize contrast under UV light) are applied to the magnetized surface. If a structural defect disrupts the magnetic field, escaping magnetic flux attracts these particles locally, creating highly visible, undeniable indications that correspond exactly to the size, orientation, and shape of the dangerous defect.</p>

                        <h2 style={{ marginTop: '40px' }}>Key Benefits & Application Speed</h2>
                        <p>MPT provides immediate, unmistakable indications of defects and requires significantly less surface preparation compared to liquid penetrant testing (LPT). It is widely regarded as the premier method for isolating shallow subsurface defects and can effortlessly inspect complex parts with irregular geometries (like gear teeth and turbine blades). MPT is rapid, simple, highly portable, and extraordinarily effective in high-stakes environments.</p>
                    </div>

                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Applications</h3>
                            <ul className="sidebar-list">
                                <li>Surface & shallow subsurface crack detection</li>
                                <li>Inspecting ferromagnetic welds</li>
                                <li>Detecting forging seams</li>
                                <li>In-service fatigue crack checks</li>
                                <li>Inspection of gears and shafts</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Industries Served</h3>
                            <ul className="sidebar-list">
                                <li>Automobile Industry</li>
                                <li>Pressure Vessels</li>
                                <li>Castings & Forgings</li>
                                <li>Power Projects</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget contact-widget">
                            <h3>Need MPT Services?</h3>
                            <p style={{ marginBottom: '20px' }}>Contact our experts immediately for technical consultation and transparent pricing.</p>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                Inquire via WhatsApp
                            </a >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
}
