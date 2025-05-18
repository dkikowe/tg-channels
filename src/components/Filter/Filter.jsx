import { useState } from "react";
import s from "./Filter.module.sass";

export default function Filter() {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [subscribersFrom, setSubscribersFrom] = useState("0");
  const [subscribersTo, setSubscribersTo] = useState("0");
  const [filters, setFilters] = useState({
    views: false,
    subscribers: false,
    comments: false,
    likes: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>Фильтры</p>
        <img src="/images/main/filter/resetButton.svg" alt="" />
      </div>
      <div className={s.themeGroup}>
        <p className={s.themeTitle}>Тематика канала</p>
        <div
          className={s.themeDropdown}
          onClick={() => setIsThemeOpen(!isThemeOpen)}
        >
          <span>Новости и СМИ</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.66667L8 11.3333L14 4.66667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={s.themeGroup}>
        <p className={s.themeTitle}>Страна канала</p>
        <div
          className={s.themeDropdown}
          onClick={() => setIsCountryOpen(!isCountryOpen)}
        >
          <div className={s.selectedOption}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33333 3.33333L12.6667 12.6667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12.6667 3.33333L3.33333 12.6667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Россия</span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.66667L8 11.3333L14 4.66667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={s.themeGroup}>
        <p className={s.themeTitle}>Язык канала</p>
        <div
          className={s.themeDropdown}
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        >
          <div className={s.selectedOption}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33333 3.33333L12.6667 12.6667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12.6667 3.33333L3.33333 12.6667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Русский</span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.66667L8 11.3333L14 4.66667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={s.themeGroup}>
        <p className={s.themeTitle}>Тип канала</p>
        <div
          className={s.themeDropdown}
          onClick={() => setIsThemeOpen(!isThemeOpen)}
        >
          <span>Открытые каналы</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.66667L8 11.3333L14 4.66667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={s.divider}>
        <img src="/images/main/filter/divider.svg" alt="" />
        <div className={s.divide}></div>
      </div>
      <div className={s.subscribersGroup}>
        <p className={s.subscribersTitle}>Подписчики</p>
        <div className={s.subscribersInputs}>
          <div className={s.subscribersInput}>
            <span className={s.inputLabel}>От</span>
            <input
              type="text"
              value={subscribersFrom}
              onChange={(e) => setSubscribersFrom(e.target.value)}
              className={s.input}
            />
          </div>
          <div className={s.subscribersInput}>
            <span className={s.inputLabel}>До</span>
            <input
              type="text"
              value={subscribersTo}
              onChange={(e) => setSubscribersTo(e.target.value)}
              className={s.input}
            />
          </div>
        </div>
      </div>
      <div className={s.filtersGroup}>
        <div
          className={s.filterItem}
          onClick={() => handleFilterChange("views")}
        >
          <div className={s.checkbox}>
            <div
              className={`${s.checkboxInner} ${filters.views ? s.checked : ""}`}
            ></div>
          </div>
          <span>Наибольшее число просмотров в сутки</span>
        </div>
        <div
          className={s.filterItem}
          onClick={() => handleFilterChange("subscribers")}
        >
          <div className={s.checkbox}>
            <div
              className={`${s.checkboxInner} ${
                filters.subscribers ? s.checked : ""
              }`}
            ></div>
          </div>
          <span>Наибольший прирост подписчиков</span>
        </div>
        <div
          className={s.filterItem}
          onClick={() => handleFilterChange("comments")}
        >
          <div className={s.checkbox}>
            <div
              className={`${s.checkboxInner} ${
                filters.comments ? s.checked : ""
              }`}
            ></div>
          </div>
          <span>Самые комментируемые за сегодня</span>
        </div>
        <div
          className={s.filterItem}
          onClick={() => handleFilterChange("likes")}
        >
          <div className={s.checkbox}>
            <div
              className={`${s.checkboxInner} ${filters.likes ? s.checked : ""}`}
            ></div>
          </div>
          <span>Больше всего лайков за сегодня</span>
        </div>
      </div>
      <div className={s.buttondiv}>
        <img
          className={s.buttonSubmit}
          src="/images/main/filter/buttonSubmit.svg"
          alt=""
        />
      </div>
    </div>
  );
}
