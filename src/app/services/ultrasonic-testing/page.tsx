import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "../Services.css";

export const metadata: Metadata = {
    title: 'Ultrasonic Testing | Infinity NDT',
    description: 'Precision internal flaw detection and wall thickness gauging using Ultrasonic Testing.',
};

export default function UltrasonicTesting() {
    const serviceName = "Ultrasonic Testing (UT)";
    const getServiceMsg = encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="service-detail-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/ut_service.png" alt="Ultrasonic Testing Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>{serviceName}</h1>
                    <p>High-frequency sound wave analysis for flaw detection and rigorous thickness gauging</p>
                </div>
            </div>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-main-info">
                        <h2>Overview</h2>
                        <div style={{ position: 'relative', height: '400px', width: '100%', marginBottom: '30px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image src="/images/ut_service.png" alt="Ultrasonic Testing Equipment" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <p>Ultrasonic Testing (UT) is an incredibly versatile and deeply penetrating NDT method. By transmitting high-frequency mechanical sound waves (typically 0.1 to 15 MHz) directly into solid materials, our engineers evaluate the precise internal material conditions.</p>
                        <p>When these waves encounter a boundary or structural discontinuity (like a dangerous crack, delamination, or severe corrosion thinning), the acoustic energy reflects back to the transducer. Our calibrated digital instruments instantly translate these signals into measurable data, allowing us to pinpoint the exact depth, size, and orientation of internal flaws without dismantling critical machinery.</p>

                        <h2 style={{ marginTop: '40px' }}>Key Benefits & Industrial Advantage</h2>
                        <p>UT offers extraordinary penetrating power, effectively analyzing steel components several meters thick. It requires access to only one side of the test subject, making it incredibly practical for live-plant piping and inservice pressure vessels. Furthermore, it is non-hazardous to operators and nearby personnel, allowing testing to proceed without shutting down adjoining plant operations—saving significantly on downtime.</p>
                    </div>

                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Applications</h3>
                            <ul className="sidebar-list">
                                <li>Flaw Detection (cracks, voids)</li>
                                <li>Material Thickness Gauging</li>
                                <li>Corrosion/Erosion Monitoring</li>
                                <li>Assessment of Weldment Integrity</li>
                                <li>Determining Material Properties</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Industries Served</h3>
                            <ul className="sidebar-list">
                                <li>Heat Exchangers</li>
                                <li>LPG Tankers</li>
                                <li>Refineries</li>
                                <li>Boilers</li>
                            </ul>
                        </div>

                        <div className="sidebar-widget contact-widget">
                            <h3>Need UT Services?</h3>
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
