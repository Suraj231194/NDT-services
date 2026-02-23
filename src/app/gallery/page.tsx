import Image from "next/image";
import { Metadata } from "next";
import "./Gallery.css";

export const metadata: Metadata = {
    title: 'Gallery | Infinity NDT',
    description: 'View our state-of-the-art Non-Destructive Testing and Industrial Inspection operations in action.',
};

export default function GalleryPage() {
    const galleryItems = [
        { id: 1, title: 'Radiography Pipeline Inspection', category: 'Radiography Testing', src: '/images/rt_service.png' },
        { id: 2, title: 'Ultrasonic Flaw Detection in Progress', category: 'Ultrasonic Testing', src: '/images/ut_service.png' },
        { id: 3, title: 'Advanced UT Thickness Gauging', category: 'Ultrasonic Testing', src: '/images/rla_service.png' },
        { id: 4, title: 'Magnetic Particle Yoke Application', category: 'Magnetic Particle', src: '/images/mpt_service.png' },
        { id: 5, title: 'High Contrast Dye Penetrant Testing', category: 'Liquid Penetrant', src: '/images/lpt_service.png' },
        { id: 6, title: 'Certified NDT Equipment Preparation', category: 'Equipment Calibration', src: '/images/equipment_service.png' },
    ];

    return (
        <div className="gallery-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/hero_bg.png" alt="Gallery Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Project Gallery</h1>
                    <p>Visual records of our precision engineering and safety inspections across India</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <div className="gallery-img-container" style={{ position: 'relative', height: '280px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                                <Image src={item.src} alt={item.title} fill style={{ objectFit: 'cover' }} />
                                <div className="gallery-overlay">
                                    <span className="gallery-category">{item.category}</span>
                                    <h3 className="gallery-title">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
