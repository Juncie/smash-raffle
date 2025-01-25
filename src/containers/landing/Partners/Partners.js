import React from 'react';

import Partner1 from '@/assets/images/home/partners/partner-1.png';
import Partner2 from '@/assets/images/home/partners/partner-2.png';
import Partner3 from '@/assets/images/home/partners/partner-3.png';
import Partner4 from '@/assets/images/home/partners/partner-4.png';
import Partner5 from '@/assets/images/home/partners/partner-5.png';
import Partner6 from '@/assets/images/home/partners/partner-6.png';
import Partner7 from '@/assets/images/home/partners/partner-7.png';

import styles from './styles.module.scss';

export default function Partners() {
    return (
        <div className={`${styles.root} fade-up`}>
            <img src={Partner1.src} />
            <img src={Partner2.src} />
            <img src={Partner4.src} />
            <img src={Partner5.src} />
            <img src={Partner6.src} />
            <img src={Partner7.src} />
            <img src={Partner3.src} />
        </div>
    );
}
