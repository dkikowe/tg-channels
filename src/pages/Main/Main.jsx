import s from "./Main.module.sass";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/catalog`, { state: { category } });
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>Категории</p>
        <div className={s.news}>
          <img src="/images/home/heart.svg" alt="" />
          <p className={s.newsText}>
            + <span>10</span> новых каналов за сутки
          </p>
        </div>
      </div>
      <div className={s.cards}>
        <div className={s.card} onClick={() => handleNavigate("Новости")}>
          <div className={s.imageWrapper}>
            <img src="/images/home/category.png" alt="" />
          </div>
        </div>
        <div className={s.card} onClick={() => handleNavigate("Юмор")}>
          <div className={s.imageWrapper}>
            <img src="/images/home/category1.png" alt="" />
          </div>
        </div>
        <div
          className={s.card}
          onClick={() => handleNavigate("Познавательное")}
        >
          <div className={s.imageWrapper}>
            <img src="/images/home/category2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
