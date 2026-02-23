import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "../Services.css";

export const metadata: Metadata = {
    title: 'Equipment Distribution | Infinity NDT',
    description: 'Certified distribution of rugged industrial inspection gear, survey meters, and NDT accessories.',
};

export default function EquipmentDistribution() {
    const serviceName = "Equipment Distribution";
    const getServiceMsg = encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="service-detail-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/equipment_service.png" alt="Equipment Distribution Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>{serviceName}</h1>
                    <p>Procurement of rigorous, certified industrial inspection technology</p>
                </div>
            </div>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-main-info">
                        <h2>Overview</h2>
                        <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image src="/images/equipment_service.png" alt="NDT Inspection Equipment" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>Running a strictly compliant and highly efficient inspection department demands fundamentally reliable and fiercely tested equipment. Infinity NDT goes beyond world-class testing services; we are a leading, trusted national supplier of certified Non-Destructive Testing instruments, specifically catering to the demanding needs of heavy industries across India.</p>
                        <p>Our direct partnerships with elite global manufacturers guarantee that every piece of diagnostic equipment we supply—from highly sensitive Radiation Survey Meters to exceptionally precise Ultrasonic Thickness Gauges—meets or aggressively exceeds stringent national and international calibration standards.</p>

                        <h2 style={{ marginTop: '40px' }}>Our Product Range</h2>
                        <p>We systematically stock and rapidly distribute an expansive range of vital consumable and high-end capital goods:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Radiography Essentials:</strong> AERB-approved Radiation Survey Meters, sensitive dosimeters, heavy-duty lead letters, sharp film viewers, and certified densitometers.</li>
                            <li><strong>Ultrasonic Kits:</strong> Advanced MODSONIC Digital UT Machines (Einstein II), high-accuracy thickness gauges, and precise calibration test blocks.</li>
                            <li><strong>Consumables:</strong> Authentic Agfa D4/D7 radiographic films, high-contrast penetrant dyes, magnetic powders, and developers for MPT/LPT operations.</li>
                        </ul>
                    </div>

                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Why Source From Us?</h3>
                            <ul className="sidebar-list">
                                <li>Pre-calibrated accuracy</li>
                                <li>100% genuine products</li>
                                <li>Post-purchase technical support</li>
                                <li>Competitive B2B pricing</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Deliver To</h3>
                            <ul className="sidebar-list">
                                <li>Independent NDT Contractors</li>
                                <li>Corporate In-House Labs</li>
                                <li>Educational Institutions</li>
                                <li>Plant Shutdown Projects</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget contact-widget">
                            <h3>Order Equipment</h3>
                            <p style={{ marginBottom: '20px' }}>Submit your RFQ or inquire about specific device models immediately.</p>
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
