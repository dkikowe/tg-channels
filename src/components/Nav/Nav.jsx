import s from "./Nav.module.sass";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const isWeekPage = location.pathname === "/catalog";

  return (
    <div className={s.container}>
      <div className={s.items}>
        <div className={`${s.itemWeek} ${isWeekPage ? s.active : ""}`}>
          {isWeekPage ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="url(#paint0_linear_42_1976)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_1976"
                  x1="2"
                  y1="2"
                  x2="22"
                  y2="21.02"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F29D4E" />
                  <stop offset="0.427885" stopColor="#E0524E" />
                  <stop offset="1" stopColor="#AF407A" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <img src="/images/nav/star.svg" alt="home" />
          )}
          <span>Подборка недели</span>
        </div>
        <div className={s.item}>
          <img src="/images/nav/home.svg" alt="home" />
          <span>Главная</span>
        </div>
        <div className={s.item}>
          <img src="/images/nav/reccomend.svg" alt="home" />
          <span>Рекомендуем</span>
        </div>
      </div>
    </div>
  );
}
