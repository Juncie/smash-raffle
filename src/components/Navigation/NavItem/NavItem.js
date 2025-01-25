'use client';
import React, { useEffect, useRef, useState } from 'react';
// Components
import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';

export default function NavItem({ item, isScrolled }) {
    const [inView, setInView] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (item.href?.substring?.(0, 1) === '#') {
            const id = item.href.substring(1);
            const sectionElement = document.getElementById(id);
            if (sectionElement) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.isIntersecting &&
                                entry.intersectionRatio >= 0.6
                            ) {
                                setInView(true);
                            } else if (inView) setInView(false);
                        });
                    },
                    { threshold: 0.6 },
                );

                observer.observe(sectionElement);

                return () => observer.disconnect();
            }
        }
    }, [item, inView]);

    const handleScroll = (e) => {
        if (
            pathname === '/' &&
            e?.currentTarget?.getAttribute('href')?.substring?.(1, 2) === '#'
        ) {
            e.preventDefault();

            const targetId = e.currentTarget.getAttribute('href').substring(2);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    return (
        <Link
            href={item.href}
            className={clsx(styles.navItem, {
                [styles.activeNavItem]: inView,
            })}
            onClick={handleScroll}
        >
            {item.title}
            {/* <span
                className={clsx(styles.lineMenu, {
                    [styles.lineMenuScroll]: isScrolled,
                })}
            /> */}
        </Link>
    );
}
