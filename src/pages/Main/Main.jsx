import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Main.module.sass";

export default function Main() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data_main.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Ошибка загрузки категорий:", err));
  }, []);

  const handleNavigate = (category) => {
    navigate("/catalog", { state: { category } });
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
        {categories.map(({ img, category }, index) => (
          <div
            key={index}
            className={s.card}
            onClick={() => handleNavigate(category)}
          >
            <div className={s.imageWrapper}>
              <img src={img} alt={category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
