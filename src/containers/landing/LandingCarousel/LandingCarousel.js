'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './styles.module.scss';
import Slide_WinMonthly from './Slide_WinMonthly/Slide_WinMonthly';
import { carouselData } from '@/utils/data/carousel-data';

export default function LandingCarousel() {
    return (
        <div className={`${styles.root} fade-up`}>
            <Carousel
                infiniteLoop
                centerMode
                centerSlidePercentage={85}
                showArrows={false}
                swipeable={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={4000}
                autoPlay
            >
                {carouselData.map((item, i) => {
                    return (
                        <div className="mx-1 md:mx-4" key={`${i}`}>
                            {item.variation === '1' && <Slide_WinMonthly data={item} />}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
