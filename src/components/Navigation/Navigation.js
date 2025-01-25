'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from '@mui/material';
import Logo from '@/assets/images/logos/inrange-logo.png';
import clsx from 'clsx';
import { NAV_ITEMS } from './data';
import NavItem from './NavItem/NavItem';
import styles from './styles.module.scss';
import { getCheckout } from '@/utils/api/get-checkout';
import CheckoutButton from '../Buttons/CheckoutButton/CheckoutButton';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrolled = useRef();

    useEffect(() => {
        scrolled.current = isScrolled;
    }, [isScrolled]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (!scrolled.current && scrollY > 100) setIsScrolled(true);
            if (scrolled.current && scrollY < 50) setIsScrolled(false);
        };

        window?.addEventListener?.('scroll', handleScroll);
        return () => {
            window?.removeEventListener?.('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={clsx('fixed top-0 w-full z-20 transition-colors', {
                ['shadow-md bg-white']: isScrolled,
            })}
        >
            <Container maxWidth="lg">
                <div className={styles.navbar}>
                    <div className={styles.leftContainer}>
                        <img src={Logo.src} className="w-[61px]" />
                    </div>
                    <div className="hidden md:flex items-center gap-12">
                        {NAV_ITEMS.map((item, i) => {
                            return <NavItem key={i} isScrolled={isScrolled} item={item} />;
                        })}
                    </div>
                    <div className={styles.rightContainer}>
                        {/* <CheckoutButton className={styles.trapezoidButton}>Purchase Raffle Ticket!</CheckoutButton> */}
                        <Button variant="contained" className={styles.trapezoidButton} href='/signup'>REGISTER NOW</Button> 
                    </div>
                </div>
            </Container>
        </div>
    );
}
