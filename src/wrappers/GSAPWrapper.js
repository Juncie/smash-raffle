'use client';
import { setupGSAP } from '@/utils/animations/gsap-animations';
import React, { useEffect, useRef } from 'react';

export default function GSAPWrapper({ className, children }) {
    const ref = useRef();

    useEffect(() => {
        setupGSAP(ref.current);
    }, []);

    return (
        <div className={className} ref={ref}>
            {children}
        </div>
    );
}
