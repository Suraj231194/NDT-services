import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "./Services.css";

export const metadata: Metadata = {
    title: 'NDT Services | Infinity NDT',
    description: 'Explore our comprehensive range of Non-Destructive Testing and Industrial Inspection services globally.',
};

export default function ServicesPage() {
    const genericWhatsAppMsg = encodeURIComponent("Hello, I am contacting Infinity NDT & Technical Services regarding your NDT services. Please assist me.");
    const getServiceMsg = (serviceName: string) => encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

    return (
        <div className="services-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/images/equipment_service.png" alt="Industrial Background" fill style={{ objectFit: 'cover', opacity: 0.3, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Our Professional Services</h1>
                    <p>Comprehensive Non-Destructive Testing and Inspection Solutions</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="intro-text text-center mb-5">
                    <p className="lead" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px', color: '#555' }}>
                        At Infinity NDT & Technical Services, we employ state-of-the-art diagnostic imaging and testing technologies to assure the quality, integrity, and safety of your industrial components without causing any damage.
                    </p>
                </div>

                <div className="services-grid-large">
                    {/* Service 1 */}
                    <div className="service-card">
                        <div className="service-img-preview" style={{ position: 'relative', height: '220px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/images/rt_service.png" alt="Radiography Testing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Radiography Testing (RT)</h3>
                        <p>Volumetric inspection utilizing Gamma Ray & X-Ray techniques to reveal internal sub-surface flaws in heavy castings, pipelines, and critical weldments. Essential for ensuring deep structural integrity.</p>
                        <div className="card-actions">
                            <Link href="/services/radiography-testing" className="btn btn-outline btn-sm">Full Details</Link>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg('Radiography Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire Now</a>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card">
                        <div className="service-img-preview" style={{ position: 'relative', height: '220px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/images/ut_service.png" alt="Ultrasonic Testing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Ultrasonic Testing (UT)</h3>
                        <p>Deploying high-frequency sound waves to accurately detect internal imperfections and conduct precise wall thickness gauging on live assets without disrupting continuous operations.</p>
                        <div className="card-actions">
                            <Link href="/services/ultrasonic-testing" className="btn btn-outline btn-sm">Full Details</Link>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg('Ultrasonic Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire Now</a>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card">
                        <div className="service-img-preview" style={{ position: 'relative', height: '220px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/images/mpt_service.png" alt="Magnetic Particle Testing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Magnetic Particle Testing</h3>
                        <p>Magnetic yoke applications producing immediate visible indications of surface and slightly sub-surface cracks in ferromagnetic structures, ideal for fatigue analysis.</p>
                        <div className="card-actions">
                            <Link href="/services/magnetic-particle" className="btn btn-outline btn-sm">Full Details</Link>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg('Magnetic Particle Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire Now</a>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="service-card">
                        <div className="service-img-preview" style={{ position: 'relative', height: '220px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/images/lpt_service.png" alt="Liquid Penetrant Testing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Liquid Penetrant Testing</h3>
                        <p>High-contrast dye capillary action analysis offering an economical yet incredibly sensitive method for detecting microscopic surface-breaking defects on non-porous metals.</p>
                        <div className="card-actions">
                            <Link href="/services/liquid-penetrant" className="btn btn-outline btn-sm">Full Details</Link>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg('Liquid Penetrant Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire Now</a>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="service-card">
                        <div className="service-img-preview" style={{ position: 'relative', height: '220px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/images/rla_service.png" alt="RLA Testing" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>RLA Testing of Boilers</h3>
                        <p>Comprehensive Remaining Life Assessment to mathematically predict the lifespan of industrial boilers, ensuring uncompromising IBR statuary compliance and operational safety.</p>
                        <div className="card-actions">
                            <Link href="/services/rla-testing" className="btn btn-outline btn-sm">Full Details</Link>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg('RLA Testing of Boilers')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire Now</a>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="service-card">
                        <div className="service-img-preview" style={{ position: 'relative', height: '220px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/images/equipment_service.png" alt="Equipment Distribution" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Equipment Distribution</h3>
                        <p>Procure certified industrial inspection gear directly through us. We supply robust Survey Meters, MODSONIC gauges, magnetic yokes, and Agfa accessories nationwide.</p>
                        <div className="card-actions">
                            <Link href="/services/equipment-distribution" className="btn btn-outline btn-sm">Full Details</Link>
                            <a href={`https://wa.me/919665854450?text=${getServiceMsg('Equipment Distribution')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
