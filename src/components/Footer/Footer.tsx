import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>상호명: 오은영에스테틱 | 대표: 오은영 | 사업자등록번호: 625-38-01140</p>
                <p>주소: 경기도 김포시 김포한강8로148번길 109 (마산동) 하이빌리지 1층상가 101호 오은영에스테틱</p>
                <p>전화번호: 010-7663-2645</p>
                <p className={styles.copy}>&copy; {new Date().getFullYear()} Oh Eun-young Aesthetic. All rights reserved.</p>
            </div>
        </footer>
    );
}
