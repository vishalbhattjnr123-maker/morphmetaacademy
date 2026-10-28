import React from 'react';

export const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 448 512">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7.1-4.2-73.3 19.3L53.4 343c-18.1-31.1-27.6-66.5-27.6-102.6 0-110.4 89.9-200 200.1-200 54.5 0 105.7 21.4 142 60.5s60.5 87.5 60.5 142c-.1 110.4-90 200-200.1 200zm107.7-164.5c-3.3-1.7-19.8-9.8-22.8-10.9-3.1-1.1-5.4-1.7-7.6 1.7s-8.6 10.9-10.5 13.1c-1.9 2.1-3.8 2.4-7.1 1.7-3.3-.7-13.9-5.1-26.4-16.3-9.7-8.7-16.3-19.4-18.2-22.8s-.3-5.4 1.4-7.1c1.5-1.5 3.3-4 5-5.4s1.3-1.7 2.1-2.8c.8-1.1 1.5-2.4 2.1-3.8 0-.6 0-1.3-.2-2.1-.3-1.7-5.4-13.1-7.6-18.2s-4.3-4.3-5.9-4.3h-5.2c-1.5 0-4 1.7-4.7 3.3s-2.7 8-2.7 15.6c0 7.6 2.7 18.2 3.1 19.8s5.4 11.8 12.8 16.3c7.4 4.5 13.3 7.2 17.9 9.2s8.6 3.1 9.8 4.9c1.2 1.8 1.2 6 1.1 6.5s-.2 1-.3.9z"/>
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);