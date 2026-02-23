import Image from "next/image";
import Link from "next/link";
import "./Home.css";

export default function Home() {
  const genericWhatsAppMsg = encodeURIComponent("Hello, I am contacting Infinity NDT & Technical Services regarding your NDT services. Please assist me.");
  const getServiceMsg = (serviceName: string) => encodeURIComponent(`Hello, I want details about ${serviceName} from Infinity NDT & Technical Services.`);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Infinity NDT & Technical Services</h1>
          <p className="hero-subtitle">Securing the Future Through Precision Industrial Inspection & Non-Destructive Testing</p>
          <p style={{ marginBottom: '40px', fontSize: '1.2rem', color: '#e0e0e0', maxWidth: '800px', margin: '0 auto 40px' }}>We are the trusted partners for power plants, refineries, and major constructors across India, ensuring absolute asset integrity, zero unexpected downtime, and strict adherence to AERB & international safety codes.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            <a href={`https://wa.me/919665854450?text=${genericWhatsAppMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Rapid WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="subtitle">The Infinity Advantage</span>
              <h2>Delivering Uncompromising Quality & Excellence in NDT Services</h2>
              <p>Infinity NDT & Technical Services is an elite provider of Non-Destructive Testing (NDT), Inspection, and Technical Audits. We cater to mission-critical industries including Refineries, Power Projects, Fertilizer Plants, and Heavy Manufacturing.</p>
              <p>Led by <strong>Mr. Akash Singh (BARC Level II, ASNT Level II)</strong>, our multidisciplinary team brings decades of field experience. Through precise technological applications such as Ultrasonic thickness gauging and volumetric Radiography mapping, we reliably prevent catastrophic structural failures, ultimately saving millions in unscheduled downtime.</p>
              <p>Certified, compliant, and deeply committed to uncompromising safety.</p>
              <Link href="/about" className="btn btn-primary mt-3">Discover Our Journey</Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <Image src="/images/about_main.png" alt="Industrial Engineers Conducting NDT Testing" fill style={{ objectFit: 'cover' }} className="rounded-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-light">
        <div className="container">
          <span className="subtitle">Core Competencies</span>
          <h2 className="section-title">Our Testing Portfolio</h2>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-img-preview" style={{ position: 'relative', height: '180px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/rt_service.png" alt="Radiography Testing" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Radiography Testing (RT)</h3>
              <p>Volumetric inspection utilizing Gamma Ray & X-Ray techniques to reveal internal sub-surface flaws in heavy castings, pipelines, and critical weldments.</p>
              <div className="card-actions">
                <Link href="/services/radiography-testing" className="text-link">Explore RT</Link>
                <a href={`https://wa.me/919665854450?text=${getServiceMsg('Radiography Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire</a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-img-preview" style={{ position: 'relative', height: '180px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/ut_service.png" alt="Ultrasonic Testing" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Ultrasonic Testing (UT)</h3>
              <p>Deploying high-frequency sound waves to accurately detect internal imperfections and conduct precise wall thickness gauging on live assets.</p>
              <div className="card-actions">
                <Link href="/services/ultrasonic-testing" className="text-link">Explore UT</Link>
                <a href={`https://wa.me/919665854450?text=${getServiceMsg('Ultrasonic Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire</a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-img-preview" style={{ position: 'relative', height: '180px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/mpt_service.png" alt="Magnetic Particle Testing" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Magnetic Particle Testing</h3>
              <p>Magnetic yoke applications producing immediate visible indications of surface and slightly sub-surface cracks in ferromagnetic structures.</p>
              <div className="card-actions">
                <Link href="/services/magnetic-particle" className="text-link">Explore MPT</Link>
                <a href={`https://wa.me/919665854450?text=${getServiceMsg('Magnetic Particle Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire</a>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-img-preview" style={{ position: 'relative', height: '180px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/lpt_service.png" alt="Liquid Penetrant Testing" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Liquid Penetrant Testing</h3>
              <p>High-contrast dye capillary action analysis offering an economical yet incredibly sensitive method for detecting microscopic surface-breaking defects.</p>
              <div className="card-actions">
                <Link href="/services/liquid-penetrant" className="text-link">Explore LPT</Link>
                <a href={`https://wa.me/919665854450?text=${getServiceMsg('Liquid Penetrant Testing')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire</a>
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-img-preview" style={{ position: 'relative', height: '180px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/rla_service.png" alt="RLA Testing" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>RLA Testing of Boilers</h3>
              <p>Comprehensive Remaining Life Assessment to mathematically predict the lifespan of industrial boilers, ensuring IBR compliance and prolonging safe operational limits.</p>
              <div className="card-actions">
                <Link href="/services/rla-testing" className="text-link">Explore RLA</Link>
                <a href={`https://wa.me/919665854450?text=${getServiceMsg('RLA Testing of Boilers')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Inquire</a>
              </div>
            </div>

            {/* Service 6 */}
            <div className="service-card highlight-card">
              <div className="service-img-preview bg-dark" style={{ position: 'relative', height: '180px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/equipment_service.png" alt="Equipment Distribution" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(13, 44, 84, 0.4)' }}></div>
              </div>
              <h3>Equipment Distribution</h3>
              <p>Procure certified industrial inspection gear directly through us. We supply robust Survey Meters, MODSONIC gauges, and Agfa accessories nationwide.</p>
              <div className="card-actions">
                <Link href="/services/equipment-distribution" className="text-link">View Catalog</Link>
                <a href={`https://wa.me/919665854450?text=${getServiceMsg('Equipment Distribution')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm btn-outline-white">Inquire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding">
        <div className="container">
          <span className="subtitle">Our Arsenal</span>
          <h2 className="section-title">Equipment & Instruments</h2>
          <div className="equipment-grid">
            <div className="eq-item">✓ Ir-192 Radiography</div>
            <div className="eq-item">✓ X-Ray 200/250/350 KV</div>
            <div className="eq-item">✓ MODSONIC – EINSTEIN II</div>
            <div className="eq-item">✓ Ultrasonic Thickness Gauge</div>
            <div className="eq-item">✓ Magnetic Yoke</div>
            <div className="eq-item">✓ Radiation Survey Meters</div>
            <div className="eq-item">✓ Dosimeters</div>
            <div className="eq-item">✓ Densitometers</div>
            <div className="eq-item">✓ Film Viewers</div>
            <div className="eq-item">✓ Density Strips (Agfa)</div>
          </div>
        </div>
      </section>

      {/* Custom Requirement CTA */}
      <section className="cta-section section-padding">
        <div className="container cta-content">
          <h2>Need Custom Industrial Testing Solutions?</h2>
          <p>We provide tailored Non-Destructive testing solutions according to organizational standards and site requirements.</p>
          <Link href="/contact" className="btn btn-outline" style={{ marginTop: '20px' }}>Request Custom Quote</Link>
        </div>
      </section>

      {/* Client Counter */}
      <section className="section-padding counters-section">
        <div className="container flex-counters">
          <div className="counter-box">
            <h3 className="counter-number">10+</h3>
            <p className="counter-label">Happy Clients</p>
          </div>
          <div className="counter-box">
            <h3 className="counter-number">50+</h3>
            <p className="counter-label">Projects Completed</p>
          </div>
          <div className="counter-box">
            <h3 className="counter-number">15+</h3>
            <p className="counter-label">Years of Experience</p>
          </div>
          <div className="counter-box">
            <h3 className="counter-number">100%</h3>
            <p className="counter-label">Quality Assurance</p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-light">
        <div className="container">
          <span className="subtitle">Where We Work</span>
          <h2 className="section-title">Industries Served</h2>
          <div className="industries-wrap">
            <span className="industry-tag">Boilers</span>
            <span className="industry-tag">Pressure Vessels</span>
            <span className="industry-tag">Heat Exchangers</span>
            <span className="industry-tag">Castings</span>
            <span className="industry-tag">LPG Tankers</span>
            <span className="industry-tag">Refineries</span>
            <span className="industry-tag">Fertilizer Plants</span>
            <span className="industry-tag">Power Projects</span>
            <span className="industry-tag">Petrochemical Industry</span>
            <span className="industry-tag">Automobile Industry</span>
          </div>
        </div>
      </section>

      {/* Twin Sections (Gallery & News Demo) */}
      <section className="section-padding">
        <div className="container">
          <div className="twin-sections">
            {/* Gallery Preview */}
            <div className="gallery-preview">
              <span className="subtitle">Visual Evidence</span>
              <h2>Project Gallery</h2>
              <div className="gallery-mini-grid">
                <div className="gallery-item-mini" style={{ position: 'relative', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src="/images/ut_service.png" alt="UT Application" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="gallery-item-mini" style={{ position: 'relative', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src="/images/mpt_service.png" alt="MPT Checks" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="gallery-item-mini" style={{ position: 'relative', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src="/images/rla_service.png" alt="RLA Interior" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="gallery-item-mini" style={{ position: 'relative', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src="/images/lpt_service.png" alt="LPT Dye" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <Link href="/gallery" className="btn btn-primary mt-3">Enter Full Gallery</Link>
            </div>

            {/* Latest News */}
            <div className="news-preview">
              <span className="subtitle">Knowledge Base</span>
              <h2>Industry Insights</h2>
              <div className="news-cards">
                <div className="news-card">
                  <h4>The Critical Role of RLA in Industrial Boiler Safety</h4>
                  <p className="news-date">Feb 10, 2026 • By Technical Team</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>Boiler failures can cause catastrophic damage. Let's delve into how Remaining Life Assessments save millions.</p>
                  <Link href="/blog" className="text-link">Read Full Report</Link>
                </div>
                <div className="news-card">
                  <h4>Why Ultrasonic Testing Surpasses Traditional Methods</h4>
                  <p className="news-date">Jan 22, 2026 • By Technical Team</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>Modern UT technology is revolutionizing flaw detection depth. Here are the core financial benefits.</p>
                  <Link href="/blog" className="text-link">Read Full Report</Link>
                </div>
              </div>
              <Link href="/blog" className="btn btn-outline mt-3" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>View Knowledge Base</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
