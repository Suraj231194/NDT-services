'use client';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after slightly scrolling down to not overlap with initial content
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const whatsappMessage = encodeURIComponent("Hello, I am contacting Infinity NDT & Technical Services regarding your NDT services. Please assist me.");
    const whatsappUrl = `https://wa.me/919766119481?text=${whatsappMessage}`;

    return isVisible ? (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Contact us on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.062 3.963L0 16l4.226-1.108c1.166.621 2.476.948 3.82.948h.005c4.368 0 7.926-3.558 7.93-7.925a7.86 7.86 0 0 0-2.38-5.589zM7.995 14.482h-.004c-1.18 0-2.338-.3-3.348-.868l-.24-.14-2.486.652.664-2.426-.153-.245a6.5 6.5 0 0 1-1-3.483c.004-3.593 2.924-6.513 6.52-6.513a6.5 6.5 0 0 1 4.608 1.912 6.5 6.5 0 0 1 1.908 4.608c-.003 3.594-2.923 6.503-6.519 6.503z" />
                <path d="M11.594 9.172c-.198-.1-1.173-.58-1.353-.646-.182-.065-.315-.1-.445.1-.131.198-.517.646-.633.78-.117.132-.234.148-.432.05-.198-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.116-.198-.012-.305.087-.404.09-.089.198-.232.296-.348.1-.115.132-.198.198-.33.065-.132.032-.248-.017-.348-.05-.1-.445-1.073-.61-1.468-.16-.385-.32-.333-.445-.34-.116-.006-.248-.006-.38-.006a.75.75 0 0 0-.545.248c-.198.2-.758.74-.758 1.803s.775 2.088.882 2.22c.1.133 1.516 2.316 3.674 3.245.513.221.913.353 1.225.452.513.163.98.14 1.35.084.417-.064 1.282-.524 1.463-1.03.181-.506.181-.94.127-1.03-.054-.089-.198-.133-.396-.233z" />
            </svg>
        </a>
    ) : null;
}
