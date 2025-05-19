import s from "./Premium.module.sass";
import TariffSwitcher from "../Channel/TariffSwitcher";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const prices = [500, 750, 1000];

export default function Premium() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>Получите максимум возможностей!</p>
        <p className={s.desc}>
          Откройте доступ к эксклюзивному контенту и расширенным функциям с PRO
          аккаунтом.
        </p>
      </div>
      <TariffSwitcher active={active} onChange={setActive} />
      <div className={s.advantages}>
        <p className={s.titleAdvantages}>Новая тема для бота</p>
        <p className={s.descAdvantages}>Наслаждайтесь эксклюзивным дизайном!</p>
      </div>
      <div className={s.advantages}>
        <p className={s.titleAdvantages}>Все приватные каналы</p>
        <p className={s.descAdvantages}>
          Доступ ко всем приватным каналам, скрытым от обычных пользователей.
        </p>
      </div>
      <div className={s.advantages}>
        <p className={s.titleAdvantages}>Новые категории каналов</p>
        <p className={s.descAdvantages}>
          Расширенный выбор: категории на любой вкус! Религия, Шок Контент,
          Эротика, Рукоделие, Продажи, Маркейтинг PR Реклама, Курсы и Гайды,
          Лингвистика, Книги, Карьера,Право, ЕГЭ и экзамены.
        </p>
      </div>
      <div className={s.advantages}>
        <p className={s.titleAdvantages}>Доступ к подборке недели СНГ</p>
        <p className={s.descAdvantages}>
          Откройте доступ к подборке недели по странам СНГ.
        </p>
      </div>
      <div className={s.advantages}>
        <p className={s.titleAdvantages}>Продвинутые фильтры</p>
        <p className={s.descAdvantages}>
          Ищите каналы по самым важным параметрам: Просмотры, подписчики, лайки,
          комментарии.
        </p>
      </div>
      <div className={s.proButtonWrap}>
        <button
          className={s.proButton}
          onClick={() => {
            navigate("/");
          }}
        >
          <span className={s.proButtonText}>Подключить Pro за</span>
          <span className={s.proButtonPriceBlock}>
            <span className={s.proButtonPrice}>{prices[active]}</span>
            <span className={s.proButtonIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_64_5094)">
                  <path
                    d="M23.9999 9.74574C23.9648 10.2203 23.6046 10.5455 23.4289 10.7037C21.997 11.9956 20.6881 13.4282 19.2825 14.7553C18.8521 15.1596 18.7203 15.5902 18.7993 16.1703C19.0453 17.972 19.2474 19.7736 19.4846 21.5753C19.5724 22.252 19.4406 22.8321 18.8433 23.2276C18.2635 23.6143 17.6925 23.544 17.1039 23.2188C15.6456 22.419 14.1698 21.6368 12.7115 20.8283C12.1756 20.5295 11.6837 20.5295 11.139 20.8107C9.6544 21.5929 8.14342 22.3487 6.65 23.1221C6.07899 23.4209 5.51677 23.5264 4.96333 23.1133C4.43624 22.7178 4.33082 22.1729 4.44503 21.549C4.55923 20.9337 4.66465 20.3097 4.71735 19.677C4.87548 17.6907 5.92965 16.3988 7.70418 15.5814C9.28544 14.852 10.8228 14.0258 12.3601 13.2261C12.5182 13.147 12.7642 12.9888 12.7027 12.7515C12.6412 12.5142 12.3162 12.5318 12.1405 12.5581C9.97065 12.8481 7.79202 13.1558 5.62219 13.4721C4.55923 13.6216 3.61926 13.3579 2.7847 12.7075C2.038 12.1187 1.30008 11.5123 0.570942 10.9058C0.0702098 10.4928 -0.105486 9.95667 0.0702097 9.33267C0.245905 8.69989 0.702713 8.36592 1.344 8.28682C3.15366 8.04952 4.97211 7.81223 6.78178 7.59251C7.35279 7.5222 7.7481 7.27612 8.01164 6.74001C8.89891 4.93833 9.82131 3.16301 10.7174 1.37012C10.9721 0.860375 11.3323 0.500039 11.9209 0.49125C12.527 0.482461 12.9223 0.834009 13.1771 1.36133C13.9765 3.00482 14.8111 4.63951 15.5929 6.29178C15.9706 7.09156 16.4802 7.56614 17.4114 7.64524C19.0541 7.78586 20.6969 8.02316 22.3396 8.20772C22.937 8.27803 23.4114 8.47138 23.7364 8.89324C23.7803 8.98991 24.0351 9.32388 23.9999 9.74574Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_64_5094">
                    <rect
                      width="24"
                      height="23"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
