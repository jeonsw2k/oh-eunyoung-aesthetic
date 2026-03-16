"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? '' : styles.transparent}`}>
            <Link href="/" className={styles.logo}>
                오은영에스테틱
            </Link>

            <nav className={styles.nav}>
                <Link href="#about" className={styles.navLink}>소개</Link>
                <Link href="#programs" className={styles.navLink}>프로그램</Link>
                <Link href="#reviews" className={styles.navLink}>후기</Link>
                <Link href="#contact" className={styles.navLink}>오시는 길</Link>
            </nav>

            <div className={styles.buttonGroup}>
                <a
                    href="https://m.place.naver.com/place/1905795609/home?entry=pll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaButton} ${styles.naverButton}`}
                >
                    네이버 예약
                </a>
                <a
                    href="https://www.daangn.com/kr/local-profile/%EC%98%A4%EC%9D%80%EC%98%81%EC%97%90%EC%8A%A4%ED%85%8C%ED%8B%B1-ysjnhw2p3iwo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaButton} ${styles.daangnButton}`}
                >
                    당근 예약
                </a>
            </div>
        </header>
    );
}
