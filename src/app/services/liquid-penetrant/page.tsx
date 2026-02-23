import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "../Services.css";

export const metadata: Metadata = {
    title: 'Liquid Penetrant Testing | Infinity NDT',
    description: 'Detect critical surface-breaking defects with high precision Liquid Penetrant Testing from Infinity NDT.',
};

export default function LiquidPenetrantTesting() {
    const serviceName = "Liquid Penetrant Testing (LPT)";
    const getServiceMsg = encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="service-detail-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/lpt_service.png" alt="Liquid Penetrant Testing Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>{serviceName}</h1>
                    <p>Visible dye and fluorescent capillary analysis for microscopic surface defect inspection</p>
                </div>
            </div>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-main-info">
                        <h2>Overview</h2>
                        <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image src="/images/lpt_service.png" alt="Liquid Penetrant Testing Process" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>Liquid Penetrant Testing (LPT/PT) is an incredibly efficient, cost-effective, and highly sensitive NDT methodology used specifically to reveal microscopic surface-breaking flaws. It leverages the principle of capillary action—where low surface tension liquid is pulled into tight, microscopic gaps.</p>
                        <p>During the procedure, the penetrant (visible red dye or ultra-sensitive fluorescent dye) is applied to the meticulously pre-cleaned surface and allowed to seep into flaws over a specified dwell time. After carefully removing the excess surface penetrant, a designated developer is actively applied. This developer acts as a blotter, forcefully drawing out the trapped penetrant back to the surface to form a bold, visible indication that accurately outlines the crack's geometry.</p>

                        <h2 style={{ marginTop: '40px' }}>Key Benefits & Versatility</h2>
                        <p>LPT is practically unmatched in its sensitivity to extremely small fatigue cracks and fine surface discontinuities. It is universally applicable to a wide array of non-porous material types—most notably non-magnetic metals (like Aluminum, Titanium, Austenitic Stainless Steels), ceramics, and plastics. LPT is excellent for rapidly inspecting large surface areas or large volumes of complexly shaped parts at comparatively low costs.</p>
                    </div>

                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Applications</h3>
                            <ul className="sidebar-list">
                                <li>Surface fatigue cracks</li>
                                <li>Porosity in castings</li>
                                <li>Leak testing</li>
                                <li>Weld surface defects</li>
                                <li>Forging laps & seams</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Industries Served</h3>
                            <ul className="sidebar-list">
                                <li>Automobile Industry</li>
                                <li>Power Projects</li>
                                <li>Petrochemical Industry</li>
                                <li>Castings & Forgings</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget contact-widget">
                            <h3>Need LPT Services?</h3>
                            <p style={{ marginBottom: '20px' }}>Contact our experts immediately for technical consultation and transparent pricing.</p>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                Inquire via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
