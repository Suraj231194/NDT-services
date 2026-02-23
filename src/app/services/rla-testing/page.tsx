import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "../Services.css";

export const metadata: Metadata = {
    title: 'RLA Testing of Boilers | Infinity NDT',
    description: 'Remaining Life Assessment evaluations for industrial boilers to ensure absolute IBR compliance and operational safety.',
};

export default function RLATesting() {
    const serviceName = "RLA Testing of Boilers";
    const getServiceMsg = encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="service-detail-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/rla_service.png" alt="RLA Testing Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>{serviceName}</h1>
                    <p>Scientific structural lifspan prediction and uncompromising IBR statutory compliance</p>
                </div>
            </div>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-main-info">
                        <h2>Overview</h2>
                        <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image src="/images/rla_service.png" alt="RLA Testing on Boiler" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>Remaining Life Assessment (RLA) is a highly specialized, multidisciplinary engineering evaluation crucial for predicting the safe operational lifespan of aging high-pressure infrastructure, primarily industrial boilers. Industrial boilers operate under extreme conditions—enduring continuous high temperatures, fluctuating immense pressures, aggressive chemical corrosion, and intense thermal cycling.</p>
                        <p>Our designated RLA experts deploy a comprehensive suite of advanced diagnostic tests including sophisticated insitu metallography (replica testing), precise ultrasonic thickness gauging, complex hardness testing, multidimensional magnetic particle testing, and detailed visual examinations. Through metallurgical analysis and fracture mechanics formulas, we accurately evaluate the current degradation level of the boiler's crucial components.</p>

                        <h2 style={{ marginTop: '40px' }}>Why is it Necessary?</h2>
                        <p>As per strictly enforced Indian Boiler Regulations (IBR 1950), RLA is an active statutory requirement once a high-pressure boiler exceeds 100,000 continuous hours of specific operation or undergoes a critical major repair. Beyond strict regulatory compliance, routine RLA significantly helps prevent catastrophic industrial failures, minimizes enormously costly unplanned outages, and enables safe, data-driven decisions regarding component repair versus full replacement.</p>
                    </div>

                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Applications</h3>
                            <ul className="sidebar-list">
                                <li>Boiler tubes & headers assessment</li>
                                <li>Steam line piping analysis</li>
                                <li>Pressure vessel certification</li>
                                <li>Creep & fatigue evaluation</li>
                                <li>Statutory compliance extensions</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Industries Served</h3>
                            <ul className="sidebar-list">
                                <li>Power Projects</li>
                                <li>Fertilizer Plants</li>
                                <li>Refineries</li>
                                <li>Petrochemical Industry</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget contact-widget">
                            <h3>Need RLA Services?</h3>
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
