import styles from './Reviews.module.css';

const reviews = [
    {
        id: 1,
        author: 'whrud92 님',
        text: '결혼 전 관리로 여러 곳 체험해보다가 오은영에스테틱 정착했어요. 기계 없이 거의 수기로 관리해 주시는데 승모근이랑 뒷목 풀어주시고 나서 어깨 결림이랑 만성 두통이 바로 사라져서 너무 놀랐습니다. 손맛이 장난 아니에요!',
        stars: '★★★★★',
        program: '웨딩 케어',
        image: 'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250710_210%2F1752114781228OlfG5_JPEG%2F1000004710.jpg'
    },
    {
        id: 2,
        author: '뽀글이67 님',
        text: '8번째 관리받고 리뷰남깁니다~ 우선 다른 에스테틱의 손맛하곤 차원이 다릅니다~ 원장님이 정말 열정을 다해서 회차마다 관리해주시는데 손맛이 너무 좋습니다~ 몸이 한결 가벼워지고 라인도 예뻐지는 게 느껴져요.',
        stars: '★★★★★',
        program: '전신 수기 관리',
        image: 'https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250305_74%2F1741164844492uINj4_JPEG%2F1000004247.jpg'
    },
    {
        id: 3,
        author: '달별Kim 님',
        text: '출산후 늘어진 뱃살 잡으러 방문했어요! 에너지테라피 뱃살 관리 지금 3회차 받았는데 눈에띄게 라인이 잡혀 너무 만족스러워요! 60분 동안 정말 땀뚝뚝 흘리며 기계 바꿔가며 열심히 뱃살 뿌셔주시는 원장님 감사합니다!',
        stars: '★★★★★',
        program: '에너지테라피 뱃살 관리',
        image: 'https://pup-review-phinf.pstatic.net/MjAyNTAzMzFfMjY0/MDAxNzQzMzgwMTEzMzIw.kCt7sZvYrQQCH1b3sCcbO_KauFLc6hoYxZSZzI8bZKYg.GnY0GuuKYS7CrD-Li7ZFW-dx2KJwNIlsjOyd5bA-jVUg.JPEG/C3D8BCA9-C3DD-4D27-9E5D-6CBD3A1620DA.jpeg?type=w278_sharpen'
    },
    {
        id: 4,
        author: '비단69 님',
        text: '원장님이 경력이 오래되셔서 그런지 몸 상태를 딱 보시고 어디가 안 좋은지 바로 캐치하시더라구요. 수기 관리가 정말 시원하고 받고 나면 몸이 날아갈 것 같아요. 시설도 깔끔하고 분위기도 편안해서 매주 힐링하러 옵니다.',
        stars: '★★★★★',
        program: '맞춤 수기 관리',
        image: 'https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241216_188%2F1734330027219pV6Ru_JPEG%2F1000003733.jpg'
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className={`${styles.reviews} section-padding`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Naver Reviews</h2>
                    <p className={styles.subtitle}>네이버 방문자 리뷰로 증명하는 오은영에스테틱의 변화</p>
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
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <a
                            href="https://m.place.naver.com/place/1905795609/home?entry=pll"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.moreButton}
                            style={{ backgroundColor: '#03C75A' }}
                        >
                            N 네이버 리뷰 더보기
                        </a>
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
            </div>
        </section>
    );
}
