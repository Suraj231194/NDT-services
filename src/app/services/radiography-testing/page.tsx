import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "../Services.css";

export const metadata: Metadata = {
    title: 'Radiography Testing (RT) | Infinity NDT',
    description: 'Advanced industrial volumetric inspection using Gamma and X-Ray technology for critical flaw detection.',
};

export default function RadiographyTesting() {
    const serviceName = "Radiography Testing (RT)";
    const getServiceMsg = encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="service-detail-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/rt_service.png" alt="Radiography Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>{serviceName}</h1>
                    <p>Volumetric internal flaw detection using state-of-the-art Gamma & X-Ray Technology</p>
                </div>
            </div>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-main-info">
                        <h2>Overview</h2>
                        <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image src="/images/rt_service.png" alt="Conducting Radiography Testing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>Industrial Radiography Testing (RT) at Infinity NDT is a highly sophisticated, volumetric Non-Destructive Testing methodology. Utilizing penetrating short-wavelength electromagnetic radiation (Gamma Rays via Ir-192 or advanced X-Rays), we create precise, permanent visual records (radiographs) of an object's internal structure.</p>
                        <p>Our BARC and ASNT certified technicians deploy these techniques to strictly map and identify hidden macroscopic flaws—such as severe porosity, life-threatening cracks, incomplete fusion, and dangerous slag inclusions—deep within heavy structural castings, complex forgings, and critical pressure vessel weldments.</p>

                        <h2 style={{ marginTop: '40px' }}>Key Benefits & Safety</h2>
                        <p>Radiography provides an unparalleled, indisputable permanent record of structural integrity. It is universally accepted by all major international codes (ASME, API, AWS). Crucially, Infinity NDT operates under the strictest Atomic Energy Regulatory Board (AERB) guidelines, ensuring absolute radiation safety during every single industrial deployment.</p>
                    </div>
                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Applications</h3>
                            <ul className="sidebar-list">
                                <li>Weld Inspection</li>
                                <li>Casting & Forging Defects</li>
                                <li>Pipe line integrity</li>
                                <li>Wall thickness profiling</li>
                                <li>Corrosion mapping</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Industries Served</h3>
                            <ul className="sidebar-list">
                                <li>Petrochemicals</li>
                                <li>Power Projects</li>
                                <li>Boilers & Pressure Vessels</li>
                                <li>Automobile Sector</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget contact-widget">
                            <h3>Need RT Services?</h3>
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
