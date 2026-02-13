import styles from './ConsultationFAB.module.css';

export default function ConsultationFAB() {
    return (
        <div className={styles.fab}>
            <a
                href="https://pf.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                aria-label="카카오톡 상담하기"
            >
                💬
            </a>
            <span className={styles.text}>1:1 상담하기</span>
        </div>
    );
}
