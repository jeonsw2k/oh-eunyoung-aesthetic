import styles from './Reviews.module.css';

const reviews = [
    {
        id: 1,
        author: 'yesss 님',
        text: '어깨랑 순환 관리가 필요했는데, 배도 딱딱하고 차가워서 선생님 손길이 간절했어요. 새로운 장비로 관리받았는데 어깨 딱딱한 게 많이 풀려서 정말 좋았답니다.',
        stars: '★★★★★',
        program: '순환 관리',
        image: 'https://img.kr.gcp-karroter.net/local_business_ugc/local_business_ugc/undefined/93174495/1770885399778/SU1HXzE0MDkucG5n.png'
    },
    {
        id: 2,
        author: '코코Co 님',
        text: '2월 결혼식을 앞두고 방문했습니다. 사무직이라 어깨 결림이 심한데 승모근과 뒷목을 집중적으로 풀어주셔서 통증이 거짓말처럼 사라졌어요. 승모근 맛집입니다!',
        stars: '★★★★★',
        program: '웨딩 케어',
        image: 'https://img.kr.gcp-karroter.net/local_business_ugc/local_business_ugc/undefined/1483404/1769465622523/SU1HXzAzMTcuanBlZw==.jpeg'
    },
    {
        id: 3,
        author: '스콘 님',
        text: '다리 부종 때문에 갔다가 어깨가 안 좋은 걸 바로 아셔서 놀랐어요. 마사지 받은 후 3주 동안 통증을 잊고 지낼 정도로 효과가 좋았습니다.',
        stars: '★★★★★',
        program: '통증 관리',
        image: 'https://img.kr.gcp-karroter.net/local_business_ugc/local_business_ugc/undefined/93174495/1770885399842/SU1HXzE0MDguanBlZw==.jpeg'
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className={`${styles.reviews} section-padding`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Real Reviews</h2>
                    <p className={styles.subtitle}>고객님들이 직접 증명하는 오은영에스테틱의 변화</p>
                </div>

                <div className={styles.grid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={review.image}
                                    alt={`${review.program} 후기`}
                                    className={styles.image}
                                />
                                <span className={styles.tag}>{review.program}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.stars}>{review.stars}</div>
                                <p className={styles.text}>&quot;{review.text}&quot;</p>
                                <p className={styles.author}>{review.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <a
                        href="https://www.daangn.com/kr/local-profile/%EC%98%A4%EC%9D%80%EC%98%81%EC%97%90%EC%8A%A4%ED%85%8C%ED%8B%B1-ysjnhw2p3iwo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.moreButton}
                    >
                        🥕 당근마켓 후기 더보기
                    </a>
                </div>
            </div>
        </section>
    );
}
