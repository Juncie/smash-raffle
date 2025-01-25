import React from 'react';
import styles from './styles.module.scss';
import Logo from '@/assets/images/logos/inrange-logo.png';

export default function Footer() {
    return (
        <div className={`${styles.root} fade-up`}>
            <img src={Logo.src} />
            <h3 className="text-font32 font-russo">EVERYONE CAN PLAY. ANYONE CAN WIN.</h3>
            <span className="text-font18 font-russo">
                @2020-2023 Inrange Smash Golf Tour<sup>TM</sup> All right reserved.
            </span>
        </div>
    );
}
