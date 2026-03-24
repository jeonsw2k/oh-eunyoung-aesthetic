import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>내 피부의 주치의,<br />오은영에스테틱</h1>
                <p className={styles.subtitle}>
                    1:1 프라이빗 맞춤 케어로 당신만의 아름다움을 찾아드립니다.
                </p>
                <Link href="https://zero.gongbiz.kr/shop/S000078597" className={styles.ctaButton}>
                    상담 예약하기
                </Link>
            </div>
        </section>
    );
}
