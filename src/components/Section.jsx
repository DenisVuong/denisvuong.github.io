import React from 'react';

export default function Section({ children, id, className = '' }) {
    return (
        <section
            id={id}
            className={`min-h-screen w-full snap-start flex items-center justify-center ${className}`}
        >
            {children}
        </section>
    );
}
