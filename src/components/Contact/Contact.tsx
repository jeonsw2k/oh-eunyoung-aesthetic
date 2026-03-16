import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`${styles.contact} section-padding`}>
            <div className="container">
                <h2 className={styles.title}>Location</h2>

                <div className={styles.mapContainer}>
                    <iframe
                        src="/daum_map.html"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="Daum Roughmap"
                    ></iframe>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <span className={styles.label}>Address</span>
                        <p className={styles.text}>
                            경기도 김포시 김포한강8로148번길 109 (마산동) 하이빌리지 1층상가 101호<br />
                            오은영에스테틱
                        </p>
                    </div>
                    <div className={styles.infoCard}>
                        <span className={styles.label}>Hours</span>
                        <p className={styles.text}>
                            월-금: 10:00 - 21:00<br />
                            토요일: 10:00 - 17:00<br />
                            (일요일/공휴일 휴무)
                        </p>
                    </div>
                    <div className={styles.infoCard}>
                        <span className={styles.label}>Reservation</span>
                        <p className={styles.text}>
                            010-7663-2645<br />
                            Kakao: @오은영에스테틱
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
