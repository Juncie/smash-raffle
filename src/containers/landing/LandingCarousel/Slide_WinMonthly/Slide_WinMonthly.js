'use client';
import React from 'react';
import styles from './styles.module.scss';
import TailwindStyles from '@/utils/styling/tailwind-styles';
import CheckoutButton from '@/components/Buttons/CheckoutButton/CheckoutButton';

export default function Slide_WinMonthly({ data }) {
    const { date, title, content, mainImage, topImage, middleImage, bottomImage } = data;

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h6 className="text-font16 md:text-font18">{date}</h6>
                <h2 className="text-font32 md:text-font48 max-w-[474px] font-russo">{title}</h2>
                <span className="text-font16 md:text-font18 max-w-[490px]">{content}</span>
                <CheckoutButton className={`${TailwindStyles.secondaryBtn} uppercase mt-6`}>PURCHASE A RAFFLE TICKET</CheckoutButton>
            </div>
            <img src={mainImage} className={styles.mainImage} />
            <img src={topImage} className={styles.topImage} />
            <img src={middleImage} className={styles.middleImage} />
            <img src={bottomImage} className={styles.bottomImage} />
        </div>
    );
}
