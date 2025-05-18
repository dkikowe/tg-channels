import s from "./Nav.module.sass";

export default function Nav() {
  return (
    <div className={s.container}>
      <div className={s.items}>
        <div className={s.itemWeek}>
          <img src="/images/nav/star.svg" alt="home" />
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
