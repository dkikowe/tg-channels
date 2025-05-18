import s from "./Recommend.module.sass";

export default function Recommend() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>Рекомендуем</p>
      </div>
      <div className={s.card}>
        <div className={s.cardAvatarWrap}>
          <img
            className={s.cardAvatar}
            src="https://cdn.midjourney.com/0e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e/0_0.png"
            alt="Новости"
          />
        </div>
        <div className={s.cardContent}>
          <div className={s.cardTitle}>Новости</div>
          <div className={s.cardInfoRow}>
            <span className={s.cardInfoIcon}>
              {/* user icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                  fill="#7C7C7C"
                />
                <path
                  d="M0 14C0 11.2386 3.58172 9 8 9C12.4183 9 16 11.2386 16 14V16H0V14Z"
                  fill="#7C7C7C"
                />
              </svg>
            </span>
            <span className={s.cardInfoText}>14 000 321</span>
            <span className={s.cardInfoIcon}>
              {/* globe icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="#7C7C7C" />
                <ellipse cx="8" cy="8" rx="5" ry="8" fill="#181818" />
                <ellipse cx="8" cy="8" rx="8" ry="3" fill="#181818" />
              </svg>
            </span>
            <span className={s.cardInfoText}>Россия</span>
          </div>
          <div className={s.cardDesc}>
            Главные новости дня: оперативно и достоверно. Будь в курсе всех
            событий! ...
          </div>
        </div>
      </div>
    </div>
  );
}
