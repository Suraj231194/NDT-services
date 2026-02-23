import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "./Blog.css";

export const metadata: Metadata = {
    title: 'News & Insights | Infinity NDT',
    description: 'Stay deeply informed with the latest technological advancements and regulatory updates in the global NDT industry.',
};

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: 'Precision Matters: The Critical Role of Ultrasonic Testing in Mega Power Plants',
            excerpt: 'Discover why heavy industries overwhelmingly rely on advanced Ultrasonic Testing to proactively identify dangerous internal anomalies and actively avert catastrophic outages.',
            date: 'October 15, 2023',
            category: 'Industry Insights',
            src: '/images/ut_service.png'
        },
        {
            id: 2,
            title: 'Navigating Statutory Compliance: Understanding Initial and Periodic RLA of Industrial Boilers',
            excerpt: 'A comprehensive engineering guide detailing the stringent IBR requirements for Remaining Life Assessment evaluations, specifically focusing on boilers exceeding 100,000 operational hours.',
            date: 'November 22, 2023',
            category: 'Regulatory Compliance',
            src: '/images/rla_service.png'
        },
        {
            id: 3,
            title: 'Decoding Radiography: Ensuring Absolute Weld Integrity Under AERB Guidelines',
            excerpt: 'Exploring the vital necessity of Gamma and X-Ray volumetric inspections in verifying the structural perfection of complex, high-pressure pipeline weldments.',
            date: 'December 05, 2023',
            category: 'Testing Technologies',
            src: '/images/rt_service.png'
        }
    ];

    return (
        <div className="blog-page">
            <div className="page-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '120px' }}>
                <Image src="/images/about_main.png" alt="Blog Background" fill style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>News & Insights</h1>
                    <p>Expert perspectives, deeply technical articles, and the latest NDT industry updates</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-img" style={{ position: 'relative', height: '250px', width: '100%', overflow: 'hidden' }}>
                                <Image src={post.src} alt={post.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-actions">
                                    <Link href="#" className="text-link">Read Full Article &rarr;</Link>
                                    <div className="share-buttons">
                                        <span style={{ fontSize: '0.8rem', color: '#888' }}>Share:</span>
                                        <button>TW</button>
                                        <button>IN</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
