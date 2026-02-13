import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`${styles.about} section-padding`}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder image for Director or Interior */}
                        <img
                            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                            alt="오은영에스테틱 내부 전경"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContent}>
                        <span className={styles.label}>About Us</span>
                        <h2 className={styles.title}>진정성 있는 관리,<br />달라지는 피부 변화</h2>
                        <p className={styles.description}>
                            안녕하세요. <span className={styles.highlight}>오은영에스테틱</span> 원장 오은영입니다.
                        </p>
                        <p className={styles.description}>
                            수년간의 병원 및 에스테틱 실무 경험을 바탕으로,
                            고객님 한 분 한 분의 피부 고민을 깊이 있게 상담하고
                            <span className={styles.highlight}>1:1 맞춤 솔루션</span>을 제공합니다.
                        </p>
                        <p className={styles.description}>
                            공장형 관리가 아닌, 오직 당신만을 위한 프라이빗한 공간에서
                            피부 본연의 건강한 빛을 찾아드리겠습니다.
                        </p>
                        <div className={styles.signature}>
                            Director. Oh Eun-young
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
