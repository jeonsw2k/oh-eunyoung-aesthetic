import styles from './ConsultationFAB.module.css';

export default function ConsultationFAB() {
    return (
        <div className={styles.fab}>
            <a
                href="https://talk.naver.com/ct/w4r6xwc?frm=pnmb&frm=nmb_detail#nafullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                aria-label="네이버톡톡 상담하기"
            >
                💬
            </a>
            <span className={styles.text}>1:1 상담하기</span>
        </div>
    );
}
