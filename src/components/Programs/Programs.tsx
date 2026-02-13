import styles from './Programs.module.css';

const programs = [
    {
        id: 1,
        category: 'Face Care',
        title: '수분 & 재생 관리',
        desc: '속건조가 심하고 예민한 피부를 위한 진정 보습 케어. 피부 장벽을 강화하여 건강한 피부결을 되찾아드립니다.',
        price: '60,000원~',
        icon: '💧',
        event: '첫 방문 20% 할인'
    },
    {
        id: 2,
        category: 'Contour Care',
        title: '윤곽 & 리프팅',
        desc: '처진 얼굴 라인을 정리하고 탄력을 부여하는 윤곽 관리. 작은 얼굴과 또렷한 이목구비를 완성하세요.',
        price: '80,000원~',
        icon: '✨',
        event: '인기 프로그램'
    },
    {
        id: 3,
        category: 'Special Care',
        title: '웨딩 & 바디 케어',
        desc: '가장 특별한 날을 위한 집중 관리. 드레스 라인을 위한 승모근, 팔뚝 관리부터 전신 순환 케어까지.',
        price: '100,000원~',
        icon: '👰',
        event: null
    }
];

export default function Programs() {
    return (
        <section id="programs" className={`${styles.programs} section-padding`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Programs</h2>
                    <p className={styles.subtitle}>오직 당신을 위한 맞춤형 프로그램을 만나보세요</p>
                </div>

                <div className={styles.grid}>
                    {programs.map((program) => (
                        <div key={program.id} className={styles.card}>
                            <div className="card-content"> {/* Inner wrapper for flex alignment */}
                                {program.event && <span className={styles.eventBadge}>{program.event}</span>}
                                <div className={styles.icon}>{program.icon}</div>
                                <h3 className={styles.cardTitle}>{program.title}</h3>
                                <p className={styles.cardDesc}>{program.desc}</p>
                            </div>
                            <div className={styles.price}>{program.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
